/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
