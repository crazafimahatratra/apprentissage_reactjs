import React from 'react';
import Comment from './Comment';

function Comment_2() {
    const [loading, setLoading] = React.useState(false);
    const [items, setItems] = React.useState([]);
    React.useEffect(() => {
        setLoading(false);
        fetch("http://localhost:4000/posts").then(res => res.json()).then(result => {
            setLoading(false);
            setItems(result);
        })
    }, []);

    return (
        <>
            {loading && <div>Loading...</div>}
            {!loading &&
                <div className="row" >
                    <div className="col-sm-12" >
                        {items.map((item, i) => (
                            <Comment key={`bouton-${i}`} user={item} />
                        ))}
                    </div>
                </div>
            }
        </>
    )
}

export default Comment_2;