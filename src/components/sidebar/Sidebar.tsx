import React from "react";
import { sidebarData } from "./data";

const Sidebar = () => {
  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string
  ) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <aside>
      {sidebarData.map((item, index) => (
        <div
          key={index}
          className={item.className}
          onDragStart={(event) => onDragStart(event, item.text)}
          draggable
        >
          {item.text}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
