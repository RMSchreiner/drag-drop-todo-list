//Drag & Drop Interfaces

//using a namespace to split into seperate files
//can wrap a name space around any code you have
//export makes it available outside the file

   export interface Draggable {
        dragStartHandler(event: DragEvent): void;
        dragEndHandler(evemt: DragEvent): void;
    }
    
   export interface DragTarget{
        dragOverHandler(event: DragEvent): void;
        dropHandler(event: DragEvent): void;
        dragLeaveHandler(event: DragEvent): void;
    }

