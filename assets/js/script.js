/*
* HSCore
* @version: 2.0.0 (Mon, 25 Nov 2019)
* @requires: jQuery v3.0 or later
* @author: HtmlStream
* @event-namespace: .HSCore
* @license: Htmlstream Libraries (https://htmlstream.com/licenses)
* Copyright 2020 Htmlstream
*/
'use strict';

$.extend({
  HSCore: {
    init: function () {
      $(document).ready(function () {
        // Botostrap Tootltips
        $('[data-toggle="tooltip"]').tooltip();

        // Bootstrap Popovers
        $('[data-toggle="popover"]').popover();
      });
    },

    components: {}
  }
});

$.HSCore.init();


$(document).on('ready', function () {
    // initialization of header
    var header = new HSHeader($('#header')).init();
  });

  //Active class
  function setActiveNavLink() {
    let navLinks = document.querySelectorAll("#navBarWithDropdown .navbar-nav-item");
    let currentPage = window.location.pathname.split("/").pop(); // Récupère le nom du fichier HTML

    if (currentPage === "") {
        currentPage = "index.html"; // Par défaut, considère index.html si l'URL est vide
    }

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}




