import React from 'react'

const Spinner = (props) => {
  return (
    <div class="spinner-border" role="status">
      <span class="sr-only">{props.message}</span>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading..."
};

export default Spinner;
