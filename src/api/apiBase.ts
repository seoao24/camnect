import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}api` || "https://api.example.com",
});

// Interceptor để tự động thêm Authorization header vào mọi request
axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("access-key");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Nếu là request upload file, cần xóa "Content-Type" để Axios tự động thiết lập
  if (config.headers["Content-Type"] === "multipart/form-data") {
    delete config.headers["Content-Type"];
  }

  return config;
});

// Interceptor để kiểm tra lỗi response
axiosInstance.interceptors.response.use(
  (response) => response, // Nếu request thành công, trả về response bình thường
  (error) => {
    if (error.response && error.response.status === 401) {
      // window.location.href = "/sign-in";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
