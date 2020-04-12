/*  Anna Sullivan
    script.js
    INFO2134WW
    Thoendel
    4/12/2020
*/
window.addEventListener('load', ()=> {
const create = document.getElementById("actionCreate");
create.addEventListener('click', actionP);
const complete = document.getElementById("actionComplete");
complete.addEventListener('click', actionCo);

//function promise to hide actionCreate and show actionComplete
function actionP(){
const promise = new Promise((resolve, reject) => {
setTimeout( function() {
    const n = promise;
    resolve(n)
}, 1000)
}).then((n) => {
    create.style.display = "none";
    complete.style.display = "block";
});

}

//function to hide actionComplete and show actionCreate
function actionCo(){
    create.style.display = "block";
    complete.style.display = "none";
}

});