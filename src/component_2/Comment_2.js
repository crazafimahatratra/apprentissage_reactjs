import React from 'react';
import Comment from './Comment';

class Comment_2 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
          isLoaded: false,
          items: []
        };
  }

  componentDidMount() {
    this.getLists();
  }
  getLists() {
    this.setState({ loading: true }, () => {
      fetch("http://localhost:4000/posts")
        .then(res => res.json())
        .then(result =>
          this.setState({
            isLoaded: true,
            items: result
          })
        )
        .catch(console.log);
    });
  }
  render() {
    var {isLoaded, items} = this.state;
    //console.log(items);
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else{
      return ( 
          
            <div className="row" >
                
                    <div className="col-sm-12" >
                        {items.map((item, i)=>(
                          <Comment key={`bouton-${i}`} user={item} />
                        ))}
                    </div>
            </div>
      );
      
    }
  }
}

export default Comment_2;