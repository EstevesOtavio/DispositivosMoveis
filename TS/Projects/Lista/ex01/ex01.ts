class Livro {
    private titulo : string
    private autor : string
    private anoPublicacao : number

    constructor(titulo : string, autor : string, anoPublicacao : number) {
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }

    public getTitulo() : string {
        return this.titulo
    }

    public getAutor() : string {
        return this.autor
    }

    public getAnoPublicacao() : number {
        return this.anoPublicacao
    }
}

class Usuario {
    private nome : string;
    private idade: number;

    constructor(nome : string, idade : number) {
        this.nome = nome
        this.idade = idade
    }

    public getNome() : string {
        return this.nome
    }

    public getIdade() : number {
        return this.idade
    }
}

class Biblioteca {
    acervo : Livro[]
    usuarios : Usuario[]

    constructor() {
        this.acervo = []
        this.usuarios = []
    }

    public adicionarLivro(l : Livro) {
        this.acervo.push(l)
    }

    public adicionarUsuario(u : Usuario) {
        this.usuarios.push(u)
    }

    public emprestarLivro(l : Livro, u : Usuario) {
        if((this.acervo.some(liv => liv === l)) && (this.usuarios.some(user => user === u)))
            console.log("Empréstimo realizado com")
        else {
            console.log("Livro e/ou usuário não existem na biblioteca!")
        }
    }
}

let livro1 = new Livro("titulo a", "autor a", 1998)
let user1 = new Usuario("davi", 40)
let user2 = new Usuario("daniel", 40)
let bib1 = new Biblioteca()

bib1.adicionarLivro(livro1)
bib1.adicionarUsuario(user1)
bib1.emprestarLivro(livro1, user2)

class Filme {
    private titulo: string;
    private genero: string;
    private duracao: number;

    constructor(titulo : string, genero : string, duracao : number) {
        this.titulo = titulo
        this.genero = genero
        this.duracao = duracao
    }

    public getTitulo() : string {
        return this.titulo
    }

    public getGenero() : string {
        return this.genero
    }

    public getDuracao() : number {
        return this.duracao
    }
}

class Cliente {
    private nome : string
    private idade : number

    constructor(nome : string, idade : number) {
        this.nome = nome
        this.idade = idade
    }

    public getNome() : string {
        return this.nome;
    }

    public getIdade() : number {
        return this.idade;
    }
}

class Locacao {
    private filmesAlugados: Filme[] = [];
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        this.cliente = cliente;
    }

    alugarFilme(filme: Filme): void {
        this.filmesAlugados.push(filme);
        console.log(`Filme "${filme.getTitulo()} alugado por ${this.cliente.getNome()}"`);
    }

    exibirFilmesAlugados(): void {
        console.log(`Filmes alugados por ${this.cliente.getNome()}:`);
        this.filmesAlugados.forEach((filme, index) => {
            console.log(`${index + 1}. Titulo: ${filme.getTitulo()}, Gênero: ${filme.getGenero()}, Duração: ${filme.getDuracao()} minutos`);
        });
    }
}

const cliente1 = new Cliente("Ana", 30);
const filme1 = new Filme("Matrix", "Ficção Científica", 136);
const filme2 = new Filme("O Senhor dos Anéis", "Fantasia", 201);

const locacao = new Locacao(cliente1);

locacao.alugarFilme(filme1);
locacao.alugarFilme(filme2);

locacao.exibirFilmesAlugados();

class Produto {
    private nome: string;
    private preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    public getNome(): string {
        return this.nome;
    }

    public getPreco(): number {
        return this.preco;
    }
}

class ClienteStore {
    private nome: string;
    private endereco: string;

    constructor(nome: string, endereco: string) {
        this.nome = nome;
        this.endereco = endereco;
    }

    public getNome(): string {
        return this.nome;
    }

    public getEdereco(): string {
        return this.endereco;
    }
}

class Pedido {
    private produtos: {produto: Produto; quantidade: number}[] = [];
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        this.cliente = cliente;
    }

    adicionarProduto(produto: Produto, quantidade: number): void {
        this.produtos.push({produto, quantidade});
    }

    calcularTotal(): number {
        return this.produtos.reduce((total, item) => {
            return total + item.produto.getPreco() * item.quantidade;
        }, 0);
    }

    finalizarPedido(): void {
        
    }
}