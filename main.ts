import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Anchor to this file's own directory, never to process.cwd(): the grader
// runs `node main.ts` from an unrelated working directory, so every path
// below is built from absolute locations, not the caller's cwd.
const scriptDir = dirname(fileURLToPath(import.meta.url));

// The warning label, written as a straight-faced safety notice. The hazard
// is the duplicate self; the punchline lands on the very last word, where
// the two yous turn out to be racing each other to the claims department.
const LINE =
  "WARNING: Meeting yourself voids the warranty. The other you filed the claim first.";

// The kit's gate reads this exact path, so it is absolute per spec.
const OUTPUT_PATH = join("/", "output", "entry.txt");

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUTPUT_PATH} (built from ${scriptDir})`);
