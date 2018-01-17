import React from 'react';

const childrenWithProps = (children, props) => ( React.Children.map(props.children, child => React.cloneElement(child, {...props})) );

export { childrenWithProps };
