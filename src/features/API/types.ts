

export interface productProps{
    id : string,
    name : string,
    description : string,
    price : number
}


export type fetchDataState = {
    loading : boolean;
    error: string | null;
    data: [];
  };