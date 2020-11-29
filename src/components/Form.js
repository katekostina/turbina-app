import React, {useEffect, useState, useCallback} from "react";
import TextareaAutosize from "react-textarea-autosize";
import { offerLink } from '../utils/linksList';

function Form() {

  const validators = {
  authorName: {
    required: (value) => { return value === '' },
    minLength: (value) => { return value && value.length < 3;
  },
  },
  telephone: {
    required: (value) =>{return value === ""},
    minLength: (value) => {return value  < 11 },
    containNumbers: (value) =>{ return !/^\d[\d\(\)\ -]{4,14}\d$/.test(value)}
  },
  email: {
    required: (value) =>{
      return value === ""
    },
    minLength: (value) => {
      return value.length < 3
    },
  },
  poem: {
    required: (value) =>{
      return value === ""
    },
    minLength: (value) => {
      return value.length < 5
    },
  }
}
const [errors, setErrors] = useState({
  authorName: {
    required: true,
    minLength: true,
  },
  telephone: {
    required: true,
    minLength: true,
    containNumbers: true
  },
  email: {
    required: true,
    minLength: true,
  },
  poem: {
    required: true,
    minLength: true
  }
  })

const [formValues, setFormValues] = React.useState({
    authorName: '',
    telephone: '',
    email: '',
    poem: '',
}, )

  useEffect(
  function validateInputs(){
  const {authorName, telephone, email, poem} = formValues

  const authorNameValidationResult = Object.keys(validators.authorName)
  .map((errorKey) =>{
    const errorResult = validators.authorName[errorKey](authorName)
    return {[errorKey]: errorResult }

  }).reduce((acc, el) => ({ ...acc, ...el}), {})
console.log(authorNameValidationResult)

  const authorTelephoneValidationResult = Object.keys(validators.telephone)
  .map((errorKey) =>{
    const errorResult = validators.telephone[errorKey](telephone)
    return {[errorKey] : errorResult }
  }).reduce((acc, el) => ({ ...acc, ...el}), {})
console.log(authorTelephoneValidationResult)
  const authorEmailValidationResult = Object.keys(validators.email)
  .map((errorKey) =>{
    const errorResult = validators.email[errorKey](email)
    return {[errorKey]: errorResult }
  }).reduce((acc, el) => ({ ...acc, ...el}), {})

  const authorPoemValidationResult = Object.keys(validators.poem)
  .map((errorKey) =>{
    const errorResult = validators.poem[errorKey](poem)
    return {[errorKey]: errorResult }
  }).reduce((acc, el) => ({ ...acc, ...el}), {})

  setErrors({
    authorName: authorNameValidationResult,
    telephone: authorTelephoneValidationResult,
    email: authorEmailValidationResult,
    poem: authorPoemValidationResult
  })
}, [formValues, setErrors])

  const handleInputChange = useCallback((e) =>{
    const {name, value} = e.target;
    setFormValues(prevState => ({...prevState, [name]:value}))
}, [setFormValues])

  const {authorName, telephone, email, poem} = formValues
  const isUserNameInvalid = Object.values(errors.authorName).some(Boolean)
  const isTelephoneInvalid = Object.values(errors.telephone).some(Boolean)
  const isEmailInvalid = Object.values(errors.email).some(Boolean)
  const isPoemInvalid = Object.values(errors.poem).some(Boolean)
   const isSubmitDisabled = isUserNameInvalid  || isPoemInvalid || isEmailInvalid || isTelephoneInvalid;

  function onSubmit(e){
    e.preventDefault()
    // Здесь будет логика отправления инфы на сервер.
  }

   return (
    <form className="form" name="poem-form">
      <h2 className="form__heading">Форма</h2>
      <p className="form__caption">
        Заполняя эту форму, вы становитесь частью проекта.
      </p>
      <input
        className="form__input"
        onChange={handleInputChange}
        value={authorName}
        type="text"
        name="authorName"
        required
        placeholder="Имя и фамилия автора"
      />
       {errors.authorName.required  && <span className="form__error-text">Поле обязательно к заполнению</span>}
       {errors.authorName.minLength && <span className="form__error-text">Введите больше символов</span>}
      <input
        className="form__input"
        onChange={handleInputChange}
        value={telephone}
        name="telephone"
        type="tel"
        placeholder="Телефон"
        required
      />
      {errors.telephone.required   && <span className="form__error-text">Поле обязательно к заполнению</span>}
      {errors.telephone.minLength && <span className="form__error-text">Номер телефона должен состоять из 11 цифр</span>}
      {errors.telephone.containNumbers  && <span className="form__error-text">Введите номер телефона</span>}
      <input
        className="form__input"
        onChange={handleInputChange}
        value={email}
        type="email"
        name="email"
        placeholder="Почта"
        required
      />
      {errors.email.required   && <span className="form__error-text">Поле обязательно к заполнению</span>}
      {errors.email.minLength && <span className="form__error-text">Минимальная длина - 3 символа</span>}
      <span className="form__error-text"/>

      <TextareaAutosize
        className="form__textarea"
        value={poem}
        onChange={handleInputChange}
        name="poem"
        placeholder="Стихи"
        minLength="2"
        required
      />
      {errors.poem.required   && <span className="form__error-text">Поле обязательно к заполнению</span>}
      {errors.poem.minLength   && <span className="form__error-text">Слишком короткое сообщение</span>}
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
          <a className="form__link" href={offerLink} target="_blank" rel="noreferrer">
            офертой
          </a>
        </label>
      </div>

      <button onClick={onSubmit} disabled={isSubmitDisabled} className="form__submit" type="submit" name="">
        Отправить форму
      </button>
      <span className="form__error-text" />
    </form>
  );
}

export default Form;
