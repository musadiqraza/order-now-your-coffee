const menueOpenButton = document.querySelector("#menue-open-button");
const menueCloseButton = document.querySelector("#menue-close-button");

// Open menu
  menueOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menue");
  menueCloseButton.style.display = "block"; // Show close button
  menueOpenButton.style.display = "none";  // Hide open button
});

// Close menu
  menueCloseButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menue");
  menueCloseButton.style.display = "none";  // Hide close button
  menueOpenButton.style.display = "block";  // Show open button
});
