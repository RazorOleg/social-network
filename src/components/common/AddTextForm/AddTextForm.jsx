import { Field, Form, Formik } from "formik";
import React from "react";
import { validateField } from "../../../utils/validators";
import styles from './AddTextForm.module.css';


const AddTextForm = (props) => {
    let fieldValidation = validateField(props.maxlength);

    const initialValues = {
        newText: '',
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <div>
                        <Field
                            component="textarea"
                            name="newText"
                            placeholder="Enter your text"
                            validate={fieldValidation}
                            className={
                                touched.newText && errors.newText
                                    ? styles.errorInput
                                    : ""
                            } />
                        {errors.newText && touched.newText && <div className={styles.errorText}>{errors.newText}</div>}
                    </div>
                    <div>
                        <button type="submit">Add</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default AddTextForm;