import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState("");

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const whenChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
    
        props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input
        });
        setInput('');
      };

    return (
        <div>
            <form onSubmit={handleSubmit} className="todo-form">
                <input type="text" 
                placeholder="Enter todo..." 
                value={input} 
                name="text" 
                className="todo-input"
                onChange={whenChange}
                ref={inputRef}
                />
                <button className="todo-button">Add todo</button>
            </form>
        </div>
    )
}

export default TodoForm;
