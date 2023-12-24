import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="background h-screen">
      <div className="w-full flex flex-col background items-center">
        <h1 className="bg-white rounded-lg w-11/12 mt-[40px] text-center text-4xl font-bold py-2 px-10">RANDOM GIFS</h1>
        <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
          <Random />
          <Tag />
        </div>
      </div>
    </div>

  );
}
