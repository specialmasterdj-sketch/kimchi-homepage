/* Order Food 페이지(/order/)와 브랜드 페이지(/hururuk/ 등)를 그리는 코드 — 데이터는 assets/brands.js */
(function () {
  var $ = function (s) { return document.querySelector(s); };
  var esc = function (t) { return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var ROOT = '../';
  var brandOf = function (s) { return KM_BRANDS.filter(function (b) { return b.slug === s; })[0]; };
  var storeOf = function (s) { return KM_STORES.filter(function (x) { return x.slug === s; })[0]; };
  var money = function (v) { var n = parseFloat(v); return isNaN(n) ? '' : '$' + n.toFixed(2); };
  var telTxt = function (t) { var d = t.replace(/\D/g, '').slice(-10); return '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6); };
  var link = function (href, cls, label) {
    return href ? '<a class="oa ' + cls + '" href="' + esc(href) + '" target="_blank" rel="noopener">' + label + '</a>'
                : '<span class="oa ' + cls + ' off" title="Coming soon">' + label + '<small>Coming soon</small></span>';
  };
  /* 토스트·배달앱 링크가 하나라도 있으면 true — 없으면 페이지 전체에 Coming soon 표시 */
  var anyLive = KM_STORES.some(function (s) {
    if (s.toast) return true;
    return Object.keys(s.delivery || {}).some(function (k) { var d = s.delivery[k]; return d.doordash || d.ubereats || d.grubhub; });
  });
  if (!anyLive) {
    var h1 = document.querySelector('.ofhero h1');
    if (h1) h1.insertAdjacentHTML('beforebegin', '<span class="soonpill">🕒 Online ordering — Coming soon</span>');
  }

  /* 매장 하나 × 브랜드 하나 주문 버튼들 */
  function orderButtons(st, b, withMenu) {
    var d = (st.delivery || {})[b.slug] || {};
    return '<div class="oacts">' +
      (st.toast ? link(st.toast, 'main', '🛍️ Order pickup — no fees')
                : '<span class="oa main off" title="Coming soon">🕒 Online pickup — Coming soon</span>') +
      link(d.doordash, 'dd', 'DoorDash') + link(d.ubereats, 'ue', 'Uber Eats') +
      link(d.grubhub, 'gh', 'Grubhub') +
      (withMenu ? '<a class="oa" href="' + ROOT + esc(b.page) + '">See menu →</a>' : '<span></span>') +
    '</div>';
  }

  function pickStore(def) {
    var q = (location.search.match(/[?&]store=([\w-]+)/) || [])[1];
    var saved; try { saved = localStorage.getItem('km_order_store'); } catch (e) {}
    return storeOf(q) || storeOf(saved) || storeOf(def) || KM_STORES[0];
  }
  function saveStore(s) { try { localStorage.setItem('km_order_store', s); } catch (e) {} }

  /* ── /order/ ── */
  function orderPage() {
    var cur = pickStore();
    var chips = $('#stPick'), info = $('#stInfo'), cart = $('#oneCart'), grid = $('#bGrid');
    var hash = location.hash.slice(1);
    function render() {
      chips.innerHTML = KM_STORES.map(function (s) {
        return '<button type="button" class="stchip" data-s="' + s.slug + '" aria-pressed="' + (s === cur) + '">' + esc(s.name) + (s.area ? '<small>' + esc(s.area) + '</small>' : '') + '</button>';
      }).join('');
      info.innerHTML = '📍 ' + esc(cur.addr) + ' · <a href="tel:' + esc(cur.tel) + '">' + telTxt(cur.tel) + '</a> · <a href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Kimchi Mart ' + cur.addr) + '" target="_blank" rel="noopener">Directions</a> · Open daily 8AM–10PM';
      cart.className = 'onecart' + (cur.toast ? '' : ' soon');
      cart.innerHTML = cur.toast
        ? '<div><b>🧺 One cart, every brand</b><p>Sushi + chicken + ramyun + bakery in a single order and a single pickup at ' + esc(cur.name) + '. No delivery-app fees.</p></div><a class="btn btn-g" href="' + esc(cur.toast) + '" target="_blank" rel="noopener">Start my order →</a>'
        : '<div><b>🕒 Coming soon — online ordering at ' + esc(cur.name) + '</b><p>Pickup and DoorDash / Uber Eats / Grubhub ordering for every brand is on the way. Until then, visit us in store or call <a href="tel:' + esc(cur.tel) + '" style="color:var(--green);font-weight:700">' + telTxt(cur.tel) + '</a>.</p></div>';
      grid.innerHTML = cur.brands.map(brandOf).filter(Boolean).map(function (b) {
        return '<article class="bcard" id="' + b.slug + '" style="--bc:' + b.color + '">' +
          '<div class="pic"><img src="' + ROOT + esc(b.img) + '" alt="' + esc(b.name) + '"' + (b.contain ? ' class="contain"' : '') + ' loading="lazy"></div>' +
          '<div class="bd"><div class="nm">' + esc(b.name) + '<small>' + esc(b.ko) + '</small></div><p class="tg">' + esc(b.tag) + '</p>' +
          orderButtons(cur, b, true) + '</div></article>';
      }).join('');
      if (hash && document.getElementById(hash)) { document.getElementById(hash).scrollIntoView({ block: 'center' }); hash = ''; }
    }
    chips.addEventListener('click', function (e) {
      var c = e.target.closest('.stchip'); if (!c) return;
      cur = storeOf(c.dataset.s); saveStore(cur.slug);
      history.replaceState(null, '', '?store=' + cur.slug); render();
    });
    render();
  }

  /* ── 브랜드 페이지 ── */
  function brandPage(slug) {
    var b = brandOf(slug); if (!b) return;
    document.documentElement.style.setProperty('--bc', b.color);
    var items = (KM_MENUS[slug] || []).map(function (m) { return Object.assign({}, m, { img: m.img ? ROOT + m.img : '' }); });
    var cat = 'All', tabs = $('#mTabs'), grid = $('#mGrid');
    function render() {
      var cats = ['All'].concat(items.map(function (i) { return i.cat; }).filter(function (c, k, a) { return c && a.indexOf(c) === k; }));
      tabs.innerHTML = items.length > 4 ? cats.map(function (c) {
        var n = c === 'All' ? items.length : items.filter(function (i) { return i.cat === c; }).length;
        return '<button type="button" class="mtab" data-c="' + esc(c) + '" aria-pressed="' + (c === cat) + '">' + esc(c) + '<small>' + n + '</small></button>';
      }).join('') : '';
      var list = items.filter(function (i) { return cat === 'All' || i.cat === cat; });
      grid.innerHTML = list.length ? list.map(function (i) {
        return '<div class="mcard"><div class="pic">' + (i.img ? '<img src="' + esc(i.img) + '" alt="' + esc(i.en) + '" loading="lazy">' : '') +
          (i.badge ? '<span class="bdg">' + esc(i.badge === 'TOPPICK' ? 'Top pick' : i.badge) + '</span>' : '') + '</div>' +
          '<div class="bd"><div class="ct">' + esc(i.cat) + '</div><div class="nm">' + esc(i.en) + (i.raw ? ' *' : '') + '</div><div class="ko">' + esc(i.ko) + '</div>' +
          (i.desc ? '<div class="ds">' + esc(i.desc) + '</div>' : '') + (i.price ? '<div class="pr">' + money(i.price) + '</div>' : '') + '</div></div>';
      }).join('') : '<p class="mempty">Full menu coming soon — visit any Kimchi Mart to see today\'s selection.</p>';
    }
    tabs.addEventListener('click', function (e) { var t = e.target.closest('.mtab'); if (t) { cat = t.dataset.c; render(); } });
    render();
    if (slug === 'hururuk') {
      fetch(ROOT + 'assets/menu-hururuk.json').then(function (r) { return r.json(); }).then(function (list) {
        items = list.map(function (i) { return Object.assign({}, i, { img: i.img ? ROOT + 'img/brands/hururuk/' + i.img : '' }); }); render();
      }).catch(function () {});
    }
    $('#where').innerHTML = KM_STORES.filter(function (s) { return s.brands.indexOf(slug) >= 0; }).map(function (s) {
      return '<div class="store"><div class="city">' + esc(s.name) + (s.area ? ' <small style="color:var(--mute);font-weight:600;font-size:.85rem">' + esc(s.area) + '</small>' : '') + '</div>' +
        '<div class="addr">' + esc(s.addr) + ' · <a href="tel:' + esc(s.tel) + '" style="color:var(--green);font-weight:700">' + telTxt(s.tel) + '</a></div>' + orderButtons(s, b, false) + '</div>';
    }).join('');
  }

  var page = document.body.dataset.page;
  if (page === 'order') orderPage(); else if (page) brandPage(page);
  document.querySelectorAll('#menu a').forEach(function (a) { a.addEventListener('click', function () { $('#menu').classList.remove('open'); }); });
})();
