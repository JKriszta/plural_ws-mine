function _load (){
	let rootE = document.getElementById("root"); // kijelöljük a root elemet
let aTextArray1 = ["alma", "csereszne", "eper", 4788888]; // négyzetes zárójel, tömbök eltárolására használjuk, primitíveknek hívjuk őket, a szövegek és a számok. primitíveket és objecteket tárolhatunk el tömbben. akár html elementet, vagy függvény it eltárolhatunk benne
let aTextArray = ["alma", "csereszne", "eper", "dinnye", "szeder", "mandarin", "ribizli", "narancs", "paradicsom", "citrom", "datolya", "szilva", "barack", "pomelo", "kiwi", "grapefruit", "khaki"];
console.log(aTextArray); //0 első elem kiírása
console.log(aTextArray[0]); //0 első elem kiírása
console.log(aTextArray[2]); //2 harmadik elem kiírása
console.log(aTextArray.length);
	for (let index = 0; index < aTextArray.length; index++) {
	//const element = array[index]; nem használtuk
	//console.log(aTextArray[index]); // egyesével végigmegy az elemeken 0-2 ig
	//divek generálása a tömb alapján:
	rootE.insertAdjacentHTML("beforeend", `
		<div class="fruit">${aTextArray[index]}</div>
	`);
	//jelöljük ki az üsszes fruit class deivet  a getEbyId az csak a HMTL-en tud kijelölni
}

let fruitDivs = rootE.querySelectorAll(".fruit");
	//console.log(fruitDivs); //NodeList valójában nem list hanem tömb, csak azt állítja hogy list, de Arrayként viselkedik, objektumként viselkedik. getElementsByClassName getElementsByTagName többesszám miatt tömbként kell rá tekinteni és tömbként fogjuk kezelni. ellenben getelementbyid egy elemet kapunk. QuerySelectorAll összes elemet kiejlöli. mikor getelemetsbyclassname vs queryselectorAll?: érdemes queryselectorAll jelenkori modern minden böngésző által támogatott.
	//console.log(document.getElementsByClassName("fruit")); //HTMLCollection (nem NodeList), ez különbség. Különbség node és element között, pl. Node <div>Text</div> a Text része az egy node. minden element node, de nem minden node element, a text nem element de node. a Text itt egy TextNode, ez a neve a DOMban. ami nem html element az node. :first-letter-t is ki tudunk jelölni QuerySelectorral, és node-ot is ki tud jelülni nem csak elementet.
	//console.log(fruitDivs.length);
	for (let index = 0; index < fruitDivs.length; index++) {
		//console.log(fruitDivs[index]);
		//fruitDivs[index].classList.add("anotherClass"); //updateltük a classnevet
		//console.log(1 === 1);  //3szor azt mondja hogy true
		//console.log(1 === 2);  //3szor false
		//console.log(index === 1); //bal oldal változó vizsgált elem jobb oldal mivel hasonlítjuk össze. false. 0 egyenló 1-el? false. 
		//minden második elemre kerüljön csak rá a trueClass, a többi meg falseClass
	/*	if (index % 2 === 0) { 	//maradék 0 legyen hogy minden 2 elem ne csak a 2. elem
			fruitDivs[index].classList.add("trueClass");  
		} else {
			fruitDivs[index].classList.add("falseClass");  
		}
		*/
		//console.log(index % 2); //kiírja hogy melyek a páros számú elemek.
		//console.log(index % 3); //kiírja hogy melyek a páros számú elemek.
		//majd hozzáadtunkj még gyümölcsöket az array listához.
		//console.log(index % 2 === 0);
		//console.log(index % 2 === 0);

		if (index % 2 === 0) { 	//maradék 0 legyen hogy minden 2 elem ne csak a 2. elem
			fruitDivs[index].classList.add("trueClass");  	
		} else if(index % 5 === 0) {
			fruitDivs[index].classList.add("anotherClass");
		} else {
			fruitDivs[index].classList.add("falseClass");  
		}
		//10. elemre nem került rá az anotherClass, miért? első körben páros már kinent, a második körben a páratlanokat vizsgálja. 
		
	}
}

window.addEventListener("load", _load);