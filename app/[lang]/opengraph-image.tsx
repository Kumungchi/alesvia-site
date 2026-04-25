import { ImageResponse } from 'next/og';
import { BrandMark } from '../../components/BrandMark';

export const alt = 'Alesvia — The Human Baseline';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isCs = lang === 'cs';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #F4F1EA 0%, #EEE8DD 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-60px',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(199,155,59,0.18) 0%, transparent 72%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-90px',
            left: '-90px',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(22,50,79,0.10) 0%, transparent 72%)',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <BrandMark
            title=""
            withBackground
            backgroundColor="#F8F4EC"
            inkColor="#16324F"
            accentColor="#C79B3B"
            style={{ width: '56px', height: '56px' }}
          />
          <span
            style={{
              fontSize: '34px',
              fontWeight: 700,
              color: '#16324F',
              fontFamily: 'Georgia, serif',
              marginLeft: '20px',
            }}
          >
            Alesvia
          </span>
        </div>

        <h1
          style={{
            fontSize: '64px',
            fontWeight: 900,
            color: '#16324F',
            fontFamily: 'Georgia, serif',
            lineHeight: 1.1,
            marginBottom: '24px',
            maxWidth: '900px',
          }}
        >
          {isCs
            ? 'Lidská autonomie je základ.'
            : 'Human autonomy is the baseline.'}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '24px',
            color: 'rgba(34, 30, 34, 0.72)',
            fontFamily: 'sans-serif',
            fontWeight: 400,
            maxWidth: '700px',
            lineHeight: 1.5,
          }}
        >
          {isCs
            ? 'Výzkum, veřejné politiky a vzdělávání pro svět, kde AI neoslabuje lidskou kontrolu.'
            : 'Research, policy, education, and practical frameworks for a world where AI does not erode human control.'}
        </p>

        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #C79B3B, #16324F)',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
