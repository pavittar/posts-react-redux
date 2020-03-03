import React from 'react'

import '../styles/post-form.css'
import store from "../store";
import { createPost } from "../actions/post";

class PostForm extends React.Component {
  constructor(){
    super()
    this.state = {
      title: '',
      body: '',
      disabled: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()

    if (!this.state.title) {
      alert('Title Required')
      return
    }

    this.setState({ ...this.state, disabled: true })

    store.dispatch(createPost(this.state)).then(() => {
      this.setState({ ...this.state, disabled: false })
      this.setState({title: '', body: ''})
    })
  }

  render(){
    return (
      <form className="post-form" onSubmit={this.handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>

          <label>Body:</label>
          <textarea name="body" rows="5" value={this.state.body} onChange={this.handleChange}></textarea>

          <button type='submit' disabled={this.state.disabled}>Publish</button>
        </div>
      </form>
    )
  }
}

export default PostForm