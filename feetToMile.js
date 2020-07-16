function feetToMile(feet)//function starts from here
{
    let mile;
    if(feet<0)
    {
        return "Distance can't be negative" //if input is given in negative number.this message will be displayed.
    }
    mile=feet/5280; // 1 mile=5280 feet
    return mile;
}
let feet=5293;
const result=feetToMile(feet);
if(feet<0)
{
    console.log(result);//Display this when input is negative
}
else
{
    console.log(result.toFixed(4),"mile");//Display this when input is positive
}