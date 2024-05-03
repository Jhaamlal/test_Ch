import Image from "next/image"
import React from "react"

const product_url = "https://dummyjson.com/products"
async function ProductsList() {
  const data = await fetch(product_url)
  const jsonFormateData = await data.json()
  //   First point , of Logging the data
  console.log(`Data is here =>`, jsonFormateData.products)

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Title
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Price
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Image
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {jsonFormateData.products.map((item, index) => {
          return (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Image
                  src={item.thumbnail}
                  width={30}
                  height={30}
                  alt="Image of Product"
                />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export { ProductsList }
