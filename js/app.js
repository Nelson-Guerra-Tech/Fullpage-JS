// Fullpage Initialization
new fullpage("#fullpage", {
  licenseKey: "B04KK-41DM9-I5XY6-O0O08-RQNOO",
  sectionsColor: ["#fbfbfb", "#f1f5f8", "#fbfbfb", "#f1f5f8"],
  autoScrolling: true,
  anchors: ["home", "projects", "projects2", "about", "contact"],
  parallax: false,
  scrollBar: false,
});

// project cards
const card = [
  {
    id: 1,
    title: "Project Title",
    img: "./img/project-img.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    tech_icon: {
      html: "./img/icons8-html-5-96.svg",
      css: "./img/icons8-css3-96.svg",
      javascript: "./img/icons8-javascript.svg",
      bootstrap: "./img/icons8-bootstrap.svg",
      react: "./img/icons8-react-native.svg",
    },
    href: "#",
  },
  {
    id: 2,
    title: "Project Title",
    img: "./img/project-img.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    tech_icon: {
      html: "./img/icons8-html-5-96.svg",
      css: "./img/icons8-css3-96.svg",
      javascript: "./img/icons8-javascript.svg",
      bootstrap: "./img/icons8-bootstrap.svg",
      react: "./img/icons8-react-native.svg",
    },
    href: "#",
  },
  {
    id: 3,
    title: "Project Title",
    img: "./img/project-img.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    tech_icon: {
      html: "./img/icons8-html-5-96.svg",
      css: "./img/icons8-css3-96.svg",
      javascript: "./img/icons8-javascript.svg",
      bootstrap: "./img/icons8-bootstrap.svg",
      react: "./img/icons8-react-native.svg",
    },
    href: "#",
  },
  {
    id: 4,
    title: "Project Title",
    img: "./img/project-img.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    tech_icon: {
      html: "./img/icons8-html-5-96.svg",
      css: "./img/icons8-css3-96.svg",
      javascript: "./img/icons8-javascript.svg",
      bootstrap: "./img/icons8-bootstrap.svg",
      react: "./img/icons8-react-native.svg",
    },
    href: "#",
  },
];

const cardsSection = document.querySelector(".cards");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayCards(card);
});

// function to display the cards
function displayCards(cards) {
  let displayCard = cards.map(function (item) {
    // console.log(item);

    return `<article class="card">
            <img class="project-img" src="${item.img}" alt="project-img"/>
            <div class="project-info">
              <h3>${item.title}</h3>
              <p>${item.desc}</p>
              <div class="tech-icons-container">
                <img class="tech-icon" src="${item.tech_icon.html}" alt"technologies"/>
                <img class="tech-icon" src="${item.tech_icon.css}" alt"technologies"/>
                <img class="tech-icon" src="${item.tech_icon.javascript}" alt"technologies"/>
                <img class="tech-icon rotate" src="${item.tech_icon.react}" alt"technologies"/>
              </div>
                <a href="${item.href}">Live Demo</a>
            </div>
          </article>`;
  });
  displayCard = displayCard.join("");

  cardsSection.innerHTML = displayCard;
}
