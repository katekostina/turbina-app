import React from "react";
import TextareaAutosize from "react-textarea-autosize";

function Form() {
  return (
    <form className="form" name="poem-form">
      <h2 className="form__heading">Форма</h2>
      <p className="form__caption">
        Заполняя эту форму, вы становитесь частью проекта.
      </p>
      <input
        className="form__input"
        type="text"
        name="author-name"
        placeholder="Имя и фамилия автора"
        minLength="2"
        required
      />
      <span className="form__error-text" id="author-name-error-text" />

      <input
        className="form__input"
        type="tel"
        name="telephone"
        placeholder="Телефон"
        minLength="10"
        required
      />
      <span className="form__error-text" id="telephone-error-text" />

      <input
        className="form__input"
        type="email"
        name="email"
        placeholder="Почта"
        minLength="3"
        required
      />
      <span className="form__error-text" id="email-error-text" />

      <TextareaAutosize
        className="form__textarea"
        name="poem"
        placeholder="Стихи"
        minLength="2"
        required
      />
      <span className="form__error-text" id="poem-error-text">
        test
      </span>

      <div className="form__checkbox-container">
        <input
          className="form__checkbox"
          type="checkbox"
          name="checkbox"
          id="checkbox"
          required
        />
        <label className="form__label" htmlFor="checkbox">
          Согласен с{" "}
          <a className="form__link" href="#">
            офертой
          </a>
        </label>
      </div>

      <button className="form__submit" type="submit" name="">
        Отправить форму
      </button>
      <span
        className="form__error-text"
        id="submit-error-text"
      >
      </span>
    </form>
  );
}

export default Form;
