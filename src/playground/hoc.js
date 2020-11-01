import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);



const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info.Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
    {props.isAuthenticated ? <p>Here are the infos:</p> : <p>Please log in to see the info</p>}
    {props.isAuthenticated && <WrappedComponent {...props} />}
    </div>
  )
} 

const AdminInfo = withAdminWarning(Info);

// requireAuthentication
const AuthInfo = requireAuthentication(Info)


// ReactDOM.render(<AdminInfo isAdmin={false} info="there are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="there are the details" />, document.getElementById('app'));