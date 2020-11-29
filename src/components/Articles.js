import React from "react";
import { articlesContent } from "../utils/texts.js";

function Articles() {
  return (

      articlesContent && (
        <div className="articles">
          {articlesContent.map((article) => (
            <article className="articles__article" key={article.id}>
              {/* Если есть заголовок — рендерим его */}
              {article.heading && (
                <h2 className="articles__heading">{article.heading}</h2>
              )}

              {/* Если есть абзацы текста, то отрендерить их  */}
              {article.paragraphs && (
                  article.paragraphs.map((paragraph) => (
                    <p className="articles__paragraph" key={paragraph.id}>
                      {paragraph.text}
                    </p>
                  ))
              )}

              {/* Если есть список, то отрендерить его */}
              {article.list && (
                <ul className="articles__list">
                  {article.list.map((item) => (
                    <li className="articles__list-item" key={item.id}>
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      )

  );
}

export default Articles;

