export const addLeftPaddingSwiper = () => {
  let boxSlideFleet = document.querySelectorAll(".box-slide-fleet");
  if (boxSlideFleet.length > 0) {
    boxSlideFleet.forEach(function (element) {
      element.style.paddingLeft =
        document.querySelectorAll(".title-fleet")[0]?.getBoundingClientRect()
          .left + "px";
    });
  }
};
