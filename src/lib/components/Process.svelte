<script>
  import { reveal } from '$lib/actions/reveal.js';

  const steps = [
    {
      num: '01',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>`,
      title: 'Kick-off',
      subtitle: '요구사항 분석',
      desc: '비즈니스 목표와 기술 요구사항을 심층 분석해 기능 명세서(WBS)를 작성합니다. 개발 전 100% 합의를 원칙으로 합니다.',
      color: '#3b82f6',
    },
    {
      num: '02',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>`,
      title: 'Design & Dev',
      subtitle: '디자인 & 개발',
      desc: '피그마(Figma) 디자인 컨펌 후 애자일(Agile) 방식으로 빠르게 개발합니다. 2주 스프린트로 가시적인 결과를 보여드립니다.',
      color: '#8b5cf6',
    },
    {
      num: '03',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 .18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>`,
      title: 'Communication',
      subtitle: '진행 상황 공유',
      desc: '매주 슬랙(Slack)과 노션을 통해 진행 상황 리포트를 공유합니다. 궁금한 점은 언제든 물어보실 수 있습니다.',
      color: '#06b6d4',
    },
    {
      num: '04',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <polyline points="20 6 9 17 4 12"/>
      </svg>`,
      title: 'Handoff',
      subtitle: '소스코드 이관',
      desc: '소스코드 원본을 이관하고 1개월 하자보수 보증을 제공합니다. 납품 후에도 지속적인 기술 지원이 가능합니다.',
      color: '#10b981',
    },
  ];
</script>

<section id="process">
  <div class="container">
    <div class="section-header" use:reveal>
      <div class="section-label">Process</div>
      <h2 class="section-title">이렇게 일합니다</h2>
      <p class="section-desc">검증된 프로세스로 예측 가능한 결과를 만듭니다. 매 단계마다 투명하게 공유합니다.</p>
    </div>

    <div class="process-grid">
      {#each steps as step, i}
        <div class="step-card" use:reveal={{ delay: i * 100 }} style="--color: {step.color}">
          <div class="step-num">{step.num}</div>

          <div class="step-icon">
            {@html step.icon}
          </div>

          <div class="step-content">
            <span class="step-subtitle">{step.subtitle}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>

          {#if i < steps.length - 1}
            <div class="connector" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- 보증 배너 -->
    <div class="guarantee" use:reveal={{ delay: 200 }}>
      <div class="guarantee-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <polyline points="9 12 11 14 15 10"/>
        </svg>
      </div>
      <div>
        <strong>1개월 하자보수 보증</strong>
        <p>납품 후 1개월간 발생하는 모든 버그와 이슈를 무상으로 처리합니다. 사업자등록 업체로서의 책임감으로 임합니다.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .section-header {
    text-align: center;
    margin-bottom: 64px;
  }
  .section-header .section-desc { margin: 0 auto; }

  .process-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 40px;
  }

  .step-card {
    position: relative;
    padding: 28px 24px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
  }

  .step-card:hover {
    border-color: var(--color, var(--blue));
    box-shadow: 0 0 40px rgba(from var(--color) r g b / 0.2);
    transform: translateY(-4px);
  }

  .step-num {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 13px;
    font-weight: 700;
    color: var(--text-muted);
    letter-spacing: 0.05em;
  }

  .step-icon {
    width: 52px;
    height: 52px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color);
    margin-bottom: 20px;
    transition: background 0.3s, border-color 0.3s;
  }

  .step-card:hover .step-icon {
    background: color-mix(in srgb, var(--color) 15%, transparent);
    border-color: color-mix(in srgb, var(--color) 40%, transparent);
  }

  .step-subtitle {
    font-size: 12px;
    font-weight: 600;
    color: var(--color);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    display: block;
    margin-bottom: 6px;
  }

  h3 {
    font-size: 20px;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 10px;
    color: var(--text);
  }

  p {
    font-size: 13px;
    color: var(--text-secondary);
    line-height: 1.75;
  }

  .connector {
    position: absolute;
    top: 50%;
    right: -22px;
    transform: translateY(-50%);
    color: var(--text-muted);
    z-index: 1;
    display: none;
  }

  .guarantee {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 24px 32px;
    background: rgba(16, 185, 129, 0.07);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: var(--radius-lg);
  }

  .guarantee-icon {
    width: 56px;
    height: 56px;
    background: rgba(16, 185, 129, 0.15);
    border: 1px solid rgba(16, 185, 129, 0.3);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #10b981;
    flex-shrink: 0;
  }

  .guarantee strong {
    display: block;
    font-size: 16px;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 4px;
  }

  .guarantee p {
    font-size: 14px;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    .process-grid { grid-template-columns: repeat(2, 1fr); }
    .connector { display: none; }
  }

  @media (max-width: 600px) {
    .process-grid { grid-template-columns: 1fr; }
    .guarantee { flex-direction: column; text-align: center; }
  }
</style>
