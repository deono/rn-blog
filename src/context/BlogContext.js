import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "GET_BLOGPOSTS":
      return action.payload;
    case "EDIT_BLOGPOST":
      return state.map(blogPost => {
        if (blogPost.id === action.payload.id) {
          return action.payload;
        } else {
          return blogPost;
        }
      });
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

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "GET_BLOGPOSTS", payload: response.data });
  };
};

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: "ADD_BLOGPOST", payload: { title, content } });
    if (callback) callback();
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
  return (id, title, content, callback) => {
    dispatch({
      type: "EDIT_BLOGPOST",
      payload: { id, title, content }
    });
    if (callback) callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
  []
);
