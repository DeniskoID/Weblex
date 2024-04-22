import lenis from './lenis';

function startDialog() {
  const dialogElements = document.querySelectorAll('[data-dialog-element]');

  let isOpened = false;

  dialogElements.forEach((dialogElement) => {
    const openButton = dialogElement.querySelector('[data-dialog-open-btn]');
    const dialog = dialogElement.querySelector('dialog');

    openButton.addEventListener('click', () => openOnButtonClick(dialog));
    dialog.addEventListener('click', closeOnBackDropClick);
  });

  function openOnButtonClick(dialogElement) {
    if (isOpened) {
      return;
    }
    isOpened = true;
    lenis.stop();
    dialogElement.showModal();
  }

  function closeOnBackDropClick({ currentTarget, target }) {
    const dialogElement = currentTarget;
    const closeButton = dialogElement.querySelector('[data-dialog-close-btn]');
    const isClickedOnBackDrop = target === dialogElement;
    const isClickedOnCloseButton = target === closeButton;

    if (isClickedOnBackDrop) {
      dialogElement.close();
      isOpened = !isOpened;
      lenis.start();
    }

    if (isClickedOnCloseButton) {
      isOpened = !isOpened;
      lenis.start();
    }
  }
}

export default startDialog;
