(function () {
  var cfg = window.PRIVACY_CONFIG || {};
  var STORAGE_KEY = "privacidad-lang";

  function replaceGameName(text) {
    var name = cfg.gameName || "";
    return (text || "").split("{Juego}").join(name);
  }

  function getLang() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}
    if (saved === "es" || saved === "en") return saved;

    var browser = (navigator.language || "es").toLowerCase();
    return browser.indexOf("es") === 0 ? "es" : "en";
  }

  function render(lang) {
    var dict = (cfg.i18n && cfg.i18n[lang]) || cfg.i18n.es;
    var name = cfg.gameName;

    // Título
    document.title = name ? name + " — " + dict.title : dict.title;
    document.documentElement.lang = lang;

    // Título visible de la página (<h1>)
    var titleEl = document.getElementById("page-title");
    if (titleEl) titleEl.textContent = dict.title;

    // Selector de idioma
    var label = document.getElementById("language-label");
    if (label && cfg.languageLabel) label.textContent = cfg.languageLabel[lang] || "";
    var sel = document.getElementById("language-select");
    if (sel) sel.value = lang;

    // Fecha
    var dateEl = document.getElementById("last-updated");
    if (dateEl) {
      var prefix = dict.lastUpdatedPrefix || "";
      dateEl.textContent = cfg.lastUpdated ? prefix + " " + cfg.lastUpdated : "";
    }

    // Introducción
    var introEl = document.getElementById("intro");
    if (introEl) {
      var introHtml = "";
      if (name) introHtml += "<p><strong>" + name + "</strong></p>";
      (dict.intro || []).forEach(function (t) {
        introHtml += "<p>" + replaceGameName(t) + "</p>";
      });
      introEl.innerHTML = introHtml;
    }

    // Secciones
    var sections = dict.sections || {};
    document.querySelectorAll("section[id]").forEach(function (sec) {
      var data = sections[sec.id];
      if (!data) return;

      // El elemento "content" es el propio section (id).
      var h = sec.querySelector("h2");
      if (!h) {
        h = document.createElement("h2");
        sec.appendChild(h);
      }
      h.textContent = data.title || "";

      // Elimina párrafos y listas viejas
      sec.querySelectorAll("p, ul").forEach(function (el) {
        el.remove();
      });

      (data.paragraphs || []).forEach(function (t) {
        var p = document.createElement("p");
        p.innerHTML = replaceGameName(t);
        sec.appendChild(p);
      });

      if (data.list && data.list.length) {
        var ul = document.createElement("ul");
        data.list.forEach(function (item) {
          var li = document.createElement("li");
          li.textContent = item;
          ul.appendChild(li);
        });
        sec.appendChild(ul);
      }
    });

    // Contacto: añade el enlace de correo al final de la sección s8
    var contactSec = document.getElementById("s8");
    if (contactSec && cfg.contactEmail) {
      // Evita duplicar el enlace si ya existe
      var existing = contactSec.querySelector(".contact-email-link");
      if (existing) existing.remove();
      var a = document.createElement("a");
      a.className = "contact-email-link";
      a.href = "mailto:" + cfg.contactEmail;
      a.textContent = cfg.contactEmail;
      contactSec.appendChild(a);
    }

    // Guardar preferencia
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    var sel = document.getElementById("language-select");
    if (sel) {
      sel.addEventListener("change", function () {
        render(sel.value);
      });
    }
    render(getLang());
  });
})();
