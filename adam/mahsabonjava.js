function checkanswer()
{
    var num = parseInt(document.getElementById("numplus1").value);
    var num2 = parseInt(document.getElementById("numplus2").value);
    var num3 = parseInt(document.getElementById("sum").value);
    if(num + num2 == num3)
    alert("youre right smart by you");
    var numminus = parseInt(document.getElementById("numminus").value);
    var numminus2 = parseInt(document.getElementById("numminus2").value);
    alert(numminus - numminus2)
    var numkofel = parseInt(document.getElementById("numkofel1").value);
    var numkofel2 = parseInt(document.getElementById("numkofel2").value);
    var kfela = numkofel1 * numkofel2
    alert(kfela)
}
function randomly()
{
    var random1 = Math.floor(Math.random() * 10) + 1;
    var random2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("numplus1").value = random1;
    document.getElementById("numplus2").value = random2;
}