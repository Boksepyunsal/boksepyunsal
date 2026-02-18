<script>
  const year = new Date().getFullYear();
</script>

<footer>
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="logo">
          <img src="/logo.png" alt="복세편살 로고" class="logo-img" />
          <span class="logo-text">복세편살</span>
        </div>
        <p class="brand-desc">
          기술 부채 없는 비즈니스 성장을 설계하는<br />
          개발 스튜디오입니다.
        </p>
      </div>

      <div class="footer-links">
        <div class="link-group">
          <h4>서비스</h4>
          <ul>
            <li><a href="#services">MVP & Startup</a></li>
            <li><a href="#services">Enterprise System</a></li>
            <li><a href="#services">Tech Consulting</a></li>
          </ul>
        </div>
        <div class="link-group">
          <h4>회사</h4>
          <ul>
            <li><a href="#portfolio">포트폴리오</a></li>
            <li><a href="#process">작업 프로세스</a></li>
            <li><a href="#knowledge">지식 공유</a></li>
          </ul>
        </div>
        <div class="link-group">
          <h4>연락처</h4>
          <ul>
            <li><a href="mailto:boksepyunsal24@gmail.com">이메일</a></li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfG617zgP3HbNcN-qJC2apfu-buzRXRaasaqOceghlgXpGiuQ/viewform?usp=publish-editor" target="_blank" rel="noopener">견적 문의</a></li>
            <li><a href="#contact">카카오톡</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-divider"></div>

    <div class="footer-bottom">
      <div class="biz-info">
        <span>상호명: 복세편살</span>
        <span class="dot">·</span>
        <span>대표: 이재호</span>
        <span class="dot">·</span>
        <span>사업자등록번호: 590-53-00872</span>
        <span class="dot">·</span>
        <span>서울 (미팅 가능)</span>
      </div>
      <p class="copyright">© {year} 복세편살 개발 스튜디오. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  footer {
    border-top: 1px solid var(--border);
    padding: 60px 0 40px;
  }

  .footer-top {
    display: flex;
    gap: 80px;
    margin-bottom: 48px;
  }

  .footer-brand {
    flex-shrink: 0;
    min-width: 220px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
  }

  .logo-img {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    object-fit: cover;
    flex-shrink: 0;
  }

  .logo-text {
    font-size: 16px;
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.02em;
  }

  .brand-desc {
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.8;
  }

  .footer-links {
    display: flex;
    gap: 60px;
    flex: 1;
    justify-content: flex-end;
  }

  .link-group h4 {
    font-size: 12px;
    font-weight: 700;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 16px;
  }

  .link-group ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .link-group a {
    font-size: 14px;
    color: var(--text-muted);
    transition: color 0.2s;
  }

  .link-group a:hover {
    color: var(--text);
  }

  .footer-divider {
    height: 1px;
    background: var(--border);
    margin-bottom: 28px;
  }

  .footer-bottom {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .biz-info {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 12px;
    color: var(--text-muted);
  }

  .dot {
    color: var(--text-muted);
  }

  .copyright {
    font-size: 12px;
    color: var(--text-muted);
  }

  @media (max-width: 768px) {
    .footer-top {
      flex-direction: column;
      gap: 40px;
    }
    .footer-links {
      gap: 32px;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    .biz-info {
      flex-direction: column;
      gap: 4px;
    }
    .dot { display: none; }
  }
</style>
