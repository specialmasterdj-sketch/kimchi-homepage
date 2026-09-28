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
    { src: './img/food/gimbap.jpg',       name: 'Fresh kimbap, rolled daily' },
    { src: './img/food/bulgogi.jpg',      name: 'Bulgogi, marinated in-house' },
    { src: './img/food/dakgangjeong.jpg', name: 'Sweet & crispy dakgangjeong' },
    { src: './img/food/bibimbap.jpg',     name: 'Bibimbap bowls' },
    { src: './img/food/samgyeopsal.jpg',  name: 'Pork belly, cut to order' }
  ],

  // Google 별점 — 숫자를 넣으면 매장 카드와 상단에 표시됨 (null 이면 "리뷰 보기" 링크만)
  // ⚠ 실제 Google 지도에 나오는 숫자를 그대로 넣을 것
  google: { rating: null, count: null },

  stores: [
    { id: 'miami',   city: 'Miami',           page: './miamikimchimarket',     addr: '15355 S Dixie Hwy<br>Miami, FL 33157<br><small>Palmetto Bay</small>', q: '15355 S Dixie Hwy Miami FL 33157',        tel: '+13059645083', telTxt: '(305) 964-5083', photo: './img/hero.jpg',            rating: null, reviews: null },
    { id: 'pembroke',city: 'Pembroke Pines',  page: './pembroke-pine-fl-sales', addr: '11230 Pines Blvd<br>Pembroke Pines, FL 33026',                        q: '11230 Pines Blvd Pembroke Pines FL 33026', tel: '+17542174919', telTxt: '(754) 217-4919', photo: './img/store/g2-produce.jpg', rating: null, reviews: null },
    { id: 'hollywood',city:'Hollywood',       page: './hollywood-fl-sales',    addr: '2420 N Dixie Hwy<br>Hollywood, FL 33020',                             q: '2420 N Dixie Hwy Hollywood FL 33020',      tel: '+17542107965', telTxt: '(754) 210-7965', photo: './img/store/storefront.jpg', rating: null, reviews: null },
    { id: 'coral',   city: 'Coral Springs',   page: './coral-springs-fl',      addr: '2693 N University Dr<br>Coral Springs, FL 33065',                     q: '2693 N University Dr Coral Springs FL 33065', tel: '+19546889437', telTxt: '(954) 688-9437', photo: './img/store/g1-kimchi.jpg', rating: null, reviews: null },
    { id: 'ftl',     city: 'Fort Lauderdale', page: './fort-lauderdale-fl',    addr: '510 NW 7th Ave<br>Fort Lauderdale, FL 33311',                         q: '510 NW 7th Ave Fort Lauderdale FL 33311',  tel: '+17542160106', telTxt: '(754) 216-0106', photo: './img/store/g4-meat.jpg',   rating: null, reviews: null }
  ],

  // 이번 주 세일 — 월요일마다 교체. today:true 는 "오늘만" 티커에도 뜸
  // ⚠ 지금 가격은 예시(샘플)임 — 실제 전단 가격으로 바꿀 것
  saleEnds: 'Sunday',
  sale: [
    { e: '🍜', name: 'Shin Ramyun',               size: '5-pack',            was: 6.49,  now: 4.99,  today: true },
    { e: '🥟', name: 'Bibigo Mandu',              size: '1.5 lb bag',        was: 9.99,  now: 6.99,  today: true },
    { e: '🥬', name: 'Napa Cabbage',              size: 'per lb',            was: 1.29,  now: 0.69,  today: true },
    { e: '🥓', name: 'Pork Belly (Samgyeopsal)',  size: 'per lb · cut fresh',was: 6.99,  now: 4.99,  today: true },
    { e: '🍚', name: 'Calrose Rice',              size: '15 lb bag',         was: 19.99, now: 14.99 },
    { e: '🌶️', name: 'Gochujang',                 size: '1.1 lb tub',        was: 7.49,  now: 4.99 },
    { e: '🍐', name: 'Korean Asian Pear',         size: 'each',              was: 2.49,  now: 1.49,  today: true },
    { e: '🍘', name: 'Shrimp Crackers',           size: '2.64 oz',           was: 2.99,  now: 1.79 }
  ],

  // 오늘의 반찬 — 사진 파일 이름과 가격만 바꾸면 됨. 매일 날짜 기준으로 자동 순환
  // (매장별로 고정하고 싶으면 stores 의 id 를 byStore 에 넣기)
  dishes: [
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
  byStore: {}  // 예: { hollywood: [0,3,4,5,1] }  ← dishes 번호(0부터)
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

  /* 오늘만 티커 */
  var todays = KM.sale.filter(function (x) { return x.today; });
  var tk = $('#tickerTrack');
  if (tk && todays.length) {
    var one = todays.map(function (x) {
      return '<span class="it">' + x.e + ' ' + x.name + ' <b>' + money(x.now) + '</b><s>' + money(x.was) + '</s></span>';
    }).join('');
    tk.innerHTML = one + one + one + one; // 끊김 없이 돌게 복제
  } else if (tk) { tk.closest('.ticker').remove(); }

  /* 세일 상품 카드 */
  var pg = $('#saleGrid');
  if (pg) pg.innerHTML = KM.sale.map(function (x) {
    var pct = Math.round((1 - x.now / x.was) * 100);
    return '<a class="pcard rv" href="https://kimchimartshop.com" target="_blank" rel="noopener">' +
      '<div class="pic">' + (x.img ? '<img src="' + x.img + '" alt="" loading="lazy">' : x.e) +
      '<span class="off">-' + pct + '%</span>' + (x.today ? '<span class="today1">TODAY ONLY</span>' : '') + '</div>' +
      '<div class="bd"><div class="nm">' + x.name + '</div><div class="sz">' + x.size + '</div>' +
      '<div class="pp"><span class="now">' + money(x.now) + '</span><span class="was">' + money(x.was) + '</span></div>' +
      '<span class="add">Add to pickup order →</span></div></a>';
  }).join('');

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
  function pickFor(storeId) {
    if (KM.byStore[storeId]) return KM.byStore[storeId].map(function (i) { return KM.dishes[i]; });
    var s = seed + storeId.length * 13 + storeId.charCodeAt(0);
    var idx = KM.dishes.map(function (_, i) { return i; });
    for (var i = idx.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; var j = Math.floor(s / 233280 * (i + 1)); var t = idx[i]; idx[i] = idx[j]; idx[j] = t; }
    return idx.slice(0, 5).map(function (i) { return KM.dishes[i]; });
  }
  var tabs = $('#storeTabs'), grid = $('#todayGrid');
  function renderToday(id) {
    var list = pickFor(id);
    grid.innerHTML = list.map(function (d, i) {
      return '<article class="dcard' + (i === 0 ? ' big' : '') + '">' +
        '<img src="' + d.img + '" alt="' + d.en + '" loading="lazy">' +
        '<span class="badge' + (i === 0 ? ' hot' : '') + '">' + (i === 0 ? '🔥 CHEF’S PICK' : 'MADE TODAY') + '</span>' +
        '<button class="share" type="button" aria-label="Share ' + d.en + '" data-n="' + d.en + '">↗</button>' +
        '<div class="inf"><div class="ko">' + d.ko + '</div><h3>' + d.en + '</h3><div class="pr">' + d.price + '</div></div></article>';
    }).join('');
    [].forEach.call(tabs.children, function (b) { b.setAttribute('aria-selected', b.dataset.id === id ? 'true' : 'false'); });
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
    renderToday(KM.stores[0].id);
    var dl = $('#todayDate');
    if (dl) dl.textContent = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', weekday: 'long', month: 'long', day: 'numeric' }).format(new Date());
  }

  /* 매장 카드 */
  var mapUrl = function (q) { return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Kimchi Mart ' + q); };
  var stars = function (r) { var f = Math.round(r); return '★★★★★'.slice(0, f) + '☆☆☆☆☆'.slice(0, 5 - f); };
  var cards = $('#storeCards');
  if (cards) {
    cards.insertAdjacentHTML('afterbegin', KM.stores.map(function (s) {
      var rt = s.rating
        ? '<span class="st">' + stars(s.rating) + '</span><b>' + s.rating.toFixed(1) + '</b> (' + (s.reviews || 0).toLocaleString() + ' Google reviews)'
        : '<span class="st">★</span><a href="' + mapUrl(s.q) + '" target="_blank" rel="noopener">Read Google reviews</a>';
      return '<div class="store rv"><div class="ph"><img src="' + s.photo + '" alt="Kimchi Mart ' + s.city + '" loading="lazy">' +
        '<span class="open' + (isOpen ? '' : ' no') + '"><i></i>' + openTxt + '</span></div>' +
        '<div class="inner"><a class="city citylink" href="' + s.page + '">' + s.city + ' →</a>' +
        '<div class="rt">' + rt + '</div>' +
        '<div class="addr">' + s.addr + '</div>' +
        '<a class="tel" href="tel:' + s.tel + '">' + s.telTxt + '</a>' +
        '<div class="acts"><a class="a-map" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(s.q) + '" target="_blank" rel="noopener">Directions</a>' +
        '<a class="a-call" href="tel:' + s.tel + '">Call</a></div></div></div>';
    }).join(''));
  }
  var tr = $('#trustBar');
  if (tr) {
    if (KM.google.rating) {
      tr.innerHTML = '<div class="g">' + KM.google.rating.toFixed(1) + '</div><div><div class="st">' + stars(KM.google.rating) + '</div><small>' +
        KM.google.count.toLocaleString() + ' Google reviews across our stores</small></div>' +
        '<div><div class="g">6</div><small>stores, Miami → West Palm</small></div><div><div class="g">365</div><small>days a year, 8AM–10PM</small></div>';
    } else tr.remove();
  }

  /* 멤버십 계산기 */
  var rng = $('#spend'), plan = 'k2';
  function calc() {
    var m = +rng.value, rate = plan === 'k1' ? .05 : .10, yr = m * 12 * rate;
    $('#spendOut').innerHTML = '$' + m.toLocaleString() + ' <small>/ month</small>';
    $('#saveBig').textContent = '$' + Math.round(yr).toLocaleString();
    $('#saveSub').textContent = 'saved every year with ' + plan.toUpperCase() + ' (' + (rate * 100) + '% off)';
    $('#saveEq').textContent = '≈ $' + (m * rate).toFixed(0) + ' back every month · $' + (m * rate * 12 / 52).toFixed(2) + ' a week';
    $('#calcRes').className = 'res ' + plan;
  }
  if (rng) {
    rng.addEventListener('input', calc);
    $('#planSeg').addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return; plan = b.dataset.p;
      [].forEach.call(this.children, function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      rng.max = plan === 'k1' ? 1500 : 5000;
      if (+rng.value > +rng.max) rng.value = rng.max;
      $('#tickMax').textContent = '$' + (+rng.max).toLocaleString();
      calc();
    });
    calc();
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
