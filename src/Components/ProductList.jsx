import React, { useEffect } from 'react'
import { FetchproductList, Removeproduct } from '../Redux/Action'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProductList = (props) => {
    useEffect(() => {
        props.loadproduct();
    }, [])

    const handledelete = (code) => {
            if(window.confirm('do you want  to remove')){
                props.removeproduct(code);
                props.loadproduct();
                toast.success('Product remove successfully')
            }
    }
    return (
        props.product.loading ? <div><h2>Loading</h2></div> :
            props.product.errmessage ? <div>{props.product.errmessage}<h2></h2></div> :
                <div>
                    <div className='card'>
                        <div className="card-header" style={{textAlign:'right'}}>
                            <Link to={'/addproduct'} className='btn btn-success '>Add Product +</Link>
                        </div>
                        <div className="card-body">
                            <table className='table table-bordered'>
                                <thead className='bg-primary text-white'>
                                    <tr>
                                        <td>Id</td>
                                        <td>Name</td>
                                        <td>Description</td>
                                        <td>Price</td>
                                        <td>Category</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.product.productlist && props.product.productlist.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.description}</td>
                                                <td>{item.price}</td>
                                                <td>{item.category}</td>
                                                <td className='d-flex gap-2'>
                                                    <Link to={'/edit/'+item.id} className='btn btn-primary'>Edit</Link>
                                                    <button onClick={()=> {handledelete(item.id)}} className='btn btn-danger'>Delete</button>
                                                </td>
                                            </tr>

                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
    )
}
const mapStateToProps = (state) => {
    return {
        product: state.product
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadproduct: () => dispatch(FetchproductList()),
        removeproduct : (code)=> dispatch(Removeproduct(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)