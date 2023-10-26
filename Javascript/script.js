let arrow = document.querySelectorAll("#arrow");
let imagethree = document.querySelector(".imagethree");
arrow.forEach((element) => {
  element.addEventListener("click", function (event) {
    let featureImage = event.target.parentElement.previousElementSibling;
    let featureClasses = featureImage.classList;
    featureClasses.forEach((item) => {
      if (item === "imagethree") {
        featureImage.querySelector(".image3").style.transform =
          "translateX(100%)";
        setTimeout(() => {
          featureImage.classList.add("imageone");
        }, 10);
        setTimeout(() => {
          featureImage.classList.remove("imagethree");
          featureImage.querySelector(".image3").style.transform =
            "translateX(0)";
        }, 600);
      }

      if (item === "imagetwo") {
        featureImage.querySelector(".image2").style.transform =
          "translateX(100%)";
        setTimeout(() => {
          featureImage.classList.add("imagethree");
          featureImage.querySelector(".image2").style.zIndex = "1";
        }, 10);
        setTimeout(() => {
          featureImage.classList.remove("imagetwo");
          featureImage.querySelector(".image2").style.transform =
            "translateX(0)";
          featureImage.querySelector(".image2").style.zIndex = "0";
        }, 600);
        console.log(featureImage);
      }

      if (item === "imageone") {
        featureImage.querySelector(".image1").style.transform =
          "translateX(100%)";
        setTimeout(() => {
          featureImage.classList.add("imagetwo");
          featureImage.querySelector(".image1").style.zIndex = "1";
        }, 10);
        setTimeout(() => {
          featureImage.classList.remove("imageone");
          featureImage.querySelector(".image1").style.transform =
            "translateX(0)";
          featureImage.querySelector(".image1").style.zIndex = "0";
        }, 600);
        console.log(featureImage);
      }
    });
  });
});

let navigation = document.querySelector(".navigation");
let iconMenu = document.querySelector(".icon-menu");
iconMenu.addEventListener("click", function () {
  navigation.classList.toggle("navigation-active");
  if (iconMenu.classList.contains("fa-bars")) {
    iconMenu.classList.replace("fa-bars", "fa-xmark");
  } else if (iconMenu.classList.contains("fa-xmark")) {
    iconMenu.classList.replace("fa-xmark", "fa-bars");
  }
});

let navLinks = document.querySelectorAll(".nav-item");
navLinks.forEach((element) => {
  element.addEventListener("click", function () {
    navigation.classList.toggle("navigation-active");
    if (iconMenu.classList.contains("fa-bars")) {
      iconMenu.classList.replace("fa-bars", "fa-xmark");
    } else if (iconMenu.classList.contains("fa-xmark")) {
      iconMenu.classList.replace("fa-xmark", "fa-bars");
    }
  });
});

let chevronIcon = document.querySelectorAll(".chevron-icon");
chevronIcon.forEach((element) => {
  element.addEventListener("click", function (event) {
    let footerLinks = event.target.parentElement;
    footerLinks.classList.toggle("footer-link-active");
    if (element.classList.contains("fa-chevron-right")) {
      element.classList.replace("fa-chevron-right", "fa-chevron-down");
    } else if (element.classList.contains("fa-chevron-down")) {
      element.classList.replace("fa-chevron-down", "fa-chevron-right");
    }
  });
});
