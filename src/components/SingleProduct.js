import React from 'react'
import { useNavigate } from 'react-router';
import { ROUTE_PATH } from '../contants/Constants';

const SingleProduct = ({ data }) => {
    console.log(data, "product_list");
    const navigate = useNavigate();
    const handleDetails = (id) => {
        console.log("handle details")
        navigate(ROUTE_PATH.SINGLE_PRODUCT + id)
    }
    return (
        <div>
            <div className="grid grid-cols-1 h-40 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {
                    data ? data.map((each) => {
                        return (
                            <div onClick={() => handleDetails(each.id)} className="group cursor-pointer">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                    <img src={each.image} alt={each.title} className="hover:scale-125 transition-all duration-500 h-80 w-full object-cover object-center group-hover:opacity-75" />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{each.title}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">${each.price}</p>
                            </div>
                        )
                    }) : null
                }
            </div>
        </div>
    )
}

export default SingleProduct
