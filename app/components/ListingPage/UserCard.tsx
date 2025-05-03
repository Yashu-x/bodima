import React, { useState } from 'react';
import { Phone, User } from 'lucide-react';

type UserCardProps = {
  name: string;
  price: number;
  phoneNumber: string;
  whenToPay: string;
};

const UserCard: React.FC<UserCardProps> = ({ name, price, phoneNumber, whenToPay }) => {
  const [showPhone, setShowPhone] = useState(false);

  const maskPhone = (number: string) => {
    return number.slice(0, 3) + 'XXXXXXX';
  };

  return (
    <div className="max-w-full bg-white rounded-lg shadow-md text-center space-y-4 border-3 border-gray-300">
      <div className='border-b-3 border-gray-300 pb-4 pt-4'>
        <h2 className="text-3xl font-bold text-primary">Rs {price.toLocaleString()}</h2>
        <p className="text-s text-gray-500">({whenToPay})</p>
      </div>

      <div className="flex items-center justify-center gap-2 border-b-3 border-gray-300 pb-4 pt-4">
        <User className="w-10 h-10 text-black" />
        <span className="font-medium">{name}</span>
      </div>

      <div
        className="flex flex-col items-center justify-center gap-1 cursor-pointer border-b-3 border-gray-300 pb-4 pt-4"
        onClick={() => setShowPhone(true)}
      >
        <div className="flex items-center gap-2">
          <Phone className="w-8 h-8" />
          <span className="text-2xl">{showPhone ? phoneNumber : maskPhone(phoneNumber)}</span>
        </div>
        {!showPhone && (
          <span className="text-xs text-gray-500">Click to show phone number</span>
        )}
      </div>
    </div>
  );
};

export default UserCard;
