const LeftMenu = () => {
  return (
    <>
      <div className="mb-5">
        <h1 className="text-4xl font-extrabold">Janelle Parklee</h1>
      </div>
      <div className="mb-5">
        <h4 className="text-xl font-bold">Senior Full Stack Engineer</h4>
      </div>
      <div>
        <p className="text-sm font-light decoration-1">
          Driving Excellence with Every Line of Code
        </p>
      </div>
      <div className="mt-20 p-4 flex justify-right">
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
      <div className="flex justify-right mt-8">
        <div>
          <p className="text-sm">Github | LinkedIn | More</p>
        </div>
      </div>
    </>
  );
};

export default LeftMenu;
