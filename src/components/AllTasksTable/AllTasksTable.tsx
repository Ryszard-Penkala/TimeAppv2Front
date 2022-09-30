import {getAllUsersReportResponse } from "types"
import { AllTasksTableRow } from "./AllTasksTableRow";

interface Props {
    allTasksList: getAllUsersReportResponse;
}

export const AllTasksTable = (props: Props) => {

    return  (
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Days of Effort</th>
                <th>Minutes of Effort</th>
                <th>task Description</th>
                <th>started At</th>
                <th>affected User Id</th>
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