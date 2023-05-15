import { MenuListing } from "../../molecules";

export const MenuList = () => {
  const handleMove = (id) => {
    const elem = document.querySelector(id);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <ul className="hidden lg:flex gap-6">
        <MenuListing label="Home" />
        <MenuListing
          onClick={(e) => {
            e.preventDefault();
            handleMove("#benefit");
          }}
          label="Benefit"
        />
        <MenuListing
          onClick={(e) => {
            e.preventDefault();
            handleMove("#partner");
          }}
          label="Partner"
        />
        <MenuListing
          onClick={(e) => {
            e.preventDefault();
            handleMove("#about");
          }}
          label="About"
        />
      </ul>
    </div>
  );
};
