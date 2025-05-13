document.addEventListener("DOMContentLoaded", function () {
  const links = {
    JeppeDruedahl: '<a href="https://sites.google.com/view/jeppe-druedahl/" style="color: var(--scolor); font-weight: 600;">Jeppe Druedahl</a>',
    SørenHoveRavn: '<a href="https://sites.google.com/site/sorenhoveravn/" style="color: var(--scolor); font-weight: 600;">Søren Hove Ravn</a>',
    LauraSunderPlassmann: '<a href="https://sites.google.com/site/lsunderplassmann/" style="color: var(--scolor); font-weight: 600;">Laura Sunder-Plassmann</a>',
    JacobMarottSundram: '<a href="https://www.sundram.dk/" style="color: var(--scolor); font-weight: 600;">Jacob Marott Sundram</a>',
    ChristianKastrup: '<a href="https://sites.google.com/view/christianbkastrup" style="color: var(--scolor); font-weight: 600;">Christian B. Kastrup</a>',
  };

  const replaceLinks = () => {
    for (const [className, linkHTML] of Object.entries(links)) {
      document.querySelectorAll(`.${className}`).forEach(span => {
        if (span.innerHTML.trim() === '') {
          span.innerHTML = linkHTML;
        }
      });
    }
  };

  // Initial attempt
  replaceLinks();

  // Watch for dynamic content changes
  const observer = new MutationObserver(replaceLinks);
  observer.observe(document.body, { childList: true, subtree: true });
});
