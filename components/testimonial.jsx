const Testimonial = () => {
  return (
    <section className="p-24 bg-[#473BF0] flex flex-col justify-center items-center gap-8">
      <h1 className="font-bold text-[#68D585] text-[13px] ">TESTIMONIAL</h1>
      <p className="text-white font-bold text-[32px] text-center">
        "Simply the best. Better than all the rest. I'd <br />
        recommend this product to beginners and <br /> advanced users."
      </p>
      <div className="">
        <img
          className="w-[76px] h-[76px] rounded-full "
          src="/images/portrait.jpg"
          alt="img"
        />
      </div>
      <div className="text-center">
        <span className="font-bold text-white">Ian Klein</span>
        <h3 className="font-normal text-white opacity-65">Digital Marketer</h3>
      </div>
    </section>
  );
};
export default Testimonial;
