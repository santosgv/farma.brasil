function pesquisarFunc(){
    var pesquisa = document.getElementById("search").value;
	var div = document.getElementsByClassName("card-title");
	var tamanho = div.length;
	
	
	
	for (var i = 0; i < tamanho; i++) {
         if(div[i].textContent == pesquisa){
			 alert(div[i].textContent);
		 }
		 else{
			 console.log('Nao foi localizado');
		 }
}
	
}
