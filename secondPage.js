var formTwo = document.getElementById("formTwo")
var hsc_Institution = document.getElementById("Hsc_Institution")
var hscBoard = document.getElementById("Hsc__Board")
var hscScore = document.getElementById("Hsc__Board")
var ssc_Institution = document.getElementById("Ssc__Institution")
var sscBoard = document.getElementById("sscBoard")
var sscScore = document.getElementById("Ssc__Score")
var currentlyPursuing = document.getElementById("Curr__pursuing")
var currentInstitution = document.getElementById("Curr__institution")
var totalPercentage = document.getElementById("totalPercentage")
var currentBacklog = document.getElementById("Curr__backlog")


formTwo.addEventListener('submit', (e) => {
    e.preventDefault();

    checkValidation();       //check validation
    saveData();            //save data on local storage
    nextPage();            // redirection to next page
});

function checkValidation() {

    if (hsc_Institution.value.trim().length < 10) {
        alert("HSC Institution  Name is too shot")
        hsc_Institution.focus();
        return false;
    } else if (ssc_Institution.value.trim().length < 10) {
        ssc_Institution.focus();
        return false;
    } else if (currentlyPursuing.value.trim().length < 5) {
        currentlyPursuing.focus();
        return false;
    } else if (currentInstitution.value.trim().length < 10) {
        currentInstitution.focus();
        return false;
    } else {
        return true;
    }
};

function saveData() {
    var hsc_Institution_Input = document.getElementById("Hsc_Institution").value
    var hscBoardInput = document.getElementById("Hsc__Board").value
    var hscScoreInput = document.getElementById("Hsc__Board").value
    var ssc_InstitutionInput = document.getElementById("Ssc__Institution").value
    var sscBoardInput = document.getElementById("sscBoard").value
    var sscScoreInput = document.getElementById("Ssc__Score").value
    var currentlyPursuingInput = document.getElementById("Curr__pursuing").value
    var currentInstitutionInput = document.getElementById("Curr__institution").value
    var totalPercentageInput = document.getElementById("totalPercentage").value
    var currentBacklogInput = document.getElementById("Curr__backlog").value

    let study_profile = {
        hsc_Institution_Input: hsc_Institution_Input,
        hscBoardInput: hscBoardInput,
        hscScoreInput: hscScoreInput,
        ssc_InstitutionInput: ssc_InstitutionInput,
        sscBoardInput: sscBoardInput,
        sscScoreInput: sscScoreInput,
        currentlyPursuingInput: currentlyPursuingInput,
        currentInstitutionInput: currentInstitutionInput,
        totalPercentageInput: totalPercentageInput,
        currentBacklogInput: currentBacklogInput,

    }
    localStorage.setItem('study_profile', JSON.stringify(study_profile));
};

function nextPage() {
    window.location.href = "./thirdPage.html";
};
