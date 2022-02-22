function langSwitch() {
  // setup language
  const langInput = document.getElementById("#language");

  console.log(langInput);
  langInput.addEventListener("click", function (item) {
    console.log(item);
  });
}
