import Image from "next/image";
import SiteHeader from "@/components/site-header";
import { promises as fs } from 'fs';
import path from 'path'
import { useState, useEffect } from 'react';
import useScreenSize from "@/hooks/use-window-dimensions";

import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza"



const GalleryPage = async () => {
  const imageDirectory = path.join(process.cwd(), '/public/images');
  const imageFilenames = await fs.readdir(imageDirectory)
  // console.log(imageFilenames)

  return (
    <Gallery images={imageFilenames} />
  );
};

const GalleryPage2 = async () => {
  const imageDirectory = path.join(process.cwd(), '/public/images2');
  const imageFilenames = await fs.readdir(imageDirectory)
  // console.log(imageFilenames)

  return (
    <Gallery2 images={imageFilenames} />
  );
};

const Gallery = ({ images }: { images: Array<string>; }) => { 
  return <div className="grid grid-cols-1 grid-flow-row gap-3 md:gap-10 max-w-3xl auto-rows-max mr-3 md:mr-10">
    {images.map((el: string) =>
      <Credenza>
        <CredenzaTrigger>
          <Image className="rounded-sm hover:rounded-lg ease-in-out duration-200"
            width={500}
            height={500}
            alt={'alt'}
            src={`/images/${el}`}
            key={el}
            loading={'eager'}/>
        </CredenzaTrigger>
        <CredenzaContent>
          <CredenzaBody className="flex flex-row justify-center max-h-screen md:max-h-fit md:max-w-fit">
            <Image className="my-10"
              height={300}
              width={500}
              // style={{
              //   width: '100%',
              //   height: 'auto',
              // }}
              // layout={'responsive'} 
              // objectFit={'contain'}
              alt={'alt'}
              src={`/images/${el}`}
              key={el}
              loading={'eager'} />
          </CredenzaBody>
        </CredenzaContent>
      </Credenza>
    )}
  </div>
}

const Gallery2 = ({ images }: { images: Array<string>; }) => { 
  return <div className="grid grid-cols-1 grid-flow-row gap-3 md:gap-10 max-w-3xl auto-rows-max">
    {images.map((el: string) =>
      <Credenza>
        <CredenzaTrigger>
          <Image className="rounded-sm hover:rounded-lg ease-in-out duration-200"
            width={500}
            height={500}
            alt={'alt'}
            src={`/images/${el}`}
            key={el} 
            loading={'eager'}/>
        </CredenzaTrigger>
        <CredenzaContent>
          <CredenzaBody className="flex flex-row justify-center max-h-screen md:max-h-fit md:max-w-fit">
            <Image className="my-10"
              height={300}
              width={500}
              // style={{
              //   width: '100%',
              //   height: 'auto',
              // }}
              // layout={'responsive'} 
              // objectFit={'contain'}
              alt={'alt'}
              src={`/images2/${el}`}
              key={el}
              loading={'eager'} />
          </CredenzaBody>
        </CredenzaContent>
      </Credenza>
    )}
  </div>
}


export default function Home() {
  return (
    <main>
      <SiteHeader />
      <div className="flex flex-row min-h-screen justify-center mx-5 mt-5 mb-10 md:mb-20">
        <GalleryPage />
        <GalleryPage2 />
      </div>
    </main>
  );
}
