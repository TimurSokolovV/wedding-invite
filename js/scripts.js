var $modalButton,
  $modal,
  $form,
  $j = jQuery.noConflict(!0);

function showError(message) {
  message
    ? toastr.error(message)
    : toastr.error("Возника ошибка, попробуйте позже");
}

$j(document).ready(function () {
  var isFormSubmitted = localStorage.getItem("isFormSubmitted");

  function toogleRequestActionsVisibility() {
    $j(".invite-buttons").addClass("hide");
    $j(".invite_requested").removeClass("hide");
  }

  if (false) {
    $j(".invite_requested").removeClass("hide");
  } else {
    $j(".invite-buttons").removeClass("hide");
  }

  function validateNameField(data) {
    var nameInput = data.get("name");
    var name = nameInput?.trim();

    if (!name) {
      showError("Пожалуйста, укажите ваше имя");
      return false;
    }
    return true;
  }

  function validateStayOvernightField(data) {
    var mode = data.get("mode");
    if (mode === "decline") return true;

    var stayOvernightInputs = document.querySelectorAll(
      'input[name="stay_overnight"]'
    );
    var isChecked = false;
    stayOvernightInputs.forEach(function (input) {
      if (input.checked) {
        isChecked = true;
      }
    });
    if (!isChecked) {
      showError(
        'Пожалуйста, выберите вариант ответа в поле "Планируете ли вы остаться на ночь"'
      );
      return false;
    }
    return true;
  }
  function submitForm() {
    var mode = $modalButton.data("mode");

    var form =
      document.forms[
        mode === "accept" ? "form-guest-accept" : "form-guest-decline"
      ];

    const data = new FormData(form);

    var isValidName = validateNameField(data);
    var isValidStayOvernight = validateStayOvernightField(data);

    if (isValidName && isValidStayOvernight) {
      var button = $modalButton[0];
      var title = $modalButton.data("title");
      var loading = $modalButton.data("loading");

      button.textContent = loading;
      button.disabled = true;

      fetch(
        "https://script.google.com/macros/s/AKfycbwBIM2QqJkex2vNN-OZuRkScu_WSlab6BQ8UY7czhCJljd6urH-T2JGXX4a2GWeBAhPlw/exec",
        {
          method: "POST",
          body: data,
        }
      )
        .then(function (response) {
          if (response.ok) {
            button.textContent = title;
            button.disabled = false;
            $modal.modal("hide");
            toastr.info(
              mode === "accept"
                ? "Форма отправлена, очень вас ждем!"
                : "Форма отправлена!"
            );
            form.reset();
            toogleRequestActionsVisibility();
            // localStorage.setItem("isFormSubmitted", true);
          } else {
            showError(
              "Ошибка при отправке формы. Пожалуйста, попробуйте еще раз."
            );
            button.textContent = title;
            button.disabled = false;
          }
        })
        .catch(function (error) {
          console.error("Ошибка:", error);
          showError("Произошла ошибка. Пожалуйста, попробуйте еще раз.");
          button.textContent = title;
          button.disabled = false;
        });
    }
  }

  $j(".modal .btn-send").on("click", function (event) {
    event.preventDefault();
    $modalButton = $j(this);
    $form = $modalButton.closest("form");
    submitForm();
  });

  $j("#invite-actions").on("click", ".invite-action", function (event) {
    $modalButton = $j(this);
    $modal = $j("#modal-guest-" + $modalButton.data("mode"));
    $modal.modal("show");
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
