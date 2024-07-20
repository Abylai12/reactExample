const Main = () => {
  return (
    <section className="grid md:grid-flow-col sm:grid-cols-1 mid-content p-[5%] gap-8">
      <div className="flex flex-col gap-8">
        <span className="text-rose-600 font-bold">
          LET'S SHIFT YOUR BUSINESS
        </span>
        <h2 className="font-bold text-6xl">
          Shift your business <br /> fast with Shade Pro
        </h2>
        <p className="font-normal">
          With lots of unique blocks, you can easily build a page <br /> without
          coding. Build your next consultancy website within <br /> few minutes.
        </p>
        <button className="p-2 bg-blue-600 text-white rounded-lg w-[220px] ">
          Get started a project
        </button>
      </div>
      <div className="">
        <img
          className="rounded-full w-[463px] h-[463px]"
          src="/images/img-1.jpg"
          alt="img"
        />
      </div>
    </section>
  );
};
export default Main;
