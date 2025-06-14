import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [name,setName]=useState('islam')
  const [avatar,setAvatar]=useState(false)
  const [users, setUsers] = useState([])
  const addPost = data => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log('error:', err))
  }
  useEffect(() => {
    // Fetch users
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (res.ok && res.status === 200) {
          return res.json()
        }
        throw new Error('Network response was not ok')
      })
      .then(data => setUsers(data))
      .catch(err => console.log('error:', err))

    // Add example post
    addPost({
      userId: 1,
      title: 'example POST',
      body: 'POST icerigi'
    })
  }, [])

const submitHandle=(e)=>{
  e.prevent.deafult
  console.log('submit edildi')
}
  
  return (
    <>

<form onSubmit={submitHandle} >
<input type='text' name='name' value={name} onChange={e=> setName(e.target.value)}/>
<br/>
 <input type='file' name='avatar'  onChange={e=> setAvatar(e.target.files[0])}/>
  <br/>
  <button type='submit'  disabled={!name || !avatar}>kaydet</button>
</form>






      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <h1>User List</h1>
    <ul>
      {users && users.map(user => (
        <li key={user.id}>
          Name: {user.name} <br/>
          E-mail: {user.email}<br/><br/>
        </li>
      ))}
    </ul>
     
      </>
  )
}

export default App