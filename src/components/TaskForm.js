import React from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class TaskForm extends React.Component {

  renderInput({input, label, meta}) {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input {...input} autoComplete="off" className="form-control" />
        <div>{meta.touched ? meta.error : null}</div>
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="title" label="Enter a title" component={this.renderInput} />
          <Field name="notes" label="Enter some notes" component={this.renderInput} />
          <Field name="deadline" label="Enter a deadline" component={this.renderInput} />
          <button className="btn btn-primary float-right">Submit</button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: {
      title: ownProps.title,
      notes: ownProps.notes,
      deadline: ownProps.deadline
    }
  }
}

const wrappedForm = reduxForm({form: 'taskForm', enableReinitialize: true})(TaskForm)

export default connect(mapStateToProps)(wrappedForm)
