'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
function scrollIt(element) {
  var duration = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];
  var easing = arguments.length <= 2 || arguments[2] === undefined ? 'linear' : arguments[2];
  var callback = arguments[3];

  // define timing functions
  var easings = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return --t * t * t + 1;
    },
    easeInOutCubic: function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return 1 - --t * t * t * t;
    },
    easeInOutQuart: function easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return 1 + --t * t * t * t * t;
    },
    easeInOutQuint: function easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
  };

  // Returns document.documentElement for Chrome and Safari
  // document.body for rest of the world
  function checkBody() {
    document.documentElement.scrollTop += 1;
    var body = document.documentElement.scrollTop !== 0 ? document.documentElement : document.body;
    document.documentElement.scrollTop -= 1;
    return body;
  }

  var body = checkBody();
  var start = body.scrollTop;
  var startTime = Date.now();

  // Height checks to prevent requestAnimationFrame from infinitely looping
  // If the function tries to scroll below the visible document area
  // it should only scroll to the bottom of the document
  var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  var destination = documentHeight - element.offsetTop < windowHeight ? documentHeight - windowHeight : element.offsetTop;

  function scroll() {
    var now = Date.now();
    var time = Math.min(1, (now - startTime) / duration);
    var timeFunction = easings[easing](time);
    body.scrollTop = timeFunction * (destination - start) + start;

    if (body.scrollTop === destination) {
      callback();
      return;
    }
    requestAnimationFrame(scroll);
  }
  scroll();
}

var links = document.querySelectorAll('a[href^="#"]');

[].concat(_toConsumableArray(links)).filter(function (link) {
  return document.querySelector(link.hash);
}).map(function (link) {
  var noop = function noop() {};
  var target = document.querySelector(link.hash);
  var handler = function handler() {
    return scrollIt(target, 300, 'easeInQuad', noop);
  };
  link.addEventListener('click', handler, false);
});
//# sourceMappingURL=data:application/json;base64,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REgsQ0FDTyxnQkFBUTtBQUNYLE1BQU0sT0FBTyxTQUFQLElBQU8sR0FBTSxDQUFFLENBQXJCO0FBQ0EsTUFBTSxTQUFTLFNBQVMsYUFBVCxDQUF1QixLQUFLLElBQTVCLENBQWY7QUFDQSxNQUFNLFVBQVUsU0FBVixPQUFVO0FBQUEsV0FBTSxTQUFTLE1BQVQsRUFBaUIsR0FBakIsRUFBc0IsWUFBdEIsRUFBb0MsSUFBcEMsQ0FBTjtBQUFBLEdBQWhCO0FBQ0EsT0FBSyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxLQUF4QztBQUNELENBTkgiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vcGF3ZWxncnp5YmVrLmNvbS9wYWdlLXNjcm9sbC1pbi12YW5pbGxhLWphdmFzY3JpcHQvXG5mdW5jdGlvbiBzY3JvbGxJdChlbGVtZW50LCBkdXJhdGlvbiA9IDIwMCwgZWFzaW5nID0gJ2xpbmVhcicsIGNhbGxiYWNrKSB7XG4gIC8vIGRlZmluZSB0aW1pbmcgZnVuY3Rpb25zXG4gIGNvbnN0IGVhc2luZ3MgPSB7XG4gICAgbGluZWFyKHQpIHtcbiAgICAgIHJldHVybiB0O1xuICAgIH0sXG4gICAgZWFzZUluUXVhZCh0KSB7XG4gICAgICByZXR1cm4gdCAqIHQ7XG4gICAgfSxcbiAgICBlYXNlT3V0UXVhZCh0KSB7XG4gICAgICByZXR1cm4gdCAqICgyIC0gdCk7XG4gICAgfSxcbiAgICBlYXNlSW5PdXRRdWFkKHQpIHtcbiAgICAgIHJldHVybiB0IDwgMC41ID8gMiAqIHQgKiB0IDogLTEgKyAoNCAtIDIgKiB0KSAqIHQ7XG4gICAgfSxcbiAgICBlYXNlSW5DdWJpYyh0KSB7XG4gICAgICByZXR1cm4gdCAqIHQgKiB0O1xuICAgIH0sXG4gICAgZWFzZU91dEN1YmljKHQpIHtcbiAgICAgIHJldHVybiAoLS10KSAqIHQgKiB0ICsgMTtcbiAgICB9LFxuICAgIGVhc2VJbk91dEN1YmljKHQpIHtcbiAgICAgIHJldHVybiB0IDwgMC41ID8gNCAqIHQgKiB0ICogdCA6ICh0IC0gMSkgKiAoMiAqIHQgLSAyKSAqICgyICogdCAtIDIpICsgMTtcbiAgICB9LFxuICAgIGVhc2VJblF1YXJ0KHQpIHtcbiAgICAgIHJldHVybiB0ICogdCAqIHQgKiB0O1xuICAgIH0sXG4gICAgZWFzZU91dFF1YXJ0KHQpIHtcbiAgICAgIHJldHVybiAxIC0gKC0tdCkgKiB0ICogdCAqIHQ7XG4gICAgfSxcbiAgICBlYXNlSW5PdXRRdWFydCh0KSB7XG4gICAgICByZXR1cm4gdCA8IDAuNSA/IDggKiB0ICogdCAqIHQgKiB0IDogMSAtIDggKiAoLS10KSAqIHQgKiB0ICogdDtcbiAgICB9LFxuICAgIGVhc2VJblF1aW50KHQpIHtcbiAgICAgIHJldHVybiB0ICogdCAqIHQgKiB0ICogdDtcbiAgICB9LFxuICAgIGVhc2VPdXRRdWludCh0KSB7XG4gICAgICByZXR1cm4gMSArICgtLXQpICogdCAqIHQgKiB0ICogdDtcbiAgICB9LFxuICAgIGVhc2VJbk91dFF1aW50KHQpIHtcbiAgICAgIHJldHVybiB0IDwgMC41ID8gMTYgKiB0ICogdCAqIHQgKiB0ICogdCA6IDEgKyAxNiAqICgtLXQpICogdCAqIHQgKiB0ICogdDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmV0dXJucyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgZm9yIENocm9tZSBhbmQgU2FmYXJpXG4gIC8vIGRvY3VtZW50LmJvZHkgZm9yIHJlc3Qgb2YgdGhlIHdvcmxkXG4gIGZ1bmN0aW9uIGNoZWNrQm9keSgpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICs9IDE7XG4gICAgY29uc3QgYm9keSA9IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICE9PSAwKSA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IGRvY3VtZW50LmJvZHk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAtPSAxO1xuICAgIHJldHVybiBib2R5O1xuICB9XG5cbiAgY29uc3QgYm9keSA9IGNoZWNrQm9keSgpO1xuICBjb25zdCBzdGFydCA9IGJvZHkuc2Nyb2xsVG9wO1xuICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuXG4gIC8vIEhlaWdodCBjaGVja3MgdG8gcHJldmVudCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSBpbmZpbml0ZWx5IGxvb3BpbmdcbiAgLy8gSWYgdGhlIGZ1bmN0aW9uIHRyaWVzIHRvIHNjcm9sbCBiZWxvdyB0aGUgdmlzaWJsZSBkb2N1bWVudCBhcmVhXG4gIC8vIGl0IHNob3VsZCBvbmx5IHNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSBkb2N1bWVudFxuICBjb25zdCBkb2N1bWVudEhlaWdodCA9IE1hdGgubWF4KGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCk7XG4gIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uY2xpZW50SGVpZ2h0O1xuICBjb25zdCBkZXN0aW5hdGlvbiA9IGRvY3VtZW50SGVpZ2h0IC0gZWxlbWVudC5vZmZzZXRUb3AgPCB3aW5kb3dIZWlnaHQgPyBkb2N1bWVudEhlaWdodCAtIHdpbmRvd0hlaWdodCA6IGVsZW1lbnQub2Zmc2V0VG9wO1xuXG4gIGZ1bmN0aW9uIHNjcm9sbCgpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IHRpbWUgPSBNYXRoLm1pbigxLCAoKG5vdyAtIHN0YXJ0VGltZSkgLyBkdXJhdGlvbikpO1xuICAgIGNvbnN0IHRpbWVGdW5jdGlvbiA9IGVhc2luZ3NbZWFzaW5nXSh0aW1lKTtcbiAgICBib2R5LnNjcm9sbFRvcCA9ICh0aW1lRnVuY3Rpb24gKiAoZGVzdGluYXRpb24gLSBzdGFydCkpICsgc3RhcnQ7XG5cbiAgICBpZiAoYm9keS5zY3JvbGxUb3AgPT09IGRlc3RpbmF0aW9uKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2Nyb2xsKTtcbiAgfVxuICBzY3JvbGwoKTtcbn1cblxuY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpO1xuXG5bLi4ubGlua3NdLmZpbHRlcihsaW5rID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobGluay5oYXNoKSlcbiAgLm1hcChsaW5rID0+IHtcbiAgICBjb25zdCBub29wID0gKCkgPT4ge307XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsaW5rLmhhc2gpXG4gICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHNjcm9sbEl0KHRhcmdldCwgMzAwLCAnZWFzZUluUXVhZCcsIG5vb3ApXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKVxuICB9KVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
