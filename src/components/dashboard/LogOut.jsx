import { useRouter } from 'next/navigation';
import React from 'react'

function LogOut() {
  const router = useRouter();

  const logOutFuction = () => {
    router.push("/")
  }

  return (
    <div onClick={logOutFuction}>
      logOut
    </div>
  )
}

export default LogOut
