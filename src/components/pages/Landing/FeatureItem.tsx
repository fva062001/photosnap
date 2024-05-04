import React from 'react';

type FeatureItemProps = {
  title: string;
  description: string;
  svg: React.ReactNode;
};

function FeatureItem({ title, description, svg }: FeatureItemProps) {
  return (
    <div className=" flex flex-col">
      <div className="mx-auto my-auto">{svg}</div>
      <div
        className="mt-12 text-center space-y-6"
        style={{ fontFamily: 'DM Sans, sans-serif' }}>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="max-w-[400px] text-base text-black/60 font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureItem;
