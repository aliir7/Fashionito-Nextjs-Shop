import BottomNav from "./BottomNav";
import MiddleNav from "./MiddleNav";

function Navbar() {
  return (
    <nav>
      <header className="w-full">
        <div className="hidden lg:block">
          <MiddleNav />
        </div>
        <BottomNav />
      </header>
    </nav>
  );
}

export default Navbar;
