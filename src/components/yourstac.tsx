import React from 'react';

const yourstac = () => {
    return (
        <div>

            <div className="w-150 max-w-sm rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
  <h2 className="text-xl font-bold text-slate-900">
    Your Stack 
  </h2>

  <p className="mt-1 text-sm text-slate-400">
    No technologies selected yet.
  </p>

  <div className="mt-4 flex h-24 items-center justify-center rounded-xl border border-dashed border-slate-200">
    <p className="text-sm text-slate-400">
      Your stack is empty.
    </p>
  </div>
</div>
            
        </div>
    );
};

export default yourstac;