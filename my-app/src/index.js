import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const Boardroom = () => (
    <div>
      <h1>The Boardroom Kailua</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Boardroom />);