import { TimeReportInterface } from "types";

interface Props {
    task: TimeReportInterface;
}

export const AllTasksTableRow = (props: Props) => {
    return (
        <tr>
            <th>{props.task.id}</th>
            <td>{props.task.daysOfEffort}</td>
            <td>{props.task.minutesOfEffort}</td>
            <td>{props.task.taskDescription}</td>
            <td>{String(props.task.startedAt)}</td>
            <td>{props.task.userName}</td>
        </tr>
    )
}