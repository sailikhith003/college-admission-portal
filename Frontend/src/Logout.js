import { useDispatch } from "react-redux";
import { logout } from "./Slice/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(logout());

    navigate("/");
  }, []);
  return <></>;
}

export default Logout;
