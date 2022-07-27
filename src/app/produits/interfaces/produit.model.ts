export interface Produits{
    id:number;
    nom: string;
    image:string;
    prix: number;
    etat: boolean;
    quantite: number
}
export interface Catalogue{
    burger: Produits[];
    menu: Produits[];
}

export interface Burger{
    id:number;
    nom: string;
    image:string;
    prix: number;
    etat: boolean;
    quantite: number
}
export interface menu{
    id:number;
    nom: string;
    image:string;
    prix: number;
    etat: boolean;
    quantite: number;
    burger: Burger
}

