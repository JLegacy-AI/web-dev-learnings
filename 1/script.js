function set_background() {
  for (let pTag of document.getElementsByTagName("p")) {
    if (pTag.style.backgroundColor.length == 0)
      pTag.style.backgroundColor = "blue";
    else pTag.style.backgroundColor = "";
  }
}
