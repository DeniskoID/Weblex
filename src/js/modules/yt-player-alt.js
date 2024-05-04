export default class VideoPlayer {
  constructor(videoContainer) {
    this.videoContainer = videoContainer;
    this.videoStarted = false;
    this.iframe = null;
    this.container = videoContainer.querySelector('.yt-video-container');
    this.link = videoContainer.querySelector('.yt-video-link');
    this.button = videoContainer.querySelector('.yt-video-button');
    this.id = this.parseMediaURL(this.link);
  }

  /**
   * Переключатель воспроизведения видео.
   */
  playVideoToggle() {
    if (!this.videoStarted) {
      this.videoStarted = true;
      this.createIframe();
    } else {
      this.destroyIframe();
      this.videoStarted = false;
    }
  }

  /**
   * Создание iframe.
   */
  createIframe() {
    if (this.iframe) {
      return;
    }
    const iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', this.generateURL(this.id));
    iframe.classList.add('yt-video-embed');
    this.container.appendChild(iframe);
    this.iframe = iframe;

    return iframe;
  }

  parseMediaURL(link) {
    const regexp = /=(.*?)(?=&|$)/;

    const url = link.href;
    const match = url.match(regexp);

    return match ? match[1] : '';
  }

  /**
   * Генерация URL для iframe.
   */
  generateURL(id) {
    const query = '?rel=0&showinfo=0&autoplay=1';

    return `https://www.youtube.com/embed/${id}${query}`;
  }

  /**
   * Удаление iframe.
   */
  destroyIframe() {
    if (this.iframe) {
      this.iframe.remove();
      this.iframe = null;
    }
  }

  init() {
    this.button.addEventListener('click', () => {
      this.playVideoToggle();
    });
  }
}
