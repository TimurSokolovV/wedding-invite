var $modalButton,
  $modal,
  $form,
  $j = jQuery.noConflict(!0);

//AKfycbynrpeK_I5qeJcHm9qu-w4nLlpRldTBEr9c2EMTru9nhAHCQ_r2eiohf7P8v3Yiwb6d
//https://script.google.com/macros/s/AKfycbynrpeK_I5qeJcHm9qu-w4nLlpRldTBEr9c2EMTru9nhAHCQ_r2eiohf7P8v3Yiwb6d/exec

function showError(message) {
  message
    ? toastr.error(message)
    : toastr.error("Возника ошибка, попробуйте позже");
}

$j(document).ready(function () {
  // Функция для проверки заполненности поля имени
  function validateNameField() {
    var nameInput = document.querySelector('input[name="guest[name]"]');
    var name = nameInput.value.trim();
    if (name === "") {
      showError('Поле "Укажите свое имя" не может быть пустым');
      return false;
    }
    return true;
  }

  // Функция для проверки выбора варианта остаться на ночь
  function validateStayOvernightField() {
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
        'Пожалуйста, выберите один из вариантов для поля "Планируете ли вы остаться на ночь после свадебного банкета?"'
      );
      return false;
    }
    return true;
  }

  // Функция для отправки формы
  function submitForm() {
    var isValidName = validateNameField();
    var isValidStayOvernight = validateStayOvernightField();
    if (isValidName && isValidStayOvernight) {
      var form = document.getElementById("form-guest-accept");
      var formData = new FormData(form);
      fetch(
        "https://script.google.com/macros/s/AKfycbynrpeK_I5qeJcHm9qu-w4nLlpRldTBEr9c2EMTru9nhAHCQ_r2eiohf7P8v3Yiwb6d/exec",
        {
          method: "POST",
          body: formData,
        }
      )
        .then(function (response) {
          if (response.ok) {
            toastr.success("Форма успешно отправлена!");
            form.reset();
          } else {
            showError(
              "Ошибка при отправке формы. Пожалуйста, попробуйте еще раз."
            );
          }
        })
        .catch(function (error) {
          console.error("Ошибка:", error);
          showError("Произошла ошибка. Пожалуйста, попробуйте еще раз.");
        });
    }
  }

  $j("#invite-actions").on("click", ".invite-action", function (event) {
    $modalButton = $j(this);
    $modal = $j("#modal-guest-" + $modalButton.data("mode"));
    $modal.modal("show");
  });

  $j(".modal .btn-send").on("click", function (event) {
    event.preventDefault();
    $modalButton = $j(this);
    $form = $modalButton.closest("form");
    submitForm(); // Вызываем функцию отправки формы
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
