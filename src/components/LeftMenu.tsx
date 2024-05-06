import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const LeftMenu = () => {
  return (
    <>
      <div className="flex lg:justify-center pb-8 pl-2">
        <a href="/">
          <img src="./psa3.png" width="120" />
        </a>
      </div>

      <div className="lg:text-center text-left">
        {/* <h1 className="text-4xl font-extrabold mb-4">Janelle Parklee</h1> */}
        <h4 className="text-2xl font-bold">Senior Full Stack Engineer</h4>
      </div>

      <div className="lg:text-center text-left mt-14 lg:mb-20 mb-12">
        <div className="mb-3">
          <a href="#intro">Intro</a>
        </div>
        <div className="mb-3">
          <a href="#projects">Projects</a>
        </div>
      </div>
      <div className="flex lg:justify-center">
        <div>
          <a
            href="https://www.credly.com/badges/9a4952ec-3084-44da-b86d-8684bbf90d72/linked_in_profile"
            target="_blank"
          >
            <img
              className="block"
              src="./aws-dva.png"
              width="75"
              alt="Certified Developer – Associate"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.credly.com/badges/816d39fb-8a03-45ec-a7b5-b57c563ba67a/linked_in_profile"
            target="_blank"
          >
            <img
              className="block"
              src="./aws-saa.png"
              width="75"
              alt="Certified Solutions Architect – Associate"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.credly.com/badges/bdec83c7-b7a2-49b0-80ae-9a4489c49296/public_url"
            target="_blank"
          >
            <img
              className="block"
              src="./aws-scs.png"
              width="75"
              alt="AWS Certified Security - Specialty"
            />
          </a>
        </div>
      </div>
      <div className="flex lg:justify-center mt-10 pl-2">
        <a href="https://www.linkedin.com/in/janelleparklee/" target="_blank">
          <AiFillLinkedin size={42} className="mr-4" />
        </a>
        <a href="https://github.com/jparkley" target="_blank">
          <AiFillGithub size={42} />
        </a>
      </div>
      <div>
        <p className="lg:mt-20 mt-12 lg:text-center text-sm font-light">
          Driving Excellence
          <br /> with Every Line of Code
        </p>
      </div>
    </>
  );
};

export default LeftMenu;
