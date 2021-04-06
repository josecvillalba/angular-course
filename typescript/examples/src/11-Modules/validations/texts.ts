
const MESSAGES:string[] = [
    "The text is very short",
    "The text is very long"
];

export function getError(errorNum:number):string{
    if (errorNum > MESSAGES.length){
        return "Erro code doesn´t exist"
    }
    return MESSAGES[errorNum];
}
