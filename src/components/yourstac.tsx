import React, { type Dispatch, type SetStateAction } from "react";
import type { Itech } from "../types/techType";

interface IYourStackProps {
  selectedTech: Itech[];
  setSelectedTech: Dispatch<SetStateAction<Itech[]>>;
}

const YourStack = ({
  selectedTech,
  setSelectedTech,
}: IYourStackProps) => {

  const handleDelete = (id: string) => {
    setSelectedTech((prev) => {
      return prev.filter((tech) => tech.id !== id);
    });
  };

  const handleRemoveAll = () => {
    setSelectedTech([]);
  };

  return (
    <div className="w-150 max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold text-slate-900">
        Your Stack
      </h2>

      {selectedTech.length === 0 && (
        <>
          <p className="mt-2 text-lg text-slate-400">
            No technologies selected yet.
          </p>

          <div className="mt-6 flex h-28 items-center justify-center rounded-xl border border-dashed border-slate-200">
            <p className="text-lg text-slate-400">
              Your stack is empty.
            </p>
          </div>
        </>
      )}

      {selectedTech.length > 0 && (
        <>

          <p className="mt-2 text-lg text-slate-400">
            {selectedTech.length} Technology
            {selectedTech.length > 1 ? "ies" : "y"} Selected
          </p>

          <div className="mt-6 space-y-2">

            {selectedTech.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between rounded-xl border border-slate-200 px-5 py-4"
              >

                <div className="flex items-center gap-4">

                  <img
                    src={tech.icon}
                    
                    className="h-10 w-10 object-contain"
                  />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {tech.name}
                    </h3>

                    <p className="text-xs text-slate-400">
                      {tech.category}
                    </p>
                  </div>

                </div>

                <button
                  onClick={() => handleDelete(tech.id)}
                  className="text-4xl font-light leading-none text-slate-400 transition hover:text-red-500"
                >
                  ×
                </button>

              </div>
            ))}

          </div>

          <button
            onClick={handleRemoveAll}
            className="mt-20 w-full rounded-xl border border-red-300 py-3 text-xl font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}

    </div>
  );
};

export default YourStack;