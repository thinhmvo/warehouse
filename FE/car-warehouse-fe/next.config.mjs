/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login", // Chuyển hướng người dùng từ trang chủ sang trang đăng nhập
        permanent: false, // Đặt là false để chỉ ra rằng đây là một chuyển hướng tạm thời
      },
    ];
  },
};

export default nextConfig;
