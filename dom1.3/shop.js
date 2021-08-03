const add = document.getElementsByClassName('addBtn');
const nComd = document.getElementsByClassName('nbrcmd');
const rem = document.getElementsByClassName('removeBtn');
const prix = document.getElementsByClassName('prixC1');
const casetotal = document.getElementsByClassName('tota');
const numcard = document.getElementsByClassName('card');
const facture = document.querySelector(".Facture");
for (let i = 0; i < numcard.length; i++) {
    let ind = numcard[i].getAttribute("id");
    add[ind].addEventListener('click', function () {
        nComd[ind].value = Number(nComd[ind].value) + 1;
        casetotal[ind].value = Number(prix[ind].textContent) * Number(nComd[ind].value);
        var T = ft();
        console.log(T);
        facture.value = T;
    });
    rem[ind].addEventListener('click', function () {
        if (nComd[ind].value > 0) {
            nComd[ind].value = Number(nComd[ind].value) - 1;
            casetotal[ind].value = Number(prix[ind].textContent) * Number(nComd[ind].value);
            facture.value = T;
        }
        else {
            alert("pas d'element dans le panier");
        }
    })
    casetotal[ind].addEventListener('click', function () {
        alert("total egale" + casetotal[ind].value);
    })
};
var ft = function factureT() {
    var t = 0;
    for (let j = 0; j < numcard.length; j++) {
        if ((Number(casetotal[j].value) != 0)) {            
            t += (Number(casetotal[j].value));
        }
        return t;
    }
}

