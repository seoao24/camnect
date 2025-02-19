'use client';
import Feedback from "./home/feedback";
import FQA from "./home/FQA";
import HomeHere from "./home/hero";
import Introduction from "./home/introduction";
import Reason from "./home/reason";
import SearchPhotographers from "./home/search";

export default function Home() {
  return (
    <div className="mt-[3rem] p-0 m-0 relative">
      <HomeHere />
      <Introduction />
      <Reason />
      <SearchPhotographers />
      <FQA/>
      <Feedback/>
    </div>
  );
}
