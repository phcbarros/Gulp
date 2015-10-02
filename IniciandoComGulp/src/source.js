var dizerOi = function(name){
	alert('Hi ' + name + '!');
};

var dizerTchau =function(name){
	alert('Tchau' + name + '!');
};

Array.prototype.indexOfById = function(id){
	
	var index = -1,
		i = 0,
		l = this.length,
		item;
	
	for(; l--; i++){
		item = this[i];
		
		if(parseInt(item.id) === id)
			return i; 	
	}
	
	return index;
};

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var getUsuario = function(){
	
	var $nome = document.getElementById('nome'),
		lista = [
			{ id: 1, nome: 'Paulo Barros'},
			{ id: 2, nome: 'Ian Muller'},
			{ id: 3, nome: 'Ana Maria da Costa'}],
		usuario;

	usuario= lista[lista.indexOfById(getRandomInt(1,4))];
	$nome.value = usuario.nome;
	dizerOi(usuario.nome);	
};