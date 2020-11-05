import React from "react";
import { articlesContent } from "../utils/texts.js";

function Articles() {
  return (
    <>
      {/* Если массив с контентом статей не пустой, то рендерим содержимое */}
      {articlesContent && (
        <div className="articles">
          {articlesContent.map((article, i) => (
            <article className="articles__article" key={i}>

              {/* Если есть заголовок — рендерим его */}
              {article.heading && (
                <h2 className="articles__heading">{article.heading}</h2>
              )}

              {/* Если есть абзацы текста, то отрендерить их  */}
              {article.paragraphs && (
                <>
                  {article.paragraphs.map((paragraph, i) => (
                    <p className="articles__paragraph" key={i}>
                      {paragraph}
                    </p>
                  ))}
                </>
              )}

              {/* Если есть список, то отрендерить его */}
              {article.list && (
                <ul className="articles__list">
                  {article.list.map((item, i) => (
                    <li className="articles__list-item" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      )}
    </>
  );
}

export default Articles;
