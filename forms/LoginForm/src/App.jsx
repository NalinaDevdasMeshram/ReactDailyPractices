import { useState } from "react";
import "./App.css";
export default function App() {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [showForgetForm, setShowForgetForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="toggle-form">
          <button
            className={isLoginActive ? "active" : ""}
            onClick={() => {
              (setIsLoginActive(true), setShowForgetForm(false));
            }}
          >
            Login
          </button>
          <button
            className={!isLoginActive ? "active" : ""}
            onClick={() => {
              (setIsLoginActive(false), setShowForgetForm(false));
            }}
          >
            SignUp
          </button>
        </div>
      </div>
      {isLoginActive ? (
        <form>
          <input type="text" placeholder="Enter Username" />
          <input type="password" placeholder="Enter Password" />
          <a href="#" onClick={() => setShowForgetForm(true)}>
            Forgot Password?
          </a>
          <button onClick={handleSubmit}>Login</button>
          <p>
            Don't have an account ?{" "}
            <a href="#" onClick={() => setIsLoginActive(false)}>
              SignUp
            </a>
          </p>
        </form>
      ) : (
        <form>
          <input type="text" placeholder="Enter Username" />
          <input type="email" placeholder="Enter Email Address" />
          <input type="password" placeholder="Enter Password" />
          <button onClick={handleSubmit}>SignUp</button>
        </form>
      )}
      {showForgetForm && (
        <form className="backdrop">
          <h4>Reset Password</h4>
          <input type="email" placeholder="Enter Email Address" />
          <input type="password" placeholder="Enter New Password" />
          <button onClick={handleSubmit}>Reset Password</button>
        </form>
      )}
    </div>
  );
}
