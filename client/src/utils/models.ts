import { TypeColum} from "./enum";

export interface TaskModel {
    id: string;
    title: string;
    column : TypeColum;
    color: string;
}

export interface TasksModel{
    
    content : string,
    piriority : string 
    category : string ;
    stage : string ,
   
    enddate : Date ,
    authorId: number ,
}
export interface DrageItem
{
    index : number;
    id : TaskModel['id'] ;
    from : TypeColum;
}
export interface Project {

    id : string;
    name : string;
    client_name : string;
    production_unit : string;
    progress : number;
    deadline : Date ;
    isPresent : boolean;
}

export interface Member {
    id : string;
    username : string;
    email : string;
    production_line : string;
    image : string;
    
    isActive : boolean;
}

