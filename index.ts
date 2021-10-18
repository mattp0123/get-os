export default function getPlatform() {
  const {
    platform = '',
    userAgent = '',
    maxTouchPoints = 0,
  } = window?.navigator || {};

  if (
    ['iPad', 'iPhone', 'iPod'].includes(platform) ||
    (userAgent.includes('Mac') && maxTouchPoints > 0)
  ) {
    return 'iOS';
  }

  if (/Android/i.test(userAgent)) {
    return 'Android';
  }

  return 'Others';
}

export type Platform = ReturnType<typeof getPlatform>;
