function SetOperations(set1, set2) {
    let OperationOnSet = new Set(set1)
    console.log(OperationOnSet);
    // console.log(set1);
    console.log(set2);
    for (let i of set2) {
        OperationOnSet.delete(i)
    }
    return OperationOnSet
}
const set1 = new Set(['red', 'yellow', 'green'])
const set2 = new Set(['blue', 'red', 'violet'])
const result = SetOperations(set1, set2)
console.log(result)