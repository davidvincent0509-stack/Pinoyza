-- Optional: run in Supabase SQL Editor if you prefer the anon key instead of service role.
-- The app uses the service role key server-side via /api/applications (recommended).

alter table applications enable row level security;

create policy "Allow anonymous insert"
  on applications
  for insert
  to anon
  with check (true);

-- Do NOT add a public select policy unless you want applications readable from the client.
