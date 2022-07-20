/*
PIRMA UŽDUOTIS
Parašykite scriptą, kuris paprašytų įvesti: prekės kainą, paklaustų ar reikalingas pristatymas, jei reikalingas - paklaustų miesto į kurį reiks pristatyti. Naudokit do while loop, kol kažką įrašys arba įrašys teisingai ir if bei else kad patikrintų ką įrašys.

"Įveskite prekės kainą";
"Ar reikalingas pristatymas į namus? (taip/ne)";
"Į kurį miestą reiks pristatyti?"

Galiausiai atspausdintų tokią informaciją:

---
1 variantas (be pristatymo)

Prekės kaina: xx.xx €
Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a


---
2 variantas (su pristatymu)

Prekės kaina : xx.xx €
Pristatymas: xx.xx €
Iš viso: xx.xx €
Prekę pristatysime į "įvestas miestas" per 1-3 dienas.
*/

"use strict"

do{    
    var price = prompt("Įveskite prekės kainą")
} while(isNaN(price) || price < 0)

var delivery = confirm("Ar reikalingas pristatymas į namus? (taip/ne)")

if(delivery == true){
    var address = prompt("Į kurį miestą reiks pristatyti?")
    var deliveryPrice = 5
    var total = Number(price) + Number(deliveryPrice)

console.log("Prekės kaina: " + price + " €")
console.log("Pristatymas: " + deliveryPrice + " €")
console.log("Iš viso: " + total + " €")
console.log("Prekę pristatysime į " + address + " per 1-3 dienas.")
}

else {
    console.log("Prekės kaina: " + price + " €")
    console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
}


