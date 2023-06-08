import { useContext } from 'react';
import productsData from '../assets/productsData';
import { CartContext } from '../store';

export default function Products() {
	const [state, dispatch] = useContext(CartContext);
	return (
		<div className="row row-cols-3 g-3">
			{productsData.map((product) => {
				return (
					<div className="col" key={product.id}>
						<div className="card">
							<img src={product.img} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">
									{product.title}
									<span className="float-end">
										<small>NT$ {product.price}</small>
									</span>
								</h5>
								<select
									name=""
									id=""
									className="form-select w-80"
									// 加入購物車數量調整功能未實作
									// onChange={(e) => {
									// 	e.preventDefault();
									// 	const quantity = parseInt(e.target.value);
									// 	dispatch({
									// 		type: 'CHANGE_SELECT_QUANTITY',
									// 		payload: {
									// 			...product,
									// 			quantity,
									// 		},
									// 	});
									// }}
								>
									{[...Array(20)].map((_, i) => {
										return (
											<option value={i + 1} key={i}>
												{i + 1}
											</option>
										);
									})}
									;
								</select>
								<button
									type="button"
									className="btn btn-outline-primary float-end"
									onClick={() => {
										dispatch({
											type: 'ADD_TO_CART',
											payload: {
												...product,
												quantity: 1,
											},
										});
									}}
								>
									加入購物車
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
