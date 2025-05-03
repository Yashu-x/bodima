import React from 'react';
import { ShieldCheck } from 'lucide-react';

const WarningCard: React.FC = () => {
  return (
    <div className="border-4 border-primary rounded-md p-6 max-w-md text-center">
      <div className="flex items-center justify-center gap-2 mb-4 text-primary font-semibold">
        <ShieldCheck className="w-5 h-5" />
        <span className="text-black font-bold">SECURITY TIPS</span>
      </div>
      <p className="text-sm text-gray-700">
        <span className="font-bold">Do not</span> make any payments to advertiser<br />
        before inspecting the Place.<br />
        <span className="font-medium">Bodima.lk</span> shall not be held responsible<br />
        for any transaction or agreement<br />
        reached between the advertiser and you.
      </p>
    </div>
  );
};

export default WarningCard;
