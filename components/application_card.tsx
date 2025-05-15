import React from 'react';

export function ApplicationCard({ title, description, image, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block transform transition-transform duration-500 ease-in-out hover:scale-105 shadow-lg rounded-lg border border-gray-200 p-6 bg-white"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 object-contain rounded-md"
        />
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </a>
  );
}
