const formE1 = document.querySelector(".modal-form"); 
console.log(' ~ formE1:', formE1);
formE1.addEventListener("submit", (event) => {
    event.preventDefault();
    const { user_name, user_email, user_password } = event.currentTarget.elements;
    event.currentTarget.reset();
});