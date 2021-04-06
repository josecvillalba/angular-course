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
