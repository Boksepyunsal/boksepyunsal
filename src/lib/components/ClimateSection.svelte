<script>
  import { reveal } from '$lib/actions/reveal.js';

  const problems = [
    {
      year: '2023',
      headline: '역대 가장 뜨거운 해',
      stat: '+1.45°C',
      statLabel: '산업화 이전 대비 기온 상승',
      desc: '2023년 7월은 인류가 기록을 남긴 이래 가장 더운 달이었습니다. 세계기상기구(WMO)는 지구 평균기온이 산업화 이전보다 1.45°C 상승했다고 밝혔습니다.',
      color: '#ef4444',
      glow: 'rgba(239, 68, 68, 0.15)',
    },
    {
      year: '현재',
      headline: 'CO₂ 농도 300만 년 만의 최고치',
      stat: '423ppm',
      statLabel: '대기 중 이산화탄소 농도',
      desc: '현재 대기 중 CO₂ 농도는 423ppm으로, 인류의 조상이 처음 도구를 만들기 전인 300만 년 전 이후 최고 수준입니다. 이 수치는 매년 빠르게 상승하고 있습니다.',
      color: '#f97316',
      glow: 'rgba(249, 115, 22, 0.15)',
    },
    {
      year: '매년',
      headline: '극단적 기상재해의 일상화',
      stat: '수십조 원',
      statLabel: '전 세계 기상재해 경제 손실',
      desc: '캐나다 역대 최대 산불, 유럽 기록적 홍수, 아시아 초강력 태풍. 극단적 기상 현상은 이제 뉴스에서 사라지지 않습니다. 기후변화는 미래의 이야기가 아닙니다.',
      color: '#8b5cf6',
      glow: 'rgba(139, 92, 246, 0.15)',
    },
  ];

  const solutions = [
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
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
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>`,
      title: '에너지 효율화',
      desc: '스마트 그리드와 고효율 기기로 낭비를 줄입니다.',
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>`,
      title: '디지털 그린화',
      desc: '소프트웨어와 데이터센터의 탄소 발자국을 줄입니다.',
      highlight: true,
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>`,
      title: '지속가능한 소비',
      desc: '순환경제와 자원 재사용으로 폐기물을 줄입니다.',
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>`,
      title: '탄소 흡수원 보호',
      desc: '숲과 습지를 지켜 자연의 탄소 흡수 능력을 유지합니다.',
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>`,
      title: '국제 협력',
      desc: '파리협정과 같은 글로벌 합의로 공동 목표를 향해 나아갑니다.',
    },
  ];

  const itImpacts = [
    {
      stat: '항공 산업만큼',
      label: '데이터센터 탄소 배출량',
      desc: '전 세계 데이터센터가 배출하는 탄소는 항공 산업과 맞먹습니다. 그리고 AI와 클라우드 수요가 늘수록 이 수치는 커집니다.',
    },
    {
      stat: '72%',
      label: '클라우드 전환 시 탄소 감소',
      desc: '온프레미스 서버를 클라우드로 전환하면 평균 72%의 탄소 발자국이 줄어듭니다. 리소스를 공유하고 효율적으로 쓰기 때문입니다.',
    },
    {
      stat: '~0%',
      label: 'Serverless의 유휴 전력 소비',
      desc: 'Serverless 아키텍처는 요청이 없으면 서버가 꺼집니다. 24시간 켜두는 기존 방식과 달리, 필요할 때만 자원을 쓰는 구조입니다.',
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
      <h2 class="chapter-title">지금 지구는<br /><span class="accent-red">위기</span>에 처해 있습니다</h2>
      <p class="chapter-desc">
        기후변화는 먼 미래의 이야기가 아닙니다. 지금 이 순간에도 지구는 달라지고 있고,
        그 속도는 우리가 예상했던 것보다 훨씬 빠릅니다.
      </p>
    </div>

    <div class="problem-cards">
      {#each problems as p, i}
        <div class="problem-card" use:reveal={{ delay: i * 120 }} style="--color: {p.color}; --glow: {p.glow}">
          <div class="problem-year">{p.year}</div>
          <div class="problem-stat">{p.stat}</div>
          <div class="problem-stat-label">{p.statLabel}</div>
          <h3>{p.headline}</h3>
          <p>{p.desc}</p>
        </div>
      {/each}
    </div>

    <!-- Chapter 2: 해결책 -->
    <div class="chapter chapter-2" use:reveal>
      <div class="chapter-tag">
        <span class="chapter-num">02</span>
        <span class="chapter-label">The Solutions</span>
      </div>
      <h2 class="chapter-title">그래도, 우리가<br /><span class="accent-green">할 수 있는 것</span>들이 있습니다</h2>
      <p class="chapter-desc">
        절망하기엔 이릅니다. 전 세계 과학자, 기업, 개인들이 다양한 방법으로
        기후변화에 맞서고 있습니다. 해결의 실마리는 여러 방향에 있습니다.
      </p>
    </div>

    <div class="solutions-grid">
      {#each solutions as s, i}
        <div class="solution-card" class:highlighted={s.highlight} use:reveal={{ delay: i * 80 }}>
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

    <!-- 연결 화살표 -->
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

  .chapter-2 {
    margin-top: 100px;
  }

  .chapter-3 {
    margin-top: 100px;
  }

  .chapter-tag {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
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

  .chapter-tag::before,
  .chapter-tag::after {
    content: '';
    width: 32px;
    height: 1px;
    background: var(--border);
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
    max-width: 580px;
    margin: 0 auto;
  }

  .accent-red { color: #ef4444; }
  .accent-green { color: #22c55e; }
  .accent-blue { color: #3b82f6; }

  /* ---- Problem Cards ---- */
  .problem-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .problem-card {
    padding: 36px 28px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    transition: border-color 0.25s, box-shadow 0.25s;
    position: relative;
    overflow: hidden;
  }

  .problem-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--color);
    opacity: 0.7;
  }

  .problem-card:hover {
    border-color: var(--color);
    box-shadow: 0 0 40px var(--glow);
  }

  .problem-year {
    font-size: 11px;
    font-weight: 700;
    color: var(--color);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 16px;
  }

  .problem-stat {
    font-size: 42px;
    font-weight: 900;
    color: var(--color);
    letter-spacing: -0.04em;
    line-height: 1;
    margin-bottom: 4px;
  }

  .problem-stat-label {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-muted);
    margin-bottom: 20px;
  }

  .problem-card h3 {
    font-size: 17px;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.02em;
    margin-bottom: 10px;
    line-height: 1.3;
  }

  .problem-card p {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.75;
  }

  /* ---- Solutions Grid ---- */
  .solutions-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .solution-card {
    padding: 28px 24px;
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
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(100, 72, 46, 0.07);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    margin-bottom: 16px;
  }

  .solution-icon.highlight-icon {
    background: rgba(34, 197, 94, 0.10);
    border-color: rgba(34, 197, 94, 0.25);
    color: #16a34a;
  }

  .solution-card h4 {
    font-size: 15px;
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
    margin-top: 12px;
    padding: 3px 10px;
    background: rgba(34, 197, 94, 0.12);
    border: 1px solid rgba(34, 197, 94, 0.25);
    border-radius: 6px;
    font-size: 11px;
    font-weight: 700;
    color: #16a34a;
    letter-spacing: 0.04em;
  }

  /* ---- IT Impact Row ---- */
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
    font-size: 36px;
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
    margin-bottom: 16px;
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
    .problem-cards,
    .it-impact-row {
      grid-template-columns: 1fr;
    }

    .solutions-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .solutions-grid {
      grid-template-columns: 1fr;
    }

    .bridge-text {
      font-size: 12px;
      text-align: center;
      white-space: normal;
    }
  }
</style>
