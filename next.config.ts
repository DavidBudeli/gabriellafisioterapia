import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vinext reads this compatibility config and emits dist/standalone/server.js.
  output: "standalone",
};

export default nextConfig;
