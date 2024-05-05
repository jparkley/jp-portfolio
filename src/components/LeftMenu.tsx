import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const LeftMenu = () => {
  return (
    <>
      <div className="flex justify-center pb-8 pl-2">
        <a href="/">
          <img src="./psa.png" width="120" />
        </a>
      </div>

      <div className="text-center">
        {/* <h1 className="text-4xl font-extrabold mb-4">Janelle Parklee</h1> */}
        <h4 className="text-2xl font-bold">Senior Full Stack Engineer</h4>
      </div>

      <div className="text-center mt-14 mb-20">
        <div className="mb-3">
          <a href="#intro">Intro</a>
        </div>
        <div className="mb-3">
          <a>Projects</a>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <img
            className="block"
            src="./aws-dva.png"
            width="75"
            alt="Certified Developer – Associate"
          />
        </div>
        <div>
          <img
            className="block"
            src="./aws-saa.png"
            width="75"
            alt="Certified Solutions Architect – Associate"
          />
        </div>
        <div>
          <img
            className="block"
            src="./aws-scs.png"
            width="75"
            alt="AWS Certified Security - Specialty"
          />
        </div>
      </div>
      <div className="flex justify-center mt-10 pl-2">
        <AiFillLinkedin size={42} className="mr-4" />
        <AiFillGithub size={42} />
      </div>
      <div>
        <p className="mt-20 text-center text-sm font-light">
          Driving Excellence
          <br /> with Every Line of Code
        </p>
      </div>
    </>
  );
};

export default LeftMenu;
