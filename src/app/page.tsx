import Image from "next/image";
import SiteHeader from "@/components/site-header";
import {promises as fs} from 'fs';
import path from 'path'

const GalleryPage = async () => {
  const imageDirectory = path.join(process.cwd(), '/public/images');
  const imageFilenames = await fs.readdir(imageDirectory)
  console.log(imageFilenames)

  return (
    <Gallery images={imageFilenames}/>
  );
};

const Gallery = ({ images }: { images: Array<string>; }) => {
  return <div className="grid grid-cols-2 grid-flow-row gap-5 md:gap-10 max-w-3xl auto-rows-max">
      {images.map((el: string) => <Image width={500} height={500} alt={'alt'} src={`/images/${el}`} key={el} />)}
  </div>
}

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <div className="flex flex-row min-h-screen justify-center mx-5 my-5">
        <GalleryPage/>
      </div>
    </main>
  );
}
