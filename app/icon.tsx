import { ImageResponse } from 'next/og';
import { BrandMark } from '../components/BrandMark';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <BrandMark withBackground backgroundColor="#F4F1EA" title="" />,
    { ...size }
  );
}
