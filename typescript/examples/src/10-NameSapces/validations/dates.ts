namespace Validations{
   
    export function dateValidation(date: Date): boolean{
        if (isNaN(date.valueOf())){
            return false;
        } else {
            return true;
        }
    }
    
}
    