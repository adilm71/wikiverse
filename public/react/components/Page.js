import React from "react";

export const Page = (props) => {
  return (
    <>
      <h3>{props.page.title}</h3>
      <button onClick={() => props.fetchArticle(props.page.slug)}>
        Read this article
      </button>
    </>
  );
};
