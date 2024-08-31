function fun1(){
    var x=document.getElementById("rad1");
    var y=document.getElementById("rad2");
    if(x.checked == true)
    {
        alert("the option select is good"+x.value);
    }
    if (y.checked==true)
    {
        alert("the select option is bad"+y.value);
    }
    else
    {
        alert("no option is selected");
    }
}