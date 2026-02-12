import React, { useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todos
      : todos.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div className='TodoList'>
        <h4>Todo List 🌱</h4>
        <input value={search} onChange={onChangeSearch} type="text" placeholder='검색어를 입력하세요' />
        <div className="todo-wrapper">
          {getSearchResult().map((it) => (
            <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete} />
          ))}
        </div>
    </div>
  )
}

export default TodoList