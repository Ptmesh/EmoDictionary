import React from "react";

function Entry(props)
{
    return (
        <div className="term">
            <dt>
        <span className="emoji" role="img" >
          {props.emoji}
        </span>
        <span className="Name">{props.name}</span>
      </dt>
      <dd>
        {props.desc}
      </dd>
        </div>
    )
}

export default Entry;