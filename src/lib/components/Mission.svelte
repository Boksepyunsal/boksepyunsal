<script>
  import { reveal } from '$lib/actions/reveal.js';

  const approaches = [
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        <line x1="12" y1="13" x2="12" y2="20"/>
        <polyline points="9 16 12 13 15 16"/>
      </svg>`,
      label: 'Serverless First',
      title: '서버를 끄는 것이 가장 친환경적입니다',
      desc: 'Serverless 아키텍처는 요청이 없을 때 서버가 존재하지 않습니다. 24시간 켜져 있는 유휴 서버 대신, 실제로 필요한 순간에만 자원을 사용합니다. 탄소 배출도, 비용도 줄입니다.',
      color: '#22c55e',
      glow: 'rgba(34, 197, 94, 0.18)',
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>`,
      label: 'Right-sizing',
      title: '딱 필요한 만큼만 씁니다',
      desc: '과도하게 프로비저닝된 서버는 전력을 낭비합니다. 오토스케일링과 컨테이너 기반 아키텍처로 실제 트래픽에 맞게 자원을 조절해, 불필요한 연산을 없앱니다.',
      color: '#3b82f6',
      glow: 'rgba(59, 130, 246, 0.18)',
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>`,
      label: 'Efficient Code',
      title: '효율적인 코드가 탄소를 줄입니다',
      desc: '같은 결과를 내는 코드라도, 연산 횟수가 적을수록 전력 소비가 줄어듭니다. 알고리즘 최적화와 캐싱 전략은 단순히 빠른 앱을 만드는 것이 아니라, 지구에 부담을 덜 주는 앱을 만드는 것입니다.',
      color: '#f59e0b',
      glow: 'rgba(245, 158, 11, 0.18)',
    },
  ];
</script>

<section id="mission">
  <div class="container">

    <div class="mission-layout">
      <!-- 왼쪽: 우리의 기여 -->
      <div class="mission-text" use:reveal>
        <div class="section-label">Our Contribution · Chapter 04</div>
        <h2 class="section-title">우리는 이렇게<br />기여합니다</h2>
        <p class="mission-lead">
          복세편살이 소프트웨어를 만드는 방식에는 이유가 있습니다.
        </p>
        <p class="mission-body">
          리소스 최적화, Serverless, 오토스케일링 — 이것들은 단순한 기술 선택이 아닙니다.
          필요한 것만 쓰고, 쓰지 않을 때는 쉬는 구조. 그것이 우리가 생각하는
          기후친화적인 소프트웨어 개발입니다.
        </p>
        <p class="mission-body">
          클라우드 인프라를 잘 설계하는 것과 환경을 생각하는 것은 방향이 같습니다.
          비용을 줄이면 탄소도 줄고, 효율을 높이면 전력도 아낍니다.
          좋은 기술이 지구에도 좋을 수 있다고 믿습니다.
        </p>

        <div class="stat-row">
          <div class="stat">
            <span class="stat-val">최대 80%</span>
            <span class="stat-label">에너지 효율 향상<br />(온프레미스 → 클라우드)</span>
          </div>
          <div class="stat-div"></div>
          <div class="stat">
            <span class="stat-val">72%</span>
            <span class="stat-label">탄소 발자국 감소<br />(클라우드 전환 평균)</span>
          </div>
          <div class="stat-div"></div>
          <div class="stat">
            <span class="stat-val">~0%</span>
            <span class="stat-label">Serverless<br />유휴 전력 소비</span>
          </div>
        </div>
      </div>

      <!-- 오른쪽: 접근 방식 카드 -->
      <div class="approach-cards">
        {#each approaches as ap, i}
          <div class="approach-card" use:reveal={{ delay: i * 100 }} style="--color: {ap.color}; --glow: {ap.glow}">
            <div class="approach-header">
              <div class="approach-icon">{@html ap.icon}</div>
              <span class="approach-label">{ap.label}</span>
            </div>
            <h4>{ap.title}</h4>
            <p>{ap.desc}</p>
          </div>
        {/each}
      </div>
    </div>

  </div>
</section>

<style>
  section {
    padding: 100px 0;
    border-top: 1px solid var(--border);
  }

  .mission-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
  }

  /* ---- 왼쪽 텍스트 ---- */
  .mission-text .section-label {
    display: inline-block;
    margin-bottom: 16px;
  }

  .mission-text .section-title {
    text-align: left;
    margin-bottom: 24px;
  }

  .mission-lead {
    font-size: 17px;
    font-weight: 600;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 16px;
  }

  .mission-body {
    font-size: 15px;
    color: var(--text-muted);
    line-height: 1.85;
    margin-bottom: 16px;
  }

  .stat-row {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 36px;
    padding: 24px 28px;
    background: rgba(34, 197, 94, 0.04);
    border: 1px solid rgba(34, 197, 94, 0.15);
    border-radius: 16px;
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .stat-val {
    font-size: 22px;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.03em;
    line-height: 1;
  }

  .stat-label {
    font-size: 11px;
    color: var(--text-muted);
    line-height: 1.5;
  }

  .stat-div {
    width: 1px;
    height: 36px;
    background: var(--border);
    flex-shrink: 0;
  }

  /* ---- 오른쪽 접근방식 카드 ---- */
  .approach-cards {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .approach-card {
    padding: 24px 28px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    transition: border-color 0.25s, box-shadow 0.25s;
  }

  .approach-card:hover {
    border-color: var(--color);
    box-shadow: 0 0 32px var(--glow);
  }

  .approach-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
  }

  .approach-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: var(--color);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 16px var(--glow);
  }

  .approach-label {
    font-size: 11px;
    font-weight: 700;
    color: var(--color);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-family: 'SF Mono', 'Fira Code', monospace;
  }

  .approach-card h4 {
    font-size: 15px;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 6px;
    letter-spacing: -0.01em;
  }

  .approach-card p {
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.75;
  }

  @media (max-width: 900px) {
    .mission-layout {
      grid-template-columns: 1fr;
      gap: 48px;
    }
  }

  @media (max-width: 600px) {
    .stat-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }
    .stat-div { display: none; }
  }
</style>
