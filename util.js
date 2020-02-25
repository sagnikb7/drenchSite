function scrollToElement(destinationElement, options) {
  let elem =
    typeof destinationElement == "string"
      ? document.querySelector(destinationElement)
      : destinationElement;
  options = options || { behavior: "smooth" };
  elem.scrollIntoView(options);
}
