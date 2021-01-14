import React, { useState, useEffect, useMemo, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addNewUser, deleteUser, updateUser } from '../actions/actionsUser';
import userInterface from '../interface/userInterface';

const DemoRedux = () => {
    useMemo(() => {
        // constructor

    }, [])
    const listUser: userInterface[] = useSelector(state => state.user);
    const [editing, setEditing] = useState(false);

    const initialFormState = {
        id: 0,
        name: ''
    }
    const [user, setUser] = useState(initialFormState);
    // let user: userInterface = useMemo(() => {
    //     return {
    //         id: Math.floor(Math.random() * 10000) + 1,
    //         name: userName
    //     }
    // }, [userName])
    useEffect(() => {
    }, [user])

    const dispatch = useDispatch();
    const addU = () => {
        user.id = Math.floor(Math.random() * 1000000) + 1;
        dispatch(addNewUser(user));
        setUser(initialFormState)
    }
    const deleteU = (id) => {
        dispatch(deleteUser(id));
    }

    const UpdateU = () => {
        dispatch(updateUser(user));
        setUser(initialFormState)
    }
    const listViewUser = listUser.length > 0 ? listUser.map((user) => {
        console.log('id', user.id);
        return (

            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>
                    <button className="button muted-button" onClick={() => {
                        setEditing(true);
                        setUser(user);
                    }}>Edit</button>
                    <button className="button muted-button" onClick={() => deleteU(user.id)}>Delete</button>
                </td>
            </tr>

        )
    }) : (
            <tr>
                <td colSpan={3}>No users</td>
            </tr>
        )

    // let listViewUser;
    // setTimeout(() => {
    //     listViewUser = listUser.map((user) => {
    //         return user
    //         // return (
    //         //     <li key={user.id}>id : {user.id}
    //         //         <br />
    //         //     name : {user.name}
    //         //     </li>
    //         // )
    //     })
    // }, 2500);


    // console.log("🚀 ~ file: demoRedux.tsx ~ line 32 ~ listViewUser ~ listViewUser", listViewUser)
    const onChangeName = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }
    return (
        <div>
            {!editing ? (<Fragment><h1>Thêm người dùng </h1><label htmlFor="name">Thêm tên </label></Fragment>) :
                (<Fragment><h1>Sửa người dùng </h1><label htmlFor="name">Sửa tên </label></Fragment>)}

            <input type="text" name="name" value={user.name} onChange={onChangeName} />
            {!editing ? (<button onClick={addU}>Add user</button>)
                :
                (<Fragment><button onClick={UpdateU}>Update</button>
                    <button onClick={() => {
                        setEditing(false);
                    }}>Cancel</button></Fragment>
                )}


            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listViewUser}
                </tbody>
            </table>
        </div>
    )
}
export default DemoRedux;