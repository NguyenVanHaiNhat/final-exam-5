import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {createNewPhone} from "../service/PhoneService";
import * as PhoneService from "../service/PhoneService";


export function Create(){
    const navigation = useNavigate();

    const handleSubmit = async (value) => {
        const newValue = {...value};
        console.log(newValue);
        await PhoneService.createNewPhone(newValue);
        navigation("/product");
        alert("thêm mới thành công")
    }
    return (
        <>
            <h1>Edit</h1>
            <Formik
                initialValues={{
                    "title" : "",
                    "price" : "",
                    "description" : ""
                }}
                onSubmit={handleSubmit}
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
                        <button className="btn btn-success" type="submit">Thêm mới</button>
                        <button><Link to={"/product"} className="btn btn-danger">Hủy</Link></button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}