/* Central registry of the 3 MS Form URLs. Update these three values once the
   forms are created in the KU O365 tenant — every CTA button across all pages
   reads from here via the data-form attribute. */
window.KU_FORMS = {
  faculty: "https://forms.office.com/r/jT4uRqy1jc",
  students: "https://forms.office.com/r/77nQqkVevU",
  employees: "https://forms.office.com/r/xW5MkPuzN0",
};

document.addEventListener("DOMContentLoaded", function () {
  // Arabic pages open the form's Arabic responder view (MS Forms Multilingual).
  var pageIsAr = (document.documentElement.lang || "").indexOf("ar") === 0;
  document.querySelectorAll("[data-form]").forEach(function (el) {
    var url = window.KU_FORMS[el.getAttribute("data-form")];
    if (url && url !== "#") {
      if (pageIsAr) {
        url += (url.indexOf("?") === -1 ? "?" : "&") + "lang=ar-SA";
      }
      el.href = url;
      el.target = "_blank";
      el.rel = "noopener";
    } else {
      el.href = "#";
      el.setAttribute("aria-disabled", "true");
      el.title = "Sign-up form coming soon";
    }
  });

  // Inject the partner-logos strip into the footer of every page.
  // Drop official Google Cloud / Deloitte SVGs into the same asset filenames to swap.
  var footer = document.querySelector("footer");
  if (footer && !footer.querySelector(".partner-logos")) {
    var isAr = (document.documentElement.lang || "").indexOf("ar") === 0;
    // Derive the assets/ base from the already-loaded stylesheet href.
    var sheet = document.querySelector('link[rel="stylesheet"]');
    var base = sheet
      ? sheet.getAttribute("href").replace(/style\.css$/, "")
      : "assets/";
    var strip = document.createElement("div");
    strip.className = "partner-logos";
    strip.innerHTML =
      '<span class="pl-label">' +
      (isAr ? "بالشراكة مع" : "In partnership with") +
      "</span>" +
      '<img src="' +
      base +
      'logo-google-cloud.svg" alt="Google Cloud">' +
      '<img src="' +
      base +
      'logo-deloitte.svg" alt="Deloitte">';
    footer.parentNode.insertBefore(strip, footer);
  }
});
