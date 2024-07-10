import BuilderDevTools from "@builder.io/dev-tools/next"

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()({
  images: {
    remotePatterns: [{ hostname: "cdn.builder.io" }],
  },
})

export default nextConfig
