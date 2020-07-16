function brickCalculator(storey)
{
    let i,sum=0;
    if(storey<0)
    {
        return "Building height can't be negative" //Display this if input is negative
    }
    for(i=1;i<=storey;i++)
    {
        if(i<=10)
        {
            sum=sum+15;  //calculation for below or equal 10 storeyed building
        }
        else if(i>10&&i<=20)
        {
            sum=sum+12; //calculation for above 10 or below or equal to 20 storeyed building
        }
        else
        {
            sum=sum+10; //calculation for above  20 storeyed building
        }
    }
    return sum*1000;//Each feet contained 1000 piece brick

}
let storey=20;
const result=brickCalculator(storey);
if(storey<0)
{
    console.log(result);//Display if input is negative
}
else
{
    console.log(result,"piece brick will be needed");//Display if input is positive
}