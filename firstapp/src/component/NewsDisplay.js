import React from 'react';

const NewsDisplay =(props) => {
    const renderList = props.newsdata.map((data) => {
        return(
            <div>
                <h3>{data.title}</h3>
                <h3>{data.feed}</h3>
            </div>
        )
    })

    
    return(
       <div>
           {renderList}
       </div>

    )
}

export default NewsDisplay;