import GradientDiv from "@/components/GradientDiv";
import LeftMenu from "@/components/LeftMenu";
import RightIntro from "@/components/RightIntro";
import RightProjects from "@/components/RightProjects";

export default function Home() {
  return (
    <>
      <GradientDiv className="mx-auto min-h-screen max-w-screen-xl px-20">
        <div className="lg:flex lg:justify-between lg:gap-3 border-spacing-1 text-slate-300">
          <header className="lg:flex-col lg:items-start lg:w-1/3 lg:sticky lg:top-0 lg:max-h-screen py-20">
            <LeftMenu />
          </header>
          <main id="content" className="w-2/3 ml-10 mr-10 pt-20 py-20">
            <RightIntro />
            <RightProjects />
          </main>
        </div>
      </GradientDiv>
    </>
  );
}
