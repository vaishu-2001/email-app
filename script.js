document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById("email").value; // Get email value
    document.getElementById("submittedEmail").innerText = "Submitted Email: " + email; // Display submitted email
  });
  



  