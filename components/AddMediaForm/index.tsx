import * as React from 'react';
import Image from 'next/image';

export const AddMediaForm = ({
  onAddMedia,
}: AddMediaFormProps) => {
  const [adding, setAdding] = React.useState(false);
  const [mediaTitle, setMediaTitle] = React.useState('');

  const handleAddMedia = () => {
    if (mediaTitle.length > 0) {
      onAddMedia(mediaTitle);
      setMediaTitle('');
    }
    setAdding(false);
  }

  return (
    <div className="w-full p-5 flex justify-center fixed bottom-0 bg-black">
      <div className="max-w-3xl w-full">
        {adding ? (
          <div className="w-full flex flex-col gap-4">
            <input
              value={mediaTitle}
              onChange={(e) => setMediaTitle(e.target.value)}
              className="h-8 rounded-md p-2"
            /> 
            <div className="w-full flex gap-x-4">
              <button
                onClick={handleAddMedia}
                className="text-slate-300 bg-[#008000] p-2 rounded-md font-bold text-md w-[50%]"
              >
                Pievienot
              </button>
              <Image src="/images/minion-smirk.png" width={50} height={75} alt="Miniboss" priority />
              <button
                onClick={() => setAdding(false)}
                className="text-slate-300 bg-[#8B0000] p-2 rounded-md font-bold text-md w-[50%]"
              >
                Atcelt
              </button>
            </div>
          </div>
        ) : (
          <button
            className="text-slate-300 bg-violet-700 p-2 rounded-md font-bold text-md w-full"
            onClick={() => setAdding(true)}
          >
            Gribu velvienu
          </button>
        )}
      </div>    
    </div>
  );
};

type AddMediaFormProps = {
  onAddMedia: (title: string) => void;
};
