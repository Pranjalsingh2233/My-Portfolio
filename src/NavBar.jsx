import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          onClick={() => window.location.reload()}
        >
          Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#_home">
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#_about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#_service">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#_skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#_contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
