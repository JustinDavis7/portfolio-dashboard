// src/components/ListSection.js
import React from 'react';

function ListSection({ title, items }) {
  return (
    <div className="mb-6">
      <p className="text-xl font-semibold mb-2 text-gray-800">{title}</p>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListSection;
