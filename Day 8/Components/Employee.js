import { useState } from 'react';

function Employee() {
    const [employee, setEmployee] = useState({
        empNo: "10",
        empName: "Akshat",
        des: "Employee",
    });

    return (
        <>
            <p>Employee number is {employee.empNo}</p>
            <p>Employee name is {employee.empName}</p>
            <p>Employee designation is {employee.des}</p>
            <button onClick={() => setEmployee({ ...employee, des: "Team Manager" })}>
                After Upgrade
            </button>
        </>
    );
}

export default Employee;
