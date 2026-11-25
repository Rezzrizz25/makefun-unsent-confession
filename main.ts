// SPDX-License-Identifier: MIT
// Unsent Sweater — a micro-confession in exactly two parts:
// a To: line and the one line that was typed and never sent.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = [
  "To: Lena",
  "i still wear the sweater you left at my place because returning it would mean admitting you're never coming back for it",
].join("\n");

// The gate: /output/entry.txt must be UTF-8 text of 1–260 characters,
// exactly two parts — a To: line and one unsent line of at most 200 chars.
const lines = ENTRY.split("\n");
if (lines.length !== 2) throw new Error(`entry must be exactly 2 lines, got ${lines.length}`);
if (!lines[0].startsWith("To: ")) throw new Error("first line must be a To: line");
if (lines[1].length > 200) throw new Error(`message is ${lines[1].length} chars, over the 200-char limit`);
if (ENTRY.length < 1 || ENTRY.length > 260) {
  throw new Error(`entry is ${ENTRY.length} chars, outside the 1–260 range`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote /output/entry.txt (${ENTRY.length} characters)`);
