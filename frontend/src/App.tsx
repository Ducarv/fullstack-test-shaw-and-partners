import './App.css'
import { FileUpload } from './components/FileUpload';
import { UserList } from './components/UserList';
import { fetchUsers } from './providers/fetchUsers';

function App() {
  return (
    <>
      <FileUpload onUploadSuccess={fetchUsers}/>
      <UserList/>
    </>
  )
}

export default App
