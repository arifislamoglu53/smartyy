"use client";

import React, { createContext, useState, useEffect, useContext } from "react";

// Crear el contexto
export const CO2Context = createContext();

// Proveedor del contexto
export const CO2Provider = ({ children }) => {
  const [co2Value, setCO2Value] = useState(() => {
    const savedValue = localStorage.getItem("co2value");
    return savedValue ? JSON.parse(savedValue) : 0;
  });

  useEffect(() => {
    localStorage.setItem("co2value", JSON.stringify(co2Value));
  }, [co2Value]);

  const incrementCO2 = (value) => {
    setCO2Value((prevValue) => parseFloat((prevValue + value).toFixed(3)));
  };

  const resetCO2 = () => {
    setCO2Value(0);
  };

  return (
    <CO2Context.Provider value={{ co2Value, incrementCO2, resetCO2 }}>
      {children}
    </CO2Context.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useCO2Context = () => useContext(CO2Context);