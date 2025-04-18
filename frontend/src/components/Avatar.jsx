import {useState} from 'react'
export default function Avatar() {
    const [photohai,setphotohai]=useState(false);
    return (
      <>
  
        <div className="flex -space-x-2 overflow-hidden">
            {!photohai && <>
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"  className="inline-block size-10 rounded-full ring-2 ring-white" alt="userpic" />
            </>}
            {photohai &&
                <img
                alt=""
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="inline-block size-10 rounded-full ring-2 ring-white"
              />
                
            }
        </div>
      </>
    )
  }
  