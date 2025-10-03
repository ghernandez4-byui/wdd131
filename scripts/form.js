//-----------------FOOTER CURRENT YEAR & LAST MODIFIED-----------------//
const currentyear = document.querySelector("#currentyear") 
const lastModified = document.querySelector("#lastModified")

const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}`;

if (lastModified) {
  lastModified.textContent = `Last modified: ${document.lastModified}`;
}

//----------------- PRODUCT NAME -----------------//

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("product-dropdown");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id();
    option.textContent = product.name;
    dropdown.appendChild(option);

    option.append(name, id)

  });
});
 


