"use client";

import React, { useState } from "react";

export default function BotonConCallback({ onClick, initial = 0 }) {
	const [count, setCount] = useState(initial);

	function handleClick(e) {
		setCount((c) => c + 1);
		if (typeof onClick === "function") onClick(e);
	}

	return (
	// Propósito: Renderizar un botón que muestra el texto recibido y ejecuta una función onClick 
// al ser presionado, simulando la interacción sin lógica funcional real.

		<div className="flex items-center gap-3">
			<button
				onClick={handleClick}
				className="rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
				type="button"
			>
				Click
			</button>
			<span>Clicks: {count}</span>
		</div>
	);
}


