document.addEventListener("DOMContentLoaded", function() {
    const ontoPaymentButton = document.querySelector(".ontoPayment");
    ontoPaymentButton.addEventListener("click", function(event) {
        const agreeToTermsAndConditions = document.querySelector(".agreeToTermsAndConditions");
        const agreeToAll = document.querySelector(".agreeToAll");
        const tNcPaymentMethods = document.querySelector(".tNcPaymentMethods");
        const tNc3rdParty = document.querySelector(".tNc3rdParty");
        const tNcResponsible = document.querySelector(".tNcResponsible");
        const tNchoowon = document.querySelector(".tNchoowon");

        const errorMessageContainer = document.querySelector(".error-message");
        errorMessageContainer.innerText = ""; // Clear previous error messages

        if (!agreeToTermsAndConditions.checked) {
            errorMessageContainer.innerText = "약관에 동의해주세요.";
            event.preventDefault(); // Prevent form submission
        } else if (!agreeToAll.checked || !tNcPaymentMethods.checked || !tNc3rdParty.checked || !tNcResponsible.checked || !tNchoowon.checked) {
            errorMessageContainer.innerText = "모든 약관에 동의해주세요.";
            event.preventDefault(); // Prevent form submission
        }
    });
});