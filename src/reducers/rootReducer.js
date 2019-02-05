const initState = {
    posts: [
        {id: "1", title: "Post 1", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur enim ligula, eleifend nec lacinia sed, hendrerit vel sem. In congue enim quis odio dictum, ac ullamcorper quam tempus. Curabitur facilisis, lacus quis varius ornare, sapien tortor eleifend leo, at interdum ex enim eget enim. Mauris varius erat a metus consequat, ut pretium eros faucibus. Suspendisse finibus velit arcu, at pellentesque diam facilisis ut. Integer id mollis est. Nulla congue venenatis sodales."},
        {id: "2", title: "Post 2", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur enim ligula, eleifend nec lacinia sed, hendrerit vel sem. In congue enim quis odio dictum, ac ullamcorper quam tempus. Curabitur facilisis, lacus quis varius ornare, sapien tortor eleifend leo, at interdum ex enim eget enim. Mauris varius erat a metus consequat, ut pretium eros faucibus. Suspendisse finibus velit arcu, at pellentesque diam facilisis ut. Integer id mollis est. Nulla congue venenatis sodales."},
        {id: "3", title: "Post 3", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur enim ligula, eleifend nec lacinia sed, hendrerit vel sem. In congue enim quis odio dictum, ac ullamcorper quam tempus. Curabitur facilisis, lacus quis varius ornare, sapien tortor eleifend leo, at interdum ex enim eget enim. Mauris varius erat a metus consequat, ut pretium eros faucibus. Suspendisse finibus velit arcu, at pellentesque diam facilisis ut. Integer id mollis est. Nulla congue venenatis sodales."}
    ]
}

const rootReducer = (state = initState, action) => {
    return state
}

export default rootReducer