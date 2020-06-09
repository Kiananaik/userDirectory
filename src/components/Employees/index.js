import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import EmployeeTableRow from "../EmployeeTableRow/index"

function Employees() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState("")
    const [search, setSearch] = useState()

    useEffect(() => {
        API.getUsers()
            .then(res => {
                console.log(res)
                setUsers(res.data.results)
            }
            )
            .catch(err => setError(err))
    }, []);

    console.log(users)
    const userList = users.map(user => 
        <EmployeeTableRow user={user}/>
    )


    return (userList)
}

export default Employees;