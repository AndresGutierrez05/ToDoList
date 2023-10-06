import { useEffect, useState } from 'react';
import { H1, Button, H3} from '../../styles/generalStyles';
import { PendingTasks, CompletedTasks, Main, Section, ModalContainer, SectionTasks, Ul } from './styles';
import { TaskType } from '../../types/home';
import MyModal from '../Modal/MyModal';
import MyCard from '../Cards/MyCard';
import { createTaskService, deleteTaskService, getAllTasksService, updateTaskService } from '../../api/task';

const Home = () => {
    const [tasks, setTask] = useState<TaskType[]>([]);
    const [updatingTask, setUpdatingTask] = useState<TaskType | undefined>();
    const [change, setChange] = useState<boolean>(false);
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);

    const fetchTasks = async () => {
        const tasks = await getAllTasksService();
        setTask(tasks);
        setChange(false);
    };

    const addTask = (e : any) => {
        const title = (e.target?.title?.value as string).trim(),
              description = (e.target?.description?.value as string).trim();
        if(title != "" && description != ""){
            const newTask = {
                id: tasks.length > 0 ? tasks.map((t: TaskType) => t.id).reduce((a, b) => Math.max(a, b), 0) + 1 : 1,
                title: title,
                description: description,
                completed: false,
            };
            createTaskService(newTask);
            setTask([...tasks, newTask]);
            setIsOpen(false);
            setChange(true);
        }else{
            alert("Please write a title and description");
        }
    };

    const deleteEvent = (id : number) => {
        deleteTaskService(id);
        setTask([...tasks.filter(t => t.id != id)]);
    };

    const updateEvent = (id : number) =>{
        const selectedTask = tasks.filter(t => t.id == id)[0] || null;
        if(selectedTask != null){
            setUpdatingTask(selectedTask);
            setIsOpen(true);
        }
    };

    const cleanUpdateTask = () => setUpdatingTask(undefined);

    const orderTasks = (tasks : TaskType[]) => { 
        return tasks.sort((a, b) => a.id - b.id);
    };

    const updateTask = (e : any) => {
        const title = (e.target?.title?.value as string).trim(),
              description = (e.target?.description?.value as string).trim();
        const tasktoUpdate = tasks.filter(t => t.id == (updatingTask?.id || 0))[0] || null;
        if(tasktoUpdate != null){
            const taskEdited = {
                id: updatingTask?.id,
                title: title,
                description: description,
                completed: updatingTask?.completed,
            } as TaskType;
            updateTaskService(taskEdited.id, taskEdited);
            setTask(orderTasks([...tasks.filter(t => t.id != (updatingTask?.id || 0)), taskEdited]));
        }
        cleanUpdateTask();
        setIsOpen(false);
        e.preventDefault();
    }

    const changeState = (id : number) => {
        const tasktoUpdateState = tasks.filter(t => t.id == id).map(t => ({
            id: t.id,
            title: t.title,
            description: t.description,
            completed: !t.completed,
        }))[0];
        updateTaskService(id, { completed : tasktoUpdateState.completed} as TaskType);
        setTask(orderTasks([...tasks.filter(t => t.id != id), tasktoUpdateState]));
    };

    useEffect(() =>{
        fetchTasks();
    }, []);

    return(
        <>
            <Main data-testid="Home-Component">
                <H1>To Do List</H1>
                <Section>
                    <Button data-testid="add-task-button" onClick={() => setIsOpen(true)}>Add Task</Button>
                </Section>
                <SectionTasks>
                    <PendingTasks data-testid="pending-task-container">
                        <H3 border="2px" bordertype="dotted">Pending Tasks</H3>
                            {
                                tasks.filter(t => !t.completed).length > 0
                                    ? <Ul>
                                        {tasks.filter(t => !t.completed).map((t) =>
                                                <MyCard key={t.id} title={t.title} description={t.description} id={t.id.toString()} deleteEvent={deleteEvent} updateEvent={updateEvent} completed={t.completed} changeState={changeState}/>
                                        )}
                                    </Ul>
                                    : <H3>There are not pending tasks!</H3>
                            }
                    </PendingTasks>
                    <CompletedTasks data-testid="completed-task-container">
                        <H3 border="2px" bordertype="dotted">Completed Tasks</H3>
                            {
                                tasks.filter(t => t.completed).length > 0
                                    ? <Ul>
                                        {tasks.filter(t => t.completed).map(t =>
                                            <MyCard key={t.id} title={t.title} description={t.description} id={t.id.toString()} deleteEvent={deleteEvent} updateEvent={updateEvent} completed={t.completed} changeState={changeState}/>
                                        )}
                                    </Ul>
                                    : <H3>There are not completed tasks!</H3>
                            }
                    </CompletedTasks>
                </SectionTasks>
            </Main>
            <ModalContainer data-testid="modal-container">
                <MyModal data-testid="modal-form" isOpen={modalIsOpen} setIsOpen={setIsOpen} addTask={addTask} taskToUpdateType={{ task : updatingTask, updateEvent : updateTask, cleanUpdateTask : cleanUpdateTask}}/>
            </ModalContainer>
        </>
    )
};

export default Home;