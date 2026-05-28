// Navbar active links

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", function () {

    navLinks.forEach(nav => nav.classList.remove("active"));

    this.classList.add("active");
  });
});


// Scroll reveal animation

function revealElements() {

  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(element => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealElements);


// Counter animation

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

  counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");
    let count = 0;

    const increment = target / 100;

    const updateCounter = () => {

      count += increment;

      if (count < target) {

        counter.innerText = Math.floor(count);

        requestAnimationFrame(updateCounter);

      } else {

        counter.innerText = target;
      }
    };

    updateCounter();
  });
};

startCounter();


// Back to top button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {

    topBtn.style.display = "block";

  } else {

    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// Dark mode toggle

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  const icon = themeToggle.querySelector("i");

  if (document.body.classList.contains("dark-mode")) {

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

  } else {

    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});
