let buttonAdd = document.querySelectorAll('.add-to-cart');
let panier = document.querySelector('#cart-table');
let Allh4 = document.querySelectorAll('h4');
let allDiscount = document.querySelectorAll('.discount');


buttonAdd.forEach(function(elem){
	elem.addEventListener("click",clicSurBtn)
})

function clicSurBtn(e){
    const BtnClique = e.target;
    const BtnIndex = BtnClique.getAttribute('data-id');
    
    let article = Allh4[BtnIndex-1].innerHTML
    let Price = allDiscount[BtnIndex-1].innerHTML
    addCart(article,Price,1);
}


function addCart(Article, Prix, Qt){
	let newLine = document.createElement('thead');
	let newTr = document.createElement('tr');
	
	let newTh0 = document.createElement('th');
	newTr.appendChild(newTh0);
	
	let newTh1 = document.createElement('th');
	newTr.appendChild(newTh1);
	newTh1.innerHTML = Article;

	let newTh2 = document.createElement('th');
	newTr.appendChild(newTh2);
	newTh2.innerHTML = Prix;
	
	let newTh3 = document.createElement('th');
	newTr.appendChild(newTh3);
	newTh3.innerHTML = Qt;

	let newTh4 = document.createElement('th');
	newTr.appendChild(newTh4);



	newLine.appendChild(newTr);
	newTr.style.backgroundColor = "white";
	panier.appendChild(newLine);
}

