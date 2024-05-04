import GradientDiv from "@/components/GradientDiv";
import LeftMenu from "@/components/LeftMenu";
import RightIntro from "@/components/RightIntro";
import RightProjects from "@/components/RightProjects";

export default function Home() {
  return (
    <>
      <GradientDiv className="">
        <div className="flex p-20 border-spacing-1 text-slate-300 md:flex-row">
          <div className="w-1/3 min-h-screen h-12">
            <LeftMenu />
          </div>
          <div className="w-2/3 ml-10">
            <RightIntro />
            <RightProjects />
          </div>
        </div>
      </GradientDiv>
    </>
  );
}
