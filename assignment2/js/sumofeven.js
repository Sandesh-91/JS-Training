let input=parseInt(prompt("Enter how many even numbers sum do you want:"));
if(!isNaN(input) && input>0)
{
    let sum=0;
    let count=1;
    for(let i=2;count<=input;i=i+2)
    {
sum+=i;
count++;
    }
    alert("Sum of first "+input+" even numbers is "+ sum);
}
else
{
    alert("Not a integer");
}