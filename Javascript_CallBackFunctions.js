const myArray = [2, 2, 6, 8];

funtion myCustomMapOperationCallback(itemFromArray){
    return itemFromArray * 2;
}

const newArray = myArray.map(myCustomMapOperationCallbacl);

console.log(newArray);