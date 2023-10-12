import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FetchProductObj, FunctionUpdateProduct } from '../Redux/Action'

const UpdateProduct = () => {
    const [id, idChnage] = useState(0)
    const [name, nameChnage] = useState('')
    const [description, descriptionChnage] = useState('')
    const [price, priceChnage] = useState('')
    const [category, categoryChnage] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {code}= useParams();

    const productobj = useSelector((state)=>state.product.productobj)

    const handleSubmit =(e)=> {
        e.preventDefault();
        const productobj = {id, name,description,price,category};
         dispatch(FunctionUpdateProduct(productobj))
         navigate('/productlist');
            
            console.log(productobj);
    }
    useEffect(()=>{
        dispatch(FetchProductObj(code))
    },[])

    useEffect(()=>{
      if(productobj){
        idChnage(productobj.id);
        nameChnage(productobj.name);
        descriptionChnage(productobj.description);
        priceChnage(productobj.price);
        priceChnage(productobj.category);
      }
    }, [productobj])
  return (
    <div>
        <form onSubmit={handleSubmit} className='w-50 m-auto mt-5' >
        <div className='card' >
            <div className='card-header' style={{textAlign:"left"}}>
                <h2>Edit Product</h2>
            </div>
            <div className='card-body' style={{textAlign:"left"}}>
            <div className='col-lg-12'>
                <div className='form-group'>
                    <label>ID</label>
                    <input type="text" value={id} disabled className='form-control' />
                </div>
            </div >
            <div className='col-lg-12'>
                <div className='form-group'>
                    <label>Name</label>
                    <input type="text" value={name} onChange={e=> nameChnage(e.target.value)} className='form-control' />
                </div>
            </div >
            <div className='col-lg-12'>
                <div className='form-group'>
                    <label>Description</label>
                    <input type="text" value={description} onChange={e=> descriptionChnage(e.target.value)} className='form-control' />
                </div>
            </div>
            <div className='col-lg-12'>
                <div className='form-group'>
                    <label>Price</label>
                    <input type="text" value={price} onChange={e=> priceChnage(e.target.value)} className='form-control' />
                </div>
            </div>
            <div className='col-lg-12'>
                <div className='form-group'>
                    <label>Category</label>
                    <input type="text" value={category} onChange={e=> categoryChnage(e.target.value)} className='form-control' />
                </div>
            </div>
            </div>
            <div className='card-footer  ' style={{textAlign:"left"}}>
                    <button className='btn btn-primary' type='submit'>Submit</button>
                    <Link className='btn btn-primary' to='/productlist'>Back</Link>

            </div>
           

        </div>
        </form> 
    </div>
  )
}

export default UpdateProduct