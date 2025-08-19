import { usePost } from '../../../hooks/usePost'
import Post from '../../elements/post/Post'
import styles from './PostList.module.css'

const PostList = () => {
	const { posts, reload } = usePost()

	return (
		<ul className={styles.list}>
			{posts.map(post => (
				<li>
					<Post onPostAction={reload} {...post} />
				</li>
			))}
		</ul>
	)
}

export default PostList
