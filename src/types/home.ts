export type TaskType = {
    id : number;
    title : string;
    description : string;
    completed : boolean;
};

export type TaskToUpdateType = {
    task? : TaskType;
    updateEvent : (e: any) => void;
    cleanUpdateTask : () => void;
}