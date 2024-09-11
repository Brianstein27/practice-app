import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import FolderSection from "./IndexFolders";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <LeftSidebar />
        <FolderSection />
        <RightSidebar />
      </main>
    </>
  );
}
