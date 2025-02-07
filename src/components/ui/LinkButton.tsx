import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface LinkButtonProps {
  href: string;
  variant?: 'primary' | 'secondary'; // 👈 Supports multiple styles
  children: React.ReactNode;
  className?: string;
}

export default function LinkButton({
  href,
  variant = 'primary',
  children,
  className,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'font-semibold uppercase tracking-wide rounded px-6 py-2 min-w-24 text-black',
        variant === 'primary'
          ? 'bg-btnMain hover:brightness-90'
          : 'bg-btnSecondary hover:brightness-90',
        className,
      )}
    >
      {children}
    </Link>
  );
}
