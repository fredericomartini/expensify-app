import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>
      The info is:
      {props.info}
    </p>
  </div>
);

const withAdminWarning = (WrappedComponent) =>
  // Este será o HOC component
  (props) => (
    <div>
      <p>This is a private info. Please don't share!</p>
      <WrappedComponent {...props} />
    </div>
  );
const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo info="this is the detail" />, document.getElementById('app'));

// Chalenge:
//  1 - Criar um HOC que verifique se usuário está logado, caso sim mostrar conteúdo, caso contrário monstra
// msg "É preciso estar logado para continuar"

// Regular function
const requireAuthentication = (WrappedComponent) => (props) => (
  // Return HOC
  <div>
    {props.isAuthenticated === true ? (
      <WrappedComponent {...props} />
    ) : (
      <p>É preciso estar logado para continuar..</p>
    )}
  </div>
);

const OnlyAuthenticated = requireAuthentication(Info);
ReactDOM.render(
  <OnlyAuthenticated isAuthenticated={false} info="this is the detail" />,
  document.getElementById('app'),
);
