const Heading = () => (
  <>
    <h1
      className="font-medium text-white mb-20 md:mb-0 max-lg:-mt-36 absolute md:top-1/3 top-[29vh] md:left-[6vw] left-[5.5vw]"
      style={{
        fontSize: "clamp(2rem, 5vw, 4.6rem)",
        lineHeight: "1.2",
      }}
    >
      When you imagine your family&apos;s future,{" "}
      <br className="hidden md:block" /> What do you see?
    </h1>
    <div className="lg:hidden -mt-8"></div>
  </>
);

export default Heading;
