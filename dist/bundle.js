
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var e = [],
  t = [];
function n(n, r) {
  if (n && "undefined" != typeof document) {
    var a,
      s = true === r.prepend ? "prepend" : "append",
      d = true === r.singleTag,
      i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];
    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();
    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
  }
  function c() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
    var a = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, e), e;
  }
}

var css = "body {\n    background-color: black;\n    color: white;\n}";
n(css,{});

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADSCAYAAACoyDmYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF62lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOC0xMC0wMlQxMDozNjo1NyswMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTgtMTAtMDJUMTY6MTc6NDcrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMTAtMDJUMTY6MTc6NDcrMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjUyZTg2YWUtMWUzNy0wNTRmLWE2NmItYTg3Y2ZhOGNmMzNiIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NmM0NDRjNWYtOWU5NC02ZDQwLTk1NzEtMjcyMzU3YTQ2ODg5IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MmM3YzQ0OWEtNmU2OC02MDRiLWFiOGYtMTk0Y2NlYWVlNGZjIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyYzdjNDQ5YS02ZTY4LTYwNGItYWI4Zi0xOTRjY2VhZWU0ZmMiIHN0RXZ0OndoZW49IjIwMTgtMTAtMDJUMTA6MzY6NTcrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjY1MmU4NmFlLTFlMzctMDU0Zi1hNjZiLWE4N2NmYThjZjMzYiIgc3RFdnQ6d2hlbj0iMjAxOC0xMC0wMlQxNjoxNzo0NyswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6o+D/gAAADkElEQVR4nO3dPW4USRiAYRtxAS6wEoiIiIx0fYjdAMwZSCFCRBwAaU9gOdhLrEPmAhDwEzglIIAcEjIIyqLerfbM88St7h7Nqwo+laqPjw7Pt0XPPV703CVurH4B9pOwSAiLhLBICIuEsEgIi4SwSAiLxD5Ng4cm6rt/7k996Ou3X4aue/Lqw+gt9+I/sWKREBYJYZEQFglhkRAWCWGREBYJYZG4DlPeJRP12Q5tQm/FIiEsEsIiISwSwiIhLBLCIiEsEsIisenp7Q+rTofZuk3/d1YsEsIiISwSwiIhLBLCIiEsEsIiISwSm57eXtHQhP7pu7mD/MvdxdB156cno7fci//EikVCWCSERUJYJIRFQlgkhEVCWCSEReLm6hf4v728O/d+j3Zz77cvrFgkhEVCWCSERUJYJIRFQlgkhEVCWCSERUJYJIRFQlgkhEVCWCSERUJYJIRFQlgkDm7P+6hn71e/wfVmxSIhLBLCIiEsEsIiISwSwiIhLBLCInEdJu+H9oXV0d+76fPgrVgkhEVCWCSERUJYJIRFQlgkhEVCWCRWTt6nfhF19vntsz08+2/q/c5PTzY9obdikRAWCWGREBYJYZEQFglhkRAWCWGRKKaym56orzpF5nJ3seS556cno5dObcGKRUJYJIRFQlgkhEVCWCSERUJYJIRF4irTVhP1DZk9yZ89obdikRAWCWGREBYJYZEQFglhkRAWCWGR2Pw574c2UR/1x4M/h65btdfeikVCWCSERUJYJIRFQlgkhEVCWCSEReL4aHAv++2/xvayf/z3d17nZ3f+nnu/VT6/eTF03a17z6c+9+vl2dT7fdo9HrrOikVCWCSERUJYJIRFQlgkhEVCWCSERWLze95HrZpsj1r13FWsWCSERUJYJIRFQlgkhEVCWCSERUJYJPZm8n5ok+2ts2KREBYJYZEQFglhkRAWCWGREBYJYZGY/oXV2afS7MtpM7OtOkXmyBdWWUlYJIRFQlgkhEVCWCSERUJYJIRFYvN73ldN6Ld+es3WWbFICIuEsEgIi4SwSAiLhLBICIuEsEhcZc/7KF9s/YXZe9RHzd7LPsqKRUJYJIRFQlgkhEVCWCSERUJYJIRFopi8j5o6oZ9t1aR81KqJ+igrFglhkRAWCWGREBYJYZEQFglhkRAWiZWT91FrRu/bt+n/zopFQlgkhEVCWCSERUJYJIRFQlgkhEXiOweUa5DUnExRAAAAAElFTkSuQmCC";

function title() {
  const title = document.createElement('h1');
  title.textContent = 'I love JavaScript';
  document.body.appendChild(title);
}

const i = document.createElement('img');
i.src = img;
document.body.appendChild(i);
title();
console.log('Hello World!');
