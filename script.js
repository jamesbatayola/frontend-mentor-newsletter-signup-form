// first index
const container = document.querySelector(".container");
const formInput = document.querySelector("input");
const form = document.querySelector("form");
const errorMessage = document.querySelector(".error-message");

// second index
const confirmationMSG = document.querySelector(".confirmation-message");
const user_email = document.querySelector(".user-email");
const dismissButton = document.querySelector(".dismiss-button");

// ----------------------

let userEmail = "";

form.addEventListener("submit", function (event) {
	event.preventDefault();
	if (!formInput.value.includes("@")) {
		formInput.classList.add("error");
		errorMessage.style.display = "block";
	} else {
		userEmail = formInput.value;
		user_email.textContent = userEmail;
		container.style.display = "none";
		confirmationMSG.style.display = "grid";
	}
});

dismissButton.addEventListener("click", () => {
	confirmationMSG.style.display = "none";
	container.style.display = "grid";
	formInput.classList.remove("error");
	errorMessage.style.display = "none";
	formInput.value = "";
	userEmail = "";
});
