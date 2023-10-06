import axios from 'axios';
import { TaskType } from '../types/home';
import { HttpStatus } from '../types/httpStatus';

const Url = process.env.TASK_API_URL ?? "https://localhost:7149/api/Task";
const errorMessage = "An error ocurred with request";

export const getAllTasksService = async () => {
    try {
        const { data } = await axios.get<TaskType[]>(Url);
        return data;
    } catch (error) {
        alert(`${errorMessage} GAT`);
        return [];
    }
}

export const createTaskService = async (task : TaskType) => {
    try {
        const { data, status } = await axios.post<string>(Url, task);
        if(!(status === HttpStatus.Created))
            alert(data);
    } catch (error) {
            alert(`${errorMessage} CT`);
    }
}

export const updateTaskService = async (id : number, task : TaskType) => {
    try {
        const { data, status } = await axios.put<string>(`${Url}/${id}`, task);
        if(!(status === HttpStatus.OK))
            alert(data);
    } catch (error) {
        alert(`${errorMessage} UT`);
    }
}

export const deleteTaskService = async (id : number) => {
    try {
        const { data, status } = await axios.delete<string>(`${Url}/${id}`);
        if(!(status === HttpStatus.OK))
            alert(data);
    } catch (error) {
        alert(`${errorMessage} DT`);
    }
}

