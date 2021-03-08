import React from 'react';

function DisplayComponent(props){
    const renderList = ({mycity}) => {
        if(mycity){
            return mycity.map((item) => {
                return(
                    <div>
                        <h3>{item.city_name}</h3>
                    </div>
                )
            })
        }
    }

    return(
        <div>
            <h2>City List</h2>
            {renderList(props)}
        </div>
    )
}

export default DisplayComponent;