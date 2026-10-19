/* ═══ 김치마트 음식 브랜드 · 매장 · 주문 링크 — 이 파일 하나만 고치면 Order Food 페이지와 브랜드 페이지가 같이 바뀝니다 ═══
   링크 넣는 법: 빈 칸 '' 안에 주소를 붙여 넣으면 버튼이 자동으로 나타납니다. 비어 있으면 "Coming soon" 으로 보입니다.
   - toast      : 토스트 온라인 주문 페이지 주소 (한 매장의 모든 브랜드를 한 장바구니로)
   - delivery   : 브랜드별 도어대쉬 / 우버이츠 / 그럽허브 가게 주소
   - brands     : 그 매장에 있는 브랜드 (없는 브랜드는 지우기)                                                    */
var KM_BRANDS = [
  { slug: 'sushi-king', name: 'SUSHI KING', ko: '스시킹', color: '#e8412c', page: 'sushi-king/', img: 'img/food/km-sushi-case.jpg',
    tag: 'Rolls, nigiri, sashimi & poke — rolled fresh every morning.', search: 'sushi near me' },
  { slug: 'hururuk', name: 'RAMYUN HURURUK', ko: '라면 후루룩', color: '#e4572e', page: 'hururuk/', img: 'img/brands/hururuk/001.jpg',
    tag: 'Korean ramyun bar — 50+ ramyuns, cooked your way with up to 5 toppings.', search: 'ramen near me' },
  { slug: 'bbq-chicken', name: 'BBQ CHICKEN', ko: '비비큐 치킨', color: '#c1121f', page: 'bbq-chicken/', img: 'img/food/dakgangjeong.jpg',
    tag: 'Crispy Korean fried chicken — sweet, spicy and double-fried.', search: 'korean fried chicken near me' },
  { slug: 'bibib', name: 'BIBIB', ko: '비빕', color: '#2a9d8f', page: 'bibib/', img: 'img/food/bibimbap.jpg',
    tag: 'Korean kitchen — bibimbap, bulgogi, banchan and home-style plates.', search: 'korean food near me' },
  { slug: 'pang', name: 'PANG', ko: '팡', color: '#f08a24', page: 'pang/', img: 'img/brands/pang-badge.png', contain: true,
    tag: 'Bakery & cafe — fresh-baked breads, pastries and drinks.', search: 'bakery near me' }
];

var KM_STORES = [
  { slug: 'fort-lauderdale', name: 'Fort Lauderdale', area: 'Las Olas', addr: '510 NW 7th Ave, Fort Lauderdale, FL 33311', tel: '+17542160106',
    toast: '', brands: ['sushi-king', 'hururuk', 'bbq-chicken', 'bibib', 'pang'],
    delivery: { 'sushi-king': { doordash: '', ubereats: '', grubhub: '' }, hururuk: { doordash: '', ubereats: '', grubhub: '' }, 'bbq-chicken': { doordash: '', ubereats: '', grubhub: '' }, bibib: { doordash: '', ubereats: '', grubhub: '' }, pang: { doordash: '', ubereats: '', grubhub: '' } } },
  { slug: 'pembroke-pines', name: 'Pembroke Pines', area: '', addr: '11230 Pines Blvd, Pembroke Pines, FL 33026', tel: '+17542174919',
    toast: '', brands: ['sushi-king', 'hururuk', 'bbq-chicken', 'bibib', 'pang'],
    delivery: { 'sushi-king': { doordash: '', ubereats: '', grubhub: '' }, hururuk: { doordash: '', ubereats: '', grubhub: '' }, 'bbq-chicken': { doordash: '', ubereats: '', grubhub: '' }, bibib: { doordash: '', ubereats: '', grubhub: '' }, pang: { doordash: '', ubereats: '', grubhub: '' } } },
  { slug: 'miami', name: 'Miami', area: 'Palmetto Bay', addr: '15355 S Dixie Hwy, Miami, FL 33157', tel: '+13059645083',
    toast: '', brands: ['sushi-king', 'bbq-chicken', 'bibib', 'pang'], delivery: {} },
  { slug: 'hollywood', name: 'Hollywood', area: '', addr: '2420 N Dixie Hwy, Hollywood, FL 33020', tel: '+17542107965',
    toast: '', brands: ['sushi-king', 'bbq-chicken', 'bibib', 'pang'], delivery: {} },
  { slug: 'coral-springs', name: 'Coral Springs', area: '', addr: '2693 N University Dr, Coral Springs, FL 33065', tel: '+19546889437',
    toast: '', brands: ['sushi-king', 'bbq-chicken', 'bibib', 'pang'], delivery: {} }
];

/* 브랜드 페이지 대표 메뉴 (라면 후루룩은 assets/menu-hururuk.json 에서 자동으로 읽음 — 토스트 메뉴표와 같은 데이터) */
var KM_MENUS = {
  'bbq-chicken': [
    { cat: 'Chicken', en: 'Korean Fried Chicken', ko: '후라이드 치킨', img: 'img/food/dakgangjeong.jpg' },
    { cat: 'Chicken', en: 'Sweet & Spicy Dakgangjeong', ko: '닭강정', img: 'img/food/dakgangjeong.jpg' }
  ],
  bibib: [
    { cat: 'Rice', en: 'Bibimbap', ko: '비빔밥', img: 'img/food/bibimbap.jpg' },
    { cat: 'Plates', en: 'Beef Bulgogi', ko: '불고기', img: 'img/food/bulgogi.jpg' },
    { cat: 'Plates', en: 'Japchae', ko: '잡채', img: 'img/food/japchae.jpg' },
    { cat: 'Soup', en: 'Kimchi Jjigae', ko: '김치찌개', img: 'img/food/kimchi-jjigae.jpg' },
    { cat: 'Soup', en: 'Sundubu Jjigae', ko: '순두부찌개', img: 'img/food/sundubu.jpg' },
    { cat: 'Snacks', en: 'Tteokbokki', ko: '떡볶이', img: 'img/food/tteokbokki.jpg' },
    { cat: 'Snacks', en: 'Haemul Pajeon', ko: '해물파전', img: 'img/food/pajeon.jpg' },
    { cat: 'Banchan', en: 'Banchan', ko: '반찬', img: 'img/food/km-banchan.jpg' }
  ],
  pang: []
};
