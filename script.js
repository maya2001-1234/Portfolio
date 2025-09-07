
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const response = document.getElementById("formResponse");
  
    
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      response.textContent = "✅ Thank you! Your message has been sent.";
      response.style.color = "green";
      form.reset();
    });
  
    
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = { threshold: 0.2 };
  
    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  
    
    const typingElement = document.getElementById("typing");
    const text = "Hi, I'm Thimaya 👋";
    let index = 0;
  
    function type() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    }
    type();
  });
  