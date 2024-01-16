import { useState } from "react";

const FAQComponent = () => {
  const [canEducationFlashcardsValue, setCanEducationFlashcardsValue] =
    useState("");
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-base text-gray font-med mq450:gap-[16px]">
      <div className="self-stretch rounded-xl box-border overflow-hidden flex flex-row items-center justify-between py-[17px] pr-[25px] pl-6 gap-[20px] max-w-full border-[1px] border-solid border-dodgerblue">
        <input
          className="[border:none] [outline:none] font-semibold font-med text-base bg-[transparent] relative leading-[26px] text-gray text-left inline-block max-w-[calc(100%_-_44px)]"
          placeholder="Can education flashcards be used for all age groups?"
          type="text"
          value={canEducationFlashcardsValue}
          onChange={(event) =>
            setCanEducationFlashcardsValue(event.target.value)
          }
        />
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/frame-7.svg"
        />
      </div>
      <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-between py-[17px] pr-[25px] pl-6 gap-[20px] border-[1px] border-solid border-dodgerblue">
        <div className="relative leading-[26px] font-semibold">
          How do education flashcards work?
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/frame-7.svg"
        />
      </div>
      <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-between py-[17px] pr-[25px] pl-6 gap-[20px] border-[1px] border-solid border-dodgerblue">
        <div className="relative leading-[26px] font-semibold">
          Can education flashcards be used for test preparation?
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/frame-7.svg"
        />
      </div>
    </div>
  );
};

export default FAQComponent;
