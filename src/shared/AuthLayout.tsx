import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("토큰이 없습니다. 로그인해주세요.");
      navigate("/auth");
    }
  }, [navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;