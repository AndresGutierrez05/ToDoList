import { CardContainer, CardDescription, CardHeader, CardTitle, CardDelete, CardMoveTask } from './styles';
import { CardType } from '../../types/card';
import { Tooltip } from 'react-tooltip';

const MyCard = ({ title, description, id, deleteEvent, updateEvent, completed, changeState} : CardType ) => {
    return(
        <li>
            <CardContainer id={`tooltipUpdate${id}`} onDoubleClick={() => updateEvent(parseInt(id))}>
                <Tooltip
                    delayShow={80}
                    anchorSelect={`#tooltipUpdate${id}`}
                    content="Double click here to update task!" 
                />
                <CardHeader>
                    <CardTitle>
                        { title }
                    </CardTitle>
                    <CardDelete id={`tooltipDelete${id}`} onClick={() => deleteEvent(parseInt(id))}>
                        X
                    </CardDelete>
                    <Tooltip
                       anchorSelect={`#tooltipDelete${id}`}
                       content="Click here to delete task!" 
                    />
                </CardHeader>
                <CardDescription>
                    { description }
                </CardDescription>
                <CardMoveTask start={`${completed}`}>
                    <span id={`tooltipMove${id}`} onClick={() => changeState(id)}>
                        { completed ? "◄" : "►"}
                    </span>
                    <Tooltip
                       anchorSelect={`#tooltipMove${id}`}
                       content={`Click here to move to the ${ completed ? "pending" : "completed" } tasks!`} 
                    />
                </CardMoveTask>
            </CardContainer>
        </li>
    )
};

export default MyCard;