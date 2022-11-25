const katakana: string[][] = [
  // a/i/u/e/o/nn
  ['a', 'ア'],
  ['i', 'イ'],
  ['u', 'ウ'],
  ['e', 'エ'],
  ['o', 'オ'],
  ['nn', 'ン'],
  // k
  ['ka', 'カ'],
  ['ki', 'キ'],
  ['ku', 'ク'],
  ['ke', 'ケ'],
  ['ko', 'コ'],
  // s
  ['sa', 'サ'],
  ['shi', 'シ'],
  ['su', 'ス'],
  ['se', 'セ'],
  ['so', 'ソ'],
  // t
  ['ta', 'タ'],
  ['chi', 'チ'],
  ['tsu', 'ツ'],
  ['te', 'テ'],
  ['to', 'ト'],
  // n
  ['na', 'ナ'],
  ['ni', 'ニ'],
  ['nu', 'ヌ'],
  ['ne', 'ネ'],
  ['no', 'ノ'],
  // h
  ['ha', 'ハ'],
  ['hi', 'ヒ'],
  ['fu', 'フ'],
  ['he', 'ヘ'],
  ['ho', 'ホ'],
  // m
  ['ma', 'マ'],
  ['mi', 'ミ'],
  ['mu', 'ム'],
  ['me', 'メ'],
  ['mo', 'モ'],
  // y
  ['ya', 'ヤ'],
  ['yu', 'ユ'],
  ['yo', 'ヨ'],
  // r
  ['ra', 'ラ'],
  ['ri', 'リ'],
  ['ru', 'ル'],
  ['re', 'レ'],
  ['ro', 'ロ'],
  // w
  ['wa', 'ワ'],
  ['wo', 'ヲ'],
];

const katakanaDakuten: string[][] = [
  // g
  ['ga', 'ガ'],
  ['gi', 'ギ'],
  ['gu', 'グ'],
  ['ge', 'ゲ'],
  ['go', 'ゴ'],
  // z
  ['za', 'ザ'],
  ['ji', 'ジ'],
  ['zu', 'ズ'],
  ['ze', 'ゼ'],
  ['zo', 'ゾ'],
  // d
  ['da', 'ダ'],
  ['ji', 'ヂ'],
  ['zu', 'ヅ'],
  ['de', 'デ'],
  ['do', 'ド'],
  // b
  ['ba', 'バ'],
  ['bi', 'ビ'],
  ['bu', 'ブ'],
  ['be', 'ベ'],
  ['bo', 'ボ'],
  // p
  ['pa', 'パ'],
  ['pi', 'ピ'],
  ['pu', 'プ'],
  ['pe', 'ペ'],
  ['po', 'ポ'],
];

const katakanaContractions: string[][] = [
  // ky
  ['kya', 'キャ'],
  ['kyu', 'キュ'],
  ['kyo', 'キョ'],
  // sh
  ['sha', 'シャ'],
  ['shu', 'シュ'],
  ['sho', 'ショ'],
  // ch
  ['cha', 'チャ'],
  ['chu', 'チュ'],
  ['cho', 'チョ'],
  // ny
  ['nya', 'ニャ'],
  ['nyu', 'ニュ'],
  ['nyo', 'ニョ'],
  // hy
  ['hya', 'ヒャ'],
  ['hyu', 'ヒュ'],
  ['hyo', 'ヒョ'],
  // my
  ['mya', 'ミャ'],
  ['myu', 'ミュ'],
  ['myo', 'ミョ'],
  // ry
  ['rya', 'リャ'],
  ['ryu', 'リュ'],
  ['ryo', 'リョ'],
];

const katakanaDakutenContractions: string[][] = [
  // gy
  ['gya', 'ギャ'],
  ['gyu', 'ギュ'],
  ['gyo', 'ギョ'],
  // jy
  ['jya', 'ジャ'],
  ['jyu', 'ジュ'],
  ['jyo', 'ジョ'],
  // by
  ['bya', 'ビャ'],
  ['byu', 'ビュ'],
  ['byo', 'ビョ'],
  // py
  ['pya', 'ピャ'],
  ['pyu', 'ピュ'],
  ['pyo', 'ピョ'],
];

export {katakana, katakanaContractions, katakanaDakuten, katakanaDakutenContractions};
