/*(c) iniohd 2023 | Medra Template by: https://iniohd.github.io | MIT License */

const contactForm = document.getElementById("contact-form")
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault()
        let totalInvalid = 0
        const inputs = contactForm.querySelectorAll("form#contact-form input[required], form#contact-form textarea[required]"),
        regexName = /([^A-Za-z0-9\-\_])/gi,
        regexMail = /^([A-Za-z0-9\-\_\.]+)\@([A-Za-z0-9\_\-]+)\.([A-Za-z0-9\.]+)$/gi,
        regexMsg = /[A-Za-z]/gi

        for (let input of inputs) {
            let inputName = input.id || input.name || ""
            inputName = inputName.toLowerCase()
            if (inputName === "name") {
                if (input.value.length < 3 || regexName.test(input.value)) {
                    input.classList.remove("border-success")
                    input.classList.add("border-danger");
                    totalInvalid++;
                } else {
                    input.classList.remove("border-danger")
                    input.classList.add("border-success");
                }
            } else if (inputName === "email" || inputName === "mail") {
                if (!regexMail.test(input.value)) {
                    input.classList.remove("border-success")
                    input.classList.add("border-danger");
                    totalInvalid++;
                } else {
                    input.classList.remove("border-danger")
                    input.classList.add("border-success");
                }
            } else if (inputName === "msg") {
                if (!regexMsg.test(input.value)) {
                    input.classList.remove("border-success")
                    input.classList.add("border-danger");
                    totalInvalid++;
                } else {
                    input.classList.remove("border-danger")
                    input.classList.add("border-success");
                }
            }
        }
    
        //Do we have at least one invalid input? If yes, return false.
        if (totalInvalid > 0) {
            return false;
        }
        contactForm.submit()
    })
}