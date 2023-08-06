import React from 'react';
import ReactDOM from 'react-dom/client';
import Auth from "./Auth";
import reportWebVitals from './reportWebVitals';
import {GoogleOAuthProvider} from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="242585001953-esge06c7jkt2ve3gpg1qq301h8luktk1.apps.googleusercontent.com">
      <Auth />
    </GoogleOAuthProvider>
    ;
  </React.StrictMode>
);

reportWebVitals();
