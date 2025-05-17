let variable=Number(prompt("Enter a number:"));
if(!isNaN(variable))
{
    let count=0;
while(count<=variable)
{
if(count%2!=0)
{
    count++;
    continue;
}
    console.log(count);
    count++;
}
}
else{
    console.log("Not a number:");
}