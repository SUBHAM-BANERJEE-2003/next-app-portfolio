/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
          pathname: '/u/**',
        },
        {
          protocol: 'https',
          hostname: 'img.icons8.com',
          pathname: '/**',
        }
      ],
    },
  };
  