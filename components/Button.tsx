import React , {FC} from 'react'
interface But{
    Text:string
}

const Button: FC<But> = ({Text}) => {
  return (
    <button className='p-6 bg-[#083d55] rounded-lg shadow-md shadow-[#083d55] text-white inline-block min-w-60 '>
      {Text ? Text : "Get A Free Quote"}
    </button>
  )
}

export default Button;
