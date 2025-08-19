import React from 'react'
import styles from './PostAdd.module.css'
import { usePost } from '../../../hooks/usePost'
import { useAuth } from '../../../hooks/useAuth'

const PostAdd = () => {
	const [content, setContent] = React.useState('')

	const { addPost, reload } = usePost()
	const { token } = useAuth()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			await addPost(content, token)
		} catch (err) {
			alert(`Ошибка при создании задачи: ${err}`)
		}
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<div>
				<img src='' alt='' />
				<input
					type='text'
					value={content}
					onChange={e => setContent(e.target.value)}
					placeholder='Введите текст поста...'
				/>
			</div>
			<button onClick={reload}>Добавить пост</button>
		</form>
	)
}

export default PostAdd
