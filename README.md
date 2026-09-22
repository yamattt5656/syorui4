# 書類印刷サイト

すべてのファイルを、リポジトリの一番上（index.html と同じ場所）に置きます。

| ファイル | 書類 |
|---|---|
| ininjo.pdf | 委任状 |
| joto.pdf | 譲渡証明書 |
| shako-shinsei.pdf | 自動車保管場所証明申請書 |
| jinin.pdf | 自認書 |
| haichizu.pdf | 配置図 |
| shodaku.pdf | 保管場所使用承諾証明書 |
| shoyuken-kaijo.pdf | 所有権解除依頼書 |
| mihon-ininjo.jpg | 委任状（見本） |
| mihon-joto.jpg | 譲渡証明書（見本） |
| mihon-jinin.jpg | 自認書（見本） |
| mihon-haichizu.jpg | 配置図 個人宅（見本） |
| kanpu-shizuoka.pdf | 還付書類（静岡県） |
| kanpu-aichi.pdf | 還付書類（愛知県） |

## 書類を追加するとき
1. PDFのファイル名を半角英数字にしてアップロード（例：shinki.pdf）
2. data.js の「書類」の中に1行追加
   `{ name: "画面に出す名前", file: "shinki.pdf" },`
