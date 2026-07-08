/* Soft client-side access gate. */
(function () {
  var FULL_SHA = "0bd4c0a74175e4aff2d47dafb4683b835d4dfb864371428ef368ef5f99cbfda5";
  var V1_SHA   = "938d9395d95dcfa7b1fffc25db953c4817aa6050d8ca855720722344765288b0";
  var LS_FULL = "dsp_full", LS_V1 = "dsp_v1";

  var st = document.createElement("style");
  st.textContent = "html.dsp-locked body{display:none!important}";
  (document.head || document.documentElement).appendChild(st);
  document.documentElement.className += " dsp-locked";

  function isV1Page() { return location.pathname.indexOf("/benchmark1/") !== -1; }
  function reveal() {
    document.documentElement.className =
      document.documentElement.className.replace(/\bdsp-locked\b/g, "").trim();
    var o = document.getElementById("dsp-gate"); if (o) o.remove();
  }
  function get(k) { try { return localStorage.getItem(k) === "1"; } catch (e) { return false; } }
  function set(k) { try { localStorage.setItem(k, "1"); } catch (e) {} }
  function sha(t) {
    return crypto.subtle.digest("SHA-256", new TextEncoder().encode(t)).then(function (b) {
      return Array.prototype.map.call(new Uint8Array(b),
        function (x) { return x.toString(16).padStart(2, "0"); }).join("");
    });
  }

  /* Fast path: already-unlocked visitors reveal without waiting. */
  if (get(LS_FULL) || (isV1Page() && get(LS_V1))) { reveal(); return; }

  function prompt() {
    var o = document.createElement("div");
    o.id = "dsp-gate";
    o.style.cssText = "position:fixed;inset:0;z-index:99999;display:flex;align-items:center;" +
      "justify-content:center;background:#0d1b2a;font-family:'Segoe UI',system-ui,sans-serif";
    o.innerHTML =
      '<div style="background:#fff;border-radius:14px;padding:34px 32px;max-width:340px;' +
      'width:88%;box-shadow:0 10px 40px rgba(0,0,0,.35);text-align:center">' +
      '<h2 style="margin:0 0 6px;font-size:20px;color:#14324f">DuetaSpan</h2>' +
      '<p style="margin:0 0 18px;color:#5a6b7b;font-size:13.5px">Enter the access phrase to continue.</p>' +
      '<input id="dsp-pw" type="password" autofocus placeholder="access phrase" ' +
      'style="width:100%;box-sizing:border-box;padding:11px 13px;border:1px solid #cfd8e3;' +
      'border-radius:9px;font-size:15px;outline:none"/>' +
      '<div id="dsp-err" style="color:#c0392b;font-size:12.5px;height:16px;margin:7px 0 0"></div>' +
      '<button id="dsp-go" style="margin-top:10px;width:100%;padding:11px;border:0;border-radius:9px;' +
      'background:#4a90d9;color:#fff;font-size:15px;font-weight:600;cursor:pointer">Unlock</button></div>';
    document.documentElement.appendChild(o);
    var inp = o.querySelector("#dsp-pw"), err = o.querySelector("#dsp-err");
    function go() {
      sha(inp.value).then(function (h) {
        if (h === FULL_SHA) { set(LS_FULL); reveal(); }
        else { err.textContent = "Incorrect phrase."; inp.value = ""; inp.focus(); }
      });
    }
    o.querySelector("#dsp-go").addEventListener("click", go);
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
    inp.focus();
  }

  function init() {
    var m = /[?&]k=([^&]+)/.exec(location.search);
    var chain = m
      ? sha(decodeURIComponent(m[1])).then(function (h) { if (h === V1_SHA) set(LS_V1); })
      : Promise.resolve();
    chain.then(function () {
      if (get(LS_FULL) || (isV1Page() && get(LS_V1))) reveal();
      else prompt();
    });
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init);
  else init();
})();
