// inquiry form / target contact page 4 html 
const name = document.getElementById("name_form")
const contact = document.getElementById("contact_form")
const email = document.getElementById("email_form")
const form = document.getElementById("form")
const error_element = document.getElementById("error")
const error1_element = document.getElementById("error1")
const error2_element = document.getElementById("error2")

// if user clicks submit button it will trigger this function in the form
form.addEventListener('submit', (e) => {
    // stops refresh 
    e.preventDefault()
    // success initialized true
    let success = true
    // if name is equal to no characters then error = false
    if (name.value === '' || name.value == null) {
        error_element.innerHTML = "<span id='error_name0'>Name is required</span>"
        success = false
    }
    // if contact number less than or equal to 10 then error = false
    if (contact.value.length <= 10) {
        error1_element.innerHTML = '<span id="error_contact1">Contact number must be 11 digits only</span>'
        success = false
    }
    // if contact number greater than 11 then error = false
    if (contact.value.length > 11 ) {
        error1_element.innerHTML = '<span id="error_contact2">Contact number must be 11 digits only</span>'
        success = false
    }

    // if there is no "@" results to invalid address then error = false
    if (!email.value.includes("@")) {
        error2_element.innerHTML = "<span id='error_email0'>Invalid Email Address</span>"
        success = false
    }
    // if atleast one condition is false then display error message under text area
    // if all conditions are true then display alert then submits form
    if (success === true) {
        alert("INQUIRY FORM SENT SUCCESSFULLY")
    }
})