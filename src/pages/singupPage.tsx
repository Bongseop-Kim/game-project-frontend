import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { email, password, name } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSignup = async () => {
    await axios
      .post("http://localhost:8000/api/users/signup", JSON.stringify(form), {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => {
        alert(error.response.data.error.message);
      });
  };

  return (
    <div className="layout">
      <div className="row">
        <div>email</div>
        <input type="text" name="email" value={email} onChange={onChange} />
      </div>
      <div className="row">
        <div>name</div>
        <input type="text" name="name" value={name} onChange={onChange} />
      </div>
      <div className="row">
        <div>password</div>
        <input type="password" name="password" value={password} onChange={onChange} />
      </div>
      <div className="row">
        <button onClick={handleSignup}>가입</button>
      </div>
    </div>
  );
};
