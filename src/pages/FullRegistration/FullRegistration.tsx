import React from 'react';
import { Field, Form } from 'react-final-form';

const onSubmit = ():any => {
};

const FullRegistration = ():any => (
  <div>
    <h1>FullRegistration</h1>
    <Form
      onSubmit={onSubmit}
      initialValues={{}}
      render={({
        handleSubmit, form, submitting, pristine,
      }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Last Name</label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label>Employed</label>
            <Field name="employed" component="input" type="checkbox" />
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    />
  </div>
);

export default FullRegistration;
