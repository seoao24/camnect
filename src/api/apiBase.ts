import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api` || "https://api.example.com", // Đổi baseURL phù hợp
  headers: {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${Cookies.get('access-key')}`
  },
});

// Interceptor để kiểm tra lỗi response
axiosInstance.interceptors.response.use(
  (response) => response, // Nếu request thành công, trả về response bình thường
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "/sign-in";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
