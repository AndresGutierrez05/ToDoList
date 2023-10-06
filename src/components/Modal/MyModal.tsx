import Modal from 'react-modal';
import { Button, H2, H3, secondaryColor } from '../../styles/generalStyles';
import { Buttons, Form, Input, ModalContent, TextArea } from './styles';
import { ModalType } from '../../types/modal';

const customStyles = {
    content: {
        display: "flex",
        justifyContent: "center",
        padding: "2em",
        minWidth: "300px",
        top: "50%",
        left: "50%",
        right: "50%",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        background: secondaryColor,
    },
};
  

Modal.setAppElement('body');

const MyModal = ({ isOpen, setIsOpen, addTask, taskToUpdateType } : ModalType) => {

    function closeModal() {
        setIsOpen(false);
        taskToUpdateType.cleanUpdateTask();
    }
    
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <ModalContent>
                <H2>{ taskToUpdateType?.task == null ? "Add task" : "Edit task"}</H2>
                <Form onSubmit={taskToUpdateType?.task == undefined ? addTask : taskToUpdateType.updateEvent }>
                    <H3>Title</H3>
                    <Input defaultValue={taskToUpdateType?.task?.title} id='title' placeholder='Title'/>
                    <H3>Description</H3>
                    <TextArea defaultValue={taskToUpdateType?.task?.description} id='description' placeholder='Description' rows={5}/>
                    <Buttons>
                        <Button value={ taskToUpdateType?.task == undefined ? "Add task" : "Edit task"} onSubmit={taskToUpdateType?.task == undefined ? addTask : taskToUpdateType.updateEvent } >{ taskToUpdateType?.task == undefined ? "Add task" : "Edit task"}</Button>
                        <Button value="Close" onClick={closeModal}>Close</Button>
                    </Buttons>
                </Form>
            </ModalContent>
        </Modal>
    )
}

export default MyModal;