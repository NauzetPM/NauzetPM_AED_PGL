import React, { useState } from 'react';

type Props = {}
type Producto = {
    nombre: string,
    precio: number,
    cantidad: number
}

export default function Practica32(props: Props) {
    const [listaproductos, setlistaproductos] = useState<Array<Producto>>([]);
    const [filtro, setFiltro] = useState<string>('');

    function procesarformulario(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let formulario = e.currentTarget;
        const nombre = formulario.nombre.value ?? "";
        const precio = Number(formulario.precio.value ?? 0);
        const cantidad = Number(formulario.cantidad.value ?? 0);
        const producto: Producto = {
            nombre: nombre,
            precio: precio,
            cantidad: cantidad
        };
        setlistaproductos([...listaproductos, producto]);
    }

    function handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFiltro(event.target.value);
    }

    const filteredProductos = listaproductos.filter(producto =>
        producto.nombre.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <div>
            <h3>Info de Productos</h3>
            <form onSubmit={procesarformulario}>
                <label htmlFor="nombreid">Nombre</label>
                <input type="text" name="nombre" id="nombreid" />
                <br />
                <label htmlFor="precioid">Precio</label>
                <input type="text" name="precio" id="precioid" /><br />
                <label htmlFor="cantidadid">Cantidad</label>
                <input type="text" name="cantidad" id="cantidadid" /><br />
                <button type="submit">Agregar</button>
            </form>
            <label htmlFor="filtro">Filtrar por Nombre:</label>
            <input type="text" id="filtro" onChange={handleFilterChange} />
            <h4>Productos Filtrados por Nombre:</h4>
            <ul>
                {filteredProductos.map((producto, index) => (
                    <li key={index}>{producto.nombre}</li>
                ))}
            </ul>
            <textarea value={JSON.stringify(listaproductos, null, 2)} cols={100} rows={30} />
        </div>
    )
}
