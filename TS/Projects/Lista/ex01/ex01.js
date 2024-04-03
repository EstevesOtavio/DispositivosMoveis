var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    Livro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Livro.prototype.getAutor = function () {
        return this.autor;
    };
    Livro.prototype.getAnoPublicacao = function () {
        return this.anoPublicacao;
    };
    return Livro;
}());
var Usuario = /** @class */ (function () {
    function Usuario(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Usuario.prototype.getNome = function () {
        return this.nome;
    };
    Usuario.prototype.getIdade = function () {
        return this.idade;
    };
    return Usuario;
}());
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.acervo = [];
        this.usuarios = [];
    }
    Biblioteca.prototype.adicionarLivro = function (l) {
        this.acervo.push(l);
    };
    Biblioteca.prototype.adicionarUsuario = function (u) {
        this.usuarios.push(u);
    };
    Biblioteca.prototype.emprestarLivro = function (l, u) {
        if ((this.acervo.some(function (liv) { return liv === l; })) && (this.usuarios.some(function (user) { return user === u; })))
            console.log("Empréstimo realizado com");
        else {
            console.log("Livro e/ou usuário não existem na biblioteca!");
        }
    };
    return Biblioteca;
}());
var livro1 = new Livro("titulo a", "autor a", 1998);
var user1 = new Usuario("davi", 40);
var user2 = new Usuario("daniel", 40);
var bib1 = new Biblioteca();
bib1.adicionarLivro(livro1);
bib1.adicionarUsuario(user1);
bib1.emprestarLivro(livro1, user2);
var Filme = /** @class */ (function () {
    function Filme(titulo, genero, duracao) {
        this.titulo = titulo;
        this.genero = genero;
        this.duracao = duracao;
    }
    Filme.prototype.getTitulo = function () {
        return this.titulo;
    };
    Filme.prototype.getGenero = function () {
        return this.genero;
    };
    Filme.prototype.getDuracao = function () {
        return this.duracao;
    };
    return Filme;
}());
var Cliente = /** @class */ (function () {
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    Cliente.prototype.getIdade = function () {
        return this.idade;
    };
    return Cliente;
}());
var Locacao = /** @class */ (function () {
    function Locacao(cliente) {
        this.filmesAlugados = [];
        this.cliente = cliente;
    }
    Locacao.prototype.alugarFilme = function (filme) {
        this.filmesAlugados.push(filme);
        console.log("Filme \"".concat(filme.getTitulo(), " alugado por ").concat(this.cliente.getNome(), "\""));
    };
    Locacao.prototype.exibirFilmesAlugados = function () {
        console.log("Filmes alugados por ".concat(this.cliente.getNome(), ":"));
        this.filmesAlugados.forEach(function (filme, index) {
            console.log("".concat(index + 1, ". Titulo: ").concat(filme.getTitulo(), ", G\u00EAnero: ").concat(filme.getGenero(), ", Dura\u00E7\u00E3o: ").concat(filme.getDuracao(), " minutos"));
        });
    };
    return Locacao;
}());
var cliente1 = new Cliente("Ana", 30);
var filme1 = new Filme("Matrix", "Ficção Científica", 136);
var filme2 = new Filme("O Senhor dos Anéis", "Fantasia", 201);
var locacao = new Locacao(cliente1);
locacao.alugarFilme(filme1);
locacao.alugarFilme(filme2);
locacao.exibirFilmesAlugados();
