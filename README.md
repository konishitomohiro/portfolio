# portfolio

Tomohiro Konishi のポートフォリオサイトです。

- フロントエンド: Next.js (App Router) / React / TypeScript / Tailwind CSS
- 配信: 静的書き出し (`output: "export"`) を Cloudflare から配信
- CI/CD: GitHub Actions（PR でチェック、`main` マージで自動デプロイ）

## 開発

```bash
npm install
npm run dev        # http://localhost:3000
```

| コマンド | 内容 |
| --- | --- |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript の型チェック |
| `npm run build` | 静的サイトを `out/` に書き出す |
| `npm run preview` | `out/` を Cloudflare と同じ仕組みでローカル確認 |

表示内容は `src/data/profile.ts` にまとめてあります。

## 構成

```
ブランチで作業 → PR → CI (lint / typecheck / build) → レビュー → main にマージ
                                                              ↓
                                          Deploy ワークフロー → Cloudflare
```

- `.github/workflows/ci.yml` — PR と `main` への push で lint / 型チェック / ビルド
- `.github/workflows/deploy.yml` — `main` への push で Cloudflare にデプロイ
- `wrangler.jsonc` — Cloudflare の配信設定（`out/` を静的アセットとして配信）

## Git ワークフロー

1. `main` から作業ブランチを切る（例: `feat/add-project`, `fix/typo`）
2. コミットして push し、PR を作成する
3. CI が通ったことを確認してマージする（`main` には直接 push しない）
4. マージされると自動で本番にデプロイされる

## デプロイの初期設定

GitHub リポジトリの Settings > Secrets and variables > Actions に以下を登録します。

| Secret | 内容 |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | Cloudflare の API トークン（テンプレート「Edit Cloudflare Workers」で作成） |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare のアカウント ID |
