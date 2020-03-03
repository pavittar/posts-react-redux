const url = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = () => async dispatch => {
  const r = await fetch(url)
  const posts = await r.json()
  return dispatch({
    type: 'GET_POSTS_SUCCESS',
    payload: posts
  })
}

export const createPost = (params) => async dispatch => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(params)
    })
    const post = await res.json()
    return dispatch({
      type: 'CREATE_POST_SUCCESS',
      payload: post
    })
  }
  catch (err) {
    console.log(err)
    return Promise.reject(err)
  }
}