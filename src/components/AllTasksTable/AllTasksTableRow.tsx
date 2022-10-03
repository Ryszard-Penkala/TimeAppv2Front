import { TimeReportInterface } from "types";
import styles from "./AllTasksTableRow.module.scss"

interface Props {
    task: TimeReportInterface;
}

export const AllTasksTableRow = (props: Props) => {
    return (
        <tr className={styles.tableRow}>
            <th>{props.task.id}</th>
            <td>{props.task.daysOfEffort}</td>
            <td>{props.task.minutesOfEffort}</td>
            <td>{props.task.taskDescription}</td>
            <td>{String(props.task.startedAt)}</td>
            <td>{props.task.userName}</td>
        </tr>
    )
}