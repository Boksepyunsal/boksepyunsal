<script>
  import { reveal } from '$lib/actions/reveal.js';

  // Unsplash 무료 이미지 (기후 위기 관련 실제 사진들)
  const crisisImages = [
    {
      url: 'https://images.unsplash.com/photo-1520808418718-7d83e2e0d671?auto=format&fit=crop&w=900&q=80',
      position: 'center 40%',
      tag: '북극',
      caption: '녹아내리는 빙하 위의 북극곰',
      stat: '2050년 멸종 위기',
      color: '#60a5fa',
    },
    {
      url: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=900&q=80',
      position: 'center center',
      tag: '해양',
      caption: '산호 백화 현상 — 색을 잃어가는 바다',
      stat: '전 세계 산호초 50% 소멸',
      color: '#34d399',
    },
    {
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80',
      position: 'center 60%',
      tag: '산불',
      caption: '기록적 산불이 삼킨 숲',
      stat: '2023 캐나다 역대 최대 산불',
      color: '#f97316',
    },
    {
      url: 'https://images.unsplash.com/photo-1504270997636-07ddfbd48945?auto=format&fit=crop&w=900&q=80',
      position: 'center center',
      tag: '가뭄',
      caption: '갈라진 대지 — 사라진 강과 호수',
      stat: '10억 명 물 부족 위기',
      color: '#fbbf24',
    },
    {
      url: 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?auto=format&fit=crop&w=900&q=80',
      position: 'center 30%',
      tag: '해양오염',
      caption: '플라스틱 쓰레기 속 바다거북',
      stat: '매년 800만 톤 해양 투기',
      color: '#a78bfa',
    },
    {
      url: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=900&q=80',
      position: 'center 50%',
      tag: '홍수',
      caption: '기록적 홍수에 잠긴 마을',
      stat: '극단적 기상재해 2배 증가',
      color: '#38bdf8',
    },
  ];

  const solutions = [
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>`,
      title: '재생에너지 전환',
      desc: '태양광과 풍력으로 화석연료를 대체합니다.',
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>`,
      title: '에너지 효율화',
      desc: '스마트 그리드와 고효율 기기로 낭비를 줄입니다.',
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>`,
      title: '디지털 그린화',
      desc: '소프트웨어와 데이터센터의 탄소 발자국을 줄입니다.',
      highlight: true,
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>`,
      title: '탄소 흡수원 보호',
      desc: '숲과 습지를 지켜 자연의 탄소 흡수 능력을 유지합니다.',
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>`,
      title: '국제 협력',
      desc: '파리협정 목표 아래 글로벌 공동 대응을 이어갑니다.',
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>`,
      title: '지속가능한 소비',
      desc: '순환경제와 자원 재사용으로 폐기물을 줄입니다.',
    },
  ];

  const itImpacts = [
    {
      stat: '항공 산업과 동일',
      label: '데이터센터 연간 탄소 배출량',
      desc: '전 세계 데이터센터가 배출하는 탄소는 항공 산업과 맞먹습니다. AI와 클라우드 수요가 늘수록 이 수치는 빠르게 커집니다.',
    },
    {
      stat: '72% 감소',
      label: '클라우드 전환 시 탄소 발자국',
      desc: '온프레미스 서버를 클라우드로 전환하면 평균 72%의 탄소 발자국이 줄어듭니다. 자원을 공유하고 효율적으로 쓰기 때문입니다.',
    },
    {
      stat: '~0%',
      label: 'Serverless의 유휴 전력 소비',
      desc: 'Serverless 아키텍처는 요청이 없으면 서버가 꺼집니다. 24시간 켜두는 기존 방식과 달리, 필요할 때만 자원을 씁니다.',
    },
  ];
</script>

<section id="climate">
  <div class="container">

    <!-- Chapter 1: 문제 -->
    <div class="chapter" use:reveal>
      <div class="chapter-tag">
        <span class="chapter-num">01</span>
        <span class="chapter-label">The Problem</span>
      </div>
      <h2 class="chapter-title">지금, 지구에서<br /><span class="accent-red">사라져가는 것들</span></h2>
      <p class="chapter-desc">
        숫자보다 솔직한 것은 눈앞의 현실입니다.<br />
        기후변화로 고통받는 것은 수치가 아니라, 살아숨쉬는 생명들입니다.
      </p>
    </div>

    <!-- 이미지 갤러리 -->
    <div class="crisis-gallery">
      {#each crisisImages as img, i}
        <div
          class="gallery-item"
          use:reveal={{ delay: i * 80 }}
          style="--accent: {img.color}"
        >
          <img src={img.url} alt={img.caption} loading="lazy" style="object-position: {img.position}" />
          <div class="img-overlay"></div>
          <div class="img-tag">{img.tag}</div>
          <div class="img-info">
            <div class="img-stat">{img.stat}</div>
            <p class="img-caption">{img.caption}</p>
          </div>
        </div>
      {/each}
    </div>

    <!-- 기후 통계 배너 -->
    <div class="stats-banner" use:reveal>
      <div class="stat-item">
        <span class="stat-num">+1.45<span class="stat-unit">°C</span></span>
        <span class="stat-desc">2023년 지구 평균기온 상승</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-num">423<span class="stat-unit">ppm</span></span>
        <span class="stat-desc">CO₂ 농도 — 300만 년 만의 최고</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-num">1<span class="stat-unit">백만 종</span></span>
        <span class="stat-desc">멸종 위기에 처한 동식물</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-num">2x</span>
        <span class="stat-desc">극단적 기상재해 발생 빈도 증가</span>
      </div>
    </div>

    <!-- Chapter 2: 해결책 -->
    <div class="chapter chapter-2" use:reveal>
      <div class="chapter-tag">
        <span class="chapter-num">02</span>
        <span class="chapter-label">The Solutions</span>
      </div>
      <h2 class="chapter-title">그래도, 우리가<br /><span class="accent-green">할 수 있는 것</span>들이 있습니다</h2>
      <p class="chapter-desc">
        절망하기엔 이릅니다. 해결의 실마리는 여러 방향에 있고,
        그 중 하나는 우리가 매일 쓰는 소프트웨어 안에 있습니다.
      </p>
    </div>

    <div class="solutions-grid">
      {#each solutions as s, i}
        <div class="solution-card" class:highlighted={s.highlight} use:reveal={{ delay: i * 70 }}>
          <div class="solution-icon" class:highlight-icon={s.highlight}>
            {@html s.icon}
          </div>
          <h4>{s.title}</h4>
          <p>{s.desc}</p>
          {#if s.highlight}
            <div class="highlight-tag">우리의 분야</div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Chapter 3: IT의 역할 -->
    <div class="chapter chapter-3" use:reveal>
      <div class="chapter-tag">
        <span class="chapter-num">03</span>
        <span class="chapter-label">IT's Role</span>
      </div>
      <h2 class="chapter-title">소프트웨어도<br /><span class="accent-blue">탄소를 배출</span>합니다</h2>
      <p class="chapter-desc">
        디지털은 친환경처럼 느껴지지만, 데이터센터는 전 세계 전력의 약 1~2%를 소비합니다.
        그러나 바로 그렇기 때문에 — 소프트웨어가 달라지면 탄소도 줄 수 있습니다.
      </p>
    </div>

    <div class="it-impact-row">
      {#each itImpacts as item, i}
        <div class="impact-card" use:reveal={{ delay: i * 120 }}>
          <div class="impact-stat">{item.stat}</div>
          <div class="impact-label">{item.label}</div>
          <p class="impact-desc">{item.desc}</p>
        </div>
      {/each}
    </div>

    <!-- 연결 -->
    <div class="bridge" use:reveal>
      <div class="bridge-line"></div>
      <div class="bridge-text">그래서 복세편살이 만들어졌습니다</div>
      <div class="bridge-line"></div>
    </div>

  </div>
</section>

<style>
  section {
    padding: 100px 0 60px;
    border-top: 1px solid var(--border);
  }

  /* ---- Chapter 헤더 ---- */
  .chapter {
    text-align: center;
    margin-bottom: 56px;
  }

  .chapter-2 { margin-top: 100px; }
  .chapter-3 { margin-top: 100px; }

  .chapter-tag {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }

  .chapter-tag::before,
  .chapter-tag::after {
    content: '';
    width: 32px;
    height: 1px;
    background: var(--border);
  }

  .chapter-num {
    font-size: 11px;
    font-weight: 800;
    color: var(--text-muted);
    letter-spacing: 0.2em;
    font-family: 'SF Mono', 'Fira Code', monospace;
  }

  .chapter-label {
    font-size: 11px;
    font-weight: 700;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }

  .chapter-title {
    font-size: clamp(32px, 5vw, 54px);
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 1.15;
    color: var(--text);
    margin-bottom: 20px;
  }

  .chapter-desc {
    font-size: 17px;
    color: var(--text-secondary);
    line-height: 1.85;
    max-width: 560px;
    margin: 0 auto;
  }

  .accent-red   { color: #ef4444; }
  .accent-green { color: #22c55e; }
  .accent-blue  { color: #3b82f6; }

  /* ---- 이미지 갤러리 ---- */
  .crisis-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    margin-bottom: 40px;
  }

  .gallery-item {
    position: relative;
    height: 280px;
    border-radius: 16px;
    overflow: hidden;
    cursor: default;
    background: var(--surface);
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
  }

  .gallery-item:hover img {
    transform: scale(1.06);
  }

  /* 기본 어두운 그라디언트 오버레이 */
  .img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.10) 0%,
      rgba(0, 0, 0, 0.25) 50%,
      rgba(0, 0, 0, 0.72) 100%
    );
    transition: background 0.3s ease;
  }

  .gallery-item:hover .img-overlay {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.15) 0%,
      rgba(0, 0, 0, 0.35) 50%,
      rgba(0, 0, 0, 0.82) 100%
    );
  }

  /* 태그 (좌상단) */
  .img-tag {
    position: absolute;
    top: 14px;
    left: 14px;
    padding: 4px 10px;
    background: var(--accent);
    color: white;
    font-size: 11px;
    font-weight: 700;
    border-radius: 6px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  /* 하단 정보 */
  .img-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px 18px;
  }

  .img-stat {
    font-size: 13px;
    font-weight: 700;
    color: var(--accent);
    margin-bottom: 4px;
    letter-spacing: 0.02em;
  }

  .img-caption {
    font-size: 14px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.92);
    line-height: 1.4;
    margin: 0;
  }

  /* ---- 통계 배너 ---- */
  .stats-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    padding: 32px 40px;
    background: rgba(239, 68, 68, 0.04);
    border: 1px solid rgba(239, 68, 68, 0.14);
    border-radius: 20px;
    margin-bottom: 0;
    flex-wrap: wrap;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 0 36px;
    text-align: center;
  }

  .stat-num {
    font-size: 30px;
    font-weight: 900;
    color: var(--text);
    letter-spacing: -0.04em;
    line-height: 1;
  }

  .stat-unit {
    font-size: 17px;
    font-weight: 600;
    color: #ef4444;
  }

  .stat-desc {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-muted);
    white-space: nowrap;
  }

  .stat-divider {
    width: 1px;
    height: 44px;
    background: rgba(239, 68, 68, 0.15);
    flex-shrink: 0;
  }

  /* ---- Solutions Grid ---- */
  .solutions-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }

  .solution-card {
    padding: 26px 22px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    transition: border-color 0.2s, box-shadow 0.2s;
    position: relative;
  }

  .solution-card:hover {
    border-color: var(--border-hover);
  }

  .solution-card.highlighted {
    background: rgba(34, 197, 94, 0.04);
    border-color: rgba(34, 197, 94, 0.25);
  }

  .solution-card.highlighted:hover {
    border-color: rgba(34, 197, 94, 0.45);
    box-shadow: 0 0 40px rgba(34, 197, 94, 0.10);
  }

  .solution-icon {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: rgba(100, 72, 46, 0.07);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    margin-bottom: 14px;
  }

  .solution-icon.highlight-icon {
    background: rgba(34, 197, 94, 0.10);
    border-color: rgba(34, 197, 94, 0.25);
    color: #16a34a;
  }

  .solution-card h4 {
    font-size: 14px;
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.01em;
    margin-bottom: 6px;
  }

  .solution-card p {
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.7;
  }

  .highlight-tag {
    display: inline-block;
    margin-top: 10px;
    padding: 3px 10px;
    background: rgba(34, 197, 94, 0.12);
    border: 1px solid rgba(34, 197, 94, 0.25);
    border-radius: 6px;
    font-size: 11px;
    font-weight: 700;
    color: #16a34a;
    letter-spacing: 0.04em;
  }

  /* ---- IT Impact ---- */
  .it-impact-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .impact-card {
    padding: 36px 28px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    text-align: center;
  }

  .impact-stat {
    font-size: 30px;
    font-weight: 900;
    color: var(--text);
    letter-spacing: -0.04em;
    line-height: 1;
    margin-bottom: 6px;
  }

  .impact-label {
    font-size: 12px;
    font-weight: 700;
    color: #3b82f6;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 14px;
  }

  .impact-desc {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.75;
  }

  /* ---- Bridge ---- */
  .bridge {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 80px;
  }

  .bridge-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }

  .bridge-text {
    font-size: 14px;
    font-weight: 700;
    color: var(--text-muted);
    white-space: nowrap;
    padding: 8px 20px;
    border: 1px solid var(--border);
    border-radius: 100px;
    background: var(--surface);
  }

  /* ---- 반응형 ---- */
  @media (max-width: 900px) {
    .crisis-gallery {
      grid-template-columns: repeat(2, 1fr);
    }

    .it-impact-row {
      grid-template-columns: 1fr;
    }

    .solutions-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .stats-banner {
      gap: 20px;
      padding: 24px;
    }

    .stat-item { padding: 0 16px; }
    .stat-divider { display: none; }
  }

  @media (max-width: 600px) {
    .crisis-gallery {
      grid-template-columns: 1fr;
    }

    .gallery-item { height: 240px; }

    .solutions-grid {
      grid-template-columns: 1fr;
    }

    .stats-banner {
      flex-direction: column;
      gap: 16px;
    }

    .bridge-text {
      font-size: 12px;
      white-space: normal;
      text-align: center;
    }
  }
</style>
