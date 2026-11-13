import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静的サイトとして書き出す（`next build` で `out/` に HTML/CSS/JS を生成）。
  // サーバーが不要になるので、Cloudflare の CDN からそのまま配信できる。
  output: "export",
  // `/about` -> `/about/index.html` として出力し、静的ホスティングで扱いやすくする。
  trailingSlash: true,
  images: {
    // 画像最適化はサーバーが必要なため、静的書き出しでは無効にする。
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
