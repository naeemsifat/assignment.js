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
let ara=["sifat","shormi","alu","mayeen"];
const result=tinyFriend(ara);
if(ara.length==0)
{
    console.log(result); //Display this if input is empty
}
else
{
    console.log(result,"is the smallest");//Display the smallest name
}