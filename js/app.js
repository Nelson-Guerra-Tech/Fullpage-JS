// Fullpage Initialization
new fullpage("#fullpage", {
  licenseKey: "B04KK-41DM9-I5XY6-O0O08-RQNOO",
  sectionsColor: ["#fbfbfb", "#0C0E07", "#0C0E07", "#fbfbfb", "#fbfbfb"],
  autoScrolling: false,
  anchors: ["home", "projects", "projects2", "about", "contact"],
  parallax: false,
  scrollBar: false,
});

// targetting elements
const navigation = document.querySelector(".links");

colorChange = () => {
  const links = navigation;
  if (window.document.contains("s2")) {
    links.style.color = "#fbfbfb";
  }
  console.log(links);
};

colorChange();

// Validating Form
function validateForm() {
  var name = document.getElementById("name").value;
  if (name == "") {
    document.querySelector(".status").innerHTML = "Name cannot be empty";
    return false;
  }
  var email = document.getElementById("email").value;
  if (email == "") {
    document.querySelector(".status").innerHTML = "Email cannot be empty";
    return false;
  } else {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      document.querySelector(".status").innerHTML = "Email format invalid";
      return false;
    }
  }
  var subject = document.getElementById("subject").value;
  if (subject == "") {
    document.querySelector(".status").innerHTML = "Subject cannot be empty";
    return false;
  }
  var message = document.getElementById("message").value;
  if (message == "") {
    document.querySelector(".status").innerHTML = "Message cannot be empty";
    return false;
  }
  document.querySelector(".status").innerHTML = "Sending...";
}
