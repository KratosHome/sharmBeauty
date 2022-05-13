export interface productTypes {
    brend: string;
    name: string;
    nameDiscription: string;
    prod: prodTypes[];
    grade: number;
    categories: string[];
    present: string;
    countri: string;
    female: string;
    aroma_type: string;
    initial_note: string;
    heart_note: string;
    final_note: string;
    description: string;
    img: string;
    cart_img: string[];
    link: string;
}

export interface prodTypes {
    id?: string;
    size?: string;
    prise?: number;
    newPrise?: number;
    count?: number;
}



