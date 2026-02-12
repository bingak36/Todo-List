import React, { useState, useRef } from 'react'
import './TodoEditor.css'


const TodoEditor = ({onCreate}) => {
  const inputRef = useRef()
  const [content, setContent] = useState("")

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onSubmit = () => {
    if (!content) {
      return;
    }
    onCreate(content);
    setContent("");
    inputRef.current.focus();
  }
  return (
    <div className='Editor'>
      <input ref={inputRef} value={content} onChange={onChangeContent} type="text" placeholder='새로운 Todo...' />
      <button onClick={onSubmit}>
        추가
      </button>
    </div>
  )
}

export default TodoEditor