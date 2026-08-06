# 🌹 Project X Butler

X（旧Twitter）の運用を支援する自動化Bot。キーワードにマッチした投稿を自動でリポスト／いいねし、実行結果をログに残します。

要件・ロードマップの元ネタ: [eteoil/Project-X-Butler](https://github.com/eteoil/Project-X-Butler)

## ✨ Features

- 🔁 キーワードによる自動リポスト
- ❤️ キーワードによる自動いいね
- 📊 実行ログ保存（`logs/YYYY-MM-DD.log` に JSON Lines 形式で保存）
- ⚙️ スプレッドシートによる設定管理（Google Sheets、任意）
- 🧪 テストモード（既定で有効。実際のリポスト／いいねは行わず、判定結果だけをログに記録）

## 🛠 Tech Stack

- Node.js（ESM, `node:test`）
- Playwright（ブラウザ自動操作）
- Google Sheets API（`googleapis`、任意の設定ソース）

## 📂 Project Structure

```text
project-x-butler/
├── config/
│   └── config.example.json   # コピーして config/config.json を作る
├── logs/                     # 実行ログ（.gitignore 対象）
├── src/
│   ├── actions/              # repost / like（テストモード分岐込み）
│   ├── x/                    # login / profile / timeline（Playwright操作）
│   ├── browser.js            # ブラウザ起動・セッション再利用
│   ├── config.js             # ローカル設定 + Google Sheets 設定の読み込み
│   ├── keyword.js            # キーワード判定ロジック
│   ├── logger.js             # 実行ログ出力
│   └── index.js              # エントリーポイント（一連の処理を実行）
├── test/                     # node:test によるユニットテスト
├── .env.example
└── package.json
```

## 🚀 Setup

```bash
cd project-x-butler
npm install
cp .env.example .env
cp config/config.example.json config/config.json
```

`.env` に X のログイン情報を設定します。

```
X_USERNAME=your-username-or-email
X_PASSWORD=your-password
TEST_MODE=true   # false にすると実際にリポスト/いいねを実行する
```

`config/config.json` でリポスト・いいねの対象キーワードや実行件数の上限を設定します（`config/config.example.json` 参照）。

## ▶️ Usage

```bash
npm start      # config.json / .env の設定に従って1回実行
npm test       # ユニットテスト実行（実ブラウザ・実X接続は不要）
```

`TEST_MODE=true`（既定値）のときは、キーワード判定とログ出力のみ行い、実際のクリック操作は行いません。本番実行前に必ずテストモードで動作を確認してください。

## ⚙️ Google Sheets 連携（任意）

`config.json` の `googleSheets.enabled` を `true` にすると、以下のシートから設定・キーワードを読み込みます（ローカルの `config.json` を上書き）。

- **Config シート**（`key`, `value` の2列）: `testMode` などの設定値
- **Keywords シート**（`action`, `keyword`, `enabled` の3列）: `action` は `repost` または `like`、`enabled` を `false` にするとその行を無視

サービスアカウントの認証情報ファイルへのパスを `.env` の `GOOGLE_SERVICE_ACCOUNT_FILE` に、対象スプレッドシートIDを `GOOGLE_SPREADSHEET_ID` に設定してください。サービスアカウントのメールアドレスをスプレッドシートの閲覧者として共有する必要があります。

## 🌹 Development Rules

- 1実装ごとにテストする
- 1実装ごとにGitへコミットする
- 既存システムを再利用して新機能を実装する
- スプレッドシートから設定を変更できるようにする
- 本番実行前に必ずテストモードで確認する

## 🚀 Planned Features

- 📝 ランダム投稿
- 📅 定時投稿（Google Cloud Scheduler）
- 💬 自動返信
- 📈 投稿統計
- 🔔 エラー通知
- ☁️ Google Cloud Run 完全対応

## 📄 License

GNU Affero General Public License v3.0
