<script>
  import { onMount } from 'svelte';

  let mounted = false;

  onMount(() => {
    setTimeout(() => { mounted = true; }, 100);
  });
</script>

<section class="hero">
  <!-- 배경 그라디언트 오브 -->
  <div class="bg-orbs" aria-hidden="true">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
  </div>

  <!-- 그리드 오버레이 -->
  <div class="grid-overlay" aria-hidden="true"></div>

  <div class="hero-content container" class:visible={mounted}>
    <!-- 뱃지 -->
    <div class="badge">
      <span class="badge-dot"></span>
      대기업이 선택한 기술 파트너
    </div>

    <!-- 메인 헤드라인 -->
    <h1>
      기술 부채 없는<br />
      <span class="gradient-text">비즈니스 성장</span>을<br />
      설계합니다.
    </h1>

    <!-- 서브타이틀 -->
    <p class="subtitle">
      7년 차 아키텍트가 이끄는 복세편살 개발 스튜디오.<br />
      실패 없는 MVP 개발부터 대규모 트래픽의 엔터프라이즈 시스템까지.
    </p>

    <!-- CTA 버튼들 -->
    <div class="hero-btns">
      <a href="#contact" class="btn-primary">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        무료 견적 받기
      </a>
      <a href="#portfolio" class="btn-secondary">
        포트폴리오 보기
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>

    <!-- 신뢰 지표 -->
    <div class="trust-bar">
      <div class="trust-item">
        <span class="trust-num">7<span class="trust-unit">년</span></span>
        <span class="trust-label">개발 경력</span>
      </div>
      <div class="trust-divider"></div>
      <div class="trust-item">
        <span class="trust-num">5<span class="trust-unit">+</span></span>
        <span class="trust-label">완성 프로젝트</span>
      </div>
      <div class="trust-divider"></div>
      <div class="trust-item">
        <span class="trust-num">GS<span class="trust-unit"> 외</span></span>
        <span class="trust-label">대기업 레퍼런스</span>
      </div>
      <div class="trust-divider"></div>
      <div class="trust-item">
        <span class="trust-num">1<span class="trust-unit">개월</span></span>
        <span class="trust-label">하자보수 보증</span>
      </div>
    </div>
  </div>

  <!-- 스크롤 인디케이터 -->
  <div class="scroll-indicator" aria-hidden="true">
    <div class="scroll-mouse">
      <div class="scroll-wheel"></div>
    </div>
    <span>스크롤</span>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 120px 0 80px;
  }

  /* ---- 배경 오브 ---- */
  .bg-orbs {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0;
    animation: orb-appear 1.5s ease forwards, float 12s ease-in-out infinite;
  }

  .orb-1 {
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.45) 0%, transparent 70%);
    top: -200px;
    left: -150px;
    animation-delay: 0.2s, 0s;
    animation-duration: 1.5s, 14s;
  }

  .orb-2 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%);
    bottom: -100px;
    right: -100px;
    animation-delay: 0.5s, -4s;
    animation-duration: 1.5s, 11s;
  }

  .orb-3 {
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%);
    top: 40%;
    left: 60%;
    animation-delay: 0.8s, -7s;
    animation-duration: 1.5s, 9s;
  }

  @keyframes orb-appear {
    to { opacity: 1; }
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(25px, -35px) scale(1.04); }
    66% { transform: translate(-15px, 20px) scale(0.97); }
  }

  /* ---- 그리드 오버레이 ---- */
  .grid-overlay {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse at center, black 20%, transparent 75%);
    pointer-events: none;
  }

  /* ---- 콘텐츠 ---- */
  .hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .hero-content.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ---- 뱃지 ---- */
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 7px 16px;
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: 100px;
    font-size: 13px;
    font-weight: 600;
    color: #93c5fd;
    margin-bottom: 32px;
    animation: badge-glow 3s ease-in-out infinite;
  }

  .badge-dot {
    width: 7px;
    height: 7px;
    background: #3b82f6;
    border-radius: 50%;
    animation: pulse-dot 2s ease-in-out infinite;
  }

  @keyframes pulse-dot {
    0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.6); }
    50% { box-shadow: 0 0 0 5px rgba(59, 130, 246, 0); }
  }

  @keyframes badge-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); }
    50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.25); }
  }

  /* ---- 헤드라인 ---- */
  h1 {
    font-size: clamp(44px, 7vw, 88px);
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.04em;
    color: var(--text);
    margin-bottom: 28px;
  }

  /* ---- 서브타이틀 ---- */
  .subtitle {
    font-size: clamp(16px, 2vw, 19px);
    color: var(--text-secondary);
    line-height: 1.8;
    max-width: 520px;
    margin-bottom: 44px;
  }

  /* ---- 버튼 ---- */
  .hero-btns {
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 72px;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 15px 28px;
    background: var(--gradient);
    color: white;
    font-size: 15px;
    font-weight: 700;
    border-radius: 100px;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 0 40px rgba(59, 130, 246, 0.3);
  }

  .btn-primary:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 40px rgba(59, 130, 246, 0.5);
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 15px 24px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid var(--border-hover);
    color: var(--text);
    font-size: 15px;
    font-weight: 600;
    border-radius: 100px;
    transition: background 0.2s, border-color 0.2s, transform 0.2s;
  }

  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }

  /* ---- 신뢰 지표 ---- */
  .trust-bar {
    display: flex;
    align-items: center;
    gap: 32px;
    padding: 24px 40px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border);
    border-radius: 20px;
    backdrop-filter: blur(10px);
  }

  .trust-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .trust-num {
    font-size: 26px;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.03em;
    line-height: 1;
  }

  .trust-unit {
    font-size: 16px;
    font-weight: 600;
    color: var(--blue-light);
  }

  .trust-label {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-muted);
    white-space: nowrap;
  }

  .trust-divider {
    width: 1px;
    height: 40px;
    background: var(--border);
  }

  /* ---- 스크롤 인디케이터 ---- */
  .scroll-indicator {
    position: absolute;
    bottom: 36px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    animation: scroll-bounce 2.5s ease-in-out infinite;
  }

  .scroll-mouse {
    width: 24px;
    height: 38px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 6px;
  }

  .scroll-wheel {
    width: 3px;
    height: 8px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 2px;
    animation: scroll-wheel 2s ease-in-out infinite;
  }

  .scroll-indicator span {
    font-size: 11px;
    font-weight: 500;
    color: var(--text-muted);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  @keyframes scroll-bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(6px); }
  }

  @keyframes scroll-wheel {
    0% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(10px); }
  }

  /* ---- 반응형 ---- */
  @media (max-width: 768px) {
    h1 { font-size: 38px; }
    .trust-bar {
      gap: 20px;
      padding: 18px 24px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .trust-num { font-size: 22px; }
    .trust-divider { display: none; }
    .scroll-indicator { display: none; }
  }

  @media (max-width: 480px) {
    .hero-btns { flex-direction: column; width: 100%; }
    .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
  }
</style>
