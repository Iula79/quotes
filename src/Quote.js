import React from 'react';

export default function Quote(props){

    return(
        <div>
            <div id="star">$</div>
            <h1>{props.quote.content}</h1>
            <h4>{props.quote.author}</h4>
            <h4>{props.quote.genre_type}</h4>
        </div>
    )
}
 