# 書類印刷サイト

すべてのファイルを、リポジトリの一番上（index.html と同じ場所）に置きます。

| ファイル | 書類 |
|---|---|
| ininjo.pdf | 委任状 |
| joto.pdf | 譲渡証明書 |
| shako-shinsei.pdf | 車庫申請書（1枚のみ） |
| jinin.pdf | 自認書 |
| haichizu.pdf | 配置図 |
| shodaku.pdf | 保管場所使用承諾証明書 |
| shoyuken-kaijo.pdf | 所有権解除依頼書 |
| mihon-ininjo.jpg | 委任状（見本） |
| mihon-joto.jpg | 譲渡証明書（見本） |
| mihon-jinin.jpg | 自認書（見本） |
| mihon-haichizu.jpg | 配置図 個人宅（見本） |
| mihon-shodaku.jpg | 保管場所使用承諾証明書（見本） |
| mihon-shoyuken-kaijo.png | 所有権解除依頼書（見本） |
| shako-teishutsu.pdf | 車庫証明の提出の仕方（お客様向け案内） |
| kanpu-shizuoka.pdf | 還付書類（静岡県） |
| kanpu-aichi.pdf | 還付書類（愛知県） |
| kanpu-gifu.pdf | 還付書類（岐阜県） |
| kanpu-mie.pdf | 還付書類（三重県） |
| kanpu-yamanashi.pdf | 還付書類（山梨県） |
| kanpu-nagano.pdf | 還付書類（長野県） |
| toyama.pdf / ishikawa.pdf / fukui.pdf | 還付書類（富山・石川・福井） |
| osaka.pdf / hyougo.pdf / kyoto.pdf / shiga.pdf / nara.pdf / wakayama.pdf | 還付書類（近畿） |
| furikomi-kouza.pdf | 振込口座記入用紙 |

## 書類を追加するとき
1. PDFのファイル名を半角英数字にしてアップロード（例：shinki.pdf）
2. data.js の「書類」の中に1行追加
   `{ name: "画面に出す名前", file: "shinki.pdf" },`
