import React, {useMemo, useState} from 'react';
import {UsersPropsType} from './ReactMemo.stories';

export default {
    title: 'useMemo'
}

export const DifficultCounterExample = () => {
    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            //fake condition
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }

            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
};


const UsersSecret: React.FC<UsersPropsType> = (props) => {
    console.log('USERS SECRET');
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
};
const Users = React.memo(UsersSecret);
export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo');
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Anna', 'Maikl', 'Alexei', 'Masha', 'Crock']);

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1);
        return newArray;
    }, [users]);

    const addUser = () => {
        let newUsers = [...users, 'Nikita -' + new Date().getTime()];
        setUsers(newUsers);
    };


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
};



export const LikeUseCallback = () => {
    console.log('likeUseCallback');
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React','Redux','JS','HTML']);

    const newArray = useMemo(() => {
        const newArray = books.filter(u => u.toLowerCase().indexOf('a') > -1);
        return newArray;
    }, [books]);

    const addBook = () => {
        let newBooks = [...books, 'Angular -' + new Date().getTime()];
        setBooks(newBooks);
    };


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <Book books={newArray} addBook={addBook}/>
    </>
};

type BooksSecretPropsType = {
    books: Array<string>,
    addBook: ()=> void
}

const BooksSecret: React.FC<BooksSecretPropsType> = (props) => {
    console.log(props.books)
    console.log('BOOKSSECRET');
    return <div>
        <button onClick={() =>  props.addBook()}>add book</button>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
};

const Book = React.memo(BooksSecret);

