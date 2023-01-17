import React from 'react'
import SingleProduct from './SingleProduct'


const ProductsList = () => {
    return (
        <div>
            <div class="bg-white">
                <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 class="sr-only">Products</h2>

                    <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsList
