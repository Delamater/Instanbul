var n = getNumber(2,5);
var x = myFunc1(1);
var y = myFunc1(2);
var z = myFunc1(10);


function getNumber(param1, param2)
{
    return param1 * param2;
}
function myFunc1(x)
{
    switch (x)
    {
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        default: 
            return 0;
    }
    return x;
}