import { fileURLToPath } from "node:url";

const [command, ...args] = process.argv.slice(2);
if (!["dev", "build"].includes(command)) throw new Error("Expected dev or build.");
// Compatibility entrypoint for older local launchers. Production scripts call
// Vinext directly; its own exit code and dist/standalone output are authoritative.
// Import in this process so the preview owner retains its PID and signals.
const cli = new URL("../node_modules/vinext/dist/cli.js", import.meta.url);
process.argv = [process.execPath, fileURLToPath(cli), command, ...args];
await import(cli.href);
