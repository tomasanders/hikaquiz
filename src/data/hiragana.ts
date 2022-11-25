const hiragana: string[][] = [
  // a/i/u/e/o/nn
  ['a', 'あ'],
  ['i', 'い'],
  ['u', 'う'],
  ['e', 'え'],
  ['o', 'お'],
  ['nn', 'ん'],
  // k
  ['ka', 'か'],
  ['ki', 'き'],
  ['ku', 'く'],
  ['ke', 'け'],
  ['ko', 'こ'],
  // s
  ['sa', 'さ'],
  ['shi', 'し'],
  ['su', 'す'],
  ['se', 'せ'],
  ['so', 'そ'],
  // t
  ['ta', 'た'],
  ['chi', 'ち'],
  ['tsu', 'つ'],
  ['te', 'て'],
  ['to', 'と'],
  // n
  ['na', 'な'],
  ['ni', 'に'],
  ['nu', 'ぬ'],
  ['ne', 'ね'],
  ['no', 'の'],
  // h
  ['ha', 'は'],
  ['hi', 'ひ'],
  ['fu', 'ふ'],
  ['he', 'へ'],
  ['ho', 'ほ'],
  // m
  ['ma', 'ま'],
  ['mi', 'み'],
  ['mu', 'む'],
  ['me', 'め'],
  ['mo', 'も'],
  // y
  ['ya', 'や'],
  ['yu', 'ゆ'],
  ['yo', 'よ'],
  // r
  ['ra', 'ら'],
  ['ri', 'り'],
  ['ru', 'る'],
  ['re', 'れ'],
  ['ro', 'ろ'],
  // w
  ['wa', 'わ'],
  ['wo', 'を'],
];

const hiraganaDakuten: string[][] = [
  // g
  ['ga', 'が'],
  ['gi', 'ぎ'],
  ['gu', 'ぐ'],
  ['ge', 'げ'],
  ['go', 'ご'],
  // z
  ['za', 'ざ'],
  ['ji', 'じ'],
  ['zu', 'ず'],
  ['ze', 'ぜ'],
  ['zo', 'ぞ'],
  // d
  ['da', 'だ'],
  ['ji', 'ぢ'],
  ['zu', 'づ'],
  ['de', 'で'],
  ['do', 'ど'],
  // b
  ['ba', 'ば'],
  ['bi', 'び'],
  ['bu', 'ぶ'],
  ['be', 'べ'],
  ['bo', 'ぼ'],
  // p
  ['pa', 'ぱ'],
  ['pi', 'ぴ'],
  ['pu', 'ぷ'],
  ['pe', 'ぺ'],
  ['po', 'ぽ'],
];

const hiraganaContractions: string[][] = [
  // ky
  ['kya', 'きゃ'],
  ['kyu', 'きゅ'],
  ['kyo', 'きょ'],
  // sh
  ['sha', 'しゃ'],
  ['shu', 'しゅ'],
  ['sho', 'しょ'],
  // ch
  ['cha', 'ちゃ'],
  ['chu', 'ちゅ'],
  ['cho', 'ちょ'],
  // ny
  ['nya', 'にゃ'],
  ['nyu', 'にゅ'],
  ['nyo', 'にょ'],
  // hy
  ['hya', 'ひゃ'],
  ['hyu', 'ひゅ'],
  ['hyo', 'ひょ'],
  // my
  ['mya', 'みゃ'],
  ['myu', 'みゅ'],
  ['myo', 'みょ'],
  // ry
  ['rya', 'りゃ'],
  ['ryu', 'りゅ'],
  ['ryo', 'りょ'],
];

const hiraganaDakutenContractions: string[][] = [
  // gy
  ['gya', 'ぎゃ'],
  ['gyu', 'ぎゅ'],
  ['gyo', 'ぎょ'],
  // jy
  ['jya', 'じゃ'],
  ['jyu', 'じゅ'],
  ['jyo', 'じょ'],
  // by
  ['bya', 'びゃ'],
  ['byu', 'びゅ'],
  ['byo', 'びょ'],
  // py
  ['pya', 'ぴゃ'],
  ['pyu', 'ぴゅ'],
  ['pyo', 'ぴょ'],
];

export {hiragana, hiraganaContractions, hiraganaDakuten, hiraganaDakutenContractions}
