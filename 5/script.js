setTimeout(() => {
  const withQuerySelector = document.querySelector("#container");
  console.log(withQuerySelector);
  const withoutQuerySelector = document.getElementById("container");
  console.log(withoutQuerySelector);
  const allElementsWithClassSecond = document.getElementsByClassName("second");
  console.log(allElementsWithClassSecond);
  const allElementsWithClassSecondInsideOL =
    document.querySelector("ol .third");
  console.log(allElementsWithClassSecondInsideOL);
  alert("Click OK");
  // Hello Container
  const sectionWithIDContainerTextHello = document.createElement("section");
  sectionWithIDContainerTextHello.setAttribute("id", "container");
  sectionWithIDContainerTextHello.innerText = "Hello";
  console.log(sectionWithIDContainerTextHello);
  alert("Click OK");

  // Footer DIV
  const divWithClassFooter = document.querySelector("div.footer");
  divWithClassFooter.classList.add("main");
  console.log(divWithClassFooter);

  // Create New Li Element
  const newLiElement = document.createElement("li");
  newLiElement.innerText = "Four";
  console.log(newLiElement);

  // Append to UL Element
  const ulTag = document.getElementsByTagName("ul")[0];
  ulTag.appendChild(newLiElement);
  console.log(ulTag);
  alert("Click OK");

  // Loop Over All
  const olTag = document.querySelectorAll("ol li");
  for (let liElement of olTag) {
    liElement.style.backgroundColor = "green";
  }
  alert("Click OK");

  // remove Div with Class Footer
  document.getElementsByTagName("body")[0].removeChild(divWithClassFooter);
}, 1000);
