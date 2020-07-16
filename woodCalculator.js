function woodCalculator(chair,table,bed)//Function starts from here
{
    let totalWood;
    totalWood=(chair*1)+(table*3)+(bed*5);//Total wood is calculated in this line
    return totalWood;
}
const result=woodCalculator(2,5,3);
console.log("Total",result,"cubic feet wood needed");//Display the total wood