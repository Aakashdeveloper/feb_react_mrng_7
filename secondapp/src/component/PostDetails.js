import React from 'react';

const PostDetails =(props)=>{
    console.log(props)
    console.log(props.match.params.topic)
    console.log((props.location.search).split('=')[1])
    return(
        <div className="panel panel-info">
            <div className="panel-heading">
                <h2>{props.match.params.topic}</h2>
            </div>
            <div className="panel-body">
                <h1>{props.match.params.topic} Page</h1>
                <p>{props.match.params.topic} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I</p>
                <p>You are on page no {(props.location.search).split('=')[1]}</p>
            </div>
        </div>
    )
}

export default PostDetails;