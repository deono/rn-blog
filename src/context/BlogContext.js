import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_BLOGPOST":
      return state.filter(blogPost => blogPost.id !== action.payload);
    case "ADD_BLOGPOST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: "ADD_BLOGPOST", payload: { title, content } });
    callback();
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({
      type: "DELETE_BLOGPOST",
      payload: id
    });
  };
};

const editBlogPost = dispatch => {
  return (id, title, content) => {
    dispatch({
      type: "EDIT_BLOGPOST",
      payload: { id, title, content }
    });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "Hello", content: "Hello World!", id: 1111 }]
);
