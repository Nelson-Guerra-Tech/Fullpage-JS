// Fullpage Initialization
new fullpage("#fullpage", {
  licenseKey: "B04KK-41DM9-I5XY6-O0O08-RQNOO",
  sectionsColor: ["#fbfbfb", "#0C0E07", "#C0C0C0", "#ADD8E6"],
  autoScrolling: true,
  anchors: ["home", "projects", "about", "contact"],
  parallax: true,
  onLeave: function (origin, destination, direction) {
    console.log("Leaving section" + origin.index);
  },
});
