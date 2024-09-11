import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './css/navbar.css'

export default function Navbar() {
  return (
    <nav>
      <div className="left-nav-section">
        <div className="branding">
          <LibraryMusicIcon sx={{ fontSize: 40 }} className="logo" />
          <span className="brand-name">Planice</span>
        </div>
        <p>My Documents</p>
      </div>
      <div className="right-nav-section">
        <NotificationsNoneOutlinedIcon sx={{ fontSize: 32 }} />
        <div className="profile-nav-section">
          <img
            className="avatar"
            src="./assets/BrianEdits-9.jpg"
            alt="Your profile picture"
          />
          <ExpandMoreIcon />
        </div>
      </div>
    </nav>
  );
}
