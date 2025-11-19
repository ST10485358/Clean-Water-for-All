document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".enquiry-form");

    form.addEventListener("submit", function (e) {
        let valid = true;

        const firstName = document.getElementById("firstname");
        const surname = document.getElementById("surname");
        const phone = document.getElementById("phone");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        document.querySelectorAll(".error").forEach(el => el.remove());

        function showError(input, message) {
            valid = false;
            const error = document.createElement("p");
            error.className = "error";
            error.style.color = "red";
            error.style.fontSize = "0.9rem";
            error.style.margin = "5px 0 0 0";
            error.textContent = message;
            input.insertAdjacentElement("afterend", error);
        }

        if (firstName.value.trim() === "") {
            showError(firstName, "First name is required.");
        }

        if (surname.value.trim() === "") {
            showError(surname, "Surname is required.");
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone.value.trim())) {
            showError(phone, "Phone number must be 10 digits (e.g. 0823456789).");
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            showError(email, "Please enter a valid email address.");
        }

        if (message.value.trim() === "") {
            showError(message, "Please enter your enquiry or message.");
        }

        if (!valid) {
            e.preventDefault();
        }
    });
});
