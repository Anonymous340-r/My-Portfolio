// Simple script to handle form submission

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if(name && email && message) {
    alert(`Thank you for contacting me, ${name}! I'll get back to you soon.`);
  } else {
    alert("Please fill in all the fields.");
  }
});
