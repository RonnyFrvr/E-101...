(function() {
  emailjs.init("pVdX4kEfIn-dzmYQn");
})();

window.onload = function() {
  const form = document.querySelector(".review_form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
  



  const templateParams = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    title: document.querySelector("#subject").value,
    message: document.querySelector("#comments").value,
  };

  emailjs
    .send("service_cz6sbwk", "template_pcww95q", templateParams)
      .then(function(response) {
        alert("Review submitted successfully!");
        console.log("SUCCESS!", response.status, response.text);
      }, function(error) {
        alert("Failed to submit review. Please try again.");
        console.log("FAILED...", error);
      });
  });
}