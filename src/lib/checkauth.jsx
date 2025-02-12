import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("sb-xyrcjvuxxvdpghcvsjzf-auth-token");

    if (!authToken) {
      navigate("/");
    } else {
      try {
        const parsedToken = JSON.parse(authToken);
        const currentTime = Math.floor(Date.now() / 1000);
        if (parsedToken.expires_at < currentTime) {
          console.warn("Token sudah kedaluwarsa.");
          navigate("/");
        }
      } catch (error) {
        console.error("Error parsing auth token:", error);
        navigate("/");
      }
    }
  }, []);

  return null; // Tidak menampilkan UI, hanya untuk cek auth
}
