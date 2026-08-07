# vtb リポジトリへの Vue.js 移植 引継メモ

このメモは `eteoil/eteoil.github.io`（静的サイト）を Vue.js 化して
`eteoil/vtb` に上書き移植するための引継ぎ資料です。
前セッションでバグ修正を行った際に把握した仕様をまとめてあります。

**新セッションでは `eteoil/vtb` と `eteoil/eteoil.github.io` の両方を source に含めてください。**
前セッションは eteoil.github.io のみを source としていたため、vtb に一切アクセスできず作業できませんでした。

---

## 1. 依頼内容（ユーザー確認済み）

| 項目 | 内容 |
|---|---|
| やること | eteoil.github.io の中身を Vue.js に書き換えて `eteoil/vtb` に**上書き** |
| 除外 | `shuvaltzsta-un-empty/` （22ファイルの別ゲーム。移植対象外） |
| NotFound | vtb に既存の `NotFound.vue` を**踏襲**する（新規に書き起こさない） |
| 残すファイル | `NotFound.vue` 以外に残すべきものは**無い** |
| 分割の粒度 | **既存 vtb の構成に合わせる**（Vue のバージョン・`<script setup>` か Options API か・ルーター構成・スタイルの書き方をまず調査すること） |
| shvlang | ルートの一つとして移植する |
| バグ修正 | 後述の修正をすべて反映した状態で移植する |

移植元は `main` ブランチの `3c6966f` 以降（バグ修正がすべて入った状態）。

---

## 2. 移植対象ファイル

| パス | 行数 | 内容 |
|---|---|---|
| `index.html` | 1,663 | メインページ。大半はインライン SVG（部屋＋キャラ2体） |
| `shvlang/index.html` | 1,913 | 隠しページ。同じ部屋 SVG ＋ シュバル語翻訳機（辞書90件） |
| `cmn/js/default.js` | 505 | セリフデータ・表情制御・ポップアップ・選択肢 |
| `cmn/css/default.css` | 576 | 全体のスタイル |
| `cmn/img/` | 7件 | book / bookshelf / calendar / desk / gelatinRoom / mat の SVG、vtb_logo.png |

ルート直下の静的ファイル（そのまま持っていく）:
favicon 各種・`apple-touch-icon*`・`android-chrome-*`・`safari-pinned-tab.svg`・`site.webmanifest`

**注意が必要なもの**

- `googlecab1cb19f0b6363b.html` — Google Search Console の所有権確認ファイル。
  Vue のルートにせず、**ビルド後もルート直下に素の HTML として配置**すること（`public/` 等）。
  消すと Search Console の認証が外れる。
- `_config.yml` — GitHub Pages(Jekyll) 用。Vue 化後は不要になる想定だが、
  vtb 側のデプロイ方法に合わせて判断すること。
- `shuvaltzsta-un-empty/` — **移植しない**。

---

## 3. アプリの仕様

### 3-1. 全体構造

1画面のノベルゲーム風サイト。部屋の背景 SVG の中にキャラが2体いて、
下部のメッセージウィンドウにセリフが自動で流れる。

- **tem（テムくん）** … 部屋の隅にいる白ウサギ
- **gumi（グミちゃん）** … 赤い花の髪のオレンジ色のキャラ

### 3-2. セリフデータ

`idleMessages` は **15件（index 0〜14）** の配列。各要素は次の形。

```js
{
  text: '「いらっしゃいませ〜！\n　来てくれてありがとう！」',
  temEyeL: 'temEyeLOpen',      // SVG要素のid
  temEyeR: 'temEyeROpen',
  temWink: '',                 // 空文字なら無効
  gumiEyeL: 'gumiEyeLOpen',
  gumiEyeR: 'gumiEyeROpen',
  gumiEyeLIris: 'gumiEyeLIrisOpen',
  gumiEyeRIris: 'gumiEyeRIrisOpen',
  moveIris: '',                // ここだけ id ではなく CSSクラス名 (is-moveLeft / is-moveTop)
  gumiMouth: 'gumiMouth'
}
```

シーン用データも同じ形＋`choices` を持つ:
`shopData` / `orderData` / `calendarData` / `bookshelfData` / `bookData` / `temData` / `gumiData`

```js
choices: [
  { label: 'BOOTH', url: 'https://...' },   // url なら別タブで開く
  { label: '確認してみる', action: openPopup }, // action なら関数を実行
]
```

### 3-3. 表情パーツの仕組み（Vue 化で一番作り替えたい部分）

現状は **SVG要素の id を文字列で持ち、DOM を直接叩いて `is-active` クラスを付け外し**している。

- CSS で `[id*="temEye"], [id*="gumiEye"], [id*="gumiMouth"] { display: none }`
- `.is-active` が付いたものだけ `display: inline`
- `setFace()` が「全部リセット → 指定されたものだけ有効化」を行う
- ウインクは `.is-wink`（`transform: rotate(180deg) translate(-51px,-67px)`）
- 瞳の移動は `.is-moveLeft` / `.is-moveTop`

**Vue 化するなら**、id 文字列ではなくリアクティブな状態にして
`v-if` / `:class` でパーツを出し分ける形にするのが自然。
文字列 id の一致に依存する現在の作りは、typo が黙って無視される事故が実際に複数起きている（第4章参照）。

パーツの id 一覧（tem / gumi 共通で L・R あり）:
`temEyeLOpen` `temEyeLHalf` `temEyeLClose` / `temEyeROpen` `temEyeRHalf` `temEyeRClose`
`gumiEyeLOpen` `gumiEyeLHalf` `gumiEyeLClose` / 同 R
`gumiEyeLIrisOpen` `gumiEyeLIrisHalf` / 同 R
`gumiMouth`

### 3-4. タイミング・数値

| 項目 | 値 |
|---|---|
| 文字送り速度 | 60ms / 文字 |
| 次のセリフまでの待ち | `(空白改行を除いた文字数 × 0.1 + 3) × 1000` ms |
| オープニング | `load` の 2秒後に `.slide-up` 付与 → 1秒かけて transform → `transitionend` でループ開始 |
| ループ範囲 | `idleLoopEnd = 13`。index が 13 以上になったら 1 に戻る（0 は起動時のみ） |
| 幅の分岐 | 740px。以上なら改行・空白を除去。ただし実測幅が 740px を超える時は `.wrap-mode` を付けて元のまま表示 |

### 3-5. 操作

- **メッセージウィンドウをタップ** → 次のセリフへ即移行。
  文字送り中でも表示完了後でも有効。**選択肢表示中・翻訳入力表示中は無視**する。
- **シーンボタン** `calendarBtn` `bookshelfBtn` `bookBtn` `temBtn` `gumiBtn`
- **SHOP / ORDER**（`.menu button`）→ それぞれ `shopData` / `orderData` の選択肢を出す
- **カレンダー** → Google カレンダーの iframe をモーダル表示。
  背景クリックまたは右上の × で閉じる。開閉は 0.5秒のフェード。

### 3-6. shvlang ページ

同じ部屋 SVG に加えて、シュバル語翻訳機がある。

- `textarea#translateInput` と3つのボタン（シュバル語 / ボカロ語 / 日本語）
- 辞書は **90件** の `{"langNum": [かな, シュバル語, 発音, "", カナ, 英単語, 発音記号]}` 形式
- `Translator` オブジェクトが変換を担当。戻り値は `{success: true|false|null, result}`
  - `false` … 使えない文字が含まれる → エラーメッセージを表示
  - `null` … 入力が空 → 何もしない

---

## 4. 前セッションで直したバグ（移植時に必ず反映すること）

すべて `main` の `3c6966f` に入っている。Vue 化すると自然に解消するものもあるが、
**データの修正と挙動の決定は引き継ぐ必要がある**。

| # | 内容 | Vue化での扱い |
|---|---|---|
| 1 | `setFace()` のリセットが `is-move`（存在しないクラス名）と `[id*="temWink"]`（存在しない要素）を対象にしていて、ウインクの回転と瞳の移動が永久に残っていた | 状態管理にすれば自然に解消 |
| 2 | セリフデータの id に余分な空白（`'tem EyeLOpen'`）が混入し、その行だけ目が消えていた | **データを引き継ぐ際に注意**。修正済みの値を使うこと |
| 3 | メッセージウィンドウのクリック処理が壊れていて（`switch(true)` に常に真になる case が並んでいた）一度も動作していなかった | **挙動を引き継ぐ**（3-5参照） |
| 4 | 最初の表情を当てるのが `transitionend` の後だったため、オープニングのスライド中（約1秒）キャラの目と口が欠けていた | **初期表情を最初から当てること** |
| 5 | `displayMessage()` が文字列を渡されると例外（shvlang で発生していた） | Vue では props/型で担保 |
| 6 | `temEyeLHalf` が右目の座標（x=22〜28）のコピーになっていて、半目の時に左右が重なり片目が消えていた | **SVG を移植する際、修正後の座標（x=7〜13）を使うこと** |
| 7 | `.popupBg.close` に `display` 指定が無く、`display:none` の要素はアニメーションしないためフェードアウトが走っていなかった | `<Transition>` で実装すれば解消 |
| 8 | カレンダーの背景が `<button>` で、その中に × ボタンを置くと HTML として不正になる問題 | 背景は `<div>`、× は独立したボタンに |

### ユーザーが決めた仕様（勝手に変えないこと）

- タップでの送りは「自動送り中はいつでも有効」。文字送り中に限定しない。
- × ボタンはカレンダー枠の**右上のすぐ外側（上）**。枠の内側だと Google カレンダー自身の
  ナビゲーションボタンに被るため。

---

## 5. 未報告の気になる点（ユーザー判断が必要）

- **`idleMessages[14]` が到達不能。**
  配列は 15件（index 0〜14）あるが `idleLoopEnd = 13` のため、
  index 13 の次は 1 に戻り **index 14 は一度も表示されない**。
  14 の内容は「あ、もしかして案内を読み飛ばしちゃったのかな？じゃあもう一回説明しよう！」で、
  index 1（SHOP/ORDER の説明）へ戻る直前の繋ぎとして書かれたように読める。
  意図通りなら `idleLoopEnd = 14` が正しいと思われるが、**勝手に変えずユーザーに確認すること**。

---

## 6. 検証方法

前セッションでは Playwright + Chromium で実機確認していた。同じ環境が使えるはず。

```bash
python3 -m http.server 8099          # リポジトリ直下で
NODE_PATH=$(npm root -g) node test.js  # playwright はグローバルに入っている
```

- ブラウザは `/opt/pw-browsers` にプリインストール済み。`playwright install` は不要。
- **サンドボックスのプロキシが Google カレンダーと eteoil.github.io への接続を遮断する**ため、
  カレンダーの iframe 実物と公開サイトは確認できない。枠の座標で代替検証していた。

---

## 7. 公開フロー（eteoil.github.io 側）

参考まで。vtb 側のデプロイ方法は別途確認すること。

- GitHub Pages がデフォルトブランチ `main` を直接配信（Actions のワークフローは無し）
- ブランチに push しただけでは反映されない。`main` にマージが必要
- push から反映まで概ね1分弱（`pages build and deployment` の完了を確認できる）
