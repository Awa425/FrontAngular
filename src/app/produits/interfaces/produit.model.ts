export interface Produits{
    id:number;
    nom: string;
    image:string;
    prix: number;
    etat: boolean;
    quantite: number;
    type: string;
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
    type: string;
   
}
export interface Boisson{
    id:number;
    nom: string;
    image:string;
    prix: number;
    etat: boolean;
    quantite: number
    type: string;  
}
export interface Fritte{
    id:number;
    nom: string;
    image:string;
    prix: number;
    etat: boolean;
    quantite: number
    type: string;
   
}
export interface Menu{
    id:number;
    nom: string;
    image:string;
    prix: number;
    etat: boolean;
    quantite: number;
    burger: Burger[]
    boisson: Boisson[];
    fritte: Fritte[];
    type: string;
}

export interface Zone{
    nomZone: string;
    prixLivraison: number;
}

export interface Commande{
    zone: Zone;
    ligneCommandes:[
        {
            "quanite": 0;
            "produit": Produits;
        }
    ]
}



