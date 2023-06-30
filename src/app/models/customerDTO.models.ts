export interface CustomerDTO {
    id : number;
    firstname : string;
    lastname : string;
    pseudo : string;
    password : string;
    birthdate : Date;
    notices? : any[];
}
