<script>
  import { reveal } from '$lib/actions/reveal.js';

  const pillars = [
    {
      letter: 'E',
      label: 'Environment',
      color: '#10b981',
      glow: 'rgba(16, 185, 129, 0.20)',
      title: '탄소 발자국 감소',
      desc: '클라우드 전환으로 온프레미스 대비 에너지 소비를 최대 80% 절감합니다. AWS 데이터센터는 2025년까지 100% 재생에너지 운영을 목표로 합니다.',
    },
    {
      letter: 'S',
      label: 'Social',
      color: '#3b82f6',
      glow: 'rgba(59, 130, 246, 0.20)',
      title: '비용 절감 → 사회적 재투자',
      desc: '클라우드 비용 최적화로 절감된 예산을 사람과 서비스에 재투자할 수 있습니다. 효율적인 인프라는 더 많은 사회적 가치로 이어집니다.',
    },
    {
      letter: 'G',
      label: 'Governance',
      color: '#f59e0b',
      glow: 'rgba(245, 158, 11, 0.20)',
      title: '감사 가능한 인프라',
      desc: 'Terraform IaC로 인프라 변경 이력을 코드로 추적하고, AWS Config·CloudTrail로 모든 변경 사항을 감사합니다. 규정 준수와 투명성을 코드로 보장합니다.',
    },
  ];
</script>

<section id="mission">
  <div class="container">
    <div class="mission-layout">
      <div class="mission-text" use:reveal>
        <div class="section-label">Our Mission</div>
        <h2 class="section-title">기후를 위한 코드</h2>
        <p class="mission-lead">
          복세편살이 클라우드 인프라를 구축하는 데에는 기술 너머의 이유가 있습니다.
        </p>
        <p class="mission-body">
          온프레미스 서버를 클라우드로 전환하면 에너지 효율이 최대 80% 향상됩니다.
          Kubernetes 기반 오토스케일링은 유휴 서버가 사라진다는 뜻이고,
          그것은 곧 불필요한 전력 소비가 사라진다는 뜻입니다.
        </p>
        <p class="mission-body">
          우리가 설계하는 모든 아키텍처 결정 — Spot Instance 활용, 오토스케일링 정책,
          비용 최적화 권고 — 은 고객의 비용을 줄이는 동시에 탄소 배출량도 줄입니다.
          기술이 좋은 방향으로 작동할 수 있다고 믿습니다.
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
            <span class="stat-val">100%</span>
            <span class="stat-label">재생에너지 목표<br />(AWS 2025)</span>
          </div>
        </div>
      </div>

      <div class="esg-pillars">
        {#each pillars as pillar, i}
          <div class="pillar" use:reveal={{ delay: i * 100 }} style="--color: {pillar.color}; --glow: {pillar.glow}">
            <div class="pillar-header">
              <div class="pillar-letter">{pillar.letter}</div>
              <span class="pillar-label">{pillar.label}</span>
            </div>
            <h4>{pillar.title}</h4>
            <p>{pillar.desc}</p>
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
    background: rgba(100, 72, 46, 0.04);
    border: 1px solid var(--border);
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

  /* ---- 오른쪽 ESG 필라 ---- */
  .esg-pillars {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .pillar {
    padding: 24px 28px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    transition: border-color 0.25s, box-shadow 0.25s;
  }

  .pillar:hover {
    border-color: var(--color);
    box-shadow: 0 0 32px var(--glow);
  }

  .pillar-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
  }

  .pillar-letter {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: var(--color);
    color: white;
    font-size: 18px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 16px var(--glow);
  }

  .pillar-label {
    font-size: 11px;
    font-weight: 700;
    color: var(--color);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .pillar h4 {
    font-size: 15px;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 6px;
    letter-spacing: -0.01em;
  }

  .pillar p {
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
