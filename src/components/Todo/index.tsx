import React from 'react';
import TodoModel from '../model/Todo';
import styles from './index.module.css';
import { AiFillDelete, AiOutlineCheck } from 'react-icons/ai';

interface Props {
	todo: TodoModel;
	deleteHandler: (id: number) => void;
	doneHandler: (id: number) => void;
}

const Todo: React.FC<Props> = ({ todo, deleteHandler, doneHandler }) => {
	return (
		<div
			className={
				todo.isDone ? `${styles.todo} ${styles['todo--done']}` : styles.todo
			}
		>
			<span className={styles.todo__text}>{todo.text}</span>
			<div>
				<span className='icons'>
					<AiOutlineCheck
						onClick={() => {
							doneHandler(todo.id);
						}}
					/>
				</span>
				<span className='icons'>
					<AiFillDelete
						onClick={() => {
							deleteHandler(todo.id);
						}}
					/>
				</span>
			</div>
		</div>
	);
};

export default Todo;
