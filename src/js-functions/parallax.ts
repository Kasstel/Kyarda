export function initParallax() {
  const onScroll = () => {
    document.body.style.setProperty('--scrollTop', `${window.scrollY}px`);
    // console.log('scrollTop:', window.scrollY); // для проверки
  };

  // сразу выставим значение при первом рендере
  onScroll();

  window.addEventListener('scroll', onScroll, { passive: true });

  // вернём cleanup, чтобы снять слушатель при размонтировании
  return () => window.removeEventListener('scroll', onScroll);
}