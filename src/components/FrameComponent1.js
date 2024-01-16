import Study from "./Study";
import Quiz from "./Quiz";
import Test from "./Test";
import Game from "./Game";
import Others from "./Others";

const FrameComponent1 = () => {
  return (
    <section className="w-[971px] flex flex-col items-start justify-start gap-[56px] max-w-full text-center text-13xl text-dimgray font-montserrat mq675:gap-[28px]">
      <h2 className="m-0 relative text-inherit font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#06286e,_#164ec0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full mq450:text-lgi mq750:text-7xl">
        Relations and Functions ( Mathematics )
      </h2>
      <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-xl font-med">
        <div className="w-[712px] flex flex-col items-center justify-start gap-[32px] max-w-full mq750:gap-[16px]">
          <div className="w-[554px] flex flex-row items-start justify-start py-0 pr-2 pl-0 box-border max-w-full shrink-0">
            <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full mq675:flex-wrap">
              <div className="h-[29px] flex flex-col items-center justify-start gap-[14px] text-darkslateblue">
                <Study />
                <div className="relative box-border w-[84px] h-0.5 border-t-[2px] border-solid border-darkslateblue" />
              </div>
              <div className="h-[29px] flex flex-col items-center justify-start gap-[14px]">
                <Quiz />
                <div className="relative box-border w-[70px] h-0.5 border-t-[2px] border-solid border-whitesmoke" />
              </div>
              <div className="h-[29px] flex flex-col items-center justify-start gap-[14px]">
                <Test />
                <div className="relative box-border w-[68px] h-0.5 border-t-[2px] border-solid border-whitesmoke" />
              </div>
              <div className="h-[29px] flex flex-col items-center justify-start gap-[14px]">
                <Game />
                <div className="relative box-border w-[82px] h-0.5 border-t-[2px] border-solid border-whitesmoke" />
              </div>
              <div className="h-[29px] flex flex-col items-center justify-start gap-[14px]">
                <Others />
                <div className="relative box-border w-[92px] h-0.5 border-t-[2px] border-solid border-whitesmoke" />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start relative shrink-0 text-center text-19xl-3 text-white font-lato">
            <div className="w-0 flex flex-col items-start justify-end py-0 px-0 box-border">
              <div className="w-[364px] overflow-hidden flex flex-row items-center justify-end max-w-[Infinity%] shrink-0">
                <div className="w-0 flex flex-col items-start justify-start py-0 px-0 box-border">
                  <div className="w-[712px] flex flex-row items-center justify-center relative [transform:_rotate(180deg)] max-w-[Infinity%] shrink-0">
                    <div className="absolute my-0 mx-[!important] h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[42.51px] bg-silver" />
                    <div className="flex-1 rounded-[42.51px] [background:linear-gradient(222.94deg,_#071844,_#071844_3.95%,_#2d87b6_82.51%,_#2d87b6)] overflow-hidden flex flex-row items-start justify-between pt-[34px] px-[34px] pb-[172px] box-border gap-[20px] max-w-full mq450:flex-wrap mq450:pt-[22px] mq450:pb-28 mq450:box-border">
                      <img
                        className="relative w-[34px] h-[34px] overflow-hidden shrink-0 [transform:_rotate(-180deg)]"
                        alt=""
                      />
                      <div className="w-[132px] h-[187px] flex flex-col items-start justify-start pt-[141px] px-0 pb-0 box-border">
                        <b className="self-stretch flex-1 relative tracking-[0.02em] mq450:text-4xl mq750:text-12xl">
                          5x + 12
                        </b>
                      </div>
                      <img
                        className="relative w-[34px] h-[34px] overflow-hidden shrink-0 [transform:_rotate(-180deg)]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
            />
          </div>
          <div className="w-[612px] flex flex-row items-center justify-between gap-[20px] max-w-full shrink-0 text-5xl text-darkslategray-200 mq450:flex-wrap mq450:justify-center">
            <img
              className="relative w-[30px] h-[30px]"
              loading="eager"
              alt=""
              src="/vector.svg"
            />
            <div className="w-[272px] flex flex-row items-center justify-start gap-[43px] mq450:gap-[21px]">
              <img
                className="relative w-[60px] h-[60px] object-contain min-h-[60px]"
                alt=""
                src="/vector-1.svg"
              />
              <b className="relative mq450:text-lgi">01/10</b>
              <img
                className="relative w-[60px] h-[60px] min-h-[60px]"
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <img
              className="relative w-[30px] h-[30px]"
              alt=""
              src="/vector-3.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
