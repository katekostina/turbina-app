import React from "react";
import { offerLink } from '../utils/linksList';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

function TurbineForm() {
  const phoneRegExp= /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const formSchema = Yup.object().shape({
    
      authorName: Yup.string()
      .min(3, 'Нужно как минимум 3 символа')
      .max(50, 'Слишком длинное имя')
      .required('Пожалуйста, заполните это поле'),

      telephone: Yup.string()
      .min(11, 'Телефон должен состоять из 11 цифр')
      .required('Пожалуйста, заполните это поле')
      .matches(phoneRegExp, 'Телефон невалидный'),

      email: Yup.string()
      .email('Email заполнен некорректно')
      .required('Пожалуйста, заполните это поле'),

      poem: Yup.string()
      .min(10, 'Минимум 10 символов')
      .required('Пожалуйста, заполните это поле'),
  });



   return (
     <Formik
     initialValues ={{
       authorName: '',
       telephone: '',
       email: '',
       poem: ''
     }}
     validationSchema={formSchema}
     onSubmit={values => {
       console.log(values)
     }}>{({ errors, touched }) => (
    <Form className="form" name="poem-form">
      <h2 className="form__heading">Форма</h2>
      <p className="form__caption">
        Заполняя эту форму, вы становитесь частью проекта.
      </p>
      <Field
        className="form__input"
        type="text"
        name="authorName"
        placeholder="Имя и фамилия автора"
      />
       {errors.authorName && touched.authorName ?
        (<span className="form__error-text">{errors.authorName}</span>) : null}
      <Field
        className="form__input"
        name="telephone"
        type="tel"
        placeholder="Телефон"
      />
      {errors.telephone && touched.telephone ?
        (<span className="form__error-text">{errors.telephone}</span>) : null}
      <Field
        className="form__input"
        type="email"
        name="email"
        placeholder="Почта"
        required
      />
      {errors.email && touched.email ?
      (<span className="form__error-text">{errors.email}</span>) : null}
      <Field as='textArea'
        className="form__textarea"
        name="poem"
        placeholder="Стихи"
      />
      {errors.poem && touched.poem ?
        (<span className="form__error-text">{errors.poem}</span>) : null}
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

      <button  className="form__submit" type="submit" name="">
        Отправить форму
      </button>
      <span className="form__error-text" />
    </Form>
     )}
    </Formik>
  );
}

export default TurbineForm;
