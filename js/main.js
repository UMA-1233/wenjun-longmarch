/* ========================================
   文军长征 — 浙江大学西迁文旅路线
   JavaScript 交互逻辑与数据
   ======================================== */

// ===== 地点数据 =====
const locationData = {
  hangzhou: {
    name: "杭州",
    number: "起点",
    period: "1936年4月 — 1937年11月",
    color: "#1A3A6B",
    story: "1936年4月，竺可桢出任浙江大学校长，以\"求是\"为校训，广延名师，锐意改革，使浙大面貌焕然一新。然而好景不长，1937年7月抗日战争全面爆发，8月淞沪会战打响，日军飞机多次轰炸杭州。11月，日军在金山卫登陆，杭州危在旦夕。竺可桢果断决定：将一年级新生先迁至浙西天目山，随后全校西迁。临行前，师生们含泪告别美丽的求是校园，踏上了漫漫的西迁征途。",
    sites: [
      { name: "浙江大学玉泉校区（旧址）", desc: "浙大最早的校区之一，见证了竺可桢校长治校与西迁决策的历史。校园内保留有大量近代建筑群，是全国重点文物保护单位。" },
      { name: "求是书院旧址", desc: "浙江大学前身，创建于1897年，是中国近代史上效法西方学制最早的一所高等学府。现为浙江省文物保护单位。" },
      { name: "浙大西迁历史陈列馆（杭州校区）", desc: "展示了浙大西迁的珍贵历史照片、文献和实物，是了解文军长征全貌的重要场所。" }
    ],
    highlights: ["浙大校园近代建筑群", "求是书院旧址", "竺可桢铜像", "西迁历史陈列馆", "西湖文化景观"]
  },

  xtianmu: {
    name: "西天目山",
    number: "第一站",
    period: "1937年9月 — 1937年11月",
    color: "#2D5B8E",
    story: "1937年9月，浙大将一年级新生约200人迁至浙西天目山禅源寺办学。这里山深林密，远离战火，师生们借寺院为教室，以山林为课堂，在袅袅梵音中开始了战时的大学生活。竺可桢亲自来到这里，为学生讲授\"大学生之责任\"。然而仅两个月后，随着战局急转直下，天目山也不再安全，师生们不得不踏上更远的西迁之路。这是文军长征的第一步，也是浙大\"流亡办学\"的起点。",
    sites: [
      { name: "禅源寺", desc: "浙大一年级在此借寺办学，禅源寺始建于明代，是天目山最大的寺院。现寺内设有浙大西迁纪念展览。" },
      { name: "天目山抗战遗址", desc: "天目山区是浙西抗日游击区的重要组成部分，留存有多处抗战时期的军事工事和纪念设施。" },
      { name: "天目山自然保护区", desc: "国家级自然保护区，浙大师生曾在此进行大量的生物学、生态学野外考察，开创了中国近代生态学研究的先河。" }
    ],
    highlights: ["禅源寺西迁办学旧址", "天目山抗战纪念设施", "古柳杉群落", "竺可桢考察路线", "森林生态教育基地"]
  },

  jiande: {
    name: "建德",
    number: "第二站",
    period: "1937年11月 — 1937年12月",
    color: "#2D5B8E",
    story: "1937年11月，苏州、嘉兴相继沦陷，日军直逼杭州。竺可桢决定将全校迁至浙西建德（今建德市梅城镇）。师生们乘船沿富春江而上，携带着珍贵的图书仪器，在严子陵钓台畔短暂停留。在建德，浙大借用林场、教堂和民房坚持上课。但建德也并非久留之地——随着南京沦陷、日军沿江西进，浙大师生在建德仅停留一个多月，便又匆匆启程，向江西方向转移。在极其仓促的转移中，大量图书设备损失严重。",
    sites: [
      { name: "梅城古镇（严州古城）", desc: "建德古府城所在地，浙大曾在此借用城墙内的学堂和民房办学。古镇保留了大量明清建筑和古城墙遗址。" },
      { name: "严子陵钓台", desc: "东汉隐士严光垂钓之处，浙大师生途经此地时曾在此短暂休整，竺可桢在日记中详细记载了此段经历。" },
      { name: "新安江水电站", desc: "新中国成立后建设的中国第一座自行设计的大型水电站，与千岛湖相邻，体现了中国人民自力更生的精神。" }
    ],
    highlights: ["严州古城墙遗址", "富春江山水风光", "严子陵钓台", "浙大办学旧址遗迹", "梅城古镇明清建筑"]
  },

  yushan: {
    name: "玉山",
    number: "第三站（途经）",
    period: "1937年12月底 — 1938年1月",
    color: "#5B7BAE",
    story: "1937年12月底，浙大师生从建德出发，辗转抵达江西玉山。此时正值隆冬，天降大雪，交通断绝，师生们被困于玉山风雪中长达十余天。竺可桢每日奔走于铁路部门和地方政府之间，千方百计筹集车皮和给养。在他的不懈努力下，终于打通了浙赣铁路的运输通道，使全校师生得以继续南行。这段冰天雪地中的艰难跋涉，成为文军长征中最为艰苦的篇章之一。",
    sites: [
      { name: "玉山古城", desc: "始建于唐代的古城，保留了部分明清时期的街巷和建筑格局。浙大师生曾在此避雪暂住。" },
      { name: "三清山", desc: "位于玉山北部，世界自然遗产地。抗战时期，这里也是浙赣地区抗日后方的重要屏障。" },
      { name: "浙赣铁路遗址（玉山段）", desc: "浙赣铁路是抗战初期东南沿海向内地转移的重要交通命脉，浙大师生正是沿此线路完成了最艰难的一段转移。" }
    ],
    highlights: ["玉山古城街巷", "三清山世界遗产", "浙赣铁路历史遗迹", "怀玉山红色革命根据地", "玉山抗战纪念设施"]
  },

  jian: {
    name: "吉安",
    number: "第四站",
    period: "1938年1月 — 1938年6月",
    color: "#8B4570",
    story: "1938年初，浙大师生历经艰辛终于抵达江西吉安。江西省政府将吉安县青原山的净居寺及周围房舍拨给浙大使用。在青原山下，浙大师生利用寺庙和祠堂作为教室和宿舍，迅速恢复了教学秩序。这一时期，浙大还增设了师范学院，扩大了办学规模。吉安地处井冈山脚下，是一片充满革命传统的热土。师生们在此深受红色文化感染，更加坚定了教育救国的信念。半年后，因战局变化和办学条件限制，浙大再次迁往附近的泰和县。",
    sites: [
      { name: "青原山净居寺", desc: "始建于唐代的千年古刹，浙大在此办学半年之久。寺内至今保留有浙大办学时期的历史痕迹和纪念牌匾。" },
      { name: "井冈山革命根据地", desc: "中国革命的摇篮，距吉安仅60公里。毛泽东、朱德在此创建了中国第一个农村革命根据地，是全国最重要的红色教育基地之一。" },
      { name: "吉安革命烈士纪念馆", desc: "纪念在革命斗争中牺牲的吉安籍烈士，展示了吉安作为革命老区的辉煌历史。" }
    ],
    highlights: ["青原山浙大办学旧址", "井冈山革命圣地", "净居寺古建筑群", "吉安红色革命纪念馆", "庐陵文化生态园"]
  },

  taihe: {
    name: "泰和",
    number: "第五站",
    period: "1938年2月 — 1938年10月",
    color: "#8B4570",
    story: "1938年春，浙大迁至江西泰和县，借用大原书院（即白鹭洲书院）旧址办学。泰和是一座历史悠久的文化名城，白鹭洲书院更是宋代以来的著名学府。浙大师生在这座千年书院中讲授现代科学，古今交融，蔚为壮观。在此期间，竺可桢积极推动学术研究，浙大的科研水平有了显著提高。师生们还利用课余时间深入农村，开展社会调查和抗日宣传。1938年秋，日军逼近江西，浙大不得不再次踏上西迁之路，经湖南前往广西。",
    sites: [
      { name: "白鹭洲书院", desc: "创建于南宋淳祐元年(1241年)的千年学府，与白鹿洞书院、鹅湖书院并称江西三大书院。浙大在此办学期间，竺可桢曾多次在此演讲。现为全国重点文物保护单位。" },
      { name: "泰和革命烈士陵园", desc: "纪念在革命战争中牺牲的泰和籍烈士，是当地重要的爱国主义教育基地。" },
      { name: "浙江大学西迁旧址（泰和）", desc: "浙大在泰和办学的遗迹已被列为文物保护单位，当地建有纪念标志和说明牌。" }
    ],
    highlights: ["白鹭洲书院古建筑群", "浙大办学纪念标志", "泰和古城风貌", "赣江风光", "红色革命纪念设施"]
  },

  yishan: {
    name: "宜山",
    number: "第六站",
    period: "1938年11月 — 1940年1月",
    color: "#A04050",
    story: "1938年秋，浙大从泰和出发，经湖南长沙、桂林，辗转抵达广西宜山（今宜州市）。1938年11月1日，竺可桢在宜山开学典礼上发表了著名演讲《王阳明与大学生的典范》，以王阳明的\"求是\"精神、遇险不畏精神、艰苦卓绝精神激励全校师生，并将\"求是\"正式确立为浙大校训。在宜山期间，浙大虽然条件极为艰苦——教室是用竹子和茅草搭建的棚子，但师生们的学术研究热情不减，理学院、农学院等都取得了重要的科研成果。1940年初，因广西战局紧张，浙大决定再次西迁至贵州。",
    sites: [
      { name: "浙大西迁宜山办学旧址", desc: "位于今河池市宜州区，保留有浙大当年办学的部分建筑和遗址，当地已设立纪念标志。" },
      { name: "刘三姐故乡", desc: "宜山是壮族歌仙刘三姐的故乡，下枧河畔风光秀丽，是广西重要的文化旅游目的地。" },
      { name: "百色起义纪念园", desc: "位于广西百色市，纪念1929年邓小平领导的百色起义。虽距宜山较远，但同属广西红色旅游重要节点。" }
    ],
    highlights: ["浙大办学旧址纪念地", "刘三姐文化景区", "下枧河田园风光", "会仙山摩崖石刻", "壮族民俗风情"]
  },

  zunyi: {
    name: "遵义",
    number: "终点（一）",
    period: "1940年2月 — 1946年秋",
    color: "#C41E3A",
    story: "1940年2月，浙大师生历经两年多的颠沛流离，终于抵达贵州遵义。遵义是中国革命的圣地——1935年1月，中共中央在此召开了具有伟大历史意义的遵义会议，确立了毛泽东在全党全军的领导地位。浙大来到这片红色热土后，在竺可桢校长的领导下，迅速安定下来并恢复办学。文、理、工、农、师范五个学院分布于遵义城内外，教学科研全面展开。在此七年时间里，浙大从一所地方大学崛起为享誉中外的名校，被英国学者李约瑟誉为\"东方剑桥\"。",
    sites: [
      { name: "遵义会议会址", desc: "全国重点文物保护单位，国家AAAAA级景区。1935年1月中共中央政治局扩大会议在此召开，是中国革命的伟大转折点。这是红色旅游最重要的目的地之一。" },
      { name: "红军山烈士陵园", desc: "位于遵义市区凤凰山南麓，安葬着在遵义战役中牺牲的红军烈士。邓萍将军墓和红军卫生员铜像是重要的革命纪念设施。" },
      { name: "浙大遵义办学旧址", desc: "浙大在遵义办学期间使用过的多处建筑，包括老城子弹库（校本部）、江公祠等地，部分遗迹至今犹存。" }
    ],
    highlights: ["遵义会议会址", "红军山烈士陵园", "浙大西迁办学旧址", "海龙屯世界遗产", "赤水丹霞世界遗产"]
  },

  meitan: {
    name: "湄潭",
    number: "终点（二）",
    period: "1940年2月 — 1946年秋",
    color: "#C41E3A",
    story: "与遵义同时，浙大农学院、理学院和部分文学院的师生迁至距遵义约70公里的湄潭县。在这座偏僻的黔北小县城，浙大师生创造了中国高等教育史上的奇迹。没有像样的教室，就在文庙、祠堂和民房中上课；没有实验室，就在茅草棚中做实验。然而，正是在这样艰苦的条件下，苏步青、陈建功、王淦昌、谈家桢、贝时璋等一大批著名学者潜心治学，取得了世界级的学术成果。李约瑟到访湄潭后惊叹不已，称浙大为\"东方剑桥\"。湄潭办学七年间培养的学生中，有26人后来成为中国科学院或中国工程院院士。",
    sites: [
      { name: "浙江大学西迁历史陈列馆（湄潭）", desc: "全国唯一以西迁办学为主题的专题陈列馆，位于湄潭县文庙内。馆内陈列有大量珍贵的历史照片、文献资料和实物，全面展示了文军长征的壮丽历程。全国重点文物保护单位。" },
      { name: "湄潭文庙", desc: "始建于明代的古建筑群，浙大师生在此举行了多次重要的学术活动和毕业典礼。现为浙大西迁陈列馆所在地。" },
      { name: "浙大教授故居群", desc: "苏步青、谈家桢等教授在湄潭的住所旧址，多为当地民居和祠堂，部分已列为文物保护单位。" }
    ],
    highlights: ["浙大西迁历史陈列馆", "湄潭文庙古建筑", "教授故居群", "湄潭茶海（万亩茶园）", "浙大广场纪念遗址"]
  }
};

// ===== 时间轴数据 =====
const timelineData = [
  { date: "1936年4月", event: "竺可桢出任浙江大学校长，确立\"求是\"校训" },
  { date: "1937年7月", event: "抗日战争全面爆发，淞沪会战打响" },
  { date: "1937年9月", event: "一年级新生迁至浙西天目山禅源寺" },
  { date: "1937年11月", event: "全校迁至浙西建德（第一次迁移）" },
  { date: "1937年12月", event: "经浙赣铁路迁至江西，途中困于玉山风雪" },
  { date: "1938年1月", event: "抵达江西吉安青原山办学（第二次迁移）" },
  { date: "1938年2月", event: "迁至泰和县，借白鹭洲书院办学" },
  { date: "1938年10月", event: "经湖南迁往广西（第三次迁移）" },
  { date: "1938年11月", event: "抵达广西宜山，竺可桢发表《王阳明与大学生的典范》演讲，\"求是\"正式定为校训" },
  { date: "1940年2月", event: "迁至贵州遵义、湄潭（第四次迁移），安定办学" },
  { date: "1941—1945年", event: "在贵州潜心学术，浙大崛起为\"东方剑桥\"，李约瑟来访并给予高度评价" },
  { date: "1946年秋", event: "抗战胜利后，浙大回迁杭州，结束九年西迁历程" }
];

// ===== 页面加载 =====
window.addEventListener('load', function() {
  setTimeout(function() {
    var loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('fade-out');
    setTimeout(function() {
      loadingScreen.style.display = 'none';
      setTimeout(openIntroModal, 500);
    }, 800);
  }, 2200);

  initParticles();
  initScrollAnimations();
});

// ===== 粒子效果 =====
function initParticles() {
  var container = document.getElementById('particles');
  if (!container) return;

  for (var i = 0; i < 30; i++) {
    var particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = (30 + Math.random() * 60) + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (4 + Math.random() * 4) + 's';
    container.appendChild(particle);
  }
}

// ===== 开场弹窗 =====
function openIntroModal() {
  document.getElementById('intro-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeIntroModal() {
  document.getElementById('intro-modal').classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(triggerRouteAnimation, 300);
}

// ===== 地点弹窗 =====
function openLocationModal(locationId) {
  var data = locationData[locationId];
  if (!data) return;

  document.getElementById('loc-header-bg').style.background =
    'linear-gradient(135deg, ' + data.color + ' 0%, ' + data.color + 'CC 100%)';

  document.getElementById('loc-number').textContent = data.number;
  document.getElementById('loc-name').textContent = data.name;
  document.getElementById('loc-period').textContent = data.period;
  document.getElementById('loc-story').textContent = data.story;

  var sitesContainer = document.getElementById('loc-sites');
  sitesContainer.innerHTML = data.sites.map(function(site) {
    return '<div class="site-card">' +
      '<div class="site-name">🏛 ' + site.name + '</div>' +
      '<div class="site-desc">' + site.desc + '</div>' +
      '</div>';
  }).join('');

  var highlightsContainer = document.getElementById('loc-highlights');
  highlightsContainer.innerHTML = '<div class="highlight-tags">' +
    data.highlights.map(function(h) {
      return '<span class="highlight-tag">📍 ' + h + '</span>';
    }).join('') +
    '</div>';

  document.getElementById('location-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLocationModal() {
  document.getElementById('location-modal').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== 时间轴弹窗 =====
function openTimeline() {
  var container = document.getElementById('timeline-container');
  container.innerHTML = timelineData.map(function(item) {
    return '<div class="timeline-item">' +
      '<div class="timeline-date">' + item.date + '</div>' +
      '<div class="timeline-event">' + item.event + '</div>' +
      '</div>';
  }).join('');

  document.getElementById('timeline-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeTimeline() {
  document.getElementById('timeline-modal').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== 路线动画 =====
function triggerRouteAnimation() {
  var routePath = document.getElementById('route-path');
  if (routePath) {
    routePath.classList.add('animate');
  }
}

// ===== 滚动到地图 =====
function scrollToMap() {
  var mapSection = document.getElementById('map-section');
  if (mapSection) {
    mapSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(triggerRouteAnimation, 500);
  }
}

// ===== 滚动动画 =====
function initScrollAnimations() {
  var header = document.getElementById('site-header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.stat-card, .figure-card, .site-card').forEach(function(el) {
    el.classList.add('fade-in-up');
    observer.observe(el);
  });
}

// ===== 地点标记点击事件 =====
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.location-marker').forEach(function(marker) {
    marker.addEventListener('click', function() {
      var locationId = marker.getAttribute('data-location');
      if (locationId) {
        openLocationModal(locationId);
      }
    });

    marker.setAttribute('tabindex', '0');
    marker.setAttribute('role', 'button');
    marker.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        var locationId = marker.getAttribute('data-location');
        if (locationId) {
          openLocationModal(locationId);
        }
      }
    });
  });
});

// ===== ESC 键关闭弹窗 =====
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeIntroModal();
    closeLocationModal();
    closeTimeline();
  }
});

// ===== 点击遮罩层关闭弹窗 =====
document.querySelectorAll('.modal-overlay').forEach(function(overlay) {
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
