import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const goSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="layout">
      <div className="row">
        <div>email</div>
        <input type="text" name="email" value={email} onChange={onChange} />
      </div>
      <div className="row">
        <div>password</div>
        <input type="password" name="password" value={password} onChange={onChange} />
      </div>
      <div className="row">
        <button>로그인 하기</button>
        <button onClick={goSignup}>회원가입</button>
      </div>
    </div>
  );
};
