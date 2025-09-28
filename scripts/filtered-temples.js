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

};


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "San Juan Puerto Rico",
    location: "San Juan, Puerto Rico",
    dedicated: "2022, January, 2023",
    area: 6988,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-juan-puerto-rico/400x250/san_juan_puerto_rico_temple_exterior.jpeg"
  },
  {
    templeName: "Provo City Center Temple",
    location: "Provo, Utah",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple03.jpg"
  },
  {
    templeName: "Columbus Ohio Temple",
    location: "Columbus, Ohio",
    dedicated: "1999, September, 5",
    area: 11745,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbus-ohio/400x250/columbus-temple-lds-406110-wallpaper.jpg"
  },
];

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  createTempleCard(temples);
});

oldLink.addEventListener("click", (e) => {
  e.preventDefault();
  const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1990;
  });
  createTempleCard(oldTemples);
});

newLink.addEventListener("click", (e) => {
  e.preventDefault();
  const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  });
  createTempleCard(newTemples);
});

largeLink.addEventListener("click", (e) => {
  e.preventDefault();
  const largeTemples = temples.filter(temple => temple.area > 90000);
  createTempleCard(largeTemples);
});

smallLink.addEventListener("click", (e) => {
  e.preventDefault();
  const smallTemples = temples.filter(temple => temple.area < 10000);
  createTempleCard(smallTemples);
});


function createTempleCard(filteredTemples) {
  const gallery = document.querySelector(".temples-gallery");
  gallery.innerHTML = "";

  filteredTemples.forEach(temple => {
    let card = document.createElement("section");

    let name = document.createElement("h3");
    name.textContent = temple.templeName;

    let location = document.createElement("p");
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

    let dedicated = document.createElement("p");
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    
    let area = document.createElement("p");
    area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;

    let image = document.createElement("img");
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.templeName} Temple`);
    image.setAttribute("loading", "lazy");

    card.append(name, location, dedicated, area, image);
    gallery.appendChild(card);
  });
}

createTempleCard(temples);

