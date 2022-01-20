import './NewProduct.css';

const NewProduct = () => {
	return (
		<div className="newProduct">
			<h1 className="newProductTitle">New Product</h1>
			<form className="newProductForm">
				<div className="newProductFormItem">
					<label>Image</label>
					<input type="file" name="image" id="image" />
				</div>
				<div className="newProductFormItem">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" id="name" placeholder="John" className="newProductInput" />
				</div>
				<div className="newProductFormItem">
					<label htmlFor="stock">Stock</label>
					<input type="text" name="stock" id="stock" placeholder="20" className="newProductInput" />
				</div>
				<div className="newProductFormItem">
					<label>Active</label>
					<select name="active" id="active" className="newProductInputSelect">
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
				</div>
				<button className="createProductButton">Create</button>
			</form>
		</div>
	);
};

export default NewProduct;
