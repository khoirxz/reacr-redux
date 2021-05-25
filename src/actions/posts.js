import * as api from "../api";

// create
export const getPosts = () => async (dispatch) => {
  // mengambil semua data
  try {
    const { data } = await api.fetchPost();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};