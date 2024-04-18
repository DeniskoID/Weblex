function accordion(accordionClass, panelClass, contentClass) {
  const accordion = document.querySelector(accordionClass);

  accordion.addEventListener('click', (e) => {
    const activePanel = e.target.closest(panelClass);

    if (!activePanel) return;
    toggleAccordion(activePanel);
  });

  function getChild(el, child) {
    return el.parentElement.querySelectorAll(child);
  }

  function toggleAccordion(panelToActivate) {
    const buttons = getChild(panelToActivate, 'button');
    const contents = getChild(panelToActivate, contentClass);
    const panels = getChild(accordion, panelClass);

    const panelButton = panelToActivate.querySelector('button');
    const panelContent = panelToActivate.querySelector(contentClass);

    if (panelToActivate.classList.contains('active-panel')) {
      panelButton.setAttribute('aria-expanded', false);
      panelContent.setAttribute('aria-hidden', true);
      panelToActivate.classList.remove('active-panel');
    } else {
      buttons.forEach((button) => {
        button.setAttribute('aria-expanded', false);
      });

      contents.forEach((content) => {
        content.setAttribute('aria-hidden', true);
      });

      panels.forEach((panel) => {
        panel.classList.remove('active-panel');
      });
      panelButton.setAttribute('aria-expanded', true);
      panelContent.setAttribute('aria-hidden', false);
      panelToActivate.classList.add('active-panel');
    }
  }
}

export default accordion;
