import type { User } from './User'

export type Post = {
	content: string
	created_at: string
	user: User
}
