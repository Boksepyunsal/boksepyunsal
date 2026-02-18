/**
 * Svelte action: 스크롤 시 요소를 부드럽게 나타내는 애니메이션
 */
export function reveal(node, { delay = 0, y = 40, duration = 700, once = true } = {}) {
  Object.assign(node.style, {
    opacity: '0',
    transform: `translateY(${y}px)`,
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform',
  });

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        Object.assign(node.style, {
          opacity: '1',
          transform: 'translateY(0)',
        });
        if (once) observer.disconnect();
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}

/**
 * Svelte action: 수평 방향 스케일 & 페이드 인
 */
export function revealScale(node, { delay = 0, duration = 600 } = {}) {
  Object.assign(node.style, {
    opacity: '0',
    transform: 'scale(0.92)',
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform',
  });

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        Object.assign(node.style, {
          opacity: '1',
          transform: 'scale(1)',
        });
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
