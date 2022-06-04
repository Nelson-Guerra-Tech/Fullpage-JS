// Fullpage Initialization
new fullpage("#fullpage", {
  licenseKey: "B04KK-41DM9-I5XY6-O0O08-RQNOO",
  sectionsColor: ["#fbfbfb", "#f1f5f8", "#fbfbfb", "#f1f5f8"],
  autoScrolling: true,
  anchors: ["home", "projects", "about", "contact"],
  parallax: false,
  scrollBar: false,
});

// project cards
const card = [
  {
    id: 1,
    title: "Wikipedia API",
    img: "./img/wikipedia-img.png",
    desc: `Application that uses Wikipedia API to display results from a database by way of JavasScript to fetch the data using JSON.`,
    tech_icon: {
      html: "./img/icons8-html-5-96.svg",
      css: "./img/icons8-css3-96.svg",
      javascript: "./img/icons8-javascript.svg",
      bootstrap: "./img/icons8-bootstrap.svg",
      react: "./img/icons8-react-native.svg",
      git: "./img/icons8-git.svg",
    },
    href: "https://nelson-guerra-tech.github.io/Wiki-Search/",
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
      git: "./img/icons8-git.svg",
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
      git: "./img/icons8-git.svg",
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
      git: "./img/icons8-git.svg",
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
            <div class="img-div">
            <img class="project-img" src="${item.img}" alt="project-img">
            </div>
            <div class="project-info">
              <h3>${item.title}</h3>
              <p>${item.desc}</p>
              <div class="tech-icons-container">
                <img class="tech-icon" src="${item.tech_icon.html}" alt"html5"/>
                <img class="tech-icon" src="${item.tech_icon.css}" alt"css3"/>
                <img class="tech-icon" src="${item.tech_icon.javascript}" alt"javascript"/>
                <img class="tech-icon rotate" src="${item.tech_icon.react}" alt"react"/>
                <img class="tech-icon" src="${item.tech_icon.git}" alt"git"/>
              </div>
                  <a class="resume-btn" href="${item.href}" target="_blank">
                    <button class="btn">Live Demo</button>
                  </a>
            </div>
          </article>`;
  });
  displayCard = displayCard.join("");

  cardsSection.innerHTML = displayCard;
}
