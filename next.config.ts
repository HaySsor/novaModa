import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        // ignoruj błędy ESLint przy buildzie
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
