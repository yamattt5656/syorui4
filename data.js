// =====================================================================
//  書類の一覧 ― 書類を増やす・名前を変えるときはこのファイルを編集します
//
//  name : 画面に表示する名前
//  file : 印刷するファイル名（PDF または jpg / png 画像）
//         ファイルはすべて index.html と同じ場所に置きます
//         ファイル名は半角英数字にしてください（例：ininjo.pdf）
//         null にすると「未登録」と表示され、選べなくなります
// =====================================================================

const TITLE = "書類印刷システム";

// 頭紙（返送書類チェックリスト）の設定
const COVER = {
  title: "ご返送書類チェックリスト",
  message: "お手数ですが、下記の書類をご確認のうえご返送ください。",
  shop: "",            // 例："松下モータース　TEL 0537-00-0000"（空欄なら表示しません）
  blankRows: 2,        // 手書き用の空欄の行数
  garageItem: "車庫証明（提出後引取りにいったもの）",
};

const SECTIONS = [
  {
    title: "お客様に返送を依頼",
    obtain: true,       // 印刷はせず、返送リストにだけ載せる
    items: [
      // listName … 返送リストに印字する名前（省略すると name がそのまま出ます）
      { name: "自動車注文書", listName: "自動車注文書（ご記入ご捺印の上、2枚目以降を返送）" },
      { name: "ローン振込口座記入用紙" },
    ],
  },
  {
    title: "役所などで取得",
    obtain: true,       // お客様が取得する書類（印刷はせず、返送リストにだけ載せる）
    items: [
      { name: "印鑑証明書" },
      { name: "住民票" },
      { name: "戸籍の附票" },
      { name: "戸籍の除票" },
      { name: "戸籍謄本" },
    ],
  },
  {
    title: "書類",
    items: [
      { name: "委任状",                   file: "ininjo.pdf" },
      { name: "譲渡証明書",               file: "joto.pdf" },
      { name: "自動車保管場所証明申請書", file: "shako-shinsei.pdf" },
      { name: "自認書",                   file: "jinin.pdf" },
      { name: "配置図",                   file: "haichizu.pdf" },
      { name: "保管場所使用承諾証明書",   file: "shodaku.pdf" },
      { name: "所有権解除依頼書",         file: "shoyuken-kaijo.pdf" },
    ],
  },
  {
    title: "書き方見本",
    checklist: false,   // 頭紙のチェックリストには載せない
    items: [
      { name: "委任状（見本）",           file: "mihon-ininjo.jpg" },
      { name: "譲渡証明書（見本）",       file: "mihon-joto.jpg" },
      { name: "自認書（見本）",           file: "mihon-jinin.jpg" },
      { name: "配置図 個人宅（見本）",    file: "mihon-haichizu.jpg" },
      { name: "保管場所使用承諾証明書（見本）", file: "mihon-shodaku.jpg" },
    ],
  },
  {
    title: "還付書類",
    listName: "還付書類（{name}）",   // チェックリストでの表示名
    items: [
      { name: "静岡県", file: "kanpu-shizuoka.pdf" },
      { name: "愛知県", file: "kanpu-aichi.pdf" },
    ],
  },
  {
    title: "振込口座",
    items: [
      { name: "振込口座記入用紙", file: "furikomi-kouza.pdf" },
    ],
  },
];
