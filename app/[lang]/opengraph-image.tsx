import { ImageResponse } from 'next/og';

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
          background: 'linear-gradient(135deg, #1B1F3B 0%, #2A1F4E 50%, #0F2C59 100%)',
          position: 'relative',
        }}
      >
        {/* Decorative orb */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(27,31,59,0.4) 0%, transparent 70%)',
          }}
        />

        {/* Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #C9A84C, #D4B85A)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px',
            }}
          >
            <span style={{ fontSize: '32px', fontWeight: 900, color: '#1B1F3B', fontFamily: 'serif' }}>
              A
            </span>
          </div>
          <span style={{ fontSize: '32px', fontWeight: 700, color: '#F5F0E8', fontFamily: 'serif' }}>
            Alesvia.
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 900,
            color: '#F5F0E8',
            fontFamily: 'serif',
            lineHeight: 1.1,
            marginBottom: '24px',
            maxWidth: '900px',
          }}
        >
          {isCs
            ? 'Lidský základ v automatizovaném světě.'
            : 'Setting the human baseline in an automated world.'}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '24px',
            color: 'rgba(245,240,232,0.6)',
            fontFamily: 'sans-serif',
            fontWeight: 400,
            maxWidth: '700px',
            lineHeight: 1.5,
          }}
        >
          {isCs
            ? 'Výzkum, vzdělávání a etické technologické iniciativy.'
            : 'Research, education, and ethical technology initiatives.'}
        </p>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #C9A84C, #1B1F3B)',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
