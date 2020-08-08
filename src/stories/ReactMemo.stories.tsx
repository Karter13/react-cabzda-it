import React from "react";
export default {
    title: 'React.memo demo'
}

type NewMessagesCounterPropsType = {
    count: number
}
const NewMessagesCounter: React.FC<NewMessagesCounterPropsType> = (props) => {
    return <div>{props.count}</div>
};

type UsersPropsType = {
    users: Array<string>
}
const Users: React.FC<UsersPropsType> = (props) => {
  return <div>
      {props.users.map((u, i) => <div>{u}</div>)}
  </div>
};

export const Exampel = () => {
    return <>
        <NewMessagesCounter count={10}/>
        <Users users={['Anna', 'Maikl', 'Alexei', 'Masha']}/>
    </>
};
