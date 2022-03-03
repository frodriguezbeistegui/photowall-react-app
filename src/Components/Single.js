import React, { Component } from 'react'
import Photo from './Photo.js'
import Comments from './Comments.js'

class Single extends Component {
  render() {
      const {match, posts} = this.props
      const id = Number(match.params.id)
      const post = posts.find((posts) => posts.id === id)
      const comments = this.props.comments[id] || []
      const index = this.props.posts.findIndex((post)=> post.id === id)
      if(this.props.loading === true){
          return <div className='loader'>...Loading</div>
      }else if(post){
    return (
      <div className='single-photo'>
          <Photo post={post} {...this.props} index={index} />
          <Comments startAddingComment={this.props.startAddingComment} id={id} comments={comments} />
      </div>
        )
    }else{
        return <h1>...No post found</h1>
    }
  }
}

export default Single