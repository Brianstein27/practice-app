import './css/indexFolders.css'
import Table from './Table.jsx'

export default function IndexFolders() {
  const rows = [
    { name: "Practice Plan 1", author: "Brian D. Sauls", published: false },
    { name: "Practice Plan 2", author: "Brian D. Sauls", published: false },
    { name: "Practice Plan 3", author: "Brian D. Sauls", published: false },
    { name: "Practice Plan 3", author: "Brian D. Sauls", published: false },
  ];
  return (
    <div className="index-folders">
      <div className="index-folders-header">
        <h1>Plans</h1>
        <h1>></h1>
        <h1 className="active">Folder 1</h1>
      </div>
      <Table rows={rows} />
    </div>
  );
}
