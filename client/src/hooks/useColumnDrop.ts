import { ItemType, TypeColum } from "../utils/enum";
import { DrageItem, TaskModel } from "../utils/models";
import { useDrop } from "react-dnd";

function useColumnDrop(
    column: TypeColum ,
    handleDrop : (fromColumn : TypeColum, TaskId : TaskModel["id"]) => void
) {

 const [{isOver} , dropRef] = useDrop<DrageItem , void , {isOver : boolean}>({
    accept : ItemType.TASK,
    drop : (dragItem) => {
        if (!dragItem || dragItem.from === column) {
            return;
    }
    handleDrop(dragItem.from, dragItem.id);

 },
collect : (monitor) => ({
    isOver : monitor.isOver(),
})
});
return {
    isOver ,
    dropRef
}

}


export default useColumnDrop
 