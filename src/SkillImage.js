// SkillImage.js

import React from 'react';

const SkillImage = ({ imageSrc, altText }) => {
  return (
    <div className="group relative flex items-center justify-center overflow-hidden">
    <img src={imageSrc} alt={altText} className="object-scale-down h-20 w-32" />
  </div>
  );
};

//  class="rounded-l bg-gray-100 bg-opacity-40 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8 pt-10" //for glossy effect

export default SkillImage;
