import { FormEvent } from "react";
import { TaskToUpdateType } from "./home";

export type ModalType = {
    isOpen : boolean;
    setIsOpen : (state : boolean) => void;
    addTask : (e : FormEvent) => void;
    taskToUpdateType : TaskToUpdateType;
};