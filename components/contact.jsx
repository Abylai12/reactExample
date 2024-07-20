const Contact = () => {
  return (
    <section className="bg-[#161C2D] p-20">
      <div className="md:flex items-center justify-between sm:flex-none border-b-2  mx-[5%]">
        <div className="mb-10">
          <span className="text-white font-bold text-[32px]  ">
            Ready to launch your next project?
          </span>
          <p className=" opacity-65 text-white font-normal text-[19px] md:w-[589px]">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <div className="mb-10">
          <button className="p-2 bg-blue-600 text-white rounded-lg">
            Get started a project
          </button>
        </div>
      </div>
    </section>
  );
};
export default Contact;
