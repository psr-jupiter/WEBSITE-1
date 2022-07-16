function validity(){
    var f=document.getElementById("first").value;
    var f1=document.getElementById("last").value;
    /*var M=document.getElemetById("mid").value;*/
    var p=/^[a-z A-Z]{3,}$/;
    if(p.test(f)==false)
    {
        document.getElementById("L").style.visibility="visible";
        return false;
    }
    if(p.test(f1)==false)
    {
        document.getElementById("L1").style.visibility="visible";
        return false;
    }
   /* var email=document.getElementById("mail").value;
    var e=/^[a-z,A-Z,0-9][0-9,A-Z,a-z,-,.]*@[a-z]{3,6}\.[a-z]{2,3}(\.)?([a-z])?([a-z])?$/;
    if(e.test(email)==false)
    {
        alert("Enter Valid E-MAIL!!!");
        return false;
    }*/
    var IND1=document.getElementById("R0").checked;
    var US1=document.getElementById("R1").checked;
    if(IND1)
    {
        document.getElementById("mob").type="number";
        var PHN=document.getElementById("mob").value;
        var P1=/^[6-9]\d{9}$/;
        if(P1.test(PHN)==false)
        {
            alert("Enter Valid INDIA number!");
            return false;
        }
    }
    if(US1)
    {
        document.getElementById("mob").type="text";
        var PHN1=document.getElementById("mob").value;
        var P2=/^[6-9]\d{2}\-\d{3}\-\d{4}$/;
        if(P2.test(PHN1)==false)
        {
            alert("Enter Valid USA number!");
            return false;
        }
    }
    var email=document.getElementById("mail").value;
    var e=/^[a-z,A-Z,0-9][0-9,A-Z,a-z,-,.]*@[a-z]{3,6}\.[a-z]{2,3}(\.)?([a-z])?([a-z])?$/;
    if(e.test(email)==false)
    {
        alert("Enter Valid E-MAIL!!!");
        return false;
    }
    var Ticked=0;
    for(i=document.getElementsByName('ch').length - 1;i >= 0;i--)
    {
        if (document.getElementsByName('ch')[i].checked)
        {
            Ticked=Ticked+1;
        }
    }
    if(Ticked <2 )
    {
        alert("Please choose at least two habits")
        return false
    }
}
function SUBMT()
{
    var CC=confirm("Do You Want to Submit?");
    if(CC){
        return true;
    }
    else
    {
        return false;
    }
}
function Confirm()
{
    var C=confirm("Do you want to CONFIRM?");
    if(C)
    {
        return true;
    }
    else{
        return false;
    }
}