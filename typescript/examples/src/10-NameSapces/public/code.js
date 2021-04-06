var Validations;
(function (Validations) {
    function textValidation(text) {
        if (text.length > 3) {
            return true;
        }
        return false;
    }
    Validations.textValidation = textValidation;
})(Validations || (Validations = {}));
var Validations;
(function (Validations) {
    function dateValidation(date) {
        if (isNaN(date.valueOf())) {
            return false;
        }
        else {
            return true;
        }
    }
    Validations.dateValidation = dateValidation;
})(Validations || (Validations = {}));
//Namespace
///<reference path="validations/text.ts" />
///<reference path="validations/dates.ts" />
if (Validations.textValidation("Elvis Presley")) {
    console.log("The text is valid");
}
else {
    console.log("The text is not valid");
}
if (Validations.dateValidation(new Date())) {
    console.log("The date is valid");
}
else {
    console.log("The date is not valid");
}
