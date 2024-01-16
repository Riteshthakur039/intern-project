import { NavLink } from "react-router-dom";


import Flashcard from "../components/Flashcard";

import FrameComponent2 from "../components/FrameComponent2";
import Mathematics from "../components/Mathematics";
import RelationAndFunction from "../components/RelationAndFunction";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FAQComponent from "../components/FAQComponent";

const Desktop = () => {
  return (
    <div className="relative bg-whitesmoke w-full overflow-hidden flex flex-col items-center justify-start pt-[27px] px-5 pb-[307px] box-border gap-[64px] tracking-[normal] mq450:gap-[16px] mq675:gap-[32px]">
      <header className="w-[1233px] flex flex-row items-center justify-between gap-[20px] max-w-full text-left text-lg text-darkslategray-100 font-med mq750:w-[708px]">
        <img
          className="relative w-[191px] h-[39px] object-cover"
          loading="eager"
          alt=""
          src="/component-40@2x.png"
        />
        <div className="flex flex-row items-center justify-start gap-[40px] max-w-full mq675:gap-[20px] mq750:hidden">
          <div className="w-[282px] flex flex-row items-start justify-between gap-[20px]">
         <NavLink  to="/">Home</NavLink>
             
                <NavLink  to="/flashcard">Flashcard</NavLink>
             
                <NavLink  to="/contact">Contact</NavLink>
             
                
          </div>
          <NavLink to="/FAQ ">FAQ </NavLink>
          <FrameComponent2 />
        </div>
      </header>
      <main className="w-[1236px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border gap-[64px] max-w-full text-center text-lg text-dimgray font-med mq450:gap-[16px] mq675:gap-[32px]">
        <div className="flex flex-row items-center justify-start [row-gap:20px] max-w-full mq675:flex-wrap">
          <div className="flex flex-row items-center justify-start">
            <img
              className="relative w-[30px] h-[30px] overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/frame.svg"
            />
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 "
              alt=""
              src="/frame-1.svg"
            />
            <Flashcard
              flashcardColor="#696671"
              flashcardTextAlign="center"
              flashcardFontWeight="500"
            />
          </div>
          <div className="flex flex-row items-center justify-center [row-gap:20px] max-w-full mq450:flex-wrap">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/frame-2.svg"
            />
            <Mathematics />
            <div className="flex flex-row items-center justify-start text-darkslateblue">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/frame-2.svg"
              />
              <RelationAndFunction />
            </div>
          </div>
        </div>
        <FrameComponent1 />
        <FrameComponent />
        <section className="w-[848px] flex flex-col items-start justify-start gap-[48px] max-w-full text-left text-[48px] font-med mq450:gap-[24px]">
          <h1 className="m-0 relative text-inherit tracking-[0.01em] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#06286e,_#164ec0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-[29px] mq750:text-[38px]">
            FAQ
          </h1>
          <FAQComponent />
        </section>
      </main>
    </div>
  );
};

export default Desktop;
