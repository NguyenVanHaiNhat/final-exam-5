import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export function Detail(){
    const [data, setData] = useState([]);
    const {id} = useParams();
    const navigation = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/products/` + id).then(res => {
            setData(res.data);
        })
    }, []);
    return (
        <>
            <h1>Detail product</h1>
            <form className="form-control">
                <p>Tên sản phẩm : {data.title}</p>
                <p>Mô tả : {data.description}</p>
                <p>Giá : {data.price}</p>
                <button><Link to={"/product"}>Trở lại</Link></button>
            </form>
        </>
    )
}