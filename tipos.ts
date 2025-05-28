//==TIPOS EM TYPERSCRIPT===

//Tipos primitivos
let texto: string = "Olá mundo!";
let numero: number = 42;
let ativo: boolean = true;

//Arrays
let numeros: number[] = [1, 2, 3, 4, 5]; /*primeira forma de criar a array*/
let palavras: Array<string> = ['TyperScript', 'é', 'massa!'];/*segunda forma de criar array*/

//Tuplas
let pessoa: [string, number] = ['João', 25]

//Enum
enum Cores {
    Vermelho,
    Verde,
    Rosa
}

let corFavirita: Cores = Cores.Rosa;


//Any (evitar sempre que possível)
let dadoAleatorio: any = 'S';
dadoAleatorio = 'texto';
dadoAleatorio = true;

//Unknown (tipo mais seguro do any)

let dadoDesconhecido: unknown = 10;

//Void
function mostrarAlerta(): void {
    console.log('Atenção! preste atenção na aula. ')
}

//Null e undefined
let nada: null;
let indefinido: undefined = undefined;

//never (usado quando a função nunca retorna)
function erroFatal(mensagem: string): never {
    throw new Error(mensagem)
}

//type aliases
type Usuario = {
    nome: string;
    idade: number;

}
let usuario1: Usuario = { nome: 'Maria', idade: 17 };

