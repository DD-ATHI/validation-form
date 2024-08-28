document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("create-account-form");
    const dobField = document.getElementById("dob");
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm-password");
    const nameField = document.getElementById("username");
    const emailField = document.getElementById("email");
    const favoriteFoodDisplay = document.getElementById("favorite-food-display");
    const favoriteFoodMenu = document.getElementById("favorite-food-menu");

    // Ensure that the date of birth cannot be in the future
    const today = new Date().toISOString().split('T')[0];
    dobField.setAttribute('max', today);

    form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }

});

    form.addEventListener("submit", function(event) {
        let valid = true;

        // Name validation (max length 20 characters)
        if (nameField.value.length === 0 || nameField.value.length > 20) {
            alert("Name is required and must be less than 20 characters.");
            valid = false;
        }

        // Email validation (check for valid email format)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
            alert("Please enter a valid email address.");
            valid = false;
        }

        // Password validation (check if fields match and length is within limit)
        if (passwordField.value.length === 0 || passwordField.value.length > 15) {
            alert("Password is required and must be less than 15 characters.");
            valid = false;
        }

        if (confirmPasswordField.value !== passwordField.value) {
            alert("Passwords do not match.");
            valid = false;
        }

        // Date of Birth validation (check if the date is not in the future)
        if (dobField.value > today) {
            alert("Date of Birth cannot be in the future.");
            valid = false;
        }

        // Additional validation for mandatory fields
        const fields = ['username', 'email', 'password', 'confirm-password', 'mobile', 'dob', 'place'];
        fields.forEach(fieldId => {
            const input = document.getElementById(fieldId);
            if (input && !input.value) {
                alert(`Please fill out the ${input.previousElementSibling.textContent}`);
                valid = false;
            }
        });

        const genderSelected = document.querySelector('input[name="gender"]:checked');
        if (!genderSelected) {
            alert('Please select a gender');
            valid = false;
        }

        const favoriteFoodSelected = document.querySelectorAll('#favorite-food-menu input[type="checkbox"]:checked').length;
        if (favoriteFoodSelected === 0) {
            alert('Please select at least one favorite food');
            valid = false;
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission if validation fails
        } else {
            openPopup(); // Open popup if everything is valid
            event.preventDefault(); // Prevent actual form submission for demonstration
        }
    });

    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("create-account-form");
        const result = document.getElementById("result");
    
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission
    
            // Hide the form
            form.style.display = "none";
    
            // Show the result
            result.style.display = "block";
        });
    });
    

    // Toggle favorite food menu visibility
    favoriteFoodDisplay.addEventListener("click", function() {
        favoriteFoodMenu.classList.toggle("show");
    });

    // Update the display of selected favorite foods
    document.querySelectorAll("#favorite-food-menu input[type=checkbox]").forEach(checkbox => {
        checkbox.addEventListener("change", function() {
            const selectedFoods = Array.from(document.querySelectorAll("#favorite-food-menu input[type=checkbox]:checked"))
                                      .map(cb => cb.parentElement.textContent.trim())
                                      .join(", ");
            favoriteFoodDisplay.value = selectedFoods || "Select your favorite food...";
        });
    });

    function openPopup() {
        document.getElementById("popup").style.display = "block";
    }

    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }

    // Add event listeners for the popup buttons
    document.querySelector(".popup button").addEventListener("click", closePopup);
});
