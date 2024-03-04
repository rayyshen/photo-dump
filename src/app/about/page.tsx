import Image from "next/image";
import SiteHeader from "@/components/site-header";
import { Grid } from "lucide-react";

export default function Home() {
  return (
    <main>
      <SiteHeader/>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <h1 className="flex text-5xl font-bold mx-5 text-center">life and whatnot...</h1>
        <h3 className="flex text-xl text-center my-10 mx-5">on march 3rd, 2024, instead of doing homework i decided to make this website. any photos that look like a digi cam were taken with a fujifilm x10. thanks for being here.</h3>
      </div>
    </main>
    
  );
}
