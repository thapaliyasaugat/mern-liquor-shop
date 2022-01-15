import { useRef } from "react"
import { userRequest } from "../../requsetMethod"
import "./AddProduct.css"
import { useHistory } from 'react-router-dom'
const AddProduct = () => {
    const title = useRef()
    const desc = useRef()
    const imageUrl = useRef()
    const category = useRef()
    const size = useRef()
    const price = useRef()
    const inStock = useRef()
    const history = useHistory();

    const formSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: title.current.value,
            desc: desc.current.value,
            img: imageUrl.current.value,
            categories: category.current.value,
            size: size.current.value,
            price: price.current.value,
            inStock: inStock.current.value,
        }
        console.log(data)
        const submitRequest = async () => {
            try {
                const submit = await userRequest.post('/product/', data)
                console.log(submit);
                history.push('/')
            }
            catch (error) {
                console.log(error)
            }
        }
        submitRequest();
    }
    return (
        <div className="addProduct">
            <div className="addProductContainer">
                <form onSubmit={formSubmit} className="addProductForm">
                    <input type="text" required ref={title} placeholder="title" />
                    <input type="text" required ref={desc} placeholder="desc" />
                    <input type="text" required ref={imageUrl} placeholder="image-url" />
                    <input type="text" required ref={category} placeholder="category - eg-->rum" />
                    <input type="text" required ref={size} placeholder="size- eg-->750ml" />
                    <input type="text" required ref={price} placeholder="price" />
                    <input type="text" required ref={inStock} placeholder="instock" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct
