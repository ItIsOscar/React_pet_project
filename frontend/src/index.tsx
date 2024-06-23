import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { RouterProvider } from "react-router-dom";
import router from "./router";
import './index.scss';
import reportWebVitals from './shared/reportWebVitals';

export default function App() {
  let [formOfProduct, changeForm] = useState("line")

  document.addEventListener("keydown", (e) => {
    if(e.key == "t") {
      changeForm(formOfProduct == "line" ? "squad" : "line")
    }
  })
  return (
    <RouterProvider router={router} />
  );
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <App />
  /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
