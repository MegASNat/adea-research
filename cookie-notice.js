(function () {
  var KEY = 'adea-cookie-notice';
  try { if (localStorage.getItem(KEY) === 'ok') return; } catch (e) {}
  var bar = document.createElement('div');
  bar.setAttribute('role', 'region');
  bar.setAttribute('aria-label', 'Cookie notice');
  bar.style.cssText = 'position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:640px;margin:0 auto;background:#0F3040;color:#FFF4DE;border-radius:18px;padding:16px 18px;display:flex;gap:14px;align-items:center;flex-wrap:wrap;box-shadow:0 10px 30px rgba(15,48,64,.25);font-family:Nunito,system-ui,sans-serif;font-size:14.5px;line-height:1.5';
  bar.innerHTML = '<p style="margin:0;flex:1 1 300px">🍪 We keep cookies to a minimum: no ads, no tracking. This site only remembers that you closed this notice. <a href="/cookies" style="color:#FFCB56;font-weight:700">Cookie notice</a></p>' +
    '<button type="button" style="border:0;border-radius:999px;background:#FFCB56;color:#0F3040;font:800 14px Nunito,system-ui,sans-serif;padding:10px 20px;cursor:pointer">Got it</button>';
  bar.querySelector('button').addEventListener('click', function () {
    try { localStorage.setItem(KEY, 'ok'); } catch (e) {}
    bar.remove();
  });
  document.body.appendChild(bar);
})();
