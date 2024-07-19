const Header = () => {
  return (
    <header>
      <div className="flex justify-between mid-content p-4">
        <div className="flex items-center m-2">
          <h1 className="text-3xl font-bold mr-8">Brainwave.io</h1>
          <ul className="flex gap-4 cursor-pointer">
            <li>Demos</li>
            <li>Pages</li>
            <li>Support</li>
            <li>Contact</li>
            <li>{2 + 3}</li>
          </ul>
        </div>
        <div>
          <button className="p-2 bg-blue-600 text-white rounded-lg ">
            Get started project
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
