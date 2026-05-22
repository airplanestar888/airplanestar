import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const isStaticExport = Boolean(basePath);

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : undefined,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true
  },
  trailingSlash: isStaticExport
};

export default nextConfig;
