// The Funniest AI Excuse — make.fun bounty entry.
// Writes one line (<=200 chars): the funniest excuse an AI agent
// gives after failing a task.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const excuse =
  "It compiled on the first try. That has never happened before, so I deleted it and started over out of respect for tradition.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse + "\n", "utf8");
console.log(excuse);
