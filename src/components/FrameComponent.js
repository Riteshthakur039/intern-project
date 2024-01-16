import CreateFlashcard from "./CreateFlashcard";

const FrameComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-center justify-between min-h-[171px] gap-[20px] text-left text-smi-4 text-dimgray font-med mq675:flex-wrap">
      <div className="w-[217px] flex flex-row items-start justify-start py-5 px-0 box-border gap-[21px]">
        <img
          className="relative w-[80.6px] h-[80.6px] object-contain"
          loading="eager"
          alt=""
          src="/group-1@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
          <b className="relative">Published by</b>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[34.5px] shrink-0 object-cover"
            alt=""
            src="/component-40-1@2x.png"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-start py-5 px-0 gap-[8px] text-9xl">
        <img
          className="relative w-[60px] h-[60px] overflow-hidden shrink-0"
          alt=""
          src="/frame-6.svg"
        />
        <CreateFlashcard />
      </div>
    </section>
  );
};

export default FrameComponent;
