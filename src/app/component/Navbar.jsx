const Navbar = ({ activeComponent, setActiveComponent }) => {
  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <>
      <nav className="md:hidden bg-gray-800 p-4 fixed top-0 left-0 right-0 z-10">
        <div className="flex  text-lg justify-between">
          <button
            className={`text-white cursor-pointer ${
              activeComponent === "discussion"
                ? "font-bold underline underline-offset-8 decoration-red-300"
                : ""
            }`}
            onClick={() => handleComponentChange("discussion")}
          >
            Discussion Fourm
          </button>

          <button
            className={`text-white cursor-pointer ${
              activeComponent === "stories"
                ? "font-bold underline underline-offset-8 decoration-red-300"
                : ""
            }`}
            onClick={() => handleComponentChange("stories")}
          >
            Market Stories
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
