import styles from "./AllTasksTable.module.scss"
import {getAllUsersReportResponse } from "types"
import { AllTasksTableRow } from "../AllTasksTableRow/AllTasksTableRow";

interface Props {
    allTasksList: getAllUsersReportResponse;
}

export const AllTasksTable = (props: Props) => {
    return  (
        <table className={styles.allUserTable}>
            <thead>
            <tr>
                <th>Id</th>
                <th>Days of Effort</th>
                <th>Minutes of Effort</th>
                <th>Task Description</th>
                <th>Started At</th>
                <th>Affected User Id</th>
            </tr>
            </thead>
            <tbody>
            {
                props.allTasksList.map(task => (
                    <AllTasksTableRow
                        key={task.id}
                        task={task}
                    />
                ))
            }
            </tbody>
        </table>
    )
}