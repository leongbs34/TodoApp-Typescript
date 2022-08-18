import React, { useState } from 'react';
import styles from './index.module.css';
import TodoModel from '../model/Todo';

interface Props {
	setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

const InputField: React.FC<Props> = ({ setTodos }) => {
	const [todoInput, setTodoInput] = useState<string>('');

	const changeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
		setTodoInput(e.currentTarget.value);
	};

	const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		if (todoInput !== '') {
			setTodos(prev => [
				...prev,
				{ id: Date.now(), text: todoInput, isDone: false },
			]);

			setTodoInput('');
		}
	};

	return (
		<form className={styles.input} onSubmit={submitHandler}>
			<input
				type='text'
				className={styles.input__box}
				placeholder='Enter a task'
				value={todoInput}
				onChange={changeHandler}
			/>
			<button type='submit' className={styles.input__button}>
				Go
			</button>
		</form>
	);
};

export default InputField;
