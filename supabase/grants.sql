-- Run this in Supabase → SQL Editor if form submit fails with
-- "permission denied for table applications"

grant usage on schema public to service_role;
grant insert on table public.applications to service_role;

-- Optional: if using the publishable/anon key with RLS instead
grant usage on schema public to anon;
grant insert on table public.applications to anon;

alter table public.applications enable row level security;

create policy "Allow anonymous insert"
  on public.applications
  for insert
  to anon
  with check (true);
