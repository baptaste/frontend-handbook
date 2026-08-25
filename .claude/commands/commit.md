---
description: Commit the current unstaged changes, grouped into related commits
allowed-tools: Bash(rtk git status:*), Bash(rtk git diff:*), Bash(rtk git log:*), Bash(rtk git add:*), Bash(rtk git commit:*), Bash(rtk git show:*), Bash(rtk git checkout:*), Read
argument-hint: "[optional scope or hint, e.g. 'only the layout refactor']"
---

Commit the changes currently in the working tree.

Use `rtk git ...` for every git operation in this command — never bare `git`. `rtk` proxies
git with token-compact output and passes all native flags through.

## Context

- Status: !`rtk git status --short`
- Staged diff: !`rtk git diff --cached --stat`
- Unstaged diff: !`rtk git diff --stat`
- Recent commits (match this message style): !`rtk git log --oneline -15`

## What to do

$ARGUMENTS

1. Read the full diff (`rtk git diff`, `rtk git diff --cached`, and the contents of any
   untracked files) to understand what actually changed. Do not commit from filenames alone.
   `rtk git diff` is condensed to changed lines only — if that is not enough context to
   describe a change accurately, read the file itself.

2. Group the changes into **coherent commits** — one logical change per commit. A file rename
   plus the imports updated to follow it belong together; two unrelated features do not.
   If everything in the tree is one logical change, that is one commit.

3. For each group, stage only that group's paths explicitly (`rtk git add <path> ...`).
   Never use `rtk git add -A`, `rtk git add .`, or `rtk git commit -a` — they sweep up
   unrelated work.

4. Commit each group with a conventional-commit message matching the style in the log above:
   a lowercase `type: imperative summary` subject under ~72 characters.
   Types in use: `feat`, `fix`, `refactor`, `chore`, `docs`, `style`, `test`.
   Add a short body only when the _why_ is not obvious from the subject.

5. **Do not add a `Co-Authored-By` trailer, and do not mention Claude, Claude Code, or any AI
   assistance anywhere in the message.** These commits are authored by the repository owner.

6. Do not push. Do not create a branch. Do not amend or rewrite existing commits.

7. Report back: one line per commit created, plus anything deliberately left uncommitted
   and why.

## Guardrails

- If the diff contains a secret, credential, or `.env` value, stop and say so instead of
  committing it.
- If a change looks unintentional — a stray debug log, a commented-out block, a leftover
  `console.log` — flag it and ask before including it, rather than silently committing it.
- If nothing is uncommitted, say so and stop.
