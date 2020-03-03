import React, { useEffect } from 'react'
import { useSelector } from "react-redux";

import store from '../store'
import { fetchPosts } from "../actions/post"
import PostForm from '../components/post_form'
import Card from '../components/card'

const Home = () => {
  const posts = useSelector(state => state.post.items)

  useEffect(() => {
    store.dispatch(fetchPosts())
  }, [])

  return(
    <div className="row">
      <PostForm />

      <div className="leftcolumn">
        {posts.map(p => <Card key={p.id} item={p}></Card>) }
      </div>
      <div className="rightcolumn">
        {<Card item={{ title: 'About Me', body: 'Some text about me' }}></Card>}
      </div>
    </div>
  )
}

export default React.memo(Home)