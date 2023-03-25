import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  console.log(form);
  const { email, password, username } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post("/api/signup", { username, email, password });
      const data = response.data;
      if (data.success) {
        // 회원가입 성공 처리
        navigate("/login");
      } else {
        // 회원가입 실패 처리
      }
    } catch (error) {
      // 에러 처리
    }
  };

  return (
    <div className="layout">
      <div className="row">
        <div>email</div>
        <input type="text" name="email" value={email} onChange={onChange} />
      </div>
      <div className="row">
        <div>name</div>
        <input type="text" name="username" value={username} onChange={onChange} />
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
