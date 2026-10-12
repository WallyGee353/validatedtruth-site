/* Shared behavior: menu, checkbox state, and the unconnected signup.
   No cookies, no requests, no analytics. */
(function () {
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  if (nav && toggle) {
    var label = toggle.querySelector(".nav-toggle-label");
    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (label) label.textContent = open ? "Close" : "Menu";
    }
    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  document.querySelectorAll(".check, .wcheck").forEach(function (btn) {
    if (!btn.hasAttribute("type")) btn.type = "button";
    if (!btn.hasAttribute("aria-pressed")) btn.setAttribute("aria-pressed", "false");
    btn.addEventListener("click", function () {
      var group = btn.closest(".checks, .wchecks, tr") || btn.parentElement;
      if (!group) return;
      group.querySelectorAll(".check, .wcheck").forEach(function (b) {
        b.setAttribute("aria-pressed", b.classList.contains("marked") ? "true" : "false");
      });
    });
  });

  document.querySelectorAll("form.signup").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      if (!form.getAttribute("data-endpoint")) {
        e.preventDefault();
      }
    });
  });
})();
