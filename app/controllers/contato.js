var contatos = [{
	_id: 1, nome: 'Contato 1', email: 'cont1@empresa.com'
},{
	_id: 2, nome: 'Contato 2', email: 'cont2@empresa.com'
},{
	_id: 3, nome: 'Contato 3', email: 'cont3@empresa.com'
}];

module.exports = function(){
	var controller = {};
	controller.listaContatos = function(req, res){
		res.json(contatos);
	};
	controller.obtemContato = function(req, res){
		var idContato = req.params.id;
		var contato = contatos.filter(function(contato){
			return contato._id == idContato;
		})[0];
		contato ? res.json(contato) : res.status(404).send('Contato não encontrado');
	};
	return controller;
};