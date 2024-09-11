import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import './css/sidebar.css'

function Folder({ icon, name }) {
  return (
    <div className="folder">
      <FolderIcon />
      <span>{name}</span>
    </div>
  );
}
function FolderTree() {
  return (
    <div className="folder-tree">
      <div className="folder-section">
        <div className="folder-heading">
          <LibraryBooksIcon />
          <span>Plans</span>
        </div>
        <div className="folders">
          <div className="folder new-folder">
            <CreateNewFolderIcon />
            <span>New folder</span>
          </div>
          <Folder name="Folder" />
          <Folder name="Folder" />
          <Folder name="Folder" />
          <Folder name="Folder" />
        </div>
      </div>
      <div className="folder-section">
        <div className="folder-heading">
          <LibraryMusicIcon />
          <span>Exercises</span>
        </div>
        <div className="folders">
          <div className="folder new-folder">
            <CreateNewFolderIcon />
            <span>New folder</span>
          </div>
          <Folder name="Folder" />
          <Folder name="Folder" />
          <Folder name="Folder" />
          <Folder name="Folder" />
        </div>
      </div>
      <div className="folder-heading">
        <DeleteIcon />
        <span>Trash</span>
      </div>
    </div>
  );
}
export default function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <FolderTree />
    </div>
  );
}
