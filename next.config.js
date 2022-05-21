// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'transitivebullsh.it'
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
})

module.exports = {

  async redirects() {
    return [
{
        source: '/tewestettt',
        destination: 'https://daily-heroes.info',
        permanent: true
      },
      {
        source: '/battered-hunting-dog-gave-up-on-life-after-owner-deemed-her-useless-dumped-her',
        destination: 'https://daily-heroes.info/uncategorized/battered-hunting-dog-gave-up-on-life-after-owner-deemed-her-useless-dumped-her',
        permanent: true
      },
      {
        source: '/when-he-thinks-no-one-is-looking-a-young-boy-stops-to-hug-two-stray-dogs-on-video',
        destination: 'https://daily-heroes.info/uncategorized/when-he-thinks-no-one-is-looking-a-young-boy-stops-to-hug-two-stray-dogs-on-video',
        permanent: true
      }
    ];
  }
};
