import * as i from 'types';
import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import { getMedia, addMedia } from 'queries/media';
import { MediaItem, AddMediaForm } from 'components';

export default function Home() {
  const [media, setMedia] = React.useState<i.Media[]>([]);

  React.useEffect(() => {
    (async () => {
      await refetchMedia();
    })();
  }, []);

  const handleAddMedia = async (title: string) => {
    setMedia([ { title, id: 'optimistic-update', downloaded: false }, ...media ]);
    const addedMedia = await addMedia(title);

    if (addedMedia && media) {
      setMedia([ addedMedia, ...media ]);
    }

    await refetchMedia();
  };

  const refetchMedia = async () => {
    const fetchedMedia = await getMedia();

    if (fetchedMedia) {
      setMedia(fetchedMedia);
    }
  };
  
  return (
    <>
      <div className="w-full flex flex-col justify-start items-center p-10 pb-[90px]">
        <div className="max-w-7xl	w-full flex flex-col justify-between items-start">
          <Head>
            <title>Miniboss</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <div className="max-w-7xl flex justify-center items-end flex-wrap gap-x-10 gap-y-6 mb-6">
            <Image priority src="/images/miniboss.png" width={75} height={150} alt="Miniboss" />
            <div className="absolute top-0 right-[40px]">
              <Image priority src="/images/minions-hanging.png" width={55} height={140} alt="Miniboss" />
            </div>
            <h1 className="font-bold text-2xl text-slate-300">
              Minibosa filmas un seriali
            </h1>
          </div>
          <div className="w-full flex flex-col gap-y-3">
            {media && media.sort((a, b) => a.title.localeCompare(b.title)).map((media) => (
              <MediaItem key={media.id} media={media} />
            ))}
            {media.length > 0 && (
              <div className="w-full flex justify-center">
                <Image priority src="/images/minions-looking-up.png" width={200} height={150} alt="Miniboss" />
              </div>
            )}
          </div>
        </div>
        <AddMediaForm onAddMedia={handleAddMedia} />
      </div>
    </>
  )
}
