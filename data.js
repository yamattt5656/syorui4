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
  // 「車庫証明はお客様出し」＝はい のとき、返送リストに載せない書類（画面の名前で指定）
  garageHide: ["車庫申請書（1枚のみ）", "配置図", "自認書", "保管場所使用承諾証明書"],
};

// =====================================================================
//  印刷する順番
//  上から書いた順に印刷されます（頭紙のチェックリストも同じ順になります）
//  行を入れ替えると順番が変わります。ここに無いものは最後に印刷されます。
// =====================================================================
const PRINT_ORDER = [
  "遠方販売のテンプレート",      // テンプレートの文章
  "振込口座記入用紙",
  "委任状",
  "委任状（見本）",
  "譲渡証明書",
  "譲渡証明書（見本）",
  "所有権解除依頼書",
  "所有権解除依頼書（見本）",
  "還付書類",                    // 都道府県のプルダウン
  "車庫証明の提出の仕方",
  "車庫申請書（1枚のみ）",
  "配置図",
  "配置図 個人宅（見本）",
  "自認書",
  "車庫証明（4枚一式）",
  "自認書（見本）",
  "保管場所使用承諾証明書",
  "保管場所使用承諾証明書（見本）",
  "ETCセットアップ",             // 担当者のプルダウン
];

const SECTIONS = [
  {
    title: "遠方販売のテンプレート",
    templates: true,               // 文章を編集して印刷できる欄（文面は templates.js）
    selectLabel: "",               // カードに名前を出さない
    checklist: false,              // 返送リストには載せない
    items: [
      { name: "普通車 現金",            key: "futsu-genkin" },
      { name: "普通車 現金 法人",       key: "futsu-genkin-houjin" },
      { name: "普通車 オリコ",          key: "futsu-orico" },
      { name: "普通車 オリコ 法人",     key: "futsu-orico-houjin" },
      { name: "普通車 ZERO登録陸送",    key: "futsu-zero" },
      { name: "軽自動車 現金",          key: "kei-genkin" },
      { name: "軽自動車 現金 法人",     key: "kei-genkin-houjin" },
      { name: "軽自動車 オリコ",        key: "kei-orico" },
      { name: "軽自動車 オリコ 法人",   key: "kei-orico-houjin" },
      { name: "購入に関して",           key: "kounyu" },
    ],
  },
  {
    title: "お客様に返送を依頼",
    obtain: true,       // 印刷はせず、返送リストにだけ載せる
    items: [
      // listName … 返送リストに印字する名前（省略すると name がそのまま出ます）
      { name: "自動車注文書", listName: "自動車注文書（ご記入ご捺印の上、2枚目以降を返送）" },
      { name: "ローン振込口座記入用紙" },
      { name: "免許証コピー（白黒 両面）" },
    ],
  },
  {
    title: "役所などで取得",
    obtain: true,       // お客様が取得する書類（印刷はせず、返送リストにだけ載せる）
    items: [
      { name: "印鑑証明書" },
      { name: "住民票", listName: "住民票（本人のみ　マイナンバー・本籍不要）" },
      { name: "戸籍の附票" },
      { name: "戸籍の除票" },
      { name: "戸籍謄本" },
    ],
    note: [                      // 欄の下に出る説明文
      "引越1回　印鑑証明書・住民票",
      "引越2回以上　印鑑証明書・住民票・戸籍の附票",
      "名字変更　戸籍謄本",
    ],
  },
  {
    title: "書類",
    items: [
      { name: "委任状",                   file: "ininjo.pdf" },
      { name: "譲渡証明書",               file: "joto.pdf" },
      { name: "車庫申請書（1枚のみ）",     file: "shako-shinsei.pdf" },
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
      { name: "車庫証明（4枚一式）",         file: "mihon-shako.jpg" },
      { name: "自認書（見本）",           file: "mihon-jinin.jpg" },
      { name: "配置図 個人宅（見本）",    file: "mihon-haichizu.jpg" },
      { name: "保管場所使用承諾証明書（見本）", file: "mihon-shodaku.jpg" },
      { name: "所有権解除依頼書（見本）",       file: "mihon-shoyuken-kaijo.png" },
      { name: "車庫証明の提出の仕方",           file: "shako-teishutsu.pdf" },
    ],
  },
  {
    title: "還付書類",
    select: true,                     // プルダウンで選ぶ欄にする
    selectLabel: "還付書類",           // カードに表示する名前
    listName: "還付書類（{name}）",    // チェックリストでの表示名
    items: [
      { group: "東海・北陸・近畿", name: "愛知県",   file: "kanpu-aichi.pdf" },
      { group: "東海・北陸・近畿", name: "静岡県",   file: "kanpu-shizuoka.pdf", default: true },   // 最初に選ばれる県
      { group: "東海・北陸・近畿", name: "三重県",   file: "kanpu-mie.pdf" },
      { group: "東海・北陸・近畿", name: "岐阜県",   file: "kanpu-gifu.pdf" },
      { group: "東海・北陸・近畿", name: "富山県",   file: "toyama.pdf" },
      { group: "東海・北陸・近畿", name: "石川県",   file: "ishikawa.pdf" },
      { group: "東海・北陸・近畿", name: "福井県",   file: "fukui.pdf" },
      { group: "東海・北陸・近畿", name: "大阪府",   file: "osaka.pdf" },
      { group: "東海・北陸・近畿", name: "兵庫県",   file: "hyougo.pdf" },
      { group: "東海・北陸・近畿", name: "京都府",   file: "kyoto.pdf" },
      { group: "東海・北陸・近畿", name: "滋賀県",   file: "shiga.pdf" },
      { group: "東海・北陸・近畿", name: "奈良県",   file: "nara.pdf" },
      { group: "東海・北陸・近畿", name: "和歌山県", file: "wakayama.pdf" },
      { group: "関東・信越",       name: "東京都",   file: "tokyo.pdf" },
      { group: "関東・信越",       name: "神奈川県", file: "kanagawa.pdf" },
      { group: "関東・信越",       name: "埼玉県",   file: "saitama.pdf" },
      { group: "関東・信越",       name: "千葉県",   file: "chiba.pdf" },
      { group: "関東・信越",       name: "茨城県",   file: "ibaraki.pdf" },
      { group: "関東・信越",       name: "栃木県",   file: "tochigi.pdf" },
      { group: "関東・信越",       name: "群馬県",   file: "gunma.pdf" },
      { group: "関東・信越",       name: "山梨県",   file: "yamanashi.pdf" },
      { group: "関東・信越",       name: "新潟県",   file: "niigata.pdf" },
      { group: "関東・信越",       name: "長野県",   file: "nagano.pdf" },
      { group: "中国・四国",       name: "島根県",   file: "shimane.pdf" },
      { group: "中国・四国",       name: "鳥取県",   file: "tottori.pdf" },
      { group: "中国・四国",       name: "岡山県",   file: "okayama.pdf" },
      { group: "中国・四国",       name: "広島県",   file: "hiroshima.pdf" },
      { group: "中国・四国",       name: "山口県",   file: "yamaguchi.pdf" },
      { group: "中国・四国",       name: "徳島県",   file: "tokushima.pdf" },
      { group: "中国・四国",       name: "香川県",   file: "kagawa.pdf" },
      { group: "中国・四国",       name: "愛媛県",   file: "ehime.pdf" },
      { group: "中国・四国",       name: "高知県",   file: "kouchi.pdf" },
      { group: "九州・沖縄",       name: "福岡県",   file: "fukuoka.pdf" },
      { group: "九州・沖縄",       name: "佐賀県",   file: "saga.pdf" },
      { group: "九州・沖縄",       name: "長崎県",   file: "nagasaki.pdf" },
      { group: "九州・沖縄",       name: "熊本県",   file: "kumamoto.pdf" },
      { group: "九州・沖縄",       name: "大分県",   file: "oita.pdf" },
      { group: "九州・沖縄",       name: "宮崎県",   file: "miyazaki.pdf" },
      { group: "九州・沖縄",       name: "鹿児島県", file: "kagoshima.pdf" },
      { group: "九州・沖縄",       name: "沖縄県",   file: "okinawa.pdf" },
    ],
  },
  {
    title: "ETCセットアップ",
    select: true,
    selectLabel: "担当者",
    listName: "ETCセットアップ申請方法のご案内（{name}）",
    checklist: false,              // 返送リストには載せない（載せたい場合はこの行を消す）
    // この書類を選ぶと、頭紙の下にこの文が印字されます
    coverNote: "同封のETCセットアップ申請方法のご案内のQRコードから、申し込みを1週間以内に行ってください",
    items: [
      { name: "浅倉 康介", file: "etc-asakura.pdf" },
      { name: "石神 悠", file: "etc-ishigami.pdf" },
      { name: "石山 拓哉", file: "etc-ishiyama.pdf" },
      { name: "伊藤 健嗣", file: "etc-k-ito.pdf" },
      { name: "大瀧 雅伸", file: "etc-ohtaki.pdf" },
      { name: "大庭 亮太", file: "etc-ooba.pdf" },
      { name: "大松 虎雅", file: "etc-omatsu.pdf" },
      { name: "大類 哲哉", file: "etc-oorui.pdf" },
      { name: "大和 祐太", file: "etc-oowa.pdf" },
      { name: "柿崎 匡哉", file: "etc-kakizaki.pdf" },
      { name: "近藤 寛将", file: "etc-kondo.pdf" },
      { name: "四野見 貴章", file: "etc-shinomi.pdf" },
      { name: "鈴木 孝宏", file: "etc-t-suzuki.pdf" },
      { name: "千原 武友", file: "etc-chihara.pdf" },
      { name: "馬塚 教徳", file: "etc-m-maduka.pdf" },
      { name: "馬塚 基成", file: "etc-maduka.pdf" },
      { name: "原 智昭", file: "etc-hara.pdf" },
      { name: "原木 浩行", file: "etc-haraki.pdf" },
      { name: "平賀 友章", file: "etc-hiraga.pdf" },
    ],
  },
  {
    title: "振込口座",
    items: [
      { name: "振込口座記入用紙", file: "furikomi-kouza.pdf" },
    ],
  },
];
