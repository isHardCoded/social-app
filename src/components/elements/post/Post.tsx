import React from 'react'
import styles from './Post.module.css'

import Avatar from '../../../assets/images/avatar.svg'
import type { User } from '../../../models/User'
import { usePost } from '../../../hooks/usePost'
import { useAuth } from '../../../hooks/useAuth'

interface PostProps {
	id: number
	content: string
	created_at: string
	user: User
	onPostAction: () => Promise<void>
}

const Post: React.FC<PostProps> = ({
	id,
	content,
	created_at,
	user,
	onPostAction,
}) => {
	const { user: currentUser, token } = useAuth()
	const { updatePost, deletePost } = usePost()

	const [editContent, setEditContent] = React.useState(content)
	const [isEditing, setIsEditing] = React.useState(false)

	const isOwner = currentUser?.id === user.id

	const handleSave = async () => {
		if (token) {
			await updatePost(id, editContent, token)
			setIsEditing(false)
			onPostAction()
		}
	}

	const handleDelete = async () => {
		if (token && window.confirm('Вы уверены, что хотите удалить этот пост?')) {
			await deletePost(id, token)
			onPostAction()
		}
	}

	return (
		<div className={styles.post}>
			<img src={Avatar} alt='' />
			<div className={styles.wrapper}>
				<header>
					<span style={{ fontSize: 19, fontWeight: 'bold' }}>Tony Stark</span>
					<span style={{ fontSize: 16, color: 'gray', marginLeft: 12 }}>
						@{user.username}
					</span>
					<p style={{ marginTop: 10 }}>
						Cognitive Person | Enthusiastic scientist | Worked on 300.....
					</p>
				</header>

				{isEditing ? (
					<>
						<input
							type='text'
							value={editContent}
							onChange={e => setEditContent(e.target.value)}
						/>
						<button onClick={handleSave}>Сохранить</button>
						<button onClick={() => setIsEditing(false)}>Отмена</button>
					</>
				) : (
					<p>{content}</p>
				)}

				<p>Пост создан: {created_at}</p>
				{isOwner && !isEditing && (
					<>
						<button onClick={() => setIsEditing(true)}>Редактировать</button>
						<button onClick={handleDelete}>Удалить</button>
					</>
				)}
			</div>
		</div>
	)
}

export default Post
