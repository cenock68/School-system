import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

class Navbar extends Component {
  // Set state
  state = { clicked: false};
  handleClick = () =>{
    this.setState({ clicked: !this.state.clicked})
  }
  // Make Handleclick Function

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">HIGH SCHOOL</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
          className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu "}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
          );
          } )}
          <li>
            <Dropdown
              title="Staff"
              links={[
                { href: "/login?role=staff", text: "Staff Portal" },
                { href: "/timetables", text: "Timetables" },
                { href: "/library", text: "Library" }
              ]}
            />
          </li>
          <li>
            <Dropdown
              title="Student"
              links={[
                { href: "/Apply", text: "Apply" },
                { href: "/login?role=student", text: "Student Portal" },
                { href: "/timetables", text: "Timetables" },
                { href: "/term-dates", text: "Term Dates" },
                { href: "/student-finance", text: "Student Finance" },
                { href: "/library-services", text: "Library Services" }
              ]}
            />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
