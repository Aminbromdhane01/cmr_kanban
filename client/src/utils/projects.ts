import { Project } from "./models";
import { v4 as uuidv4 } from 'uuid';

const projects: Project[] = [
    {
        id : uuidv4(),
        name: "Project 1",
        client_name : "CMR_UK",
        production_unit: "UAP3",
        progress : 0,
        deadline: new Date(2023, 1, 1) ,
        isPresent : false,
    },
    {
        id : uuidv4(),
        name: "Project 2",
        client_name : "CMR_US",
        production_unit: "UAP3",
        progress : 30,
        deadline: new Date(2023, 1, 1) ,
        isPresent : true,
    },
    {
        id : uuidv4(),
        name: "Project 1",
        client_name : "CMR_GROUP",
        production_unit: "UAP3",
        progress : 40,
        deadline: new Date(2023, 1, 1) ,
        isPresent : true,
    },
    {
        id : uuidv4(),
        name: "Project 1",
        client_name : "PERKINS",
        production_unit: "UAP3",
        progress : 0,
        deadline: new Date(2023, 1, 1) ,
        isPresent : false,
    },
    {
        id : uuidv4(),
        name: "Project 1",
        client_name : "RUMSNT",
        production_unit: "UAP3",
        progress : 0,
        deadline: new Date(2023, 1, 1) ,
        isPresent : false,
    }



    
];
export default projects