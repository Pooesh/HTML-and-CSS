
function print(){
    var x=document.getElementById("uname").Value;
    var y =document.getElementById("upassword").value;
    if(y=="simplycode")
    {
        alert("login sucess");
    }
    else{
        alert("wrong password");
    }
    alert("the name is :"+x+"\n"+"the password is"+y);


}