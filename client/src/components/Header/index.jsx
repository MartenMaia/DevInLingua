import {IoCalendarNumberSharp} from "react-icons/io5"
import {Link} from "react-router-dom"

function Header() {
  return ( 
    <header className="w-full h-16 bg-black flex items-center justify-center">
      <nav className="w-4/5 flex items-center justify-between">
        <Link to="/" >
          <h3 className="text-primary">DevInLingua</h3>
        </Link>
        <span className="bg-primary p-2 rounded-lg">
          <Link to="/aulas-agendadas">
            <IoCalendarNumberSharp className="text-3xl" />
          </Link>
        </span>
      </nav>
    </header>
   );
}

export default Header;