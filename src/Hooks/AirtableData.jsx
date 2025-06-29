/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";

const AirtableData = () => {
  
  const [projects, setProjects] = useState([]);

  const baseId = import.meta.env.VITE_AIRTABLE_BASEID;
  const tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME;
  const token = import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN;

 useEffect(() => {
  const fetchData = async () => {
    const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;

    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProjects(res.data.records);

      // ✅ Console log fetched data directly
      console.log("Fetched data:", res.data.records);
    } catch (error) {
      console.error("Error fetching from Airtable:", error);
    }
  };

  fetchData();
}, [baseId, tableName, token]);


  return (
    <div>
      <h1>Projects</h1>
      {projects.map((item) => (
        <div key={item.id}>
          <h2>{item.fields.Title}</h2>
          <p>{item.fields.Description}</p>
        </div>
      ))}
    </div>
  );
};

export default AirtableData;
