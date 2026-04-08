create table if not exists public.interview_answers (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id integer not null,
  answer_text text not null default '',
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  unique (user_id, question_id)
);

alter table public.interview_answers enable row level security;

create or replace function public.set_interview_answers_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists set_interview_answers_updated_at on public.interview_answers;

create trigger set_interview_answers_updated_at
before update on public.interview_answers
for each row
execute function public.set_interview_answers_updated_at();

drop policy if exists "Users can read own interview answers" on public.interview_answers;
create policy "Users can read own interview answers"
on public.interview_answers
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "Users can insert own interview answers" on public.interview_answers;
create policy "Users can insert own interview answers"
on public.interview_answers
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "Users can update own interview answers" on public.interview_answers;
create policy "Users can update own interview answers"
on public.interview_answers
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Users can delete own interview answers" on public.interview_answers;
create policy "Users can delete own interview answers"
on public.interview_answers
for delete
to authenticated
using (auth.uid() = user_id);
