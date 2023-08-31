import {v4 as uuidv4} from "uuid" ;

import { TaskModel } from "../utils/models";
import { useLocalStorage } from "usehooks-ts";
import { TypeColum } from "../utils/enum";




function useTaskCollection() {
  return useLocalStorage< {
    [key in TypeColum ]: TaskModel[] ;}>(
        'tasks' , {
            'Todo' : [
                {id : uuidv4() ,
                column : TypeColum.TO_DO ,
                title : 'Task 1',
            
                color : 'rgba(209,245,255, 255)'},
            ],
           

            'In Progress' : [
                {id : uuidv4(),
                column : TypeColum.IN_PROGRESS,
                title : 'Task 2',
                color : 'rgba(209,245,255, 255)'},
            ],
           
            'Review' : [
                {id : uuidv4(),
                column : TypeColum.TO_REVIEW,
                title : 'Task 3',
                color : 'rgba(209,245,255, 255)'},
            ],
            'closed' : [
                {id : uuidv4(),
                column : TypeColum.CLOSED,
                title : 'Task 4',
                color :'rgba(209,245,255, 255)'},],
             'backlog' : [{id : uuidv4(),
            column : TypeColum.BACKLOG,
            title : 'Task 5',
            color : 'rgba(209,245,255, 255)'},]   
        }

    )
  };
    


export default useTaskCollection

