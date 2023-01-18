import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../common/Loader';
import { productDetails, productsInfo } from '../store/admin/products/api/productsApi';
import SingleProduct from './SingleProduct'

const ProductsList = () => {
    const allproductResponse = useSelector((state) => state.productGetReducer);
    
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(productsInfo());
    }, []);
    
    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    {
                        allproductResponse.loading ?
                            <Loader />
                            : <SingleProduct data={allproductResponse.data} />
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductsList
