/* ═══════════════════════════════════════════════════════════
   김치마트 홈 — 매주/매일 바꾸는 내용은 전부 여기 KM 에서 수정
   (HTML 은 안 건드려도 됨)
   ═══════════════════════════════════════════════════════════ */
var KM = {
  // 영업시간 (미국 동부시간 기준, 24시간제)
  hours: { open: 8, close: 22 },

  // 히어로 영상: img/hero.mp4 를 넣으면 자동으로 영상이 재생되고,
  // 없으면 아래 사진들이 천천히 줌되며 넘어감
  heroVideo: './img/hero.mp4',
  heroSlides: [
    { src: './img/food/km-sushi-case.jpg',      name: 'Sushi rolled fresh every morning · all 5 stores' },
    { src: './img/food/km-poke-bowl.jpg',       name: 'Sushi King poke bowls' },
    { src: './img/food/km-sashimi-platter.jpg', name: 'Sashimi & nigiri platters' },
    { src: './img/food/km-hot-meals.jpg',       name: 'Hot meals from our deli' },
    { src: './img/food/km-banchan.jpg',         name: 'Banchan made in-store' }
  ],

  // ★ 세일 · 반찬 · 별점은 직원용 구글 시트에서 읽어옴 (구글 드라이브 "김치마트 홈페이지 관리" 폴더)
  //   시트를 못 읽으면 아래 기본값이 그대로 보임
  sheets: {
    sale:    '1Po9cCWjpoBlLGuZLgO9F_6LhpfnFVUSHqq7ZMGju-F4',
    banchan: '1W-rYKRiMoBFzIh8-yKcq0M6bq_P0cdf3OKlrXU_C3gs',
    stores:  '1nTALTUQpouuZgpWPgfXB0wnkuhXJj7Tl_kfpaqzKJbA'
  },

  stores: [
    { id: 'miami',   city: 'Miami',           page: './miamikimchimarket',     addr: '15355 S Dixie Hwy<br>Miami, FL 33157<br><small>Palmetto Bay</small>', q: '15355 S Dixie Hwy Miami FL 33157',        tel: '+13059645083', telTxt: '(305) 964-5083', photo: './img/store/collage-miami.jpg',   rating: null, reviews: null },
    { id: 'pembroke',city: 'Pembroke Pines',  page: './pembroke-pine-fl-sales', addr: '11230 Pines Blvd<br>Pembroke Pines, FL 33026',                        q: '11230 Pines Blvd Pembroke Pines FL 33026', tel: '+17542174919', telTxt: '(754) 217-4919', photo: './img/store/collage-pembroke.jpg', rating: null, reviews: null },
    { id: 'hollywood',city:'Hollywood',       page: './hollywood-fl-sales',    addr: '2420 N Dixie Hwy<br>Hollywood, FL 33020',                             q: '2420 N Dixie Hwy Hollywood FL 33020',      tel: '+17542107965', telTxt: '(754) 210-7965', photo: './img/store/collage-hollywood.jpg', rating: null, reviews: null },
    { id: 'coral',   city: 'Coral Springs',   page: './coral-springs-fl',      addr: '2693 N University Dr<br>Coral Springs, FL 33065',                     q: '2693 N University Dr Coral Springs FL 33065', tel: '+19546889437', telTxt: '(954) 688-9437', photo: './img/store/collage-coral.webp', rating: null, reviews: null },
    { id: 'ftl',     city: 'Fort Lauderdale', page: './fort-lauderdale-fl',    addr: '510 NW 7th Ave<br>Fort Lauderdale, FL 33311',                         q: '510 NW 7th Ave Fort Lauderdale FL 33311',  tel: '+17542160106', telTxt: '(754) 216-0106', photo: './img/store/collage-ftl.webp', rating: null, reviews: null }
  ],

  // 이번 주 세일 — 시트 "1. 주간세일"에서 채워짐. 비어 있으면 세일 섹션과 TODAY ONLY 띠는 숨김
  saleEnds: 'Sunday',
  sale: [],

  // 오늘의 반찬 — 시트 "2. 오늘의 반찬"에서 채워짐 (아래는 시트를 못 읽을 때 기본값)
  // 첫 번째 줄(스시)은 항상 보이고, 나머지는 날짜별로 돌아감
  dishes: [
    { img: './img/food/km-sushi-case.jpg',   en: 'Fresh Sushi Rolls',  ko: '스시 롤',    price: 'Made every morning' },
    { img: './img/food/km-poke-bowl.jpg',     en: 'Poke Bowl',          ko: '포케 볼',    price: 'Sushi King' },
    { img: './img/food/km-sashimi-platter.jpg', en: 'Sashimi Platter',  ko: '모둠 회',    price: 'Sushi King' },
    { img: './img/food/km-chirashi-tray.jpg', en: 'Chirashi Tray',      ko: '회덮밥',     price: 'Sushi King' },
    { img: './img/food/km-samgak.jpg',        en: 'Samgak Kimbap',      ko: '삼각김밥',   price: 'Grab & go' },
    { img: './img/food/japchae.jpg',       en: 'Japchae',            ko: '잡채',       price: '$8.99' },
    { img: './img/food/gimbap.jpg',        en: 'Kimbap',             ko: '김밥',       price: '$6.99' },
    { img: './img/food/tteokbokki.jpg',    en: 'Tteokbokki',         ko: '떡볶이',     price: '$7.49' },
    { img: './img/food/bulgogi.jpg',       en: 'Beef Bulgogi',       ko: '불고기',     price: '$12.99' },
    { img: './img/food/dakgangjeong.jpg',  en: 'Dakgangjeong',       ko: '닭강정',     price: '$10.99' },
    { img: './img/food/pajeon.jpg',        en: 'Seafood Pajeon',     ko: '해물파전',   price: '$8.49' },
    { img: './img/food/kimchi-jjigae.jpg', en: 'Kimchi Jjigae',      ko: '김치찌개',   price: '$9.99' },
    { img: './img/food/sundubu.jpg',       en: 'Sundubu Jjigae',     ko: '순두부찌개', price: '$9.99' },
    { img: './img/food/bibimbap.jpg',      en: 'Bibimbap Bowl',      ko: '비빔밥',     price: '$10.49' }
  ],

  // SNS 계정
  social: [
    { k: 'ig', name: 'Instagram', handle: '@kimchimartmiami', url: 'https://www.instagram.com/kimchimartmiami' },
    { k: 'yt', name: 'YouTube',   handle: '@kimchimarttv',    url: 'https://www.youtube.com/@kimchimarttv' },
    { k: 'tt', name: 'TikTok',    handle: '@kimchimartmiami', url: 'https://www.tiktok.com/@kimchimartmiami' },
    { k: 'tt', name: 'TikTok',    handle: '@kimchimarttv',    url: 'https://www.tiktok.com/@kimchimarttv' }
  ],
  // 홈에 보여줄 YouTube 영상 — 영상 주소 youtube.com/shorts/XXXX 의 XXXX 만 넣으면 됨
  videos: [
    { id: 'Dwmh_IKyDGs', title: 'This Donut Has the Creamiest Filling 🤤🍩' },
    { id: 'ydXpRhAPkG4', title: 'The Sound of Boba Just Hits Different 🧋' },
    { id: 'r-lMcMaAL0Y', title: 'Trying to Save Money at Kimchi Mart 🛒' },
    { id: 'XzdmIbfLGXk', title: 'Visit Kimchi Mart Like a Korean Convenience Store 🇰🇷' }
  ]
};

/* ───────── 아래는 동작 코드 ───────── */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var money = function (n) { return '$' + n.toFixed(2); };
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 미국 동부시간 현재 시각
  function etNow() {
    var p = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: 'numeric', weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric', hour12: false }).formatToParts(new Date());
    var o = {}; p.forEach(function (x) { o[x.type] = x.value; });
    return { h: (+o.hour % 24) + (+o.minute) / 60, wd: o.weekday, key: o.year + '-' + o.month + '-' + o.day };
  }
  var now = etNow();
  var isOpen = now.h >= KM.hours.open && now.h < KM.hours.close;
  var fmtH = function (h) { return (h % 12 || 12) + (h < 12 ? 'AM' : 'PM'); };
  var openTxt = isOpen ? 'Open now · until ' + fmtH(KM.hours.close) : 'Closed · opens ' + fmtH(KM.hours.open);

  /* 히어로 */
  var kicker = $('#heroOpen');
  if (kicker) { kicker.lastChild.textContent = isOpen ? 'All 5 stores open now · until 10PM' : 'Closed now · all stores open at 8AM'; if (!isOpen) kicker.classList.add('closed'); }

  var media = $('#heroMedia'), cap = $('#heroDish');
  var slides = KM.heroSlides.map(function (s, i) {
    var im = new Image(); im.src = s.src; im.alt = ''; im.className = 'slide' + (i === 0 ? ' on' : '');
    if (i > 0) im.loading = 'lazy';
    media.appendChild(im); return im;
  });
  var si = 0, timer;
  function showSlide(i) { slides[si].classList.remove('on'); si = i; void slides[si].offsetWidth; slides[si].classList.add('on'); if (cap) cap.textContent = KM.heroSlides[si].name; }
  if (cap) cap.textContent = KM.heroSlides[0].name;
  if (!reduce) timer = setInterval(function () { showSlide((si + 1) % slides.length); }, 5500);

  if (KM.heroVideo && !reduce) {
    var v = document.createElement('video');
    v.muted = true; v.loop = true; v.autoplay = true; v.playsInline = true; v.setAttribute('playsinline', ''); v.preload = 'auto';
    v.addEventListener('canplay', function () { v.classList.add('on'); clearInterval(timer); if (cap) cap.style.display = 'none'; v.play().catch(function(){}); }, { once: true });
    v.addEventListener('error', function () { v.remove(); }, true);
    var src = document.createElement('source'); src.src = KM.heroVideo; src.type = 'video/mp4';
    src.addEventListener('error', function () { v.remove(); });
    v.appendChild(src); media.appendChild(v);
  }

  /* 공통 도우미 */
  var esc = function (t) { return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  // 구글 드라이브 공유 링크 → 바로 보이는 이미지 주소
  function photoUrl(u) {
    u = String(u || '').trim(); if (!u) return '';
    var m = u.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=\w+&)?id=|thumbnail\?id=)([\w-]{20,})/);
    return m ? 'https://drive.google.com/thumbnail?id=' + m[1] + '&sz=w1200' : u;
  }
  function show(el, on) { if (el) el.style.display = on ? '' : 'none'; }

  /* 오늘만 티커 + 세일 카드 */
  var tk = $('#tickerTrack'), pg = $('#saleGrid');
  function renderSale() {
    var list = KM.sale;
    var todays = list.filter(function (x) { return x.today; });
    show(tk && tk.closest('.ticker'), todays.length > 0);
    show($('#sale'), list.length > 0);
    show(document.querySelector('#menu a[href="#sale"]'), list.length > 0);
    if (tk && todays.length) {
      var one = todays.map(function (x) {
        return '<span class="it">' + esc(x.e) + ' ' + esc(x.name) + ' <b>' + money(x.now) + '</b>' + (x.was ? '<s>' + money(x.was) + '</s>' : '') + '</span>';
      }).join('');
      tk.innerHTML = one + one + one + one; // 끊김 없이 돌게 복제
    }
    if (pg) pg.innerHTML = list.map(function (x) {
      var pct = x.was > x.now ? Math.round((1 - x.now / x.was) * 100) : 0;
      return '<a class="pcard" href="https://kimchimartshop.com" target="_blank" rel="noopener">' +
        '<div class="pic">' + (x.img ? '<img src="' + esc(x.img) + '" alt="" loading="lazy">' : esc(x.e || '🛒')) +
        (pct ? '<span class="off">-' + pct + '%</span>' : '') + (x.today ? '<span class="today1">TODAY ONLY</span>' : '') + '</div>' +
        '<div class="bd"><div class="nm">' + esc(x.name) + '</div><div class="sz">' + esc(x.size) + '</div>' +
        '<div class="pp"><span class="now">' + money(x.now) + '</span>' + (x.was ? '<span class="was">' + money(x.was) + '</span>' : '') + '</div>' +
        '<span class="add">Add to pickup order →</span></div></a>';
    }).join('');
  }

  // 세일 종료(일요일 자정)까지 남은 시간
  var cd = $('#saleCount');
  if (cd) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var left = (7 - days.indexOf(now.wd)) % 7; // 일요일이면 0
    var hrs = 24 - now.h;
    var d = left, h = Math.floor(hrs), m = Math.floor((hrs - h) * 60);
    cd.innerHTML = 'Ends ' + KM.saleEnds + ' in <b>' + d + 'd</b><b>' + h + 'h</b><b>' + m + 'm</b>';
  }

  /* 오늘의 반찬 */
  var seed = now.key.split('-').reduce(function (a, b) { return a * 31 + +b; }, 7);
  var todayYMD = now.key.split('-').map(Number).join('-');
  function sameDay(d) { var p = String(d || '').match(/(\d{4})\D(\d{1,2})\D(\d{1,2})/); return p && [+p[1], +p[2], +p[3]].join('-') === todayYMD; }
  function pickFor(storeId) {
    var mine = KM.dishes.filter(function (d) { return (!d.store || d.store === 'all' || d.store === storeId) && (!d.date || sameDay(d.date)); });
    // 날짜나 매장이 지정된 "오늘의 특별" 메뉴 먼저, 그다음 첫 줄(스시) 고정, 나머지는 날짜별로 섞기
    var special = mine.filter(function (d) { return d.date || (d.store && d.store !== 'all'); });
    var rest = mine.filter(function (d) { return special.indexOf(d) < 0; });
    var pin = rest.shift();
    var s = seed + storeId.length * 13 + storeId.charCodeAt(0);
    for (var i = rest.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; var j = Math.floor(s / 233280 * (i + 1)); var t = rest[i]; rest[i] = rest[j]; rest[j] = t; }
    var out = special.slice(0, 1).concat(pin ? [pin] : [], special.slice(1), rest);
    return out.slice(0, 5);
  }
  var tabs = $('#storeTabs'), grid = $('#todayGrid'), curStore = KM.stores[0].id;
  function renderToday(id) {
    curStore = id || curStore;
    var list = pickFor(curStore);
    grid.innerHTML = list.map(function (d, i) {
      return '<article class="dcard' + (i === 0 ? ' big' : '') + '">' +
        '<img src="' + esc(d.img) + '" alt="' + esc(d.en) + '" loading="lazy">' +
        '<span class="badge' + (i === 0 ? ' hot' : '') + '">' + (i === 0 ? '🔥 CHEF’S PICK' : 'MADE TODAY') + '</span>' +
        '<button class="share" type="button" aria-label="Share ' + esc(d.en) + '" data-n="' + esc(d.en) + '">↗</button>' +
        '<div class="inf"><div class="ko">' + esc(d.ko) + '</div><h3>' + esc(d.en) + '</h3><div class="pr">' + esc(d.price) + '</div></div></article>';
    }).join('');
    [].forEach.call(tabs.children, function (b) { b.setAttribute('aria-selected', b.dataset.id === curStore ? 'true' : 'false'); });
  }
  if (tabs && grid) {
    tabs.innerHTML = KM.stores.map(function (s) { return '<button class="tab" role="tab" data-id="' + s.id + '">' + s.city + '</button>'; }).join('');
    tabs.addEventListener('click', function (e) { var b = e.target.closest('.tab'); if (b) renderToday(b.dataset.id); });
    grid.addEventListener('click', function (e) {
      var b = e.target.closest('.share'); if (!b) return;
      var data = { title: 'Kimchi Mart — ' + b.dataset.n, text: 'Today at Kimchi Mart: fresh ' + b.dataset.n + ' 🥢', url: location.href.split('#')[0] + '#prepared' };
      if (navigator.share) navigator.share(data).catch(function () {});
      else if (navigator.clipboard) navigator.clipboard.writeText(data.text + ' ' + data.url).then(function () { b.textContent = '✓'; setTimeout(function () { b.textContent = '↗'; }, 1500); });
    });
    var dl = $('#todayDate');
    if (dl) dl.textContent = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', weekday: 'long', month: 'long', day: 'numeric' }).format(new Date());
  }

  /* 매장 카드 + 별점 */
  var mapUrl = function (q) { return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Kimchi Mart ' + q); };
  var stars = function (r) { var f = Math.round(r); return '★★★★★'.slice(0, f) + '☆☆☆☆☆'.slice(0, 5 - f); };
  var cards = $('#storeCards'), tr = $('#trustBar');
  function renderStores() {
    if (cards) {
      [].slice.call(cards.querySelectorAll('.store:not(.soon)')).forEach(function (n) { n.remove(); });
      cards.insertAdjacentHTML('afterbegin', KM.stores.map(function (s) {
        var rt = s.rating
          ? '<span class="st">' + stars(s.rating) + '</span><b>' + s.rating.toFixed(1) + '</b> (' + (s.reviews || 0).toLocaleString() + ' Google reviews)'
          : '<span class="st">★</span><a href="' + mapUrl(s.q) + '" target="_blank" rel="noopener">Read Google reviews</a>';
        return '<div class="store"><div class="ph"><img src="' + esc(s.photo) + '" alt="Kimchi Mart ' + s.city + '" loading="lazy">' +
          '<span class="open' + (isOpen ? '' : ' no') + '"><i></i>' + openTxt + '</span></div>' +
          '<div class="inner"><a class="city citylink" href="' + s.page + '">' + s.city + ' →</a>' +
          '<div class="rt">' + rt + '</div>' +
          '<div class="addr">' + s.addr + '</div>' +
          '<a class="tel" href="tel:' + s.tel + '">' + s.telTxt + '</a>' +
          '<div class="acts"><a class="a-map" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(s.q) + '" target="_blank" rel="noopener">Directions</a>' +
          '<a class="a-call" href="tel:' + s.tel + '">Call</a></div></div></div>';
      }).join(''));
    }
    if (tr) {
      // 매장별 별점을 리뷰 수로 가중 평균
      var rated = KM.stores.filter(function (s) { return s.rating && s.reviews; });
      var cnt = rated.reduce(function (a, s) { return a + s.reviews; }, 0);
      if (cnt) {
        var avg = rated.reduce(function (a, s) { return a + s.rating * s.reviews; }, 0) / cnt;
        tr.innerHTML = '<div class="g">' + avg.toFixed(1) + '</div><div><div class="st">' + stars(avg) + '</div><small>' +
          cnt.toLocaleString() + ' Google reviews across our stores</small></div>' +
          '<div><div class="g">6</div><small>stores, Miami → West Palm</small></div><div><div class="g">365</div><small>days a year, 8AM–10PM</small></div>';
      }
      show(tr, cnt > 0);
    }
  }

  /* 구글 시트 읽기 — 직원이 시트를 고치면 여기로 들어옴 */
  function parseCSV(text) {
    var rows = [], row = [], f = '', q = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (q) { if (c === '"') { if (text[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
      else if (c === '"') q = true;
      else if (c === ',') { row.push(f); f = ''; }
      else if (c === '\n' || c === '\r') { if (c === '\r' && text[i + 1] === '\n') i++; row.push(f); rows.push(row); row = []; f = ''; }
      else f += c;
    }
    if (f !== '' || row.length) { row.push(f); rows.push(row); }
    var head = (rows.shift() || []).map(function (h) { return h.trim().toLowerCase(); });
    return rows.filter(function (r) { return r.some(function (v) { return v.trim(); }); }).map(function (r) {
      var o = {}; head.forEach(function (h, k) { o[h] = (r[k] || '').trim(); }); return o;
    });
  }
  var yes = function (v) { return /^(y|yes|o|ok|true|1|✓|✔|승인)$/i.test(String(v || '').trim()); };
  var num = function (v) { var n = parseFloat(String(v || '').replace(/[^0-9.]/g, '')); return isNaN(n) ? 0 : n; };
  function applySheets(data) {
    if (data.sale) KM.sale = data.sale.filter(function (r) { return yes(r.approved) && r.name && num(r.now); }).map(function (r) {
      return { e: r.emoji, name: r.name, size: r.size, was: num(r.was), now: num(r.now), today: yes(r.today_only), img: photoUrl(r.photo_url) };
    });
    if (data.banchan) {
      var ds = data.banchan.filter(function (r) { return yes(r.approved) && r.name_en && r.photo_url; }).map(function (r) {
        return { store: (r.store || 'all').toLowerCase(), date: r.date, en: r.name_en, ko: r.name_ko, price: r.price, img: photoUrl(r.photo_url) };
      });
      if (ds.length) KM.dishes = ds;
    }
    if (data.stores) data.stores.forEach(function (r) {
      var s = KM.stores.filter(function (x) { return x.id === (r.id || '').toLowerCase(); })[0]; if (!s) return;
      if (num(r.google_rating)) { s.rating = num(r.google_rating); s.reviews = num(r.google_reviews); }
      if (r.photo_url) s.photo = photoUrl(r.photo_url);
    });
  }
  function renderAll() { renderSale(); if (grid) renderToday(); renderStores(); }

  // 1) 지난번에 읽은 시트 내용으로 먼저 그림 (없으면 기본값)  2) 최신 시트를 읽어서 다시 그림
  var CK = 'km_sheets_v1';
  try { var cached = JSON.parse(localStorage.getItem(CK) || 'null'); if (cached) applySheets(cached); } catch (e) {}
  renderAll();
  var keys = Object.keys(KM.sheets || {});
  Promise.all(keys.map(function (k) {
    // export=csv 사용 (gviz 는 숫자·글자가 섞인 칸의 글자를 지워버림)
    return fetch('https://docs.google.com/spreadsheets/d/' + KM.sheets[k] + '/export?format=csv&t=' + Date.now())
      .then(function (r) { if (!r.ok) throw 0; return r.text(); })
      .then(function (t) { if (/^\s*</.test(t)) throw 0; return [k, parseCSV(t)]; })
      .catch(function () { return [k, null]; });
  })).then(function (res) {
    var data = {}; res.forEach(function (p) { if (p[1]) data[p[0]] = p[1]; });
    if (!Object.keys(data).length) return; // 시트를 못 읽으면 그대로 둠
    try { localStorage.setItem(CK, JSON.stringify(data)); } catch (e) {}
    applySheets(data); renderAll();
    if (fCard && fCard.dataset.id) showStore(KM.stores.filter(function (s) { return s.id === fCard.dataset.id; })[0]);
  });
  /* 멤버십 계산기 */
  var rng = $('#spend'), plan = 'k2';
  function calc() {
    var m = +rng.value, rate = plan === 'k1' ? .05 : .10;
    $('#spendOut').textContent = '$' + m.toLocaleString();
    $('#saveBig').textContent = '$' + Math.round(m * 12 * rate).toLocaleString();
    $('#saveLbl').textContent = 'Potential annual savings at ' + (rate * 100) + '%';
    rng.style.setProperty('--p', ((m - rng.min) / (rng.max - rng.min) * 100) + '%');
  }
  if (rng) {
    rng.addEventListener('input', calc);
    $('#planSeg').addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return; plan = b.dataset.p;
      [].forEach.call(this.children, function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      calc();
    });
    calc();
  }

  /* 멤버십 왼쪽 사진 돌아가기 */
  var mp = $('#memPhotos');
  if (mp) {
    var pics = mp.querySelectorAll('img'), dots = $('#memDots'), mi = 0;
    dots.innerHTML = [].map.call(pics, function (_, i) { return '<button type="button" aria-label="Photo ' + (i + 1) + '"' + (i ? '' : ' class="on"') + '></button>'; }).join('');
    function go(i) { pics[mi].classList.remove('on'); dots.children[mi].classList.remove('on'); mi = i; pics[mi].classList.add('on'); dots.children[mi].classList.add('on'); }
    dots.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) go([].indexOf.call(dots.children, b)); });
    if (!reduce) setInterval(function () { go((mi + 1) % pics.length); }, 4000);
  }
  /* 매장 찾기 — 도시 이름 / ZIP / 내 위치로 가장 가까운 매장 */
  var GEO = { miami: [25.626, -80.341], pembroke: [26.007, -80.299], hollywood: [26.033, -80.146], coral: [26.266, -80.253], ftl: [26.129, -80.152] };
  var NEAR = { // 주변 동네 → 매장
    miami: 'miami kendall pinecrest palmetto bay cutler bay homestead south miami coral gables doral hialeah westchester',
    pembroke: 'pembroke pines miramar weston davie cooper city southwest ranches',
    hollywood: 'hollywood hallandale dania aventura north miami sunny isles',
    coral: 'coral springs parkland tamarac margate coconut creek pompano boca raton deerfield',
    ftl: 'fort lauderdale ft lauderdale lauderhill plantation sunrise wilton manors oakland park lauderdale lakes'
  };
  var fCard = $('#fCard'), fMsg = $('#fMsg'), fCity = $('#fCity');
  function km(a, b) { var r = Math.PI / 180, x = (b[1] - a[1]) * r * Math.cos((a[0] + b[0]) / 2 * r), y = (b[0] - a[0]) * r; return Math.sqrt(x * x + y * y) * 6371; }
  function showStore(s, dist) {
    fCard.dataset.id = s.id;
    var plain = s.addr.replace(/<small>.*?<\/small>/, '').replace(/<br>/g, ', ').replace(/,\s*$/, '');
    fCard.innerHTML = '<div class="fpic"><img src="' + esc(s.photo) + '" alt="Inside Kimchi Mart ' + s.city + '"></div><div class="finfo"><div class="fmeta' + (isOpen ? '' : ' no') + '"><i></i>' + openTxt + (dist ? ' · ' + (dist / 1.609).toFixed(1) + ' mi away' : '') + '</div>' +
      '<h3>' + s.city + '</h3><div class="fa">' + s.addr + '</div><a class="ftel" href="tel:' + s.tel + '">' + s.telTxt + '</a>' +
      '<div class="ftags"><span>OPEN DAILY 8–10</span><span>EBT / SNAP</span><span>FRESH PREPARED FOOD</span></div>' +
      '<div class="fbtns"><button type="button" class="fb-copy" data-a="Kimchi Mart, ' + plain + '">Copy address</button>' +
      '<a class="fb-dir" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(s.q) + '" target="_blank" rel="noopener">Directions</a>' +
      '<a class="fb-call" href="tel:' + s.tel + '">Call</a></div>' +
      '<p class="fnote"><a href="' + s.page + '" style="text-decoration:underline">Store page, weekly ad &amp; departments →</a></p></div>';
    [].forEach.call(fCity.children, function (b) { b.setAttribute('aria-pressed', b.dataset.id === s.id ? 'true' : 'false'); });
  }
  function nearest(pt) {
    var best = null, bd = 1e9;
    KM.stores.forEach(function (s) { var d = km(pt, GEO[s.id]); if (d < bd) { bd = d; best = s; } });
    showStore(best, bd);
    fMsg.textContent = bd > 60 ? 'Our closest store is ' + Math.round(bd / 1.609) + ' miles away — West Palm Beach opens late 2026!' : 'Closest store: ' + best.city;
  }
  if (fCard) {
    fCity.innerHTML = KM.stores.map(function (s) { return '<button type="button" data-id="' + s.id + '">' + s.city + '</button>'; }).join('');
    fCity.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) { fMsg.textContent = ''; showStore(KM.stores.filter(function (s) { return s.id === b.dataset.id; })[0]); } });
    fCard.addEventListener('click', function (e) {
      var b = e.target.closest('.fb-copy'); if (!b || !navigator.clipboard) return;
      navigator.clipboard.writeText(b.dataset.a).then(function () { b.textContent = '✓ Copied'; setTimeout(function () { b.textContent = 'Copy address'; }, 1600); });
    });
    $('#fForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var q = $('#fQ').value.trim().toLowerCase(); if (!q) return;
      if (/^\d{5}$/.test(q)) {
        fMsg.textContent = 'Searching…';
        fetch('https://api.zippopotam.us/us/' + q).then(function (r) { if (!r.ok) throw 0; return r.json(); })
          .then(function (d) { var p = d.places[0]; nearest([+p.latitude, +p.longitude]); })
          .catch(function () { fMsg.textContent = 'We couldn’t find that ZIP code — try a city name.'; });
        return;
      }
      if (/west palm|palm beach|boynton|lake worth|jupiter|wellington/.test(q)) { fMsg.textContent = 'West Palm Beach opens late Nov / early Dec 2026 — closest today:'; showStore(KM.stores.filter(function (s) { return s.id === 'coral'; })[0]); return; }
      for (var id in NEAR) if (NEAR[id].indexOf(q) > -1 || q.indexOf(id) > -1 || NEAR[id].split(' ').some(function (w) { return w.length > 3 && q.indexOf(w) > -1; })) {
        fMsg.textContent = 'Closest store:'; showStore(KM.stores.filter(function (s) { return s.id === id; })[0]); return;
      }
      fMsg.textContent = 'Try a ZIP code (e.g. 33020) or tap a store below.';
    });
    $('#fLoc').addEventListener('click', function () {
      if (!navigator.geolocation) return;
      fMsg.textContent = 'Finding you…';
      navigator.geolocation.getCurrentPosition(function (p) { nearest([p.coords.latitude, p.coords.longitude]); }, function () { fMsg.textContent = 'Location is off — enter a city or ZIP instead.'; }, { timeout: 8000 });
    });
    showStore(KM.stores.filter(function (s) { return s.id === 'hollywood'; })[0]);
  }

  /* SNS — 계정 버튼 + YouTube 영상 (누르면 그 자리에서 재생) */
  var ICON = {
    ig: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.3" fill="currentColor"/></svg>',
    yt: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor"/><path d="M10 9l5 3-5 3z" fill="#16211b"/></svg>',
    tt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M14 3c.5 2.8 2.3 4.4 5 4.6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>'
  };
  var sl = $('#socLinks');
  if (sl) sl.innerHTML = KM.social.map(function (s) {
    return '<a class="soc soc-' + s.k + '" href="' + s.url + '" target="_blank" rel="noopener">' + ICON[s.k] + '<span><b>' + s.name + '</b>' + s.handle + '</span></a>';
  }).join('');
  var yr = $('#ytRow');
  if (yr) {
    yr.innerHTML = KM.videos.map(function (v) {
      return '<button type="button" class="yt rv" data-id="' + v.id + '" aria-label="Play: ' + v.title + '">' +
        '<img src="https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg" alt="" loading="lazy">' +
        '<span class="play">▶</span><span class="yt-t">' + v.title + '</span></button>';
    }).join('');
    yr.addEventListener('click', function (e) {
      var b = e.target.closest('.yt'); if (!b || b.classList.contains('on')) return;
      b.classList.add('on');
      b.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + b.dataset.id + '?autoplay=1&playsinline=1&rel=0" title="Kimchi Mart video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    });
  }

  /* 스크롤 등장 + 픽업 타임라인 */
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add(e.target.classList.contains('timeline') ? 'go' : 'in'); io.unobserve(e.target); } });
    }, { threshold: .15 });
    document.querySelectorAll('.rv,.timeline').forEach(function (el) { io.observe(el); });
  } else document.querySelectorAll('.rv').forEach(function (el) { el.classList.add('in'); });
  document.querySelectorAll('.timeline').forEach(function (el) { if (reduce) el.classList.add('go'); });

  // 메뉴 누르면 모바일 메뉴 닫기
  document.querySelectorAll('#menu a').forEach(function (a) {
    a.addEventListener('click', function () { $('#menu').classList.remove('open'); });
  });
})();
