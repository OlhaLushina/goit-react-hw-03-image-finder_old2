import React from 'react';
import ReactDOM from 'react-dom/client';
import { App as AppStyled} from 'components/App';
import './index.css';
import styled from 'styled-components';

const App = styled(AppStyled)` 
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
