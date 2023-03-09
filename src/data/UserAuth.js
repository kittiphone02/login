import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UserAuth = () => {
  const navigate = useNavigate(); // <-- call the useNavigate hook here
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "http://localhost:3000/authen",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.status === "ok") {
          // Do something if authorized
        } else {
          localStorage.removeItem("token");
          navigate("/login", { replace: true }); // <-- redirect to home page
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [navigate]);
}

export default UserAuth;
