import React from 'react'
import styles from './Post.module.css'

import Avatar from '../../../assets/images/avatar.svg'
import type { User } from '../../../models/User'

interface PostProps {
	content: string
	created_at: string
	user: User
}

const Post: React.FC<PostProps> = ({ content, created_at, user }) => {
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
				<p>{content}</p>
				<p>Пост создан: {created_at}</p>
			</div>
		</div>
	)
}

export default Post
