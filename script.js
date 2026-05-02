console.log("Portfolio loaded successfully");

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const sectionId = this.getAttribute("href");
    document.querySelector(sectionId).scrollIntoView({
      behavior: "smooth"
    });
  });
});
