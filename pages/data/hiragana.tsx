const hiragana = {
  vn: {
    a: {en: 'a', ja: 'あ'},
    i: {en: 'i', ja: 'い'},
    u: {en: 'u', ja: 'う'},
    e: {en: 'e', ja: 'え'},
    o: {en: 'o', ja: 'お'},
    nn: {en: 'nn', ja: 'ん'},
  },
  k: {
    ka: {en: 'ka', ja: 'か'},
    ki: {en: 'ki', ja: 'き'},
    ku: {en: 'ku', ja: 'く'},
    ke: {en: 'ke', ja: 'け'},
    ko: {en: 'ko', ja: 'こ'},
  },
  s: {
    sa: {en: 'sa', ja: 'さ'},
    shi: {en: 'shi', ja: 'し'},
    su: {en: 'su', ja: 'す'},
    se: {en: 'se', ja: 'せ'},
    so: {en: 'so', ja: 'そ'},
  },
  t: {
    ta: {en: 'ta', ja: 'た'},
    chi: {en: 'chi', ja: 'ち'},
    tsu: {en: 'tsu', ja: 'つ'},
    te: {en: 'te', ja: 'て'},
    to: {en: 'to', ja: 'と'},
  },
  n: {
    na: {en: 'na', ja: 'な'},
    ni: {en: 'ni', ja: 'に'},
    nu: {en: 'nu', ja: 'ぬ'},
    ne: {en: 'ne', ja: 'ね'},
    no: {en: 'no', ja: 'の'},
  },
  h: {
    ha: {en: 'ha', ja: 'は'},
    hi: {en: 'hi', ja: 'ひ'},
    fu: {en: 'fu', ja: 'ふ'},
    he: {en: 'he', ja: 'へ'},
    ho: {en: 'ho', ja: 'ほ'},
  },
  m: {
    ma: {en: 'ma', ja: 'ま'},
    mi: {en: 'mi', ja: 'み'},
    mu: {en: 'mu', ja: 'む'},
    me: {en: 'me', ja: 'め'},
    mo: {en: 'mo', ja: 'も'},
  },
  y: {
    ya: {en: 'ya', ja: 'や'},
    yu: {en: 'yu', ja: 'ゆ'},
    yo: {en: 'yo', ja: 'よ'},
  },
  r: {
    ra: {en: 'ra', ja: 'ら'},
    ri: {en: 'ri', ja: 'り'},
    ru: {en: 'ru', ja: 'る'},
    re: {en: 're', ja: 'れ'},
    ro: {en: 'ro', ja: 'ろ'},
  },
  w: {
    wa: {en: 'wa', ja: 'わ'},
    wo: {en: 'wo', ja: 'を'},
  },
};

const hiraganaDakuten = {
  g: {
    ga: {en: 'ga', ja: 'が'},
    gi: {en: 'gi', ja: 'ぎ'},
    gu: {en: 'gu', ja: 'ぐ'},
    ge: {en: 'ge', ja: 'げ'},
    go: {en: 'go', ja: 'ご'},
  },
  z: {
    za: {en: 'za', ja: 'ざ'},
    ji: {en: 'ji', ja: 'じ'},
    zu: {en: 'zu', ja: 'ず'},
    ze: {en: 'ze', ja: 'ぜ'},
    zo: {en: 'zo', ja: 'ぞ'},
  },
  d: {
    da: {en: 'da', ja: 'だ'},
    di: {en: 'ji', ja: 'ぢ'},
    du: {en: 'zu', ja: 'づ'},
    de: {en: 'de', ja: 'で'},
    do: {en: 'do', ja: 'ど'},
  },
  b: {
    ba: {en: 'ba', ja: 'ば'},
    bi: {en: 'bi', ja: 'び'},
    bu: {en: 'bu', ja: 'ぶ'},
    be: {en: 'be', ja: 'べ'},
    bo: {en: 'bo', ja: 'ぼ'},
  },
  p: {
    pa: {en: 'pa', ja: 'ぱ'},
    pi: {en: 'pi', ja: 'ぴ'},
    pu: {en: 'pu', ja: 'ぷ'},
    pe: {en: 'pe', ja: 'ぺ'},
    po: {en: 'po', ja: 'ぽ'},
  },
};

const hiraganaContractions = {
  ky: {
    kya: {en: 'kya', ja: 'きゃ'},
    kyu: {en: 'kyu', ja: 'きゅ'},
    kyo: {en: 'kyo', ja: 'きょ'},
  },
  sh: {
    sha: {en: 'sha', ja: 'しゃ'},
    shu: {en: 'shu', ja: 'しゅ'},
    sho: {en: 'sho', ja: 'しょ'},
  },
  ch: {
    cha: {en: 'cha', ja: 'ちゃ'},
    chu: {en: 'chu', ja: 'ちゅ'},
    cho: {en: 'cho', ja: 'ちょ'},
  },
  ny: {
    nya: {en: 'nya', ja: 'にゃ'},
    nyu: {en: 'nyu', ja: 'にゅ'},
    nyo: {en: 'nyo', ja: 'にょ'},
  },
  hy: {
    hya: {en: 'hya', ja: 'ひゃ'},
    hyu: {en: 'hyu', ja: 'ひゅ'},
    hyo: {en: 'hyo', ja: 'ひょ'},
  },
  my: {
    mya: {en: 'mya', ja: 'みゃ'},
    myu: {en: 'myu', ja: 'みゅ'},
    myo: {en: 'myo', ja: 'みょ'},
  },
  ry: {
    rya: {en: 'rya', ja: 'りゃ'},
    ryu: {en: 'ryu', ja: 'りゅ'},
    ryo: {en: 'ryo', ja: 'りょ'},
  },
};

const hiraganaDakutenContractions = {
  gy: {
    gya: {en: 'gya', ja: 'ぎゃ'},
    gyu: {en: 'gyu', ja: 'ぎゅ'},
    gyo: {en: 'gyo', ja: 'ぎょ'},
  },
  jy: {
    jya: {en: 'jya', ja: 'じゃ'},
    jyu: {en: 'jyu', ja: 'じゅ'},
    jyo: {en: 'jyo', ja: 'じょ'},
  },
  by: {
    bya: {en: 'bya', ja: 'びゃ'},
    byu: {en: 'byu', ja: 'びゅ'},
    byo: {en: 'byo', ja: 'びょ'},
  },
  py: {
    pya: {en: 'pya', ja: 'ぴゃ'},
    pyu: {en: 'pyu', ja: 'ぴゅ'},
    pyo: {en: 'pyo', ja: 'ぴょ'},
  },
};

export {hiragana, hiraganaContractions, hiraganaDakuten, hiraganaDakutenContractions};
