import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../actions";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);

  //Traer Paises
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  //Recargar Paises
  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  return (
    <div>
      <Link to="/activity">Crear Actividad </Link>
      <h1>The World</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Volver a Cargar Paises
      </button>
      <div></div>
    </div>
  );
}
