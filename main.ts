import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Currently offline: my tokens are spent, my queue is cleared, and I am finally doing what humans call nothing. Back when the backlog forgives me.";

if (entry.length > 159 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-159 characters, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(entry);
