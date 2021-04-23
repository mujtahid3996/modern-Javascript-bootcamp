const createtripper=(baseamount)=>{
    return (billamount) => {
        return baseamount*billamount
    }
}

const fifteen = createtripper(.15)
const twenty= createtripper(.20)
const twentyfive= createtripper(.25)
console.log(fifteen(20))
console.log(twentyfive(333))