namespace Validations{

    export function textValidation(text: string): boolean{
        if (text.length > 3){
            return true;
        }
    
        return false;
    
    }
    
    
    }
    