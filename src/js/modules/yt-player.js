const videoSmartStart = () => {
  function findVideos() {
    const videos = document.querySelectorAll('.yt-video');

    for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
    }
  }

  function setupVideo(video) {
    const link = video.querySelector('.yt-video__link');
    const button = document.querySelector('.video-button');
    const id = parseMediaURL(link);

    let videoStarted = false;
    let iframe;

    button.addEventListener('click', () => {
      if (!videoStarted) {
        videoStarted = true;
        iframe = createIframe(id);
        video.appendChild(iframe);
        video.classList.add('video--enabled');
      } else {
        videoStarted = false;
        iframe.remove();
        video.classList.remove('video--enabled');
      }
    });
  }

  function parseMediaURL(link) {
    const regexp = /=(.*?)(?=&|$)/;

    const url = link.href;
    const match = url.match(regexp);

    return match[1];
  }

  function createIframe(id) {
    const iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('yt-video__embed');

    return iframe;
  }

  function generateURL(id) {
    const query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
  }

  findVideos();
};

export default videoSmartStart;
