(function () {
  document
    .querySelector("#share-twitter")
    .addEventListener("click", function (e) {
      e.preventDefault();

      var urlAPartager = this.getAttribute("data-url");
      var url =
        "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent("titre du site");
      "&url=" + encodeURIComponent(urlAPartager);

      window.open(
        url,
        "Partager sur Twitter",
        (width = 640),
        (height = 320),
        (top = 100),
        (left = 100)
      );
    });

  document
    .querySelector("#share-facebook")
    .addEventListener("click", function (e) {
      e.preventDefault();

      var urlAPartager = this.getAttribute("data-url"),
          url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(urlAPartager);

      window.open(
        url,
        "Partager sur Twitter",
        (width = 640),
        (height = 320),
        (top = 100),
        (left = 100)
      );
    });

  document
    .querySelector("#share-gplus")
    .addEventListener("click", function (e) {
      e.preventDefault();

      var urlAPartager = this.getAttribute("data-url")
          url = "https://plus.google.com/share?url=" + encodeURIComponent(urlAPartager);

      window.open(
        url,
        "Partager sur Twitter",
        (width = 640),
        (height = 320),
        (top = 100),
        (left = 100)
      );
    });

  document
    .querySelector("#share-linkedin")
    .addEventListener("click", function (e) {
      e.preventDefault();

      var urlAPartager = this.getAttribute("data-url"),
          url = "https://www.linkedin.com/shareArticle?url=" + encodeURIComponent(urlAPartager);

      window.open(
        url,
        "Partager sur Twitter",
        (width = 640),
        (height = 320),
        (top = 100),
        (left = 100)
      );
    });
})();
