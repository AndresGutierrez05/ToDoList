export type CardType = {
    title : string;
    description : string;
    id : string;
    deleteEvent : (id : number) => void;
    updateEvent : (id : number) => void;
    completed : boolean;
    changeState :  any;
};