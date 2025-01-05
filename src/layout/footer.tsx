import React from 'react';
import Link from 'next/link';

function footer() {
  return (
    <div className="bg-black text-white w-full items-center">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between py-3 text-sm font-thin">
          <div>© 2023 All Rights Reserved.</div>
          <div className="flex gap-4">
            <Link href="/terms">Terms of Service</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default footer;
