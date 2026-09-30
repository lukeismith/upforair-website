/**
 * Reveals elements marked with `data-appear` once they scroll into view.
 * The visual transition lives in global.css; this only toggles a class.
 */
export function initAppear(root: ParentNode = document) {
  const targets = root.querySelectorAll<HTMLElement>('[data-appear]');
  if (targets.length === 0) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
  );

  targets.forEach((el) => observer.observe(el));
}
