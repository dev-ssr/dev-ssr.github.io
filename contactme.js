let form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    if(form.email.value == 0)
        prompt("Please give your Email address for me to contact you.");
  }