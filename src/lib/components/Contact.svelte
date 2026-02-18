<script>
  import { reveal } from '$lib/actions/reveal.js';
</script>

<section id="contact">
  <div class="container">
    <div class="contact-wrapper" use:reveal>
      <!-- 배경 오브 -->
      <div class="contact-orb orb-1" aria-hidden="true"></div>
      <div class="contact-orb orb-2" aria-hidden="true"></div>

      <div class="contact-inner">
        <div class="section-label">Contact</div>
        <h2>프로젝트를 시작할<br /><span class="gradient-text">준비가 됐나요?</span></h2>
        <p class="contact-desc">
          무료 기술 진단 & 예상 견적서를 받아보세요.<br />
          아이디어 단계여도 괜찮습니다. 먼저 이야기 나눠봅시다.
        </p>

        <div class="contact-cards">
          <a href="mailto:boksepyunsal24@gmail.com" class="contact-card" target="_blank" rel="noopener">
            <div class="card-icon email-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <span class="contact-label">이메일</span>
              <span class="contact-value">boksepyunsal24@gmail.com</span>
            </div>
            <div class="card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </a>

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfG617zgP3HbNcN-qJC2apfu-buzRXRaasaqOceghlgXpGiuQ/viewform?usp=publish-editor" class="contact-card" target="_blank" rel="noopener">
            <div class="card-icon form-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <div>
              <span class="contact-label">견적 문의 (구글폼)</span>
              <span class="contact-value">무료 견적 요청하기</span>
            </div>
            <div class="card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </a>

          <a href="https://open.kakao.com" class="contact-card kakao" target="_blank" rel="noopener">
            <div class="card-icon kakao-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.48 3 2 6.48 2 10.8c0 2.7 1.68 5.07 4.2 6.48l-.96 3.6 4.2-2.76c.84.12 1.68.18 2.56.18 5.52 0 10-3.48 10-7.8C22 6.48 17.52 3 12 3z"/>
              </svg>
            </div>
            <div>
              <span class="contact-label">카카오톡 채널</span>
              <span class="contact-value">바로 채팅하기</span>
            </div>
            <div class="card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </a>

          <div class="contact-card location">
            <div class="card-icon location-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <span class="contact-label">오프라인 미팅</span>
              <span class="contact-value">서울 전 지역 가능</span>
            </div>
          </div>
        </div>

        <!-- 메인 CTA -->
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfG617zgP3HbNcN-qJC2apfu-buzRXRaasaqOceghlgXpGiuQ/viewform?usp=publish-editor" class="main-cta" target="_blank" rel="noopener">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
          무료 기술 진단 & 견적서 요청하기
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>

        <p class="cta-note">24시간 내 회신 드립니다 · 초기 상담 무료</p>
      </div>
    </div>
  </div>
</section>

<style>
  .contact-wrapper {
    position: relative;
    padding: 80px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 32px;
    text-align: center;
    overflow: hidden;
  }

  .contact-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }

  .orb-1 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(212, 168, 83, 0.25) 0%, transparent 70%);
    top: -100px;
    left: -100px;
    animation: float-c1 10s ease-in-out infinite;
  }

  .orb-2 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(45, 106, 79, 0.2) 0%, transparent 70%);
    bottom: -80px;
    right: -60px;
    animation: float-c2 12s ease-in-out infinite;
  }

  @keyframes float-c1 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(20px, -20px); }
  }
  @keyframes float-c2 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-15px, 15px); }
  }

  .contact-inner {
    position: relative;
    z-index: 1;
  }

  h2 {
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 1.15;
    margin-bottom: 20px;
    color: var(--text);
  }

  .contact-desc {
    font-size: 17px;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 48px;
  }

  .contact-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 40px;
    text-align: left;
  }

  .contact-card {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 18px 20px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border);
    border-radius: 14px;
    transition: background 0.2s, border-color 0.2s, transform 0.2s;
    cursor: pointer;
  }

  a.contact-card:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: var(--border-hover);
    transform: translateY(-2px);
  }

  .card-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .email-icon { background: rgba(212, 168, 83, 0.15); color: var(--blue-light); }
  .form-icon { background: rgba(45, 106, 79, 0.15); color: var(--purple-light); }
  .kakao-icon { background: rgba(254, 229, 0, 0.15); color: #fde047; }
  .location-icon { background: rgba(212, 168, 83, 0.1); color: var(--blue-light); }

  .contact-label {
    display: block;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 2px;
  }

  .contact-value {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: var(--text);
  }

  .card-arrow {
    margin-left: auto;
    color: var(--text-muted);
    flex-shrink: 0;
  }

  .main-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 18px 36px;
    background: var(--gradient);
    color: white;
    font-size: 16px;
    font-weight: 700;
    border-radius: 100px;
    transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
    box-shadow: 0 0 60px rgba(212, 168, 83, 0.25);
    margin-bottom: 16px;
  }

  .main-cta:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 60px rgba(212, 168, 83, 0.4);
  }

  .cta-note {
    font-size: 13px;
    color: var(--text-muted);
    margin: 0;
  }

  @media (max-width: 768px) {
    .contact-wrapper { padding: 40px 24px; }
    .contact-cards { grid-template-columns: 1fr; }
    .main-cta { width: 100%; justify-content: center; }
  }
</style>
