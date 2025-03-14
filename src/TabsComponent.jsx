import React, { useState } from "react";

const TabsComponent = () => {
  const tabs = [
    { id: 1, tabName: "Home", content: "This is the page home." },
    { id: 2, tabName: "Download", content: "This is the page download." },
    { id: 3, tabName: "Products", content: "This is the page products." },
    { id: 4, tabName: "About", content: "This is the page about." },
  ];
  const saveTabActive = () => {
    const saveTab = localStorage.getItem("activeTab");
    return saveTab ? parseInt(saveTab) : 1;
  };
  const [isActive, setIsActive] = useState(saveTabActive());

  const changeHandler = (id) => {
    setIsActive(id);
    localStorage.setItem("activeTab", id);
  };
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    maxWidth: "1200px",
    margin: "20px auto",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",

  };
  const h1ElementStyle = {
    color: "#3F4064",
  };

  const ulElementStyle = {
    display: "flex",
    listStyleType: "none",
    padding: "0",
    margin: "0",
  };

  const liElementStyle = (isActive) => ({
    backgroundColor: isActive ? "#EF4056" : "#FFF",
    padding: "10px 20px",
    color: isActive ? "#FFF" : "#3F4064",
    cursor: "pointer",
    marginRight: "5px",
    border:"2px solid #EF4056",
    borderBottom:"none",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    transition: "background-color 0.3s ease",
  });

  const contentElementStyle = {
    padding: "15px",
    height: "calc(100vh - 235px)",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    borderTopRightRadius: "10px",
    backgroundColor: "#EF4056",
    color: "#FFF",
    border:"2px solid #EF4056"
  };

  return (
    <div style={containerStyle}>
      <h1 style={h1ElementStyle}>
        Tabs Component with React
      </h1>
      <ul style={ulElementStyle}>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            style={liElementStyle(tab.id === isActive)}
            onClick={() => changeHandler(tab.id)}
          >
            {tab.tabName}
          </li>
        ))}
      </ul>
      <div style={contentElementStyle}>
        <h2>BotoStart Bootcamp</h2>
        <h2>{tabs.find((tab) => tab.id === isActive).tabName}</h2>
        <p>{tabs.find((tab) => tab.id === isActive).content}</p>
      </div>
    </div>
  );
};

export default TabsComponent;
