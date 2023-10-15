function getAttributes() {
  let informationDisplayElement;

  if (document.getElementById("informationDisplayElement")) {
    document.getElementById("informationDisplayElement").innerHTML = "";
    informationDisplayElement = document.getElementById(
      "informationDisplayElement"
    );
  } else {
    informationDisplayElement = document.createElement("p");
    informationDisplayElement.setAttribute("id", "informationDisplayElement");
    document
      .getElementsByTagName("body")[0]
      .appendChild(informationDisplayElement);
  }

  for (let anchorTag of document.getElementsByTagName("a")) {
    const href = anchorTag.getAttribute("href");
    const hreflang = anchorTag.getAttribute("hreflang");
    const rel = anchorTag.getAttribute("rel");
    const target = anchorTag.getAttribute("target");
    const linkType = anchorTag.getAttribute("type");

    const newInformationTagElement = document.createElement("p");
    newInformationTagElement.innerText = `
        "Href: ", ${href} -
        "Hreflang: ", ${hreflang} -
        "Rel: ", ${rel} -
        "Target: ", ${target} -
        "Type: ", ${linkType} 
    `;

    informationDisplayElement.appendChild(newInformationTagElement);

    if (href) console.log("Href: ", href);
    if (hreflang) console.log("Hreflang: ", hreflang);
    if (rel) console.log("Rel: ", rel);
    if (target) console.log("Target: ", target);
    if (linkType) console.log("Type: ", linkType);
  }
}
