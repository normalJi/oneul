import { useState, createContext } from 'react';

export interface Todo {
    id: number;
    text: string;
}


const Main = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState('');
    
    const handleAdd = () => {
        if( input.trim() === '' ) return;
        const newTodo: Todo = {id: Date.now(), text: input};
        setTodos([...todos, newTodo]);
        setInput('');
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>할 일 목록</h1>
            <input 
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder='할 일을 입력하세요.'
            />
            <button onClick={handleAdd}>추가</button>

            {/* <ul>
                {todos.map(todo => (
                    
                ))}
            </ul> */}
        </div>
    );
};

export default Main;