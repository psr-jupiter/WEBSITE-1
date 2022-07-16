function Vaalid(){
    var Y=document.getElementById("NA").value;
    var H=document.getElementById("Ids").value;
    var I=/^[a-z A-Z]{3,}$/;
    if(I.test(Y)==false)
    {
        document.getElementById("LL2").style.visibility="visible";
        return false;
    }
    var ff=/^(F|f)18(1|0)\d{3}$/;
    if(ff.test(H)==false)
    {
        document.getElementById("LL1").style.visibility="visible";
        return false;
    }
}
function Vaalid(){
    var Y1=document.getElementById("N").value;
    var H1=document.getElementById("IDD").value;
    var I1=/^[a-z A-Z]{3,}$/;
    if(I1.test(Y1)==false)
    {
        document.getElementById("L12").style.visibility="visible";
        return false;
    }
    var ff1=/^(N|n)18(1|0)\d{3}$/;
    if(ff1.test(H1)==false)
    {
        document.getElementById("L11").style.visibility="visible";
        return false;
    }
}