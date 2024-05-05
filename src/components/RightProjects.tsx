import Image from "next/image";
const RightProjects = () => {
  return (
    <div id="projects" className="mt-20">
      {/* ShopNow */}
      <div className="flex">
        <div className="w-1/2">
          <Image
            src="/site-shopnow-s.png"
            width={400}
            height={369}
            className="float-left pr-10 "
            alt="Shopper: Shopping Cart in Next.js & Tailwind"
          />
        </div>
        <div className="w-2/3">
          <p className="text-extrabold text-sky-400 text-xl">ShopNow</p>
          <p className="text-sm pt-4 text-cyan-100 ">
            Shopping Cart in Next.js, Typescript, React, Tailwind and Stripe
            deployed on Ampify
          </p>
          <p className="pt-8">
            <a
              href="https://main.d1j9o7a5qexbvy.amplifyapp.com/"
              target="_blank"
              className="inline-flex items-center justify-center h-12 px-4 py-0 text-sm text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
            >
              Visit Site
            </a>
            <a
              href="https://github.com/jparkley/shopper2-nextjs-stripe"
              target="_blank"
              className="ml-4 inline-flex items-center justify-center h-12 px-4 py-0 text-sm text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
            >
              Github
            </a>
          </p>
        </div>
      </div>
      {/* SharePosts */}
      <div className="flex mt-14">
        <div className="w-1/2">
          <Image
            src="/site-shareposts-s.png"
            width={400}
            height={356}
            className="float-left pr-10"
            alt="SharePosts: Next.js and Amplify Gen2"
          />
        </div>
        <div className="w-2/3">
          <p className="text-extrabold text-sky-400 text-xl">SharePosts</p>
          <p className="text-sm pt-4 text-cyan-100 ">
            Posts & Comments in Next.js, Typescript, React, and Amplify Gen2,
            <br />
            Membership by Cognito, DynamoDB, Deployed on AWS
          </p>
          <p className="pt-8">
            <a
              href="https://main.d1zwx9fhxreii8.amplifyapp.com/"
              target="_blank"
              className="inline-flex items-center justify-center h-12 px-4 py-0 text-sm text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
            >
              Visit Site
            </a>
            <a
              href="https://github.com/jparkley/shareposts-nextjs-amplify-gen2"
              target="_blank"
              className="ml-4 inline-flex items-center justify-center h-12 px-4 py-0 text-sm text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
            >
              Github
            </a>
          </p>
        </div>
      </div>
      {/* ChatV1 MERN */}
      <div className="flex mt-14">
        <div className="w-1/2">
          <Image
            src="/site-chatv1-s.png"
            width={400}
            height={279}
            className="float-left pr-10"
            alt="SharePosts: Next.js and Amplify Gen2"
          />
        </div>
        <div className="w-2/3">
          <p className="text-extrabold text-sky-400 text-xl">
            SocialApp
            {/* SocialApp (Dobooro) */}
          </p>
          <p className="text-sm pt-4 text-cyan-100 ">
            In React, Node,Express & MongoDB
            <br />
            Blogging, Live Chat & Live Search, Follow/Unfollow
          </p>
          <p className="pt-8">
            <a
              href="https://dobooro-circle.netlify.app/"
              target="_blank"
              className="inline-flex items-center justify-center h-12 px-4 py-0 text-sm text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
            >
              Visit Site
            </a>
            <a
              href="https://github.com/jparkley/circle-social-react"
              target="_blank"
              className="ml-4 inline-flex items-center justify-center h-12 px-4 py-0 text-sm text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
            >
              Github
            </a>
          </p>
        </div>
      </div>

      {/* RestaurantV1 MERN */}
      <div className="flex mt-14 mb-20">
        <div className="w-1/2">
          <Image
            src="/site-siroo-s.png"
            width={400}
            height={279}
            className="float-left pr-10 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
            alt="SharePosts: Next.js and Amplify Gen2"
          />
        </div>
        <div className="w-2/3">
          <p className="text-extrabold text-sky-400 text-xl">
            Restaurant Siroo
          </p>
          <p className="text-sm pt-4 text-cyan-100 ">
            In React & Sass
            <br />
            SPA Restaurant design <br />
            <span className="text-xs text-gray-100">
              (Backend development in progress)
            </span>
          </p>
          <p className="pt-8">
            <a
              href="https://jparkley.github.io/restaurant-menu-react/"
              target="_blank"
              className="inline-flex items-center justify-center h-12 px-4 py-0 text-sm text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
            >
              Visit Site
            </a>
            <a
              href="https://github.com/jparkley/restaurant-menu-react"
              target="_blank"
              className="ml-4 inline-flex items-center justify-center h-12 px-4 py-0 text-sm text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
            >
              Github
            </a>
          </p>
        </div>
      </div>
      <hr className="w-90 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="text-center mt-8 text-gray-300 text-xs">
        <p className="pb-1">Developed with Next.js and Tailwind</p>
        <p>@2024 Dobooro</p>
        <a href="https://jparkley.github.io/portfolio-react/" target="_blank">
          <Image
            src="/fight-training.gif"
            width={100}
            height={100}
            className="float-right"
            alt="Taekwondo Owl"
          />
        </a>
      </div>
    </div>
  );
};

export default RightProjects;
