import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import ProvinciaCard, { ProvinciaCardProps } from './ProvinciaCard';

const ProvinciaCardList: React.FC = () => {
    const [provinciaList, setProvinciaList] = useState<ProvinciaCardProps[]>([]);
    useEffect(() => {
        async function rellenarProvinciaData() {
            try {
                const response = await axios.get("http://localhost:3000/capitales");
                const arr = response.data;
                const provincias = arr.map((item: { nombre: string; foto: string; }) => ({
                    name: item.nombre,
                    image: item.foto,
                  }));
                  console.log(provincias);
                  setProvinciaList(provincias);
            } catch (error) {
                console.error('Error data:', error);
            }

        }
        rellenarProvinciaData();
    }, []);
    return (
        <div className="ProvinciaListCard">
            {provinciaList.map((provincia: ProvinciaCardProps, index: number) => (
                <ProvinciaCard
                    key={index}
                    name={provincia.name}
                    image={provincia.image}
                />

            ))}
        </div>

    );
};

export default ProvinciaCardList;
