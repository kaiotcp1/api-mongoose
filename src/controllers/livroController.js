const mongoose = require('mongoose');
const livro = mongoose.model('livro');  // importando model

// GET ALL
exports.lista_todos_os_livros = function(req, res) {
    livro.find({}, function(err, livros) {
        if(err) {
            res.send(err);
        } else {
            res.json(livros);
        };
    });
};

// GET ID 
exports.lista_um_livro = function(req, res) {
    livro.findOne({"_id:": req.params.livroId}, function(err, livro) {
        if(err) {
            res.send(err);
        } else {
            res.json(livro)
        };
    });
};

// POST
exports.adiciona_um_livro = function(req, res) {
  let novo_livro = new livro(req.body);
  console.log(novo_livro);
    novo_livro.save(function(err, livro) {
        if(err) {
            res.send(err);
        } else {
            res.json(livro);
        }
    });
};

// PUT
exports.atualiza_um_livro = function(req, res) {
    livro.findOneAndUpdate({_id: req.params.livroId}, req.body, {new: true},
         function(err, livro) {
            if(err) {
                res.send(err);
            } else {
                res.json(livro)
            };
    });
};

// DELETE
exports.remove_um_livro = function(req, res) {
    livro.deleteOne({_id: req.params.livroId}, function(err, livro) {
        if(err) {
            res.send(err);
        } else {
            res.json({"Mensagem": "Livro deletado com sucesso"})
        }
    })
}