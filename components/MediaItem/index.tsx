import * as i from 'types';
import Image from 'next/image';

export const MediaItem = ({ media }: MediaItemProps) => {
  return (
    <div className="flex justify-between bg-slate-800 p-3 rounded-lg gap-4 w-full">
      <p className="text-slate-300 font-bold">{media.title}</p>
      {media.downloaded && (
        <Image src="/icons/done.svg" width={24} height={24} alt="Done" />
      )}
    </div>
  )
};

type MediaItemProps = {
  media: i.Media;
};
