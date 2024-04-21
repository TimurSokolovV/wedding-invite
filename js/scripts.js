var $modalButton,
  $modal,
  $form,
  $j = jQuery.noConflict(!0);

function performPostRequest(url, data, callback) {
  performRequest("POST", url, data, callback);
}

function performGetRequest(url, data, callback) {
  performRequest("GET", url, data, callback);
}

function performRequest(method, url, data, callback) {
  $j.ajax({
    type: method,
    dataType: "JSON",
    url: url,
    data: data,
    beforeSend: function () {
      $modalButton.attr("disabled", !0);
    },
    error: function () {
      showError();
    },
    success: function (response) {
      if (response && response.status) {
        toastr.info(response.reason);
        if (callback) callback(response);
      } else if (response && !response.status) {
        if (response.errors.length > 0) {
          showError(response.errors[0].message);
        } else {
          showError(response.reason);
        }
      }
    },
    complete: function () {
      $modalButton.attr("disabled", !1);
    },
  });
}

function showError(message) {
  message
    ? toastr.error(message)
    : toastr.error("Возника ошибка, попробуйте позже");
}

$j(document).ready(function () {
  new WOW().init();

  $j("#invite-actions").on("click", ".invite-action", function (event) {
    $modalButton = $j(this);
    $modal = $j("#modal-guest-" + $modalButton.data("mode"));
    $modal.modal("show");
  });

  $j(".modal .btn-send").on("click", function (event) {
    event.preventDefault();
    $modalButton = $j(this);
    $form = $modalButton.closest("form");
    $sectionGuest = $j(".section-body, #section-invite .section-body");
    $modalChange = $j("#modal-guest-change");

    performPostRequest(
      $form.attr("action"),
      $form.serialize(),
      function (response) {
        if ("accept" === response.data.mode) {
          if (response.data.html.btn_wrapper) {
            $sectionGuest
              .find(".btn-wrapper")
              .replaceWith(response.data.html.btn_wrapper);
          }
          if (response.data.html.accept_note) {
            $sectionGuest
              .find(".accept-note")
              .replaceWith(response.data.html.accept_note);
          }
          if (response.data.html.tablenum) {
            $sectionGuest
              .find(".accept-note")
              .after(response.data.html.tablenum);
          }
          $modalChange
            .find('select[name="guest[count]"]')
            .val(response.data.item.count);
          $modalChange
            .find('textarea[name="guest[comment]"]')
            .val(response.data.item.comment);
          $modalChange
            .find('input[name="guest[email]"]')
            .val(response.data.item.email);
        } else if ("decline" === response.data.mode) {
          $sectionGuest.find(".btn-wrapper").empty();
          if (response.data.html.accept_note) {
            $sectionGuest
              .find(".accept-note")
              .replaceWith(response.data.html.accept_note);
          }
          $modalChange
            .find('select[name="guest[count]"]')
            .val(response.data.item.count);
          $modalChange
            .find('textarea[name="guest[comment]"]')
            .val(response.data.item.comment);
          $modalChange
            .find('input[name="guest[email]"]')
            .val(response.data.item.email);
        }

        $modal.modal("hide");
      }
    );
  });

  $j("#pool .btn-send, #section-pool .btn-send").on("click", function (event) {
    event.preventDefault();
    $modalButton = $j(this);
    performPostRequest(
      $modalButton.closest("form").attr("action"),
      $form.serialize(),
      function (response) {}
    );
  });

  $j(".nav li a").on("click", function (event) {
    event.preventDefault();
    var href = $j(this).attr("href");
    var offsetTop = $j(href).offset().top + 40;
    var scrollTop = offsetTop - 40 < 0 ? 0 : offsetTop - 40;
    $j("body, html")
      .animate({ scrollTop: offsetTop }, 300)
      .animate({ scrollTop: scrollTop }, 600);
  });

  $j(".smooth-scroll").on("click", function (event) {
    event.preventDefault();
    var href = $j(this).find("a").attr("href");
    var offsetTop = $j(href).offset()?.top - 42;
    $j("body, html").animate({ scrollTop: offsetTop }, 400);
  });

  $j(window).on("scroll", function () {
    window.pageYOffset > window.innerHeight / 2
      ? $j("#menu").addClass("scroll")
      : $j("#menu").removeClass("scroll");
  });

  $j("#totop .arrow, #section-totop .arrow").on("click", function (event) {
    $j("body, html").animate({ scrollTop: 0 }, 500);
  });

  toastr.options = {
    closeButton: !0,
    debug: !1,
    newestOnTop: !1,
    progressBar: !1,
    positionClass: "toast-top-full-width",
    preventDuplicates: !1,
    onclick: null,
    showDuration: "100",
    hideDuration: "1000",
    timeOut: "10000",
    extendedTimeOut: "500",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  location.pathname.includes("preview");
});
