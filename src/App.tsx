import React, { useState } from 'react';
import styles from './App.module.css';
import InputField from './components/InputField';
import Todo from './components/Todo';
import TodoModel from './components/model/Todo';

const App = () => {
	const [todos, setTodos] = useState<TodoModel[]>([]);

	const deleteHandler = (id: number) => {
		setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
	};

	const doneHandler = (id: number) => {
		setTodos(prevTodos =>
			prevTodos.map(todo => {
				if (todo.id === id) {
					return { ...todo, isDone: !todo.isDone };
				} else return todo;
			})
		);
	};

	let activeTodos = todos.filter(todo => todo.isDone === false);
	let inactiveTodos = todos.filter(todo => todo.isDone === true);

	return (
		<div className={styles.main}>
			<span className={styles.heading}>Todo App</span>
			<InputField setTodos={setTodos} />
			{activeTodos.length !== 0 && (
				<div className={styles.todos}>
					<span className={styles.todos__category}>Active tasks</span>
					{activeTodos.map(todo => (
						<Todo
							key={todo.id}
							todo={todo}
							deleteHandler={deleteHandler}
							doneHandler={doneHandler}
						/>
					))}
				</div>
			)}
			{inactiveTodos.length !== 0 && (
				<div className={`${styles.todos} ${styles['todos--completed']}`}>
					<span
						className={`${styles.todos__category} ${styles['todos__category--completed']}`}
					>
						Completed tasks
					</span>
					{inactiveTodos.map(todo => (
						<Todo
							key={todo.id}
							todo={todo}
							deleteHandler={deleteHandler}
							doneHandler={doneHandler}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default App;
