import lenis from './lenis';
import VideoPlayer from './yt-player-alt';

function startDialog() {
  const dialogElements = document.querySelectorAll('[data-dialog-element]');

  let isOpened = false;

  dialogElements.forEach((dialogElement) => {
    const openButton = dialogElement.querySelector('[data-dialog-open-btn]');
    const dialog = dialogElement.querySelector('dialog');
    let player;

    if (dialogElement.classList.contains('yt-video')) {
      player = new VideoPlayer(dialogElement);
    }

    openButton.addEventListener('click', () => {
      openOnButtonClick(dialog);

      if (player) {
        player.playVideoToggle();
      }
    });
    dialog.addEventListener('click', (e) => {
      closeOnBackDropClick(e);

      if (player) {
        player.playVideoToggle();
      }
    });
  });

  function openOnButtonClick(dialogElement) {
    if (isOpened) {
      return;
    }
    isOpened = true;
    lenis.stop();
    dialogElement.showModal();
  }

  function closeOnBackDropClick(e) {
    const dialogElement = e.currentTarget;
    const closeButton = dialogElement.querySelector('[data-dialog-close-btn]');
    const isClickedOnBackDrop = e.target === dialogElement;
    const isClickedOnCloseButton = e.target === closeButton;

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
