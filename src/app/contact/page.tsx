"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/Button";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "info@pinoyza.com",
    href: "mailto:info@pinoyza.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+1 (667) 766-2575",
    href: "tel:+16677662575",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    detail: "San Francisco, CA · Remote-first",
  },
  {
    icon: Clock,
    title: "Business Hours",
    detail: "Mon–Fri, 9AM–6PM PST",
  },
];

const inputClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section id="site-hero" className="relative overflow-hidden bg-mesh pt-[72px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/60" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-accent">
            Get in Touch
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            We&apos;d love to hear from you
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Whether you&apos;re hiring, job seeking, or have a partnership
            inquiry — our team is here to help.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-light to-accent-light text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-navy">{item.title}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 text-sm text-muted transition-colors hover:text-primary"
                  >
                    {item.detail}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                )}
              </div>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-5">
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm lg:col-span-2">
              <MessageSquare className="mb-4 h-8 w-8 text-primary" />
              <h2 className="text-xl font-bold text-navy">
                Enterprise inquiries?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                For bulk hiring, custom integrations, or enterprise plans,
                email our sales team directly at{" "}
                <a
                  href="mailto:sales@pinoyza.com"
                  className="font-semibold text-primary hover:underline"
                >
                  sales@pinoyza.com
                </a>
              </p>
              <p className="mt-4 text-sm text-muted">
                Average response time: <strong className="text-navy">under 4 hours</strong>
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-8 shadow-lg lg:col-span-3">
              {sent ? (
                <div className="py-16 text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Send className="h-7 w-7 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy">Message Sent!</h2>
                  <p className="mt-2 text-muted">
                    We&apos;ll get back to you within 1–2 business days.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="mb-6 text-xl font-bold text-navy">
                    Send us a message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-navy">
                          Full Name
                        </label>
                        <input
                          required
                          className={inputClass}
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-navy">
                          Email
                        </label>
                        <input
                          required
                          type="email"
                          className={inputClass}
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-navy">
                        Subject
                      </label>
                      <input
                        required
                        className={inputClass}
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-navy">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        className={inputClass}
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>
                    <Button type="submit" size="lg">
                      Send Message
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
