/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // For PDF files
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    // Important: return the modified config
    return config;
  },
};

export default nextConfig;
