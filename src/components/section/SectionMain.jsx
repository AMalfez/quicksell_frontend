import React, { useState, useEffect } from "react";
import "./Section.css";
import ToDoSection from "./ToDoSection";
import UserSection from "./UserSections";
import PrioritySection from "./PrioritySection";
import {
  getDataByPriority,
  getDataByStatus,
  getDataByUser,
} from "../../actions/actions";

function SectionMain({ group, order }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("ran");
    getData();
  }, [group, order]);
  const getData = async () => {
    try {
      setLoading(true);
      let data;
      if (group === "status") {
        data = await getDataByStatus();
      } else if (group === "user") {
        data = await getDataByUser();
      } else {
        data = await getDataByPriority();
      }
      setData(data);
      console.log(data);
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  };
  if (loading) {
    return (<div className="sections">Loading...</div>);
  }
  if (group === "status") {
    return (
      <div className="sections">
        {Object.entries(data).map((entry) => (
          <ToDoSection
            key={entry[0]}
            type={entry[0]}
            title_count={entry[1].length}
            data={entry[1]}
          />
        ))}
      </div>
    );
  }
  if (group === "user") {
    return (
      <div className="sections">
        {data.map((d) => (
          <UserSection
            title_count={d.tickets.length}
            user={d.user}
            data={d.tickets}
          />
        ))}
      </div>
    );
  }
  if (group === "prioirity") {
    return (
      <div className="sections">
        {Object.entries(data).map((entry) => (
          <PrioritySection
            type={entry[0]}
            key={entry[0]}
            title_count={entry[1].length}
            data={entry[1]}
          />
        ))}
      </div>
    );
  }
}

export default SectionMain;
