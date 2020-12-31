
class Comment extends React.Component {
  constructor () {
    super()    
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      characterCount: 0
    }
  }
  
  handleChange (event) {
    console.log(this)
    this.setState({
      characterCount: event.target.value.length
    })
  }
  
  render() {
    return (
      <div>
        <textarea className="form-control" placeholder="Write a comment..." onChange={this.handleChange}/>
        <small>{this.props.maxLetters - this.state.characterCount} Remaining</small>
      </div>
    )
  }
}

const LikeIcon = () => {
  return (
    <div>
      <span className="fa-stack fa-sm">
        <i className="fa fa-circle fa-stack-2x blue-icon" />
        <i className="fa fa-thumbs-up fa-stack-1x fa-inverse" />
      </span>
    </div>
  )
}

class Like extends React.Component {
  constructor() {
    super()
    
    this.state = {
      liked: false
    }
    
    this.toggleLike = this.toggleLike.bind(this)
  }
  
  toggleLike () {
        this.setState(previousState => ({
      liked: !previousState.liked
    }))
  }
  
  render() {
    return (
      <div>
        {/* Include the LikeIcon subcomponent within the Like component*/}
        {this.state.liked && <LikeIcon />}
        <hr />
        <div>
          <button type="button" className="btn no-outline btn-secondary" onClick={this.toggleLike}>
            <i className="fa fa-thumbs-o-up fa-4 align-middle" aria-hidden="true" />
            &nbsp;
            <span className="align-middle">Like</span>
          </button>
        </div>
      </div>
    )
  }
}

const Status = () =>  {
  return (
    <div className="col-6 offset-3">
      <div className="card">
        <div className="card-block">
          <div className="row">
            <div className="col-2">
              <img src="https://zen-of-programming.com/react-intro/selfiesquare.jpg" className="profile-pic" />
            </div>
            <div className="col-10 profile-row">
              <div className="row">
                <a href="#">The Zen of Programming</a>
              </div>
              <div className="row">
                <small className="post-time">10 mins</small>
              </div>
            </div>
          </div>
          <p>Hello, world!</p>
          <Like />
        </div>
        <div className="card-footer text-muted">
          <Comment maxLetters={140} />
        </div>
      </div>
    </div>
  )
}
