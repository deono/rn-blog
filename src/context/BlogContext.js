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
  return (title, content) => {
    dispatch({ type: "ADD_BLOGPOST", payload: { title, content } });
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

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
