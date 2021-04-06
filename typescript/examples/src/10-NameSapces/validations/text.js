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
