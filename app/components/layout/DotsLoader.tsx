import React from 'react';

export default function DotsLoader() {
  // Negative and positive delays for each dot
  const delays = ['-0.3s', '-0.1s', '0.1s', '0.3s', '0.5s'];

  return (
    <div className="flex items-center justify-center w-full h-full">
      {delays.map((delay, index) => (
        <div
          key={index}
          className="w-5 h-5 mr-2 rounded-full bg-primary last:mr-0"
          style={{
            animation: 'pulse 1.5s infinite ease-in-out',
            animationDelay: delay,
          }}
        />
      ))}

      {/* Global keyframes styling for the pulse animation */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(0.8);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
          }
          50% {
            transform: scale(1.2);
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}
