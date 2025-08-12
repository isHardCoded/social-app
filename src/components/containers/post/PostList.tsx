import Post from '../../elements/post/Post'
import styles from './PostList.module.css'

const posts = [
	{
		id: 1,
		content: 'Lorem 1',
	},
	{
		id: 2,
		content: 'Lorem 2',
	},
	{
		id: 3,
		content: 'Lorem 3',
	},
]

const PostList = () => {
	return (
		<ul className={styles.list}>
			{posts.map(post => (
				<li>
					<Post content={post.content} />
				</li>
			))}
		</ul>
	)
}

export default PostList
