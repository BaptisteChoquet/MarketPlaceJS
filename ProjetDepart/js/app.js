let buttonAdd = document.querySelectorAll('.add-to-cart');
let panier = document.querySelector('#cart-table');
let Allh4 = document.querySelectorAll('h4');
let allDiscount = document.querySelectorAll('.discount');
let allStock = document.querySelectorAll('.stock');





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
    let stock = allStock[BtnIndex-1].innerHTML //recuperation de la string des stock
    let nbStock = parseInt(stock);	//conversion en int
    if(nbStock <= 0){
    	createNotif(article,"stock")
    	return;
    }
    nbStock--;

    allStock[BtnIndex-1].innerHTML = nbStock;
    addCart(article,Price,1);
}

/* Function: addCart
	Param1: The name of the Article
	Param2: The price of the Article
	Param3:The quantity to add
	Add the Article clicked to the cart
*/
function addCart(Article, Prix, Qt){
	let allTh = document.querySelectorAll('th');
	let isAlreadyBuy = false;
	let index = 0;
	for(let i = 0; i < allTh.length;i++){
		console.log("1: "+Article +" 2: "+allTh[i].innerHTML)
		if(Article == allTh[i].innerHTML){
			isAlreadyBuy = true;
			index = i;
		}
	}
	console.log(isAlreadyBuy)
	if(isAlreadyBuy){
		let value = allTh[index+2].innerHTML
		let nbValue = parseInt(value)
		allTh[index+2].innerHTML = nbValue+1
												//CHANGEMENT DES PRIX
	}else{
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
	}



	
	createNotif(Article,"add");
	
}


function createNotif(Article,Text){
	let div = document.querySelector('#notification_container')
	let notif = document.createElement('p')
	
	div.appendChild(notif)
	notif.style.backgroundColor = "cyan";
	notif.style.marginBottom = 10+"px";
	if(Text == "add"){
		notif.innerHTML = Article+ " a été ajouté au panier"
	}else if(Text == "sup"){
		notif.innerHTML = Article+ " a été retiré du panier"
	}else if(Text == "stock"){
		notif.innerHTML = "il n'a plus de disponibilité pour l'article: "+Article;
	}
	
	setTimeout(function(){
    notif.style.display = "none";
}, 3000);
	


}







