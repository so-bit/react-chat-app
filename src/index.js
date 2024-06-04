import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0wWqYXNrCqXX0bR0YV6yqT3g_Yt2Db0k",
  authDomain: "react-chat-app-3c139.firebaseapp.com",
  databaseURL: "https://react-chat-app-3c139-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-3c139",
  storageBucket: "react-chat-app-3c139.appspot.com",
  messagingSenderId: "517903695536",
  appId: "1:517903695536:web:31cd0cd342082e035bc575"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
