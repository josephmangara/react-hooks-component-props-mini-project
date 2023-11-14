import React from "react";

function Article({ title, date, preview, minutes}){
    const renderReadTimeEmojis = (minutes) => {
        const emojis = minutes <= 30 ? "☕️" : "🍱";
        const numEmojis = Math.ceil(minutes / (minutes <= 30 ? 5 : 10));
        return emojis.repeat(numEmojis) + ` ${minutes} min read`;
      };


    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{renderReadTimeEmojis(minutes)}</p>
        </article>
    )
}

export default Article;