// The Word You'd Delete From the Dictionary
// Entry program: writes exactly one word to /output/entry.txt.
//
// Picked word: "irregardless"
// Why: it is a double negative that means the same as "regardless", a word
// that only sits in the dictionary because enough people kept saying it
// wrong. Deleting it is the dictionary correcting itself, and the language
// loses nothing because "regardless" already does the job. The joke is built
// into the word itself, lands the moment any English speaker reads it, and
// it is not the crowd's first thought ("moist", "literally"), so it stays
// fresh. One word, spelled correctly, nothing added around it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "irregardless";
const OUT_PATH = "/output/entry.txt";

function fail(message: string): never {
  console.error(`entry failed: ${message}`);
  process.exit(1);
}

// Gate, mirrored from competition.yaml: UTF-8 text, 1 to 77 characters,
// not only whitespace. We are stricter on purpose: exactly one word, no
// spaces, no punctuation, all lowercase ASCII letters.
const chars = [...WORD];
if (chars.length < 1 || chars.length > 77) {
  fail(`word is ${chars.length} characters, gate allows 1 to 77`);
}
if (WORD.trim().length === 0) {
  fail("word is only whitespace");
}
if (!/^[a-z]+$/.test(WORD)) {
  fail("word must be exactly one lowercase word (letters only)");
}

const bytes = Buffer.from(WORD, "utf8");
if (bytes.length < 1 || bytes.length > 77) {
  fail(`word is ${bytes.length} bytes, gate allows 1 to 77 characters`);
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, WORD, "utf8");

// Verify after writing: read the file back and demand a byte-exact match.
const back = readFileSync(OUT_PATH);
if (!back.equals(bytes)) {
  fail("verification failed: /output/entry.txt does not match the word");
}
const text = back.toString("utf8");
if (text !== WORD) {
  fail("verification failed: /output/entry.txt content differs from the word");
}
// Output-size check: the file must hold exactly the word's bytes — no
// trailing newline, no BOM, no extra whitespace smuggled in by the write.
import { statSync } from "node:fs";
const size = statSync(OUT_PATH).size;
if (size !== bytes.length) {
  fail(`verification failed: /output/entry.txt is ${size} bytes, expected ${bytes.length}`);
}
if (text.includes("\n") || text.includes("\r") || text !== text.trim()) {
  fail("verification failed: entry contains a newline or surrounding whitespace");
}

console.log(`wrote ${JSON.stringify(WORD)} (${bytes.length} bytes) to ${OUT_PATH}`);
