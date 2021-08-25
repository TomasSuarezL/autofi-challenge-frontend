import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPostComments, getPosts } from '../api/posts.api'
import { Comment } from '../components/comments/Comment.type'
import { Post } from '../components/posts/Post.type'

// Define a type for the slice state
interface PostsState {
  posts: Post[] | null
  comments: Comment[] | null
  isLoading: boolean
  error: string | null
}

// Define the initial state using that type
const initialState: PostsState = {
  posts: null,
  comments: null,
  isLoading: false,
  error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const posts = await getPosts()
    return posts
  })

export const fetchComments = createAsyncThunk('posts/fetchPostComments', async (idPost:string) => {
    const comments = await getPostComments(idPost)
    return comments
  })

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    commentAdded(state, action) {
        state.comments?.push(action.payload)
      },
  },
  extraReducers:(builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.isLoading = true
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false
      state.posts = action.payload
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false 
      state.error = action.error.message ?? null
    })
    .addCase(fetchComments.pending, (state, action) => {
      state.isLoading = true
    })
    .addCase(fetchComments.fulfilled, (state, action) => {
      state.isLoading = false
      state.comments = action.payload
    })
    .addCase(fetchComments.rejected, (state, action) => {
      state.isLoading = false 
      state.error = action.error.message ?? null
    })
  }
})

export const { commentAdded } = postsSlice.actions

export default postsSlice.reducer

