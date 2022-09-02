let form = document.getElementById('form');
let ufirstName = document.getElementById("Name__first");
let ulastName = document.getElementById("Name__last");
let dob = document.getElementById("date");
let email = document.getElementById('email');
let father_firstName = document.getElementById("father__firstName");
let father_lastName = document.getElementById("fateher__lastName");
let mother_firstName = document.getElementById("Mother__firstName");
let mother_lastName = document.getElementById("Mother__lastName");
let nationality = document.getElementById("nationality");
let address = document.getElementById("Address__street");
let city = document.getElementById("Address__city");
let phoneMobile = document.getElementById("phone__mobile");



form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkValidation();        //check validation inputs
    saveData();          //save data on local storage after first form validation

});
    function checkValidation() {

        if (ufirstName.value.trim().length < 5) {
            alert("user First Name is too shot")
            ufirstName.focus();

            return false;
        } else if (ulastName.value.trim().length < 3) {
            span.innerText = "first name invild"
            alert("user last Name is too shot")
            ulastName.focus();
            return false;
        } else if (checkEmail()) {

        } else if (father_firstName.value.trim().length < 5) {
            alert("f First Name is too shot")
            father_firstName.focus();
            console.log("jj")
            return false;
        } else if (father_lastName.value.length < 3) {
            father_lastName.focus();
            alert("F last Name is too shot")
            return false;
        } else if (mother_firstName.value.trim().length < 5) {
            mother_firstName.focus();
            alert("m First Name is too shot")
            return false;
        } else if (mother_lastName.value.trim().length < 3) {
            mother_lastName.focus();
            alert("m last Name is too shot")
            return false;
        } else if (address.value.trim().length < 15) {
            address.focus();
            alert("Stree address is too shot")
            return false;
        } else if (city.value.trim().length < 4) {
            city.focus();
            alert("city address is too shot")
            return false;
        } else if (phoneMobile.value.trim().length < 10) {
            phoneMobile.focus();
            alert("phone no  is too shot")
            return false;
        } else {
            return true;
        }
    };

    function checkEmail() {

        var email = document.getElementById('email');
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(email.value)) {
            alert('Please provide a valid email address');
            email.focus();
            return false;
        }
    };

    function saveData() {

        let ufirstNameInput = document.getElementById("Name__first").value;
        let ulastNameInput = document.getElementById("Name__last").value;
        let dobInput = document.getElementById("date").value;
        let emailInput = document.getElementById('email').value;
        let father_firstNameInput = document.getElementById("father__firstName").value;
        let father_lastNameInput = document.getElementById("fateher__lastName").value;
        let mother_firstNameInput = document.getElementById("Mother__firstName").value;
        let mother_lastNameInput = document.getElementById("Mother__lastName").value;
        let gender = document.querySelector('input[name = "gender"]').value;
        let nationalityInput = document.getElementById("nationality").value;
        let addressInput = document.getElementById("Address__street").value;
        let cityInput = document.getElementById("Address__city").value;
        let phoneMobileInput = document.getElementById("phone__mobile").value;
        let phoneHomeInput = document.getElementById("phone__home").value;

        let profile = {
            userFirstName: ufirstNameInput,
            userlastName: ulastNameInput,
            DOB: dobInput,
            Email: emailInput,
            fatherFirstName: father_firstNameInput,
            fatherLastName: father_lastNameInput,
            motherFirstName: mother_firstNameInput,
            motherLastName: mother_lastNameInput,
            gender: gender,
            nationality: nationalityInput,
            address: addressInput,
            city: cityInput,
            address: addressInput,
            phoneHome: phoneHomeInput,
            phoneMobile: phoneMobileInput
        }

        localStorage.setItem('profile_data', JSON.stringify(profile));

    };

    // function nextPage() {
    //     if (!checkValidation()) {
    //     
    //     window.location.href = "./secondpage.html";


