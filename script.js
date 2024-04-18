
let navItem = document.querySelectorAll(".navItem a")
let overText = document.querySelector(".navItem .over-text")
let line1 = document.querySelector(".line1")
let line2 = document.querySelector(".line2")
function myFunction() {
  var toggle = document.getElementById("myDIV");
  if (toggle.style.opacity === "0") {
      toggle.style.opacity = "1"
      toggle.style.zIndex = 1
      line1.style.rotate = "25deg"
      line2.style.rotate = "-25deg"
      line1.style.transform = "translate(0, 10px)"
  } else {
      toggle.style.opacity = "0"
      toggle.style.zIndex = 0
      line1.style.rotate = "0deg"
      line2.style.rotate = "0deg"
      line1.style.transform = "translate(0)"
  }
  }
  function overTextItem (line, text) {
      navItem[line].addEventListener("mouseover", () => {
      overText.style.opacity = 1;
      overText.innerHTML = text
  })
  navItem[line].addEventListener("mouseout", () => {
      overText.style.opacity = 0
  })
  }
  overTextItem(0, "HOMEPAGE")
  overTextItem(1, "WORKS")
  overTextItem(2, "ABOUT")
  overTextItem(3, "SAATCHIC")
  overTextItem(4, "CONTACTH") 
  