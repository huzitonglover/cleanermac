// 语言：?lang=en / ?lang=zh 优先，其次是上次的选择，最后看浏览器语言
(function () {
  var root = document.documentElement;
  var q = new URLSearchParams(location.search).get("lang");
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var lang = q ? (q.indexOf("zh") === 0 ? "zh-Hans" : "en")
    : saved || ((navigator.language || "").indexOf("zh") === 0 ? "zh-Hans" : "en");
  root.lang = lang;

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".lang");
    if (!btn) return;
    btn.addEventListener("click", function () {
      lang = root.lang === "en" ? "zh-Hans" : "en";
      root.lang = lang;
      try { localStorage.setItem("lang", lang); } catch (e) {}
    });
  });
})();
