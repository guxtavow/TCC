import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import './Calendar.css'; // Importa o CSS do calendário

const Calendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      editable={false} // Desabilita a edição
      selectable={false} // Desabilita a seleção de dias
    />
  );
};

export default Calendar;
