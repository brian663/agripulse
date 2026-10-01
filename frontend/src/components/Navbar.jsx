import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, LayoutDashboard, Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMobileMenu}
          aria-label="AgriPulse home"
        >
          <span className="logo-mark">
            <span></span>
          </span>

          <span className="logo-text">
            Agri<span>Pulse</span>
          </span>
        </Link>

        {/* Main Navigation */}
        <nav className="navbar-links" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/prices">Prices</Link>
          <Link to="/markets">Markets</Link>
          <Link to="/crops">Crops</Link>
          <Link to="/trends">Trends</Link>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          {/* Search */}
          <Link
            to="/prices"
            className="navbar-icon-button"
            title="Search prices"
            aria-label="Search prices"
          >
            <Search size={19} />
          </Link>

          {/* Subscribe */}
          <Link to="/subscribe" className="navbar-subscribe">
            Subscribe
          </Link>

          {/* Dashboard */}
          <Link
            to="/dashboard"
            className="navbar-icon-button"
            title="Dashboard"
            aria-label="Dashboard"
          >
            <LayoutDashboard size={19} />
          </Link>

          {/* Theme */}
          <button
            type="button"
            className="navbar-icon-button"
            onClick={toggleTheme}
            title={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={
            mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-menu-links" aria-label="Mobile navigation">
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>

            <Link to="/prices" onClick={closeMobileMenu}>
              Prices
            </Link>

            <Link to="/markets" onClick={closeMobileMenu}>
              Markets
            </Link>

            <Link to="/crops" onClick={closeMobileMenu}>
              Crops
            </Link>

            <Link to="/trends" onClick={closeMobileMenu}>
              Trends
            </Link>

            <Link
              to="/subscribe"
              className="mobile-subscribe"
              onClick={closeMobileMenu}
            >
              Subscribe
            </Link>

            <Link
              to="/dashboard"
              className="mobile-dashboard"
              onClick={closeMobileMenu}
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>

            <button
              type="button"
              className="mobile-theme-button"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <>
                  <Moon size={18} />
                  Dark Mode
                </>
              ) : (
                <>
                  <Sun size={18} />
                  Light Mode
                </>
              )}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
