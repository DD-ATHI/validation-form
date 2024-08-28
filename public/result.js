document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("create-account-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Optionally, you can add form data to the URL or use localStorage/sessionStorage to pass data
        // For example:
        // const formData = new URLSearchParams(new FormData(form)).toString();
        // window.location.href = `result.html?${formData}`;

        // Redirect to the result page
        window.location.href = "result.html";
    });
});
