import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as PhoneService from "../service/PhoneService";
import axios from "axios";
import {updatePhone} from "../service/PhoneService";

export function Update(){
    const {id} = useParams();
    const [data, setData] = useState([]);
    const navigation = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/products/` + id).then(res => {
            setData(res.data);
        })
    }, []);
    const handleUpdate = async (value) => {
        const newValue = {...value};
        console.log(newValue);
        await PhoneService.updatePhone(newValue);
        navigation("/product");
        alert("cập nhật thành công")
    }
    return(
            <>
                <h1>Edit</h1>
                <Formik
                    initialValues={data}
                    onSubmit={handleUpdate}
                    enableReinitialize={true}
                >
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="kk1" className="form-label">Tên sản phẩm</label>
                            <Field name="title" type="text" className="form-control" id="kk1"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="kk2" className="form-label">Giá</label>
                            <Field name="price" type="text" className="form-control" id="kk2"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="kk3" className="form-label">Mô tả</label>
                            <Field name="description" type="text" className="form-control" id="kk3"/>
                        </div>

                        <div className="d-grid gap-2">
                            <button className="btn btn-success" type="submit">Cập Nhật</button>
                            <button><Link to={"/product"} className="btn btn-danger">Hủy</Link></button>
                        </div>
                    </Form>
                </Formik>
            </>
    )
}