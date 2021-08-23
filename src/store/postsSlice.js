import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPostComments, getPosts } from '../api/posts.api'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const posts = await getPosts()
    return posts
  })

export const fetchComments = createAsyncThunk('posts/fetchPostComments', async (idPost) => {
    const comments = await getPostComments(idPost)
    return comments
  })

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: null,
    comments: null,
    isLoading: false,
    error: null
  },
  reducers: {
    commentAdded(state, action) {
        state.comments.push(action.payload)
      },
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.isLoading = true
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.posts = action.payload
    },
    [fetchPosts.rejected]: (state, action) => {
      state.isLoading = false 
      state.error = action.error.message
    },
    [fetchComments.pending]: (state, action) => {
      state.isLoading = true
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.isLoading = false
      state.comments = action.payload
    },
    [fetchComments.rejected]: (state, action) => {
      state.isLoading = false 
      state.error = action.error.message
    }
  }
})

export const { commentAdded } = postsSlice.actions

export default postsSlice.reducer

