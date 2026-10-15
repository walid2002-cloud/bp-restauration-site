export function scrollToSection(id: string) {
  if (id === 'accueil') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const element = document.getElementById(id);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top, behavior: 'smooth' });
}
