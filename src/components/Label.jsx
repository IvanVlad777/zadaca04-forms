import React from 'react';

const Label = ({ forEl, children }) => {
  return <label htmlFor={forEl}>{children}</label>;
};

export default Label;
