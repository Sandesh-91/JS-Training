let input=parseInt(prompt("Enter how many odd numbers sum do you want:"));
if(!isNaN(input) && input>0)
{
    let sum=0;
    let count=1;
    for(let i=1;count<=input;i=i+2)
    {
sum+=i;
count++;
    }
    alert("Sum of first "+input+" odd numbers is "+ sum);
}
else
{
    alert("Not a integer");
}