import React from 'react'

const Tr = ({Id,Email, FirstName,LastName,Image}) => {
  return (
    <tbody>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {Id}
        </th>
        <td className="px-6 py-4">
           {Email}
        </td>
        <td className="px-6 py-4">
           {FirstName}
        </td>
        <td className="px-6 py-4">
          {LastName}
        </td>
        <td className="px-6 py-4">
            {/* {Image} */}
           <img className='w-10 h-10 rounded-full' src={Image} alt="No Image" />
        </td>
    </tr>
 
   
</tbody>
  )
}

export default Tr
