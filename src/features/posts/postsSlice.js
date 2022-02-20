import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadPostsInSubreddit = createAsyncThunk(
    'posts/loadPostsInSubreddit',
    async (subreddit) => {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        const json = await response.json();
        const posts = json.data.children
        console.log(posts)
        const postsArray = posts.map((post) => {
            return {
                author: post.data.author,
                title: post.data.title,
                id: post.data.id,
                url: post.data.url,
                content: post.data.selftext,
                num_comments: post.data.num_comments,
                post_hint: post.data.post_hint,
            }
        })
        return {[subreddit]: postsArray};
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        postsBySubreddit: {},
        isLoadingPosts: false,
        failedToLoadPosts: false
    },
    reducers: {

    },
    extraReducers: {
        [loadPostsInSubreddit.pending]: (state, action) => {
            state.isLoadingPosts = true;
            state.failedToLoadPosts = false;
        },
        [loadPostsInSubreddit.rejected]: (state, action) => {
            state.isLoadingPosts = false;
            state.failedToLoadPosts  = true;
        },
        [loadPostsInSubreddit.fulfilled]: (state, action) => {
            state.isLoadingPosts = false;
            state.failedToLoadPosts = false;
            state.postsBySubreddit = action.payload;
        }
    }
})

export const isLoadingPosts = (state) => state.posts.isLoadingPosts;
export const postsBySubreddit = (state) => state.posts.postsBySubreddit;

export default postsSlice.reducer;