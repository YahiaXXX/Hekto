import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import {CartProvider} from "./contexts/CartContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AuthProvider>
      <CartProvider>
      <App />

      </CartProvider>
    
    </AuthProvider>
    
  </Router>
  
);
