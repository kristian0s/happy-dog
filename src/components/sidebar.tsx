import { NavLink } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

type LinkType = {
  path: string;
  label: string;
};

const linkList: LinkType[] = [
  {
    path: "/progress-bar",
    label: "Progress bar",
  },
  {
    path: "/loader",
    label: "Loader",
  },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <div className={`sidebar ${isOpen ? "isActive" : ""}`}>
      {linkList.map((link) => {
        return (
          <NavLink onClick={onClose} className="sidebar__link" to={link.path}>
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
