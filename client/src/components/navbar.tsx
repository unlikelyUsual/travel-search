interface INavLink {
  link: string;
  menu: string;
  child?: INavLink[];
}

const Navbar = () => {
  const navLinks: INavLink[] = [
    { link: "", menu: "Destination" },
    { link: "", menu: "Travel Them" },
    { link: "", menu: "Trip Search" },
  ];

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav custom-nav'>
            {navLinks.map((item, i) => (
              <li className='nav-item dropdown' key={i}>
                <a className='nav-link dropdown-toggle' href={item.link} data-bs-toggle='dropdown'>
                  {item.menu}
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className='d-flex' role='search'>
          <a className='btn btn-primary px-3 py-1' type='submit' href='/dashboard'>
            Admin Dashboard
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
