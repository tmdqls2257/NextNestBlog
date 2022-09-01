import type { NextPage } from "next";
import { HomeAnimation } from "../common/animation/animations";

const Home: NextPage = () => {
  return (
    <section className="body-font flex min-h-screen flex-col items-center justify-center text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
            {"안녕하세요 테오구 입니다."}
          </h1>
          <p className="mb-8 leading-relaxed">{"테오구의 기술 블로그"}</p>
          <div className="flex justify-center">
            <button className="inline-flex rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
              {"프로젝트 보러가기"}
            </button>
          </div>
        </div>
        <HomeAnimation />
      </div>
    </section>
  );
};

export default Home;
