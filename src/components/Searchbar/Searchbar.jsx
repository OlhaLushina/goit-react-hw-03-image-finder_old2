import { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { RiSearchLine } from 'react-icons/ri';
import { Header, Form, FormButton, Field } from './Searchbar.styled';

/* Схема валідації */
const SearchSchema = Yup.object().shape({
  searchText: Yup.string('Must be a string').max(5, 'Too Long!'),
});

export class Searchbar extends Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <Header>
        <Formik
          initialValues={{ searchText: '' }}
          validationSchema={SearchSchema}
          onSubmit={(values, actions) => {
            onSubmit(values);
            //actions.resetForm();
          }}
        >
          <Form>
            <FormButton type="submit">
              <RiSearchLine />
            </FormButton>
            <Field name="searchText" placeholder="Search images and photos" />
            <ErrorMessage name="searchText" component="div"></ErrorMessage>
          </Form>
        </Formik>
      </Header>
    );
  }
}
