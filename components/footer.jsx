const Footer = () => {
  return (
    <section className="bg-[#161C2D]">
      <div className="flex mid-content p-20 justify-between">
        <div>
          <h1 className="mb-8 font-bold text-white text-[28px]">
            Brainwave.io
          </h1>
          <p className="text-white opacity-65 text-[15px]">
            With lots of unique blocks, you can <br /> easily build a page
            without coding. <br /> Build your next landing page.{" "}
          </p>
        </div>
        <div className="flex gap-20">
          <div>
            <span className="text-white opacity-65 text-[15px]">Company</span>
            <ul className="text-white mt-5 zai">
              <li>About us</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <span className="text-white opacity-65 font-normal text-[15px]">
              Product
            </span>
            <ul className="text-white mt-5 zai">
              <li>Features</li>
              <li>Pricing</li>
              <li>News</li>
              <li>Help desk</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <span className="text-white opacity-65 text-[15px]">Services</span>
            <ul className="text-white mt-5 zai">
              <li>Digital Marketing</li>
              <li>Content Writing</li>
              <li>SEO for Business</li>
              <li>UI Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
