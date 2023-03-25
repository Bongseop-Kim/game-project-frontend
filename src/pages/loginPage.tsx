import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
// yarn add @types/js-cookie 타입 스크립트에서 사용하기 위해 설치 해야함

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

  useEffect(() => {
    if (Cookies.get("token")) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async () => {
    await axios
      .post("http://localhost:8000/api/users/login", JSON.stringify(form), {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => {
        // 세션에 저장하기...
        Cookies.set("token", res.data.data.token);
        if (Cookies.get("token")) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.response.data.error.message);
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
        <button onClick={handleLogin}>로그인 하기</button>
        <button onClick={goSignup}>회원가입</button>
      </div>
    </div>
  );
};
