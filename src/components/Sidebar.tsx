import React from "react";

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
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "start")}
        draggable
      >
        Start
      </div>
      <div
        className="dndnode"
        onDragStart={(event) =>
          onDragStart(event, "  Enter Student Information")
        }
        draggable
      >
        Enter Student Information
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, " If Grade greater than 70")}
        draggable
      >
        If Grade greater than 70
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "Yes")}
        draggable
      >
        Yes{" "}
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "       Category Class A")}
        draggable
      >
        Category Class A
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "  Student Info")}
        draggable
      >
        Student Info
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, " End")}
        draggable
      >
        End
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, " No")}
        draggable
      >
        No
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "       Category Class B")}
        draggable
      >
        Category Class B
      </div>
    </aside>
  );
};

export default Sidebar;
