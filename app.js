const intituleInput = document.querySelector('#intitule');
const sommeInput = document.querySelector('#somme');
const BtnCancel = document.querySelector('#btn-cancel');
const BtnSubmit = document.querySelector('#btn-submit');
const depensesList = document.querySelector('#depenses-list');

// BtnSubmit.addEventListener('click', () => {
//     console.log("Envoie des données");
// })

BtnSubmit.addEventListener('click', () => {
    const name = intituleInput.value;
    const prix = sommeInput.value;

    //console.log(typeof prix);

    if(name.trim().length == 0 || prix.trim().length == 0 || prix <= 0) {
        return;
    }
    else {
        const newItem = document.createElement('ion-item');
        const newLabel = document.createElement('ion-label');
        newLabel.textContent = `${name} : ${prix} $` // name + " : " + prix;
        newLabel.setAttribute('color', 'primary');
        newItem.appendChild(newLabel);
        depensesList.appendChild(newItem);


    }
})