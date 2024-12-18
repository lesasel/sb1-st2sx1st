import { useState, useEffect } from 'react';

export function useTickets() {
  const [tickets, setTickets] = useState(0);

  useEffect(() => {
    // TODO: Реализовать получение билетов с сервера
    // Временная заглушка
    setTickets(localStorage.getItem('tickets') || 0);
  }, []);

  return { tickets, setTickets };
}