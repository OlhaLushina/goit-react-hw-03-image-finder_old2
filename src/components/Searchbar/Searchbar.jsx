import { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Header,
  Form,
  FormButton,
  FormButtonLabel,
  Field,
} from './Searchbar.styled';

/* Схема валідації */
const SearchSchema = Yup.object().shape({
  searchText: Yup.string('Must be a string')
    .max(50, 'Too Long!')
    .required('Required'),
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
              <FormButtonLabel>Search</FormButtonLabel>
            </FormButton>
            <Field name="searchText" placeholder="Search images and photos" />
            <ErrorMessage name="searchText" component="div"></ErrorMessage>
          </Form>
        </Formik>
      </Header>
    );
  }
}
