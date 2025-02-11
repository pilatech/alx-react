import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notification from './Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <div className="root-notifications">
        <Notification/>
    </div>
    <App />
    </>
);

