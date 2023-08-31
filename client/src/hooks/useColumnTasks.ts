import { useCallback } from "react";
import {TypeColum } from "../utils/enum";
import useTaskCollection from "./useTaskCollection";
import { v4 as uuidv4 } from 'uuid';
import { TaskModel } from "../utils/models";
import { pickChakraRandomColor } from "../utils/helpers";
const MAX_TASK_PER_COLUMN = 100;
function useColumnTasks(column : TypeColum) {
    const [tasks, setTasks] = useTaskCollection();
   
  

  const addEmptyTask = useCallback(() => {
    console.log(`Adding new empty task to ${column} column`);
    setTasks((allTasks) => {
      const columnTasks = allTasks[column];

      if (columnTasks.length > MAX_TASK_PER_COLUMN) {
        console.log('Too many task!');
        return allTasks;
      }

      const newColumnTask: TaskModel = {
        id: uuidv4(),
        title: `New ${column} task`,
        color: pickChakraRandomColor('.300'),
        column,
      };

      return {
        ...allTasks,
        [column]: [newColumnTask, ...columnTasks],
      };
    });
  }, [column, setTasks]);
  const updateTask = useCallback(
    (id: TaskModel['id'], updatedTask: Omit<Partial<TaskModel>, 'id'>) => {
     console.log(`Updating task ${id} with ${JSON.stringify(updateTask)}`);
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: columnTasks.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task,
          ),
        };
      });
    },
    [column, setTasks],
  );
  const deleteTask = useCallback(
    (id: TaskModel['id']) => {
      console.log(`Removing task ${id}..`);
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: columnTasks.filter((task) => task.id !== id),
        };
      });
    },
    [column, setTasks],
  );
  const dropTaskFrom = useCallback(
    (from: TypeColum, id: TaskModel['id']) => {
      setTasks((allTasks) => {
        const fromColumnTasks = allTasks[from];
        const toColumnTasks = allTasks[column];
        const movingTask = fromColumnTasks.find((task) => task.id === id);

        console.log(`Moving task ${movingTask?.id} from ${from} to ${column}`);

        if (!movingTask) {
          return allTasks;
        }

        // remove the task from the original column and copy it within the destination column
        return {
          ...allTasks,
          [from]: fromColumnTasks.filter((task) => task.id !== id),
          [column]: [{ ...movingTask, column }, ...toColumnTasks],
        };
      });
    },
    [column, setTasks],
  );


  return { tasks :tasks[column],
addEmptyTask,
updateTask ,
deleteTask,
dropTaskFrom}

 


 
}

export default useColumnTasks
