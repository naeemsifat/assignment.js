//Function for convert feet to mile

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

//Function for calculate total wood
function woodCalculator(chair,table,bed)//Function starts from here
{
    let totalWood;
    totalWood=(chair*1)+(table*3)+(bed*5);//Total wood is calculated in this line
    return totalWood;
}

//Function for calculate total bricks
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

//Finding the smallest friends name

function tinyFriend(ara)
{
    let i,smallPosition;
    smallPosition=0;
    if(ara.length==0)
    {
        return "Array is empty.Please assign the expected array"//Display this if input is empty
    }
    for(i=1;i<ara.length;i++)
    {
        if(ara[i].length<ara[smallPosition].length)
        {
            smallPosition=i;   //assigning the smallest position
        }
    }
    return ara[smallPosition];
}