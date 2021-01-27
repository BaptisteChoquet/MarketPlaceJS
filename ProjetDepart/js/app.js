let buttonAdd = document.querySelectorAll('.add-to-cart');
let panier = document.querySelector('#cart-table');
let Allh4 = document.querySelectorAll('h4');
let allDiscount = document.querySelectorAll('.discount');

//ajout d'un event listener sur chaque boutton
buttonAdd.forEach(function(elem){
	elem.addEventListener("click",clicSurBtn)
})

/* Function: ClicSurBtn
	detect a clic on a button and get the information of the article(name and price)


*/
function clicSurBtn(e){
    const BtnClique = e.target;
    const BtnIndex = BtnClique.getAttribute('data-id');
    
    let article = Allh4[BtnIndex-1].innerHTML
    let Price = allDiscount[BtnIndex-1].innerHTML
    addCart(article,Price,1);
}

/* Function: addCart
	Param1: The name of the Article
	Param2: The price of the Article
	Param3:The quantity to add
	Add the Article clicked to the cart
*/
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


	let Supp = document.createElement('button')
	Supp.style.width = 1+"px";
	let newTh4 = document.createElement('th');
	newTh4.appendChild(Supp)
	newTr.appendChild(newTh4);


	
	newLine.appendChild(newTr);
	newTr.style.backgroundColor = "white";
	panier.appendChild(newLine);
	alert("Vous avez ajouer l'article: "+Article+" a votre panier")
}

