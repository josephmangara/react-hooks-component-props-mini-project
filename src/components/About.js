import React from "react";

function About(props){
    return (
        <aside>
            <img 
              url={props.image}
              alt="blog logo"
              ></img>
            <p>A blog about learning React</p>
        </aside>
    )
}

export default About;