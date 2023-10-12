import axios from "axios"
import { ADD_PRODUCT, DELETE_PRODUCT, FAIL_REQUEST, GET_PRODUCT_LIST, GET_PRODUCT_OBJ, MAKE_REQUEST, UPDATE_PRODUCT } from "./ActionType"
import { toast } from "react-toastify"
import UpdateProduct from "../Components/UpdateProduct"

export const makeRequest =() => {
    return{
        type:MAKE_REQUEST
    }
}
export const failRequest =(err) => {
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}
export const getProductList =(data) => {
    return{
        type:GET_PRODUCT_LIST,
        payload:data
    }
}
export const deleteProduct = ()=> {
    return{
        type:DELETE_PRODUCT
    }
}
export const addProduct = ()=> {
    return{
        type:ADD_PRODUCT
    }
}
export const updateProduct = ()=> {
    return{
        type:UPDATE_PRODUCT
    }
}
export const getProductObj =(data) => {
    return{
        type:GET_PRODUCT_OBJ,
        payload:data
    }
}


export const FetchproductList=() => {
    return(dispatch) => {
        dispatch(makeRequest());
        // setTimeout(()=> {

            axios.get('http://localhost:3000/products')
            .then(res => {
                const productlist = res.data;
                dispatch(getProductList(productlist));
            }).catch(err => {
                dispatch(failRequest(err.message))
            })
        // },2000)
    }
}
export const Removeproduct=(code) => {
    return(dispatch) => {
        dispatch(makeRequest());
        // setTimeout(()=> {

            axios.delete('http://localhost:3000/products/'+code)
            .then(res => {
                dispatch(deleteProduct());
            }).catch(err => {
                dispatch(failRequest(err.message))
            })
        // },2000)
    }
}
export const FunctionAddProduct=(data) => {
    return(dispatch) => {
        dispatch(makeRequest());
        // setTimeout(()=> {

            axios.post('http://localhost:3000/products', data)
            .then(res => {
                dispatch(addProduct());
                toast.success('product Added successfully')
            }).catch(err => {
                dispatch(failRequest(err.message))
            })
        // },2000)
    }
}
export const FunctionUpdateProduct=(data,code) => {
    return(dispatch) => {
        dispatch(makeRequest());
        // setTimeout(()=> {

            axios.put('http://localhost:3000/products/'+code,data)
            .then(res => {
                dispatch(UpdateProduct());
                toast.success('product Updated successfully')
            }).catch(err => {
                dispatch(failRequest(err.message))
            })
        // },2000)
    }
}
export const FetchProductObj=(code) => {
    return(dispatch) => {
        dispatch(makeRequest());
        // setTimeout(()=> {

            axios.get('http://localhost:3000/products/'+code)
            .then(res => {
                const productlist = res.data;
                dispatch(getProductObj(productlist));
            }).catch(err => {
                dispatch(failRequest(err.message))
            })
        // },2000)
    }
}