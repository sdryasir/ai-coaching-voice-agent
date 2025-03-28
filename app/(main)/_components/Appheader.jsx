import { UserButton } from '@stackframe/stack'
import Image from 'next/image'
import React from 'react'

function Appheader() {
  return (
    <div className='p-3 flex shadow-sm justify-between items-center'>
        <Image src="/logo.svg" alt="logo" width={100} height={7} />
        <UserButton/>
    </div>
  )
}

export default Appheader