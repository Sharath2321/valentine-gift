import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Hover over the box</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">My Journey with you</a>
        </li>
        {/* <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">My Journey with you</a>
        </li> */}
        {/* <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li> */}
      </ul>
    </div>
  );
}
