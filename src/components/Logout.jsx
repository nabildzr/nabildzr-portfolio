// filepath: /C:/Users/M Nabil Dzikrika R/Documents/Portfolio/Portfolio-1/portfolio-deploy-2/src/components/Logout.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    Swal.fire({
      title: "Logged Out",
      text: "You have been logged out successfully.",
      icon: "success",
      timer: 3000,
      showConfirmButton: false,
    }).then(() => {
      window.location.href = '/?logout=true';
    });
  }, [navigate]);

  return null;
};

export default Logout;