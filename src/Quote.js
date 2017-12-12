import React from 'react';

export default function Quote(props){
    
    return( 

        <div className={props.id === props.featured? 'my-quote featured': 'my-quote'}>
            <i className="fa fa-star fa-2x"  onClick={e => props.favorite(props.quote.id)}></i>
            <h3>{props.quote.content}</h3>
            <span><h4>{props.quote.author}</h4></span>
            <h4 className="genre">{props.quote.genre_type}</h4>
        </div>
    )
}
 