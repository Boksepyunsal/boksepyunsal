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
          리소스를 최적화한 소프트웨어로<br />
          기후변화에 기여합니다.
        </p>
        <div class="social-links">
          <a href="https://github.com/Boksepyunsal" target="_blank" rel="noopener" class="social-btn" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="footer-links">
        <div class="link-group">
          <h4>스토리</h4>
          <ul>
            <li><a href="/#climate">기후 위기 이야기</a></li>
            <li><a href="/#mission">우리의 기여</a></li>
            <li><a href="/#services">서비스 소개</a></li>
            <li><a href="/#event">오픈 이벤트</a></li>
          </ul>
        </div>
        <div class="link-group">
          <h4>서비스</h4>
          <ul>
            <li><a href="/#services">클라우드 마이그레이션</a></li>
            <li><a href="/#services">Kubernetes 인프라</a></li>
            <li><a href="/#services">CI/CD & GitOps</a></li>
            <li><a href="/#services">Serverless 개발</a></li>
          </ul>
        </div>
        <div class="link-group">
          <h4>연락처</h4>
          <ul>
            <li><a href="mailto:boksepyunsal24@gmail.com">이메일</a></li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfG617zgP3HbNcN-qJC2apfu-buzRXRaasaqOceghlgXpGiuQ/viewform?usp=publish-editor" target="_blank" rel="noopener">이벤트 신청</a></li>
            <li><a href="https://open.kakao.com/o/sRJ0h5Fg" target="_blank" rel="noopener">카카오톡</a></li>
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
      <p class="copyright">© {year} 복세편살. 리소스 최적화로 기후에 기여합니다. All rights reserved.</p>
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
    margin-bottom: 20px;
  }

  .social-links {
    display: flex;
    gap: 8px;
  }

  .social-btn {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(100, 72, 46, 0.06);
    border: 1px solid var(--border);
    border-radius: 9px;
    color: var(--text-muted);
    transition: color 0.2s, background 0.2s, border-color 0.2s, transform 0.2s;
  }

  .social-btn:hover {
    color: var(--text);
    background: rgba(100, 72, 46, 0.12);
    border-color: var(--border-hover);
    transform: translateY(-2px);
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
