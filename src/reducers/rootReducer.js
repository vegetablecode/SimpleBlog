const initState = {
    loggedIn: false,
    posts: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "DELETE_POST":
        let newPosts = state.posts.filter(post => post.id !== action.id)
        return {
            ...state,
            posts: newPosts
        }

        case "ADD_POST":
        let newPost = {
            id: action.post.id,
            title: action.post.title,
            body: action.post.body
        }
        return {
            ...state,
            posts: state.posts.concat(newPost)
        }

        default:
        return state
    }
}

export default rootReducer