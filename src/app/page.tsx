import Image from "next/image";
import me from '../../public/assets/mccut.jpg';

export default function Home() {
  return (
    <div className="w-screen h-auto bg-white p-2 flex justify-center items-center m-4">
      <div id="Home-Content" className="flex justify-center items-center space-x-28">
        <div id="Quick-Info">
          <h4 className="text-md koho-bold">Hello There! Im..</h4>
          <h1 className="text-6xl koho-bold">Faiz</h1>
          <h2 className="text-xl koho-semibold">Software Engineer</h2>
        </div>
        <div id="My-Image">
          <Image src={me} className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 2xl:w-[520px] 2xl:h-[520px] rounded-full" alt="Image description" width={200} height={200} />
        </div>
      </div>
    </div>
  );
}
