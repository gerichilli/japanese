import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

interface CardProps {
  imageUrl?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Card({ imageUrl, className, children }: CardProps) {
  return (
    <div
      className={clsx(
        'flex items-start gap-6 border-2 border-borderOnBg shadow-[4px_4px_0px_black] rounded-lg p-6 bg-cardBg',
        className,
      )}
    >
      {imageUrl && (
        <div className="flex-shrink-0 relative w-36 aspect-square border-2 border-borderOnBg rounded overflow-hidden">
          <Image
            src={imageUrl}
            alt="Card image"
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="flex-grow flex flex-col">{children}</div>
    </div>
  );
}
