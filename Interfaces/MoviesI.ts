export interface MoviesI{
    adult:boolean;
    backdrop_path:string;
    id:number;
    original_title:string;
    overview:string;
    poster_path:string;
    title:string;
}



export interface MoviesInfoI{
    adult:boolean;
    backdrop_path:string;
    genres:[
        {
            id:number;
            name:string;
        }
    ]
    id:number;
    original_language:string;
    original_title:string;
    overview:string;
    popularity:number;
    poster_path:string;
    release_date:string;
    runtime:number;
    title:string;
    vote_average:number
}