document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    // Add any login logic/validation here (if necessary)

    // Redirect to dashboard.html on successful login
    window.location.href = "dashboard.html";
});
