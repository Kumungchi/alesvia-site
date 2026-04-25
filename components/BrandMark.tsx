import type { CSSProperties } from 'react';

type BrandMarkProps = {
  className?: string;
  style?: CSSProperties;
  title?: string;
  withBackground?: boolean;
  backgroundColor?: string;
  inkColor?: string;
  accentColor?: string;
};

type BrandLogoProps = {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  title?: string;
  textColor?: string;
  withBackground?: boolean;
};

export function BrandMark({
  className,
  style,
  title = 'Alesvia',
  withBackground = false,
  backgroundColor = '#F4F1EA',
  inkColor = '#16324F',
  accentColor = '#C79B3B',
}: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : 'presentation'}
      className={className}
      style={style}
    >
      {title ? <title>{title}</title> : null}
      {withBackground ? <rect x="4" y="4" width="120" height="120" rx="28" fill={backgroundColor} /> : null}
      <path
        d="M24 108V62L64 20L104 62V108H86V69L64 46L42 69V108H24Z"
        fill={inkColor}
      />
      <path
        d="M58 108V64L64 58L70 64V108H58Z"
        fill={accentColor}
      />
    </svg>
  );
}

export function BrandLogo({
  className,
  markClassName,
  textClassName,
  title = 'Alesvia',
  textColor = '#16324F',
  withBackground = false,
}: BrandLogoProps) {
  return (
    <span className={className}>
      <BrandMark className={markClassName} title="" withBackground={withBackground} />
      <span className={textClassName} style={{ color: textColor }}>
        {title}
      </span>
    </span>
  );
}
