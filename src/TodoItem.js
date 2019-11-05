import React from 'react'

export default function TodoList(props) {
    return (
        <div className='todo-item'>
            <input onClick={() => console.log('checked')} type='checkbox' checked={props.item.completed}/>
            <p>{props.item.text}</p>
        </div>
    )
}