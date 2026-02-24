<script>
  import { reveal } from '$lib/actions/reveal.js';

  const steps = [
    {
      num: '01',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/>
        <line x1="8" y1="11" x2="14" y2="11"/>
      </svg>`,
      title: 'Discovery',
      subtitle: '현황 진단',
      desc: '기존 인프라·아키텍처를 심층 분석하고 클라우드 전환 목표를 설정합니다. 비용 구조와 병목 지점을 파악해 우선순위를 정합니다.',
      color: '#f59e0b',
    },
    {
      num: '02',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>`,
      title: 'Architecture',
      subtitle: '아키텍처 설계',
      desc: 'AWS Well-Architected 프레임워크 기반으로 목표 아키텍처를 설계합니다. Terraform 플랜과 마이그레이션 로드맵을 작성하고 100% 합의 후 진행합니다.',
      color: '#3b82f6',
    },
    {
      num: '03',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        <line x1="12" y1="13" x2="12" y2="20"/>
        <polyline points="9 16 12 13 15 16"/>
      </svg>`,
      title: 'Migration',
      subtitle: '구축 & 마이그레이션',
      desc: '무중단 마이그레이션 전략으로 서비스 중단 없이 전환합니다. K8s 클러스터 구성, CI/CD 파이프라인 구축, Terraform 코드 작성을 병행합니다.',
      color: '#8b5cf6',
    },
    {
      num: '04',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <polyline points="9 15 11 17 15 13"/>
      </svg>`,
      title: 'Handoff',
      subtitle: '이관 & 교육',
      desc: 'Terraform 코드·아키텍처 문서 원본을 이관하고 운영팀 교육을 제공합니다. 구축 완료 후 1개월 무상 지원이 포함됩니다.',
      color: '#10b981',
    },
  ];
</script>

<section id="process">
  <div class="container">
    <div class="section-header" use:reveal>
      <div class="section-label">Process</div>
      <h2 class="section-title">이렇게 전환합니다</h2>
      <p class="section-desc">현황 진단부터 운영팀 교육까지, 검증된 4단계로 리스크 없는 클라우드 전환을 보장합니다.</p>
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
        <strong>1개월 무상 지원 보증</strong>
        <p>구축 완료 후 1개월간 발생하는 모든 인프라 이슈를 무상으로 지원합니다. 사업자등록 업체로서의 책임감으로 임합니다.</p>
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
