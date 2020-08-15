import React, {useState} from 'react';

export default {
    title: 'React.memo demo'
}

type NewMessagesCounterPropsType = {
    count: number
}
const NewMessagesCounter: React.FC<NewMessagesCounterPropsType> = (props) => {
    console.log('COUNT');
    return <div>{props.count}</div>
};
const Count = React.memo(NewMessagesCounter);


export type UsersPropsType = {
    users: Array<string>
}
const UsersSecret: React.FC<UsersPropsType> = (props) => {
    console.log('USERS');
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
};
const Users = React.memo(UsersSecret);


export const Example = () => {

    const [counter, setCounter] = useState<number>(0);
    const [users, setUsers] = useState<Array<string>>(['Anna', 'Maikl', 'Alexei', 'Masha']);

    const increase = () => {
        setCounter(counter + 1)
    };

    const addName = () => {
        let newUsers = [...users, 'Nikita -' + new Date().getTime()];
        setUsers(newUsers);
    };

    return <>
        <button onClick={increase}>+</button>
        <button onClick={addName}>addName</button>
        <Count count={counter}/>
        <Users users={users}/>
    </>
};
