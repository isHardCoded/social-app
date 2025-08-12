import React from 'react'
import styles from './Post.module.css'

import Avatar from '../../../assets/images/avatar.svg'

interface PostProps {
	content: string
}

const Post: React.FC<PostProps> = ({ content }) => {
	return (
		<div className={styles.post}>
			<img src={Avatar} alt='' />
			<div className={styles.wrapper}>
				<header>
					<span style={{ fontSize: 19, fontWeight: 'bold' }}>Tony Stark</span>
					<span style={{ fontSize: 16, color: 'gray', marginLeft: 12 }}>
						@tony_stark_3000
					</span>
					<p style={{ marginTop: 10 }}>
						Cognitive Person | Enthusiastic scientist | Worked on 300.....
					</p>
				</header>
				<p>{content}</p>
			</div>
		</div>
	)
}

export default Post
