function checkanswer()
{
    var num = parseInt(document.getElementById("numplus1").value);
    var num2 = parseInt(document.getElementById("numplus2").value);
    var num3 = parseInt(document.getElementById("sum").value);
    if(num + num2 == num3)
        document.getElementById("msgplus").innerHTML = "youre right"
    else
        document.getElementById("msgplus").innerHTML = "youre wrong"
    var numminus = parseInt(document.getElementById("numminus").value);
    var numminus2 = parseInt(document.getElementById("numminus2").value);
    var summinus = parseInt(document.getElementById("summinus").value);
    if(numminus - numminus2 == summinus)
        document.getElementById("msgminus").innerHTML = "youre right"
    else
        document.getElementById("msgminus").innerHTML = "youre wrong"
    var numkofel1 = parseInt(document.getElementById("numkofel1").value);
    var numkofel2 = parseInt(document.getElementById("numkofel2").value);
    var sumkofel = parseInt(document.getElementById("sumkofel").value);
    if (numkofel1 * numkofel2 == sumkofel)
        document.getElementById("msgkofel").innerHTML = "youre right"
    else
        document.getElementById("msgkofel").innerHTML = "youre wrong"
    var numhilok = parseInt(document.getElementById("numhilok").value);
    var numhilok2 = parseInt(document.getElementById("numhilok2").value);
    var sumhilok = parseInt(document.getElementById("sumhilok").value);
    if (numhilok / numhilok2 == sumhilok)
        document.getElementById("msghilok").innerHTML = "youre right"
    else
        document.getElementById("msghilok").innerHTML = "youre wrong"
    var nummodle = parseInt(document.getElementById("nummodle").value);
    var nummodle2 = parseInt(document.getElementById("nummodle2").value);
    var summodle = parseInt(document.getElementById("summodle").value);
    if (nummodle % nummodle2 == summodle)
        document.getElementById("msgmodle").innerHTML = "youre right"
    else
        document.getElementById("msgmodle").innerHTML = "youre wrong"

}
function randomly()
{
    var random1 = Math.floor(Math.random() * 10) + 1;
    var random2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("numplus1").value = random1;
    document.getElementById("numplus2").value = random2;
    var randomminus = Math.floor(Math.random() * 10) + 1;
    var randomminus2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("numminus").value = randomminus;
    document.getElementById("numminus2").value = randomminus2;
    var randomkofel1 = Math.floor(Math.random() * 10) + 1;
    var randomkofel2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("numkofel1").value = randomkofel1;
    document.getElementById("numkofel2").value = randomkofel2;
    var randomhilok = Math.floor(Math.random() * 10) + 1;
    var randomhilok2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("numhilok").value = randomhilok;
    document.getElementById("numhilok2").value = randomhilok2;
    var randommodle = Math.floor(Math.random() * 10) + 1;
    var randommodle2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("nummodle").value = randommodle;
    document.getElementById("nummodle2").value = randommodle2;
}