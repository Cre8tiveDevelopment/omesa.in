import React, { createContext, useContext, useState } from "react";
import axios from "axios";

// Create context
const AirtableContext = createContext();

// Export custom hook
export const useAirtable = () => useContext(AirtableContext);

// Helper function to fetch data
const fetchAirtableData = async (baseId, tableName, token) => {
  const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;

  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(`Fetched data from ${tableName}:`, res.data.records);
    return res.data.records;
  } catch (error) {
    console.error(`Error fetching from ${tableName}:`, error);
    return [];
  }
};

// Provider component
export const AirtableProvider = ({ children }) => {
  const [dataByTable, setDataByTable] = useState({});

  const baseId = import.meta.env.VITE_AIRTABLE_BASEID;
  const token = import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN;

  const getTableData = async (tableName) => {
    if (dataByTable[tableName]) return dataByTable[tableName]; // avoid refetching

    const records = await fetchAirtableData(baseId, tableName, token);
    setDataByTable((prev) => ({ ...prev, [tableName]: records }));
    return records;
  };

  return (
    <AirtableContext.Provider value={{ getTableData, dataByTable }}>
      {children}
    </AirtableContext.Provider>
  );
};
