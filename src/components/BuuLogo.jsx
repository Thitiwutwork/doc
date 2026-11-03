import React from 'react';

export default function BuuLogo({ className = "w-24 h-24" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src="/logo-buu.png"
        alt="ตรามหาวิทยาลัยบูรพา"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
