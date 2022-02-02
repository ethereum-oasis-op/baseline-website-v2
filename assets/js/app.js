var YT_API_KEY = "AIzaSyCcUf1Nu86h7muKT3dDNhjKT7STCxumZLo";
var PLAYLIST_ID = "PLxmhMSa49Q1CVwTdcUNeoqoME6GRwtSTA";
var elem = document.getElementById("baseline-show");

if (elem) {
  fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=1&key=${YT_API_KEY}`
  )
    .then((res) => res.json())
    .then(({ items }) => {
      if (items && items.length) {
        const { snippet } = items[0];
        if (snippet) {
          elem.setAttribute(
            elem.hasAttribute('data-src') ? "data-src" : "src",
            `https://www.youtube.com/embed/${snippet.resourceId.videoId}`
          );
        }
      }
    });
}

(function () {
  'use strict';
  const smoothScrollLinks = document.getElementsByClassName('smooth-scroll');

  const easeInOutQuad = function (t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const scrollToEl = (
    startTime,
    currentTime,
    duration,
    scrollEndElemTop,
    startScrollOffset
  ) => {
    const runtime = currentTime - startTime;
    let progress = runtime / duration;

    progress = Math.min(progress, 1);

    const ease = easeInOutQuad(progress);

    window.scroll(0, startScrollOffset + scrollEndElemTop * ease);
    if (runtime < duration) {
      window.requestAnimationFrame((timestamp) => {
        const currentTime = timestamp || new Date().getTime();
        scrollToEl(
          startTime,
          currentTime,
          duration,
          scrollEndElemTop,
          startScrollOffset
        );
      });
    }
  };

  if (smoothScrollLinks.length > 0) {
    for (let i = 0; i < smoothScrollLinks.length; i++) {
      const smoothScrollLink = smoothScrollLinks[i];

      smoothScrollLink.addEventListener('click', function (e) {
        e.preventDefault();
        const link = e.target.closest('.smooth-scroll');
        const targetId = link.href.split('#')[1];
        const target = document.getElementById(targetId);
        const duration = link.getAttribute('data-duration') || 1000;

        if (!target) return;

        window.requestAnimationFrame((timestamp) => {
          const stamp = timestamp || new Date().getTime();
          const start = stamp;

          const startScrollOffset = window.pageYOffset;
          const scrollEndElemTop = target.getBoundingClientRect().top;

          scrollToEl(
            start,
            stamp,
            duration,
            scrollEndElemTop,
            startScrollOffset
          );
        });
      });
    }
  }
})();
