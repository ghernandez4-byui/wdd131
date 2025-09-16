const hamburger = document.querySelector("#hamburger");
const navigation = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamburger.classList.toggle("open");
});

const currentyear = document.querySelector("#currentyear")
const lastModified = document.querySelector("#lastModified")

const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}`;

if (lastModified) {
  lastModified.textContent = `Last modified: ${document.lastModified}`;

}