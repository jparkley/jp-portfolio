import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const LeftMenu = () => {
  return (
    <>
      <div className="mb-5 text-center">
        <h1 className="text-4xl font-extrabold">Janelle Parklee</h1>
      </div>
      <div className="mb-5 text-center">
        <h4 className="text-xl font-bold">Senior Full Stack Engineer</h4>
      </div>
      <div>
        <p className="mb-20 text-center text-sm font-light">
          Driving Excellence with Every Line of Code
        </p>
      </div>
      <div className="flex justify-center mb-10">
        <div>
          <img
            className="block"
            src="./aws-dva.png"
            width="75"
            alt="AWS Developer"
          />
        </div>
        <div>
          <img
            className="block"
            src="./aws-saa.png"
            width="75"
            alt="AWS Solotions Architect"
          />
        </div>
        <div>
          <img
            className="block"
            src="./aws-scs.png"
            width="75"
            alt="AWS Security"
          />
        </div>
      </div>
      <div className="flex justify-center pl-2">
        <AiFillLinkedin size={42} className="mr-4" />
        <AiFillGithub size={42} />
      </div>
    </>
  );
};

export default LeftMenu;
