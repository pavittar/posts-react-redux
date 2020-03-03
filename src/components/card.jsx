import React, { Fragment } from 'react'

class Card extends React.Component {
  render(){
    return (
      <div className="card">
        <h2>{this.props.item.title}</h2>
        <h5>{this.props.item.description}</h5>

        {this.props.item.body.split('\n').map((text, key) => {
          return <Fragment key={key}>{text}<br /></Fragment>
        })}
      </div>
    )
  }
}

export default Card