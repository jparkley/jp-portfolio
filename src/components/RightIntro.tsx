const RightIntro = () => {
  return (
    <>
      <div id="intro" className="pt-5 pb-10">
        <div className="text-left mb-5">
          <p>
            Hi, my name is{" "}
            <span className="text-amber-500 text-bold">Janelle Parklee</span>.
            With over a decade of experience as a Full Stack Engineer, I
            specialize in developing robust web applications using a wide array
            of technologies including TypeScript, JavaScript, Node.js,
            Express.js, Nest.js, Next.js, React.js, Redux, PHP, Laravel, Python,
            Java, and various databases like MySQL, PostgreSQL, and MongoDB,
            complemented by ORM frameworks.
          </p>
        </div>
        <div className="mb-5">
          <p>
            Utilizing tools like OpenAPI and Apollo, I architect efficient
            RESTful APIs and dynamic GraphQL endpoints, while crafting intuitive
            user interfaces with Tailwind, Material UI, or Bootstrap to adhere
            to responsive design principles. My toolkit extends to include Jest,
            Git, Docker, CI/CD pipelines, Datadog, Loggly, Figma, and SEO,
            ensuring excellence in every project.
          </p>
        </div>
        <div>
          <p>
            As a{" "}
            <span className="text-cyan-100 text-bold">
              certified AWS developer
            </span>
            , I consistently challenge the boundaries of serverless development,
            driven by my passion for innovation and lifelong learning. My goal
            is to deliver solutions that not only meet business objectives but
            also bring joy to users.
          </p>
        </div>
      </div>
      <hr className="w-90 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
    </>
  );
};

export default RightIntro;
