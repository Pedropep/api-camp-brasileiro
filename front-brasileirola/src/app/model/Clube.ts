import { Brasileiro } from "./Brasileiro"

export class Clube {
    public nome : string
    public qtdVitorias : number    
    public pontos : number
    public partidas: Brasileiro[]

    constructor(nome:string, qtdVitorias: number, pontos:number , partidas: Brasileiro[]){
        this.nome = nome,
        this.qtdVitorias = qtdVitorias,
        this.pontos = pontos
        this.partidas = partidas
    }   
}