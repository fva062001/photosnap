import React from 'react';

type Props = {
  className?: string;
  color?: string;
};

function ArrowIcon({ className, color = 'white' }: Props) {
  return (
    <svg
      width="42"
      height="14"
      viewBox="0 0 42 14"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 7H41.864"
        stroke={color}
      />
      <path
        d="M35.4282 1L41.4282 7L35.4282 13"
        stroke={color}
      />
    </svg>
  );
}

export default ArrowIcon;
