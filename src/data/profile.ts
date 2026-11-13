// サイトに表示する内容はすべてこのファイルで管理する。
// 文章を変えたいときは、ここを編集して PR を出せばよい。

export type Link = { label: string; href: string };

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  links: Link[];
};

export const profile = {
  name: "Tomohiro Konishi",
  role: "エンジニアを目指して学習中",
  // TODO: 自分の言葉に書き換える
  tagline:
    "フロントエンドからインフラまで、システム全体を見渡せるエンジニアを目指しています。",
  about: [
    // TODO: 所属・興味のある分野・これまでの経験などに書き換える
    "Next.js / React / TypeScript を中心に Web 開発を学んでいます。",
    "PR 駆動の Git ワークフローや CI/CD など、チーム開発の進め方を実践しながら身につけています。",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/konishitomohiro" },
  ] satisfies Link[],
};

export const skillGroups: SkillGroup[] = [
  {
    title: "第一段階",
    description: "いま取り組んでいること",
    items: ["Git / GitHub", "Next.js", "React", "TypeScript", "Cloudflare", "Vercel"],
  },
  {
    title: "第二段階",
    description: "次に学ぶこと",
    items: ["Git チーム開発", "CI/CD", "インフラ基礎", "FastAPI", "Supabase"],
  },
  {
    title: "第三段階",
    description: "その先に学ぶこと",
    items: ["AWS", "Terraform", "nginx", "Playwright", "セキュリティ"],
  },
];

export const projects: Project[] = [
  {
    title: "ポートフォリオサイト",
    summary:
      "このサイト自体です。Next.js の静的書き出しを Cloudflare から配信し、GitHub Actions で PR ごとのチェックと main マージ時の自動デプロイを行っています。",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Cloudflare", "GitHub Actions"],
    links: [
      { label: "ソースコード", href: "https://github.com/konishitomohiro/portfolio" },
    ],
  },
];
