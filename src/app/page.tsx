import GradientDiv from "@/components/GradientDiv";

export default function Home() {
  return (
    <>
      <GradientDiv className="">
        <div className="flex m-20 border-spacing-1">
          <div className="w-1/3 min-h-screen bg-gray-400 h-12">
            <div className="mb-10">
              <h1 className="text-4xl font-extrabold">Janelle Parklee</h1>
            </div>
            <div>
              <h4>Senior Full Stack Engineer</h4>
            </div>
          </div>
          <div className="w-2/3 bg-gray-400 h-12">right</div>
        </div>
      </GradientDiv>
    </>
  );
}
