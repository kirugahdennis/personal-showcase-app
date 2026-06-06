import { useState} from "react";

function Admin ( { products, addProduct, editProduct}){
    const [coffee, setCoffee] = useState ({
        name: "",
        description: "",
        origin:"",
        price:"",
    });


// --- Add Product ---

    const handleChange = (e) => {
        setCoffee({
            ...coffee,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addProduct({
            ...coffee,
            id: Date.now(),
            price: Number(coffee.price),
        });

        setCoffee({
            name:"",
            description: "",
            origin: "",
            price: "",
        })

        alert("Coffee added successfuly");
    };

    return (
        <form onSubmit={handleSubmit} className= "admin-form">
            <input 
            name= "name"
            placeholder= "Coffee Name"
            value={coffee.name}
            onChange={handleChange}
            />

            <input 
            name= "description"
            placeholder= "Description"
            value={coffee.description}
            onChange={handleChange}
            />
            <input
            name="origin"
            placeholder="origin"
            value={coffee.origin}
            onChange={handleChange}
            />
            <input
            name="price"
            placeholder="price"
            value={coffee.price}
            onChange={handleChange}
            />

            <button type = "submit">Add Coffee</button>

            <h2> Edit Coffee Prices</h2>

            {products.map((product) => (
                <div key ={product.id} className = "cpffee-card">
                    <h3>{product.name}</h3>

                    <input 
                    type="number"
                    value={product.price}
                    onChange={(e) =>
                        editProduct(product.id, e.target.value)
                    }
                    />
                </div>
            ))}
        </form>
    );
}

export default Admin;