class CustomArray<T> {

    private arr: T[] = [];
    
    getItems(arr: T[]) {
        return this.arr = arr;
    }
    
    addItem(item:T) {
        this.arr.push(item);
    }
    
    removeItem(item: T) {
        let index = this.arr.indexOf(item);
            if(index > -1)
                this.arr.splice(index, 1);
    }
}    


let numObj = new CustomArray<number>();
numObj.addItem(10);
numObj.addItem(20);
numObj.addItem(30);
numObj.addItem(5);
// numObj.addItem("13"); <- Compile error


let strObj = new CustomArray<string>();
strObj.addItem("Tesla");
strObj.addItem("Ford");
strObj.addItem("Volkswagen");
strObj.addItem("Seat");


console.log(numObj);
console.log(strObj);
