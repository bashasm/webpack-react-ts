import React, { useEffect, useState } from "react";

export default function Dashboard() {
  async function fetchCards() {
    // const url = "http://localhost:4000/dashboard-cards";
    // const obj = await axios.get<IUserDashboardCard[]>(url);
    // const cards = obj.data;
    // setCards(cards);
  }

  useEffect(() => {
    fetchCards();
    return () => {
      //   cleanup
    };
  }, []);

  return <div className="dashboard">Dashboard</div>;
}
