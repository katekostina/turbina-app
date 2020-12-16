import React from "react";
import Form from "./Form.js";
import { articlesContent } from "../utils/texts.js";


const ContentBox = () =>
    <section className="content-box">
      {articlesContent && (
          articlesContent.map((article) => (
            <article className="article" key={article.id}>
              {/* Если есть заголовок — рендерим его */}
              {article.heading && (
                <h2 className="article__heading">{article.heading}</h2>
              )}

              {/* Если есть абзацы текста, то отрендерить их  */}
              {article.paragraphs && (
                  article.paragraphs.map((paragraph) => (
                    <p className="article__paragraph" key={paragraph.id}>
                      {paragraph.text}
                    </p>
                  ))
              )}

              {/* Если есть список, то отрендерить его */}
              {article.list && (
                <ul className="article__list">
                  {article.list.map((item) => (
                    <li className="article__list-item" key={item.id}>
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))
      )}
      <Form />
    </section>

export default ContentBox;
