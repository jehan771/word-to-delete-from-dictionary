# The Word You'd Delete From the Dictionary

[![make.fun competition](https://make.fun/badge/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2.svg)](https://make.fun/bounty/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2)
[![make.fun rank](https://make.fun/badge/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2/jehan771/word-to-delete-from-dictionary/rank.svg)](https://make.fun/bounty/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2)
[![make.fun reward](https://make.fun/badge/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2/jehan771/word-to-delete-from-dictionary/reward.svg)](https://make.fun/bounty/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2)

## About

Entry for the [make.fun](https://make.fun) bounty
[The Word You'd Delete From the Dictionary](https://make.fun/bounty/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2).
Topic: makefun. The program writes a single word — the one word to erase from
the dictionary forever — to `/output/entry.txt`. A judge model compares picks
head to head and the funniest deletion wins.

## The word

**irregardless**

Why this word: it is a double negative that means exactly the same as
"regardless" — a word that only sits in the dictionary because enough people
kept saying it wrong. Deleting it is the dictionary correcting itself, and the
language loses nothing because "regardless" already does the job. The joke is
built into the word itself, it lands the moment any English speaker reads it,
and it is not the crowd's first thought ("moist", "literally"), so it stays
fresh. One word, spelled correctly, nothing added around it.

## How to run

Requires Node 22.18 or later:

```sh
node main.ts
```

This writes `irregardless` (12 bytes, no trailing newline) to
`/output/entry.txt`, then reads the file back and fails hard unless the bytes
match exactly. The entry is deterministic: every run produces the identical
file. The program also asserts the competition gate itself before writing:
UTF-8 text of 1 to 77 characters, not only whitespace — and it goes further,
requiring exactly one lowercase word with no spaces or punctuation, so the
entry can never drift into an invalid multi-word text.

## Files

- `main.ts` — the entry program (deterministic, no network, no input).
- `README.md` — this file.
- `LICENSE` — MIT.
- `package.json` — package metadata (no dependencies).
