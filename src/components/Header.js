import React from 'react';

const Header = (props) => {
  return (
    <header className="App-header" onClick={props.refreshPage}>
      <h2>{props.title}</h2>
    </header>
  );
};

export default Header;