import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import * as PhoneService from "../service/PhoneService";
import axios from "axios";

export function List() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getAllPhone()
    }, []);

    const getAllPhone = async () => {
        try {
            const list = await PhoneService.getAll();
            setProduct(list);
        } catch (e) {
            console.log(e);
        }
    }

    return(

        <>
            <div className="row mx-5">
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <h2>Quản Lí Sản Phẩm</h2>
                </div>
            </div>

            <div className="row mx-5">
                <div className="col-2">
                    <button><Link to={"/product/create"} className="btn btn-primary">Thêm mới</Link></button>
                </div>
            </div>

            <div className="row mx-5">
                <table>
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Giá</th>

                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        product.map((product, index) => (
                            <tr key={product.id}>
                                <th>{index + 1}</th>
                                <th><Link to={'/product/' + product.id}>{product.title}</Link></th>
                                <th>{product.price}</th>
                                <th>{product.description}</th>
                                <td>
                                    <button><Link to={'edit/' + product.id}>Update</Link></button>
                                </td>
                                <td>
                                    <button onClick={() => {
                                        axios.delete('http://localhost:8080/products/' + product.id).then(res => {
                                            alert('Xóa thành công!!!');
                                            getAllPhone();
                                        })
                                    }}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }

                    </tbody>
                </table>
            </div>


        </>
    )
}