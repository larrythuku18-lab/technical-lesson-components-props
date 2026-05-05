import React from "react";
function Article({ title, date, excerpt }) {
  return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{excerpt}</p>
    </article>
  );
}

export default Article;