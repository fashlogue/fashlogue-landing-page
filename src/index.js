import React from 'react';
import { render } from 'react-dom';
//import { Provider } from 'react-redux';
import  App  from './containers/App';
//import store from './store';



function renderMain(App) {
    return (
      <div>
        {/* <Provider>
            <App />
        </Provider> */}
        <App/>
      </div>
    );
  }

  if (module.hot) {
    module.hot.accept('./containers/App', () => {
      render(renderMain(require('./containers/App').default), document.getElementById('root'));
    });
  }

render(renderMain(App), document.getElementById('root'));