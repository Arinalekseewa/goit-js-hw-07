document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form.login-form");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const { email, password } = loginForm.elements;
        const trimmedEmail = email.value.trim();
        const trimmedPassword = password.value.trim();

        if (!trimmedEmail || !trimmedPassword) {
            alert("All form fields must be filled in");
            return;
        }

        const formData = {
            email: trimmedEmail,
            password: trimmedPassword,
        };

        console.log(formData);
        loginForm.reset();
    });
});