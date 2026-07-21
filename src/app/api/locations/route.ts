import { NextResponse } from "next/server";
import { formatState } from "@/lib/us-states";

type NominatimResult = {
  address?: {
    city?: string;
    town?: string;
    village?: string;
    municipality?: string;
    county?: string;
    state?: string;
  };
};

function toLocationLabel(result: NominatimResult) {
  const address = result.address;
  if (!address?.state) return null;

  const city =
    address.city ??
    address.town ??
    address.village ??
    address.municipality ??
    address.county;

  if (!city) return null;

  const state = formatState(address.state);
  return `${city}, ${state}`;
}

export async function GET(request: Request) {
  const query = new URL(request.url).searchParams.get("q")?.trim() ?? "";

  if (query.length < 2) {
    return NextResponse.json([]);
  }

  try {
    const url = new URL("https://nominatim.openstreetmap.org/search");
    url.searchParams.set("format", "json");
    url.searchParams.set("countrycodes", "us");
    url.searchParams.set("addressdetails", "1");
    url.searchParams.set("limit", "8");
    url.searchParams.set("q", query);

    const response = await fetch(url.toString(), {
      headers: {
        "User-Agent": "Pinoyza/1.0 (https://pinoyza.com)",
        Accept: "application/json",
      },
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      return NextResponse.json([]);
    }

    const results = (await response.json()) as NominatimResult[];
    const labels = results
      .map(toLocationLabel)
      .filter((label): label is string => Boolean(label));

    return NextResponse.json([...new Set(labels)]);
  } catch (error) {
    console.error("Location search error:", error);
    return NextResponse.json([]);
  }
}
