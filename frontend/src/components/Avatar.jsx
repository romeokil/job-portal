import {useState} from 'react'
import { useSelector } from 'react-redux';
export default function Avatar() {
    const [photohai,setphotohai]=useState(false);
    const user=useSelector((state)=>state.auth.user);
    return (
      <>
  
        <div className="flex -space-x-2 overflow-hidden">
            {!user&& <>
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"  className="inline-block size-10 rounded-full ring-2 ring-white" alt="userpic" />
            </>}
            {user &&
                <img
                alt=""
                src={user.profilePhoto}
                className="inline-block size-10 rounded-full"
              /> 
            }
        </div>
      </>
    )
  }
  