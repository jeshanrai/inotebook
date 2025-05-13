import React from 'react';

export default function Alert(props) {
  const { type, msg } = props.alert || {};

  return (
    props.alert && (
      <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
        {msg}
      </div>
    )
  );
}
