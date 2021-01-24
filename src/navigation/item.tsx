import { NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { NavbarItemProps } from "./types";
import styles from "./style.module.css";

export const NavbarItem = ({ to, onClick, children }: NavbarItemProps) => (
  <NavItem>
    {!!to ? (
      <NavLink
        to={to}
        onClick={onClick}
        className="nav-link"
        activeClassName="active"
      >
        {children}
      </NavLink>
    ) : (
      <span className={`nav-link ${styles.navlink}`} onClick={onClick}>
        {children}
      </span>
    )}
  </NavItem>
);
