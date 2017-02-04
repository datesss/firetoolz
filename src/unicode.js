const unicode = {
  uppercase: {
    a: ['A', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å'],
    b: ['ß'],
    c: ['Ç', 'Ɔ', 'Ƈ', '₵', '₡'],
    d: ['Ð'],
    e: ['E', 'È', 'É', 'É', 'Ê', 'Ë', 'Ɛ', 'Ḝ'],
    f: ['F', 'Ƒ', 'ƒ', 'Ḟ'],
    g: ['G', 'Ɠ', 'ɢ', '₲'],
    h: ['H', 'Ĥ', 'Ħ', 'ℍ', 'ℌ', 'ℋ'],
    i: ['I', 'Ì', 'Í', 'Î', 'Ï'],
    j: ['J', 'ĵ', 'ℐ'],
    k: ['K', 'ĸ', 'Ķ', 'Ϗ', '₭'],
    l: ['L', 'Ĺ', 'Ļ', 'Ľ', 'Ŀ', 'Ƚ', 'ℒ'],
    m: ['M', 'Ӎ', 'Ṁ', 'Ṃ', '₼'],
    n: ['N', 'Ñ', 'Ҋ', 'ℕ'],
    o: ['O', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ø', 'Ø', 'Ǿ', 'ः'],
    p: ['P', 'Þ', 'ℙ'],
    q: ['Q', 'Ɋ', 'Ԛ', 'ℚ'],
    r: ['R', 'Я', 'Ṟ'],
    s: ['S', 'Տ', '₴'],
    t: ['T', 'Ţ', 'Ť', 'Ŧ', 'Ṱ'],
    u: ['U', 'Ù', 'Ú', 'Û', 'Ü', 'Ʋ', 'Ʊ', 'Ų'],
    v: ['V', 'ʌ', 'Ѷ', 'Ѵ', 'Ỽ'],
    w: ['W', 'Ɯ', 'Ŵ', 'Ԝ'],
    x: ['×','Ẋ','Ẍ'],
    y: ['Ý', 'ƴ', 'Ƴ', 'Ɏ', 'Ÿ', 'ϓ', 'Ѱ','Ỿ','Ὕ'],
    z: ['Ƶ', 'Ź','Ẕ'],
  },

  lowercase: {
    a: ['a', 'à', 'á', 'â', 'å'],
    b: ['b'],
    c: ['c', 'ç'],
    d: ['d', 'ƌ'],
    e: ['e', 'è', 'é', 'ê', 'ë', 'Ə'],
    f: ['f'],
    g: ['g', 'ģ', 'ɠ'],
    h: ['h', 'ĥ', 'ħ'],
    i: ['i', 'ì', 'í', 'î', 'ï'],
    j: ['j', 'ĵ'],
    k: ['k', 'ķ'],
    l: ['l', 'l'],
    m: ['m', 'ɱ'],
    n: ['n', 'ɲ'],
    o: ['o'],
    p: ['p'],
    q: ['q', 'ɋ'],
    r: ['r'],
    s: ['s'],
    t: ['t'],
    u: ['u', 'ư'],
    v: ['v'],
    w: ['w'],
    x: ['x'],
    y: ['y', 'ƴ'],
    z: ['z', 'ƶ'],
  },
  weird: [
    'Ͼ', 'Ϟ', 'Φ', 'Ψ', 'ζ', 'Ϡ', 'ϡ', 'ξ', 'Ѩ', 'Ѫ', 'Ѿ', 'Ѽ', 'Հ', 'Ր', 'ժ', 'ի', 'լ', 'խ', '۝',
  'က', 'ခ', 'ဂ', 'ဃ', 'င', 'စ', 'ဆ', 'ဇ', 'ဈ', 'ဉ', 'ည', 'ဋ', 'ဌ', 'ဍ', 'ဎ', 'ဏ',
  'တ', 'ထ', 'ဒ', 'ဓ', 'န', 'ပ', 'ဖ', 'ဗ', 'ဘ', 'မ', 'ယ', 'ရ', 'လ', 'ဝ', 'သ', 'ဟ',
  'ဠ', 'အ', 'ဢ', 'ဣ', 'ဤ', 'ဥ', 'ဦ', 'ဧ', 'ဨ', 'ဩ', 'ဪ',
  'ူ', 'ဿ',
  '၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉', '၊', '။', '၌', '၍', '၎', '၏',
  'ၐ', 'ၑ', 'ၒ', 'ၓ', 'ၔ', 'ၕ',
  'Ⴀ', 'Ⴁ', 'Ⴂ', 'Ⴃ', 'Ⴄ', 'Ⴅ', 'Ⴆ', 'Ⴇ', 'Ⴈ', 'Ⴉ', 'Ⴊ', 'Ⴋ', 'Ⴌ', 'Ⴍ', 'Ⴎ', 'Ⴏ',
  'Ⴐ', 'Ⴑ', 'Ⴒ', 'Ⴓ', 'Ⴔ', 'Ⴕ', 'Ⴖ', 'Ⴗ', 'Ⴘ', 'Ⴙ', 'Ⴚ', 'Ⴛ', 'Ⴜ', 'Ⴝ', 'Ⴞ', 'Ⴟ',
  'Ⴠ', 'Ⴡ', 'Ⴢ', 'Ⴣ', 'Ⴤ', 'Ⴥ',
  'ა', 'ბ', 'გ', 'დ', 'ე', 'ვ', 'ზ', 'თ', 'ი', 'კ', 'ლ', 'მ', 'ნ', 'ო', 'პ', 'ჟ',
  'რ', 'ს', 'ტ', 'უ', 'ფ', 'ქ', 'ღ', 'ყ', 'შ', 'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 'ხ', 'ჯ',
  'ჰ', 'ჱ', 'ჲ', 'ჳ', 'ჴ', 'ჵ', 'ჶ', 'ჷ', 'ჸ', 'ჹ', 'ჺ', '჻', 'ჼ',
  'ᄀ', 'ᄁ', 'ᄂ', 'ᄃ', 'ᄄ', 'ᄅ', 'ᄆ', 'ᄇ', 'ᄈ', 'ᄉ', 'ᄊ', 'ᄋ', 'ᄌ', 'ᄍ', 'ᄎ', 'ᄏ',
  'ᄐ', 'ᄑ', 'ᄒ', 'ᄓ', 'ᄔ', 'ᄕ', 'ᄖ', 'ᄗ', 'ᄘ', 'ᄙ', 'ᄚ', 'ᄛ', 'ᄜ', 'ᄝ', 'ᄞ', 'ᄟ',
  'ᄠ', 'ᄡ', 'ᄢ', 'ᄣ', 'ᄤ', 'ᄥ', 'ᄦ', 'ᄧ', 'ᄨ', 'ᄩ', 'ᄪ', 'ᄫ', 'ᄬ', 'ᄭ', 'ᄮ', 'ᄯ',
  'ᄰ', 'ᄱ', 'ᄲ', 'ᄳ', 'ᄴ', 'ᄵ', 'ᄶ', 'ᄷ', 'ᄸ', 'ᄹ', 'ᄺ', 'ᄻ', 'ᄼ', 'ᄽ', 'ᄾ', 'ᄿ',
  'ᅀ', 'ᅁ', 'ᅂ', 'ᅃ', 'ᅄ', 'ᅅ', 'ᅆ', 'ᅇ', 'ᅈ', 'ᅉ', 'ᅊ', 'ᅋ', 'ᅌ', 'ᅍ', 'ᅎ', 'ᅏ',
  'ᅐ', 'ᅑ', 'ᅒ', 'ᅓ', 'ᅔ', 'ᅕ', 'ᅖ', 'ᅗ', 'ᅘ', 'ᅢ', 'ᅣ', 'ᅤ', 'ᅥ', 'ᅦ', 'ᅧ', 'ᅨ', 'ᅩ', 'ᅪ', 'ᅫ', 'ᅬ', 'ᅭ', 'ᅮ', 'ᅯ',
  'ᅰ', 'ᅱ', 'ᅲ', 'ᅳ', 'ᅴ', 'ᅵ', 'ᅶ', 'ᅷ', 'ᅸ', 'ᅹ', 'ᅺ', 'ᅻ', 'ᅼ', 'ᅽ', 'ᅾ', 'ᅿ',
  'ᆀ', 'ᆁ', 'ᆂ', 'ᆃ', 'ᆄ', 'ᆅ', 'ᆆ', 'ᆇ', 'ᆈ', 'ᆉ', 'ᆊ', 'ᆋ', 'ᆌ', 'ᆍ', 'ᆎ', 'ᆏ',
  'ᆐ', 'ᆑ', 'ᆒ', 'ᆓ', 'ᆔ', 'ᆕ', 'ᆖ', 'ᆗ', 'ᆘ', 'ᆙ', 'ᆚ', 'ᆛ', 'ᆜ', 'ᆝ', 'ᆞ', 'ᆟ',
  'ᆠ', 'ᆡ', 'ᆢ', '', 'ᆨ', 'ᆩ', 'ᆪ', 'ᆫ', 'ᆬ', 'ᆭ', 'ᆮ', 'ᆯ',
  'ᆰ', 'ᆱ', 'ᆲ', 'ᆳ', 'ᆴ', 'ᆵ', 'ᆶ', 'ᆷ', 'ᆸ', 'ᆹ', 'ᆺ', 'ᆻ', 'ᆼ', 'ᆽ', 'ᆾ', 'ᆿ',
  'ᇀ', 'ᇁ', 'ᇂ', 'ᇃ', 'ᇄ', 'ᇅ', 'ᇆ', 'ᇇ', 'ᇈ', 'ᇉ', 'ᇊ', 'ᇋ', 'ᇌ', 'ᇍ', 'ᇎ', 'ᇏ',
  'ᇐ', 'ᇑ', 'ᇒ', 'ᇓ', 'ᇔ', 'ᇕ', 'ᇖ', 'ᇗ', 'ᇘ', 'ᇙ', 'ᇚ', 'ᇛ', 'ᇜ', 'ᇝ', 'ᇞ', 'ᇟ',
  'ᇠ', 'ᇡ', 'ᇢ', 'ᇣ', 'ᇤ', 'ᇥ', 'ᇦ', 'ᇧ', 'ᇨ', 'ᇩ', 'ᇪ', 'ᇫ', 'ᇬ', 'ᇭ', 'ᇮ', 'ᇯ',
  'ᇰ', 'ᇱ', 'ᇲ', 'ᇳ', 'ᇴ', 'ᇵ', 'ᇶ', 'ᇷ', 'ᇸ', 'ᇹ',
  '૭','૫','ૄ','ઐ','ੌ','ਊ','ਏ','ૠ',' ૐ','ી',
  'લ','ஐ','இ','ஆ','୭','ୌ','ୈ','େ','ଥ','ଃ','ଂ','ଁ','ଐ','௮','௫','ஃ','ଲ','ః','ృ','ణ','ు','ೈ','೫','೮','ไ','๛','ำ','แ','ຳ','ື','ຣ','࿐','ཤ','༧','༆','༄','༃',
  '℀', '℁', 'ℂ', '℃', '℄', '℅', '℆', 'ℇ', '℈', '℉',
  'ↀ', 'ↁ', 'ↂ', 'Ↄ', 'ↄ', 'ↅ', 'ↆ↉',
  '←', '↑', '→', '↓', '↔', '↕', '↖', '↗', '↘', '↙', '↚', '↛', '↜', '↝', '↞', '↟',
  '↠', '↡', '↢', '↣', '↤', '↥', '↦', '↧', '↨', '↩', '↪', '↫', '↬', '↭', '↮', '↯',
  '↰', '↱', '↲', '↳', '↴', '↵', '↶', '↷', '↸', '↹', '↺', '↻', '↼', '↽', '↾', '↿',
  '⇀', '⇁', '⇂', '⇃', '⇄', '⇅', '⇆', '⇇', '⇈', '⇉', '⇊', '⇋', '⇌', '⇍', '⇎', '⇏',
  '⇐', '⇑', '⇒', '⇓', '⇔', '⇕', '⇖', '⇗', '⇘', '⇙', '⇚', '⇛', '⇜', '⇝', '⇞', '⇟',
  '⇠', '⇡', '⇢', '⇣', '⇤', '⇥', '⇦', '⇧', '⇨', '⇩', '⇪', '⇫', '⇬', '⇭', '⇮', '⇯',
  '⇰', '⇱', '⇲', '⇳', '⇴', '⇵', '⇶', '⇷', '⇸', '⇹', '⇺', '⇻', '⇼', '⇽', '⇾', '⇿',
  '∬', '∭', '∮', '∯',
  '∰', '∱', '∲', '∳',
  '⏀', '⏁', '⏂', '⏃', '⏄', '⏅', '⏆', '⏇', '⏈', '⏉', '⏊', '⏋', '⏌', '⏍',
  '▀', '▁', '▂', '▃', '▄', '▅', '▆', '▇', '█', '▉', '▊', '▋', '▌', '▍', '▎', '▏',
  '▐', '░', '▒', '▓', '▔', '▕', '▖', '▗', '▘', '▙', '▚', '▛', '▜', '▝', '▞', '▟',
  '■', '□', '▢', '▣', '▤', '▥', '▦', '▧', '▨', '▩', '▪', '▫', '▬', '▭', '▮', '▯',
  '▰', '▱', '▲', '△', '▴', '▵', '▶', '▷', '▸', '▹', '►', '▻', '▼', '▽', '▾', '▿',
  '◀', '◁', '◂', '◃', '◄', '◅', '◆', '◇', '◈', '◉', '◊', '○', '◌', '◍', '◎', '●',
  '◐', '◑', '◒', '◓', '◔', '◕', '◖', '◗', '◘', '◙', '◚', '◛', '◜', '◝', '◞', '◟',
  '◠', '◡', '◢', '◣', '◤', '◥', '◦', '◧', '◨', '◩', '◪', '◫', '◬', '◭', '◮', '◯',
  '◰', '◱', '◲', '◳', '◴', '◵', '◶', '◷', '◸', '◹', '◺', '◻', '◼', '◽', '◾', '◿',
  '─', '━', '│', '┃', '┄', '┅', '┆', '┇', '┈', '┉', '┊', '┋', '┌', '┍', '┎', '┏w',
  '┐', '┑', '┒', '┓', '└', '┕', '┖', '┗', '┘', '┙', '┚', '┛', '├', '┝', '┞', '┟',
  '┠', '┡', '┢', '┣', '┤', '┥', '┦', '┧', '┨', '┩', '┪', '┫', '┬', '┭', '┮', '┯',
  '┰', '┱', '┲', '┳', '┴', '┵', '┶', '┷', '┸', '┹', '┺', '┻', '┼', '┽', '┾', '┿',
  '╀', '╁', '╂', '╃', '╄', '╅', '╆', '╇', '╈', '╉', '╊', '╋', '╌', '╍', '╎', '╏',
  '═', '║', '╒', '╓', '╔', '╕', '╖', '╗', '╘', '╙', '╚', '╛', '╜', '╝', '╞', '╟',
  '╠', '╡', '╢', '╣', '╤', '╥', '╦', '╧', '╨', '╩', '╪', '╫', '╬', '╭', '╮', '╯',
  '╰', '╱', '╲', '╳', '╴', '╵', '╶', '╷', '╸', '╹', '╺', '╻', '╼', '╽', '╾', '╿',
  '⠀', '⠁', '⠂', '⠃', '⠄', '⠅', '⠆', '⠇', '⠈', '⠉', '⠊', '⠋', '⠌', '⠍', '⠎', '⠏',
  '⠐', '⠑', '⠒', '⠓', '⠔', '⠕', '⠖', '⠗', '⠘', '⠙', '⠚', '⠛', '⠜', '⠝', '⠞', '⠟',
  '⠠', '⠡', '⠢', '⠣', '⠤', '⠥', '⠦', '⠧', '⠨', '⠩', '⠪', '⠫', '⠬', '⠭', '⠮', '⠯',
  '⠰', '⠱', '⠲', '⠳', '⠴', '⠵', '⠶', '⠷', '⠸', '⠹', '⠺', '⠻', '⠼', '⠽', '⠾', '⠿',
  '⡀', '⡁', '⡂', '⡃', '⡄', '⡅', '⡆', '⡇', '⡈', '⡉', '⡊', '⡋', '⡌', '⡍', '⡎', '⡏',
  '⡐', '⡑', '⡒', '⡓', '⡔', '⡕', '⡖', '⡗', '⡘', '⡙', '⡚', '⡛', '⡜', '⡝', '⡞', '⡟',
  '⡠', '⡡', '⡢', '⡣', '⡤', '⡥', '⡦', '⡧', '⡨', '⡩', '⡪', '⡫', '⡬', '⡭', '⡮', '⡯',
  '⡰', '⡱', '⡲', '⡳', '⡴', '⡵', '⡶', '⡷', '⡸', '⡹', '⡺', '⡻', '⡼', '⡽', '⡾', '⡿',
  '⢀', '⢁', '⢂', '⢃', '⢄', '⢅', '⢆', '⢇', '⢈', '⢉', '⢊', '⢋', '⢌', '⢍', '⢎', '⢏',
  '⢐', '⢑', '⢒', '⢓', '⢔', '⢕', '⢖', '⢗', '⢘', '⢙', '⢚', '⢛', '⢜', '⢝', '⢞', '⢟',
  '⢠', '⢡', '⢢', '⢣', '⢤', '⢥', '⢦', '⢧', '⢨', '⢩', '⢪', '⢫', '⢬', '⢭', '⢮', '⢯',
  '⢰', '⢱', '⢲', '⢳', '⢴', '⢵', '⢶', '⢷', '⢸', '⢹', '⢺', '⢻', '⢼', '⢽', '⢾', '⢿',
  '⣀', '⣁', '⣂', '⣃', '⣄', '⣅', '⣆', '⣇', '⣈', '⣉', '⣊', '⣋', '⣌', '⣍', '⣎', '⣏',
  '⣐', '⣑', '⣒', '⣓', '⣔', '⣕', '⣖', '⣗', '⣘', '⣙', '⣚', '⣛', '⣜', '⣝', '⣞', '⣟',
  '⣠', '⣡', '⣢', '⣣', '⣤', '⣥', '⣦', '⣧', '⣨', '⣩', '⣪', '⣫', '⣬', '⣭', '⣮', '⣯',
  '⣰', '⣱', '⣲', '⣳', '⣴', '⣵', '⣶', '⣷', '⣸', '⣹', '⣺', '⣻', '⣼', '⣽', '⣾', '⣿',
  '⨀', '⨁', '⨂', '⨃', '⨄', '⨅', '⨆', '⨇', '⨈', '⨉', '⨊', '⨋', '⨌', '⨍', '⨎', '⨏',
  '⨐', '⨑', '⨒', '⨓', '⨔', '⨕', '⨖', '⨗', '⨘', '⨙', '⨚', '⨛', '⨜', '⨝', '⨞', '⨟',
  '⨠', '⨡', '⨢', '⨣', '⨤', '⨥', '⨦', '⨧', '⨨', '⨩', '⨪', '⨫', '⨬', '⨭', '⨮', '⨯',
  '⨰', '⨱', '⨲', '⨳', '⨴', '⨵', '⨶', '⨷', '⨸', '⨹', '⨺', '⨻', '⨼', '⨽', '⨾', '⨿',
  '⩀', '⩁', '⩂', '⩃', '⩄', '⩅', '⩆', '⩇', '⩈', '⩉', '⩊', '⩋', '⩌', '⩍', '⩎', '⩏',
  '⩐', '⩑', '⩒', '⩓', '⩔', '⩕', '⩖', '⩗', '⩘', '⩙', '⩚', '⩛', '⩜', '⩝', '⩞', '⩟',
  '⩠', '⩡', '⩢', '⩣', '⩤', '⩥', '⩦', '⩧', '⩨', '⩩', '⩪', '⩫', '⩬', '⩭', '⩮', '⩯',
  '⩰', '⩱', '⩲', '⩳', '⩴', '⩵', '⩶', '⩷', '⩸', '⩹', '⩺', '⩻', '⩼', '⩽', '⩾', '⩿',
  '⪀', '⪁', '⪂', '⪃', '⪄', '⪅', '⪆', '⪇', '⪈', '⪉', '⪊', '⪋', '⪌', '⪍', '⪎', '⪏',
  '⪐', '⪑', '⪒', '⪓', '⪔', '⪕', '⪖', '⪗', '⪘', '⪙', '⪚', '⪛', '⪜', '⪝', '⪞', '⪟',
  '⪠', '⪡', '⪢', '⪣', '⪤', '⪥', '⪦', '⪧', '⪨', '⪩', '⪪', '⪫', '⪬', '⪭', '⪮', '⪯',
  '⪰', '⪱', '⪲', '⪳', '⪴', '⪵', '⪶', '⪷', '⪸', '⪹', '⪺', '⪻', '⪼', '⪽', '⪾', '⪿',
  '⫀', '⫁', '⫂', '⫃', '⫄', '⫅', '⫆', '⫇', '⫈', '⫉', '⫊', '⫋', '⫌', '⫍', '⫎', '⫏',
  '⫐', '⫑', '⫒', '⫓', '⫔', '⫕', '⫖', '⫗', '⫘', '⫙', '⫚', '⫛', '⫝̸', '⫝', '⫞', '⫟',
  '⫠', '⫡', '⫢', '⫣', '⫤', '⫥', '⫦', '⫧', '⫨', '⫩', '⫪', '⫫', '⫬', '⫭', '⫮', '⫯',
  '⫰', '⫱', '⫲', '⫳', '⫴', '⫵', '⫶', '⫷', '⫸', '⫹', '⫺', '⫻', '⫼', '⫽', '⫾', '⫿',
  '㌀',	'㌁',	'㌂',	'㌃',	'㌄',	'㌅',	'㌆',	'㌇',	'㌈',	'㌉',	'㌊',	'㌋',	'㌌',	'㌍',	'㌎',	'㌏',
  '㌐',	'㌑',	'㌒',	'㌓',	'㌔',	'㌕',	'㌖',	'㌗',	'㌘',	'㌙',	'㌚',	'㌛',	'㌜',	'㌝',	'㌞',	'㌟',
  '㌠',	'㌡',	'㌢',	'㌣',	'㌤',	'㌥',	'㌦',	'㌧',	'㌨',	'㌩',	'㌪',	'㌫',	'㌬',	'㌭',	'㌮',	'㌯',
  '㌰',	'㌱',	'㌲',	'㌳',	'㌴',	'㌵',	'㌶',	'㌷',	'㌸',	'㌹',	'㌺',	'㌻',	'㌼',	'㌽',	'㌾',	'㌿',
  '㍀',	'㍁',	'㍂',	'㍃',	'㍄',	'㍅',	'㍆',	'㍇',	'㍈',	'㍉',	'㍊',	'㍋',	'㍌',	'㍍',	'㍎',	'㍏',
  '㍐',	'㍑',	'㍒',	'㍓',	'㍔',	'㍕',	'㍖',	'㍗',	'㍘',	'㍙',	'㍚',	'㍛',	'㍜',	'㍝',	'㍞',	'㍟',
  '㍠',	'㍡',	'㍢',	'㍣',	'㍤',	'㍥',	'㍦',	'㍧',	'㍨',	'㍩',	'㍪',	'㍫',	'㍬',	'㍭',	'㍮',	'㍯',
]
};


export default unicode;