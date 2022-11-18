const katakana = {
  vn: {
    a: {en: 'a', ja: 'ア'},
    i: {en: 'i', ja: 'イ'},
    u: {en: 'u', ja: 'ウ'},
    e: {en: 'e', ja: 'エ'},
    o: {en: 'o', ja: 'オ'},
    nn: {en: 'nn', ja: 'ン'},
  },
  k: {
    ka: {en: 'ka', ja: 'カ'},
    ki: {en: 'ki', ja: 'キ'},
    ku: {en: 'ku', ja: 'ク'},
    ke: {en: 'ke', ja: 'ケ'},
    ko: {en: 'ko', ja: 'コ'},
  },
  s: {
    sa: {en: 'sa', ja: 'サ'},
    shi: {en: 'shi', ja: 'シ'},
    su: {en: 'su', ja: 'ス'},
    se: {en: 'se', ja: 'セ'},
    so: {en: 'so', ja: 'ソ'},
  },
  t: {
    ta: {en: 'ta', ja: 'タ'},
    chi: {en: 'chi', ja: 'チ'},
    tsu: {en: 'tsu', ja: 'ツ'},
    te: {en: 'te', ja: 'テ'},
    to: {en: 'to', ja: 'ト'},
  },
  n: {
    na: {en: 'na', ja: 'ナ'},
    ni: {en: 'ni', ja: 'ニ'},
    nu: {en: 'nu', ja: 'ヌ'},
    ne: {en: 'ne', ja: 'ネ'},
    no: {en: 'no', ja: 'ノ'},
  },
  h: {
    ha: {en: 'ha', ja: 'ハ'},
    hi: {en: 'hi', ja: 'ヒ'},
    fu: {en: 'fu', ja: 'フ'},
    he: {en: 'he', ja: 'ヘ'},
    ho: {en: 'ho', ja: 'ホ'},
  },
  m: {
    ma: {en: 'ma', ja: 'マ'},
    mi: {en: 'mi', ja: 'ミ'},
    mu: {en: 'mu', ja: 'ム'},
    me: {en: 'me', ja: 'メ'},
    mo: {en: 'mo', ja: 'モ'},
  },
  y: {
    ya: {en: 'ya', ja: 'ヤ'},
    yu: {en: 'yu', ja: 'ユ'},
    yo: {en: 'yo', ja: 'ヨ'},
  },
  r: {
    ra: {en: 'ra', ja: 'ラ'},
    ri: {en: 'ri', ja: 'リ'},
    ru: {en: 'ru', ja: 'ル'},
    re: {en: 're', ja: 'レ'},
    ro: {en: 'ro', ja: 'ロ'},
  },
  w: {
    wa: {en: 'wa', ja: 'ワ'},
    wo: {en: 'wo', ja: 'ヲ'},
  },
};

const katakanaDakuten = {
  g: {
    ga: {en: 'ga', ja: 'ガ'},
    gi: {en: 'gi', ja: 'ギ'},
    gu: {en: 'gu', ja: 'グ'},
    ge: {en: 'ge', ja: 'ゲ'},
    go: {en: 'go', ja: 'ゴ'},
  },
  z: {
    za: {en: 'za', ja: 'ザ'},
    ji: {en: 'ji', ja: 'ジ'},
    zu: {en: 'zu', ja: 'ズ'},
    ze: {en: 'ze', ja: 'ゼ'},
    zo: {en: 'zo', ja: 'ゾ'},
  },
  d: {
    da: {en: 'da', ja: 'ダ'},
    di: {en: 'ji', ja: 'ヂ'},
    du: {en: 'zu', ja: 'ヅ'},
    de: {en: 'de', ja: 'デ'},
    do: {en: 'do', ja: 'ド'},
  },
  b: {
    ba: {en: 'ba', ja: 'バ'},
    bi: {en: 'bi', ja: 'ビ'},
    bu: {en: 'bu', ja: 'ブ'},
    be: {en: 'be', ja: 'ベ'},
    bo: {en: 'bo', ja: 'ボ'},
  },
  p: {
    pa: {en: 'pa', ja: 'パ'},
    pi: {en: 'pi', ja: 'ピ'},
    pu: {en: 'pu', ja: 'プ'},
    pe: {en: 'pe', ja: 'ペ'},
    po: {en: 'po', ja: 'ポ'},
  },
};

const katakanaContractions = {
  ky: {
    kya: {en: 'kya', ja: 'キャ'},
    kyu: {en: 'kyu', ja: 'キュ'},
    kyo: {en: 'kyo', ja: 'キョ'},
  },
  sh: {
    sha: {en: 'sha', ja: 'シャ'},
    shu: {en: 'shu', ja: 'シュ'},
    sho: {en: 'sho', ja: 'ショ'},
  },
  ch: {
    cha: {en: 'cha', ja: 'チャ'},
    chu: {en: 'chu', ja: 'チュ'},
    cho: {en: 'cho', ja: 'チョ'},
  },
  ny: {
    nya: {en: 'nya', ja: 'ニャ'},
    nyu: {en: 'nyu', ja: 'ニュ'},
    nyo: {en: 'nyo', ja: 'ニョ'},
  },
  hy: {
    hya: {en: 'hya', ja: 'ヒャ'},
    hyu: {en: 'hyu', ja: 'ヒュ'},
    hyo: {en: 'hyo', ja: 'ヒョ'},
  },
  my: {
    mya: {en: 'mya', ja: 'ミャ'},
    myu: {en: 'myu', ja: 'ミュ'},
    myo: {en: 'myo', ja: 'ミョ'},
  },
  ry: {
    rya: {en: 'rya', ja: 'リャ'},
    ryu: {en: 'ryu', ja: 'リュ'},
    ryo: {en: 'ryo', ja: 'リョ'},
  },
};

const katakanaDakutenContractions = {
  gy: {
    gya: {en: 'gya', ja: 'ギャ'},
    gyu: {en: 'gyu', ja: 'ギュ'},
    gyo: {en: 'gyo', ja: 'ギョ'},
  },
  jy: {
    jya: {en: 'jya', ja: 'ジャ'},
    jyu: {en: 'jyu', ja: 'ジュ'},
    jyo: {en: 'jyo', ja: 'ジョ'},
  },
  by: {
    bya: {en: 'bya', ja: 'ビャ'},
    byu: {en: 'byu', ja: 'ビュ'},
    byo: {en: 'byo', ja: 'ビョ'},
  },
  py: {
    pya: {en: 'pya', ja: 'ピャ'},
    pyu: {en: 'pyu', ja: 'ピュ'},
    pyo: {en: 'pyo', ja: 'ピョ'},
  },
};

export {katakana, katakanaContractions, katakanaDakuten, katakanaDakutenContractions};
