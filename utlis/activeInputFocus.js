export const activeInputFocus = () => {
  document
    .querySelectorAll(
      ".form-comment input, .form-comment textarea, .form-comment select"
    )
    ?.forEach(function (element) {
      element?.addEventListener("focus", function () {
        this?.closest(".form-group")?.classList.add("focused");
      });
    });

  // Blur event
  document
    .querySelectorAll(
      ".form-comment input, .form-comment textarea, .form-comment select"
    )
    ?.forEach(function (element) {
      element.addEventListener("blur", function () {
        var inputValue = this.value;
        if (inputValue === "") {
          this?.classList.remove("filled");
          this.closest(".form-group")?.classList.remove("focused");
        } else {
          this?.classList.add("filled");
        }
      });
    });

  // Check for pre-filled inputs
  document
    .querySelectorAll(
      ".form-comment input, .form-comment textarea, .form-comment select"
    )
    ?.forEach(function (element) {
      if (element?.value !== "") {
        element?.closest(".form-group")?.classList.add("focused");
        element?.classList.add("filled");
      }
    });
};
