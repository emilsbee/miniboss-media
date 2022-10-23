import * as i from 'types';
import * as React from 'react';
import Image from 'next/image';

import { getMedia, addMedia } from 'queries/media';
import { MediaItem, AddMediaForm } from 'components';

export default function Home() {
  const [media, setMedia] = React.useState<i.MediaList | null>(null);

  React.useEffect(() => {
    (async () => {
      console.log('useEffect')
      const media = await getMedia();
      setMedia(media);
    })();
  }, []);

  const handleAddMedia = async (title: string) => {
    console.log('handleAddMedia')
    const addedMedia = await addMedia(title);
    setMedia({ addedMedia, ...media });
    await refetchMedia();
  };

  const refetchMedia = async () => {
    console.log('refetchMedia')
    const media = await getMedia();
    setMedia(media);
  };
  
  return (
    <div className="w-full h-full flex flex-col justify-between items-start p-10">
      <div className="max-w-7xl flex justify-center items-end flex-wrap gap-x-10 gap-y-6 mb-6">
        <Image src="/images/miniboss.png" width={75} height={150} alt="Miniboss" />
        <h1 className="font-bold text-2xl text-slate-300">
          Minibosa filmas un seriali
        </h1>
      </div>
      <div className="w-full flex flex-col gap-y-3">
        {media && Object.entries(media).map(([key, value]) => (
          <MediaItem key={key} media={value} />
        ))}
      </div>
      <AddMediaForm onAddMedia={handleAddMedia} />
    </div>
  )
}
