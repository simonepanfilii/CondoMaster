// Generated by https://quicktype.io

export interface CondoListModel {
    page:       number;
    perPage:    number;
    totalPages: number;
    totalItems: number;
    items:      CondoModel[];
}

export interface CondoModel {
    id:             string;
    collectionId:   string;
    collectionName: string;
    created:        string;
    updated:        string;
    Nome:           string;
    Indirizzo:      string;
    nAppartamenti:  number;
    IDAdmin:        string;
}