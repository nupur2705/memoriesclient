import reducers from ".";

const actionTypes = {
    'FETCH_ALL': (posts,action) => action.payload,
    'CREATE': (posts,action) => [...posts,action.payload],
    'DEFAULT': (posts) => posts
};

 export default (posts = [], action) => {
    const actionHandler = actionTypes[action.type] || actionTypes.DEFAULT;
    return actionHandler(posts);
};

