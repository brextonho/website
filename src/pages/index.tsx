import Image from "next/image";
import RectangleButton from "@/app/components/Rectangle";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>BREXTONHO</title>
      </Head>
      
      <div className="flex flex-col justify-center h-screen mx-4 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40">
          <div className="flex flex-col space-y-5 items-center">
            <RectangleButton onClick={() => console.log("hello")}>
              about
            </RectangleButton>

            <RectangleButton onClick={() => console.log("hello")}>
              projects
            </RectangleButton>

            <RectangleButton onClick={() => console.log("hello")}>
              experiences
            </RectangleButton>

            <RectangleButton onClick={() => console.log("hello")}>
              playground
            </RectangleButton>

          </div>

          <div>
            <h1 className='text-6xl font-bold text-gray-800 mt-4'>
              BREXTONHO
            </h1>
          </div>

        </div>
    </>
  );
}
