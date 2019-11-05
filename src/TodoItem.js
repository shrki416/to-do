import React from 'react'

export default function TodoList(props) {
    return (
        <div className='todo-item'>
            <input 
                type='checkbox' 
                checked={props.item.completed}
                onChange={() => console.log('changed!')}
                />
            <p>{props.item.text}</p>
        </div>
    )
}