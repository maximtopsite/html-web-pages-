const testimonials = [
  { name: "June Cha", position: "Software Engineer", photo: "https://randomuser.me/api/portraits/women/44.jpg", text: "This platform is an absolute game-changer for competitive programmers. The extensive range of problems and challenges offered here truly hones your skills and prepares you for any coding competition. With detailed solutions and an active community, it's the perfect environment to sharpen your coding prowess." },
  { name: "Iida Niskanen", position: "Data Engineer", photo: "https://randomuser.me/api/portraits/women/67.jpg", text: "I can't express enough how valuable this platform has been for me. As someone deeply passionate about algorithms and data structures, I've found the diverse set of problems here both stimulating and enriching. The intuitive interface and seamless experience make it my go-to destination for honing my problem-solving skills." },
  { name: "Renee Sims", position: "Cloud engineer", photo: "https://randomuser.me/api/portraits/women/8.jpg", text: "If you're serious about excelling in competitive coding, look no further. This platform not only provides a comprehensive set of problems but also fosters a supportive community where you can exchange ideas and strategies. It's been instrumental in my journey towards becoming a better competitive coder." },
  { name: "Sasha Ho", position: "Phd student", photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb", text: "I've tried numerous competitive programming platforms, but none come close to the quality and depth offered here. From beginner-friendly challenges to advanced algorithmic puzzles, there's something for everyone. The platform's commitment to excellence is evident in every aspect, making it my preferred choice for honing my coding skills." },
  { name: "Veeti Seppanen", position: "Frontend developer", photo: "https://randomuser.me/api/portraits/men/97.jpg", text: "As a seasoned programmer, I'm always on the lookout for platforms that challenge and inspire me. This platform exceeds all expectations with its vast array of problems and unparalleled learning resources. Whether you're a novice or a seasoned coder, you'll find endless opportunities to push your boundaries and elevate your skills." }
];

let currentIndex = 0;

function showTestimonial(index) {
  const person = testimonials[index];

  document.querySelector(".testimonial-quote").textContent = person.text;
  document.querySelector(".testimonial-avatar").src = person.photo;
  document.querySelector(".testimonial-avatar").alt = person.name;
  document.querySelector(".testimonial-name").textContent = person.name;
  document.querySelector(".testimonial-role").textContent = person.position;

  const dots = document.querySelectorAll(".testimonial-dot");
  for (let i = 0; i < dots.length; i++) {
    if (i === index) {
      dots[i].classList.add("active");
    } else {
      dots[i].classList.remove("active");
    }
  }
}

function goNext() {
  currentIndex = currentIndex + 1;
  if (currentIndex >= testimonials.length) {
    currentIndex = 0;
  }
  showTestimonial(currentIndex);
}

function goPrev() {
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = testimonials.length - 1;
  }
  showTestimonial(currentIndex);
}

document.addEventListener("DOMContentLoaded", function () {
  showTestimonial(0);

  document.querySelector(".testimonial-next").addEventListener("click", goNext);
  document.querySelector(".testimonial-prev").addEventListener("click", goPrev);

  setInterval(goNext, 3000);
});


const copyrightYear = document.getElementById("copyright-year");
copyrightYear.textContent = new Date().getFullYear();


const form = document.querySelector(".contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

function clearError(errEl) {
  if (errEl) errEl.textContent = "";
}

nameInput.addEventListener("focus", function () { clearError(nameError); });
emailInput.addEventListener("focus", function () { clearError(emailError); });
messageInput.addEventListener("focus", function () { clearError(messageError); });

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let hasError = false;

  if (!nameInput.value.trim()) {
    nameError.textContent = "This field is required.";
    hasError = true;
  } else {
    clearError(nameError);
  }
  if (!emailInput.value.trim()) {
    emailError.textContent = "This field is required.";
    hasError = true;
  } else {
    clearError(emailError);
  }
  if (!messageInput.value.trim()) {
    messageError.textContent = "This field is required.";
    hasError = true;
  } else {
    clearError(messageError);
  }

  if (hasError) return;

  Swal.fire({
    title: "Message sent!",
    text: "Thank you for contacting us.",
    icon: "success"
  });
  form.reset();
});




