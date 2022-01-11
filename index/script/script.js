function szamol() {
    let szam1 = document.getElementById("szam1").value
    let szam2 = document.getElementById("szam2").value
    let muv = document.getElementById("muvelet").value;


    let x = parseInt(szam1)
    let y = parseInt(szam2)
    let eredmeny = 0
    if (muv === "osszad") {
        eredmeny = x + y
    } else if (muv === "kivon") {
    eredmeny = x - y
    } else if (muv === "oszt") {
        eredmeny = x / y
    }else if (muv === "szoroz") {
        eredmeny = x * y
    }
    console.log(eredmeny);
}
document.getElementById("szam1").focus();
