<script>
  import { reveal } from '$lib/actions/reveal.js';

  const steps = [
    {
      num: '01',
      title: '사연 작성',
      desc: '구글폼에서 만들고 싶은 서비스와 그 이유를 적어주세요. 아이디어 단계여도 괜찮습니다.',
    },
    {
      num: '02',
      title: '추첨 선정',
      desc: '접수된 사연을 검토하고, 환경과 사회에 기여할 수 있는 서비스를 추첨으로 선정합니다.',
    },
    {
      num: '03',
      title: '무료 개발',
      desc: 'Serverless 등 리소스 최적화 기술로 서비스를 개발합니다. 개발 비용은 전액 무료입니다.',
    },
    {
      num: '04',
      title: '서버비만 부담',
      desc: '운영에 필요한 최소한의 서버 비용만 기업에서 감당합니다. 최대한 절감된 구조로 설계합니다.',
    },
  ];

  const features = [
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        <line x1="12" y1="13" x2="12" y2="20"/>
        <polyline points="9 16 12 13 15 16"/>
      </svg>`,
      text: 'Serverless 기반 — 유휴 비용 제로',
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>`,
      text: '기후친화적 아키텍처로 설계',
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>`,
      text: '리소스 최적화 — 낭비 없는 개발',
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>`,
      text: '개발 비용 전액 무료',
    },
  ];
</script>

<section id="event">
  <div class="container">

    <div class="event-wrapper" use:reveal>
      <!-- 배경 오브 -->
      <div class="event-orb orb-1" aria-hidden="true"></div>
      <div class="event-orb orb-2" aria-hidden="true"></div>

      <div class="event-inner">
        <!-- 태그 -->
        <div class="event-tag">
          <span class="tag-dot"></span>
          오픈 이벤트 진행 중
        </div>

        <h2>
          첫 번째 걸음을<br />
          <span class="gradient-text-green">함께 내딛고 싶습니다</span>
        </h2>

        <p class="event-desc">
          우리 기업은 이제 막 시작했습니다. 레퍼런스보다 진심이 먼저라고 생각합니다.<br />
          그래서 특별한 이벤트를 준비했습니다 — 사연을 적어주시면, 추첨을 통해<br />
          기후친화적인 방식으로 여러분의 서비스를 <strong>무료로 만들어드립니다.</strong>
        </p>

        <!-- 특징 배지들 -->
        <div class="feature-badges">
          {#each features as f}
            <div class="feature-badge">
              <span class="badge-icon">{@html f.icon}</span>
              <span>{f.text}</span>
            </div>
          {/each}
        </div>

        <!-- 진행 방식 -->
        <div class="steps">
          {#each steps as step, i}
            <div class="step" use:reveal={{ delay: i * 80 }}>
              <div class="step-num">{step.num}</div>
              <div class="step-content">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
              {#if i < steps.length - 1}
                <div class="step-arrow" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              {/if}
            </div>
          {/each}
        </div>

        <!-- CTA -->
        <div class="event-cta-area">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfG617zgP3HbNcN-qJC2apfu-buzRXRaasaqOceghlgXpGiuQ/viewform?usp=publish-editor"
            class="event-cta"
            target="_blank"
            rel="noopener"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            구글폼으로 사연 제출하기
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <p class="cta-note">
            선정 후 개별 연락 드립니다 · 개발 비용 전액 무료 · 서버 비용 최소화 보장
          </p>
        </div>

      </div>
    </div>

  </div>
</section>

<style>
  section {
    padding: 60px 0 100px;
    border-top: 1px solid var(--border);
  }

  .event-wrapper {
    position: relative;
    padding: 80px;
    background: var(--surface);
    border: 1px solid rgba(34, 197, 94, 0.20);
    border-radius: 32px;
    text-align: center;
    overflow: hidden;
  }

  .event-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }

  .orb-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%);
    top: -150px;
    left: -150px;
    animation: float-e1 12s ease-in-out infinite;
  }

  .orb-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
    bottom: -100px;
    right: -100px;
    animation: float-e2 10s ease-in-out infinite;
  }

  @keyframes float-e1 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(30px, -20px); }
  }
  @keyframes float-e2 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-20px, 20px); }
  }

  .event-inner {
    position: relative;
    z-index: 1;
  }

  /* ---- 태그 ---- */
  .event-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    background: rgba(34, 197, 94, 0.10);
    border: 1px solid rgba(34, 197, 94, 0.25);
    border-radius: 100px;
    font-size: 12px;
    font-weight: 700;
    color: #16a34a;
    margin-bottom: 28px;
    letter-spacing: 0.04em;
  }

  .tag-dot {
    width: 6px;
    height: 6px;
    background: #22c55e;
    border-radius: 50%;
    animation: pulse-green 2s ease-in-out infinite;
  }

  @keyframes pulse-green {
    0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6); }
    50% { box-shadow: 0 0 0 4px rgba(34, 197, 94, 0); }
  }

  /* ---- 헤드라인 ---- */
  h2 {
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 1.15;
    margin-bottom: 24px;
    color: var(--text);
  }

  .gradient-text-green {
    background: linear-gradient(135deg, #22c55e, #16a34a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ---- 설명 ---- */
  .event-desc {
    font-size: 17px;
    color: var(--text-secondary);
    line-height: 1.85;
    margin-bottom: 36px;
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
  }

  .event-desc strong {
    color: var(--text);
    font-weight: 700;
  }

  /* ---- 특징 배지 ---- */
  .feature-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-bottom: 52px;
  }

  .feature-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.50);
    border: 1px solid var(--border);
    border-radius: 100px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
    backdrop-filter: blur(6px);
  }

  .badge-icon {
    display: flex;
    align-items: center;
    color: #16a34a;
  }

  /* ---- 진행 단계 ---- */
  .steps {
    display: flex;
    align-items: flex-start;
    gap: 0;
    margin-bottom: 52px;
    text-align: left;
    position: relative;
  }

  .step {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    padding: 0 12px;
  }

  .step-num {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(34, 197, 94, 0.10);
    border: 2px solid rgba(34, 197, 94, 0.30);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 800;
    color: #16a34a;
    font-family: 'SF Mono', 'Fira Code', monospace;
    margin-bottom: 16px;
    flex-shrink: 0;
  }

  .step-content h4 {
    font-size: 15px;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 6px;
    letter-spacing: -0.01em;
  }

  .step-content p {
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.7;
  }

  .step-arrow {
    position: absolute;
    top: 15px;
    right: -8px;
    color: var(--text-muted);
    opacity: 0.5;
    z-index: 1;
  }

  /* ---- CTA ---- */
  .event-cta-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }

  .event-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 18px 40px;
    background: linear-gradient(135deg, #22c55e, #16a34a);
    color: white;
    font-size: 16px;
    font-weight: 700;
    border-radius: 100px;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 0 60px rgba(34, 197, 94, 0.25);
  }

  .event-cta:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 60px rgba(34, 197, 94, 0.40);
  }

  .cta-note {
    font-size: 13px;
    color: var(--text-muted);
    margin: 0;
  }

  /* ---- 반응형 ---- */
  @media (max-width: 768px) {
    .event-wrapper { padding: 40px 24px; }

    .steps {
      flex-direction: column;
      align-items: stretch;
      gap: 20px;
    }

    .step {
      flex-direction: row;
      text-align: left;
      align-items: flex-start;
      gap: 16px;
      padding: 0;
    }

    .step-num { margin-bottom: 0; flex-shrink: 0; }

    .step-arrow { display: none; }

    .event-cta { width: 100%; justify-content: center; }

    .feature-badges { gap: 8px; }
  }

  @media (max-width: 480px) {
    .feature-badge { font-size: 12px; padding: 6px 12px; }
  }
</style>
