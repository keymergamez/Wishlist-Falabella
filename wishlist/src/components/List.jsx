//trini (con ange)
import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListContext } from '../context/ListContext';
import { Popup } from './Popup';

import trash from '../images/trash.png';

export function List({ list }) {
	const navigate = useNavigate();
	const { deleteList } = useContext(ListContext);
	const [popUpDelete, setPopUpDelete] = useState(false);

	const [alert, setAlert] = useState(false);

	const navigateListDetails = () => {
		navigate(`/Mis-Listas/${list.name}`, { state: { list } });
	};

	// const handleSetTimeOut = () => {
	// 	setPopUpDelete(true)
	// 	console.log("funciona")
	// }

	// handleSetTimeOut();

	return (
		<div className="rounded border border-slate-300 h-auto mt-4 p-4">
			<h1
				onClick={navigateListDetails}
				className="text-black font-bold text-[18px]"
			>
				{list.name} ({list.products.length})
			</h1>
			<div className="text-black flex justify-between items-center">
				<div className="flex ">
					{list.products.length === 0 && (
						<h3 className="pt-4 text-black text-[14px]">
							No hay productos en esta lista
						</h3>
					)}
					{list.products.map((product) => (
						<div
							key={product.productId}
							className="p-[5px] mt-4 ml-[3px] mr-[2px]"
						>
							<img src={product.images[0]} alt="" className="w-[70px] h-auto" />
						</div>
					))}
				</div>
				<img
					onClick={() => setPopUpDelete(true)}
					src={trash}
					alt="Eliminar"
					className="w-[20px] h-auto"
				/>
				<Popup
					trigger={popUpDelete}
					setTrigger={setPopUpDelete}
					title={'Eliminar lista'}
					desc={<p>Estás a punto de elimnar la lista</p>}
					btnName={'Aceptar'}
					id={list.docId}
					clickFunction={deleteList}
				/>
			</div>
		</div>
	);
}
