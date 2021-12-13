import React, {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const LogContext = createContext([]);

export const LogContextProvidr = ({children}) => {
  const [logs, setLogs] = useState([]);

  const onCreate = ({title, body, date}) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };

    setLogs([log, ...logs]);
  };
  const onModify = modified => {
    setLogs(logs.map(log => (log.id === modified.id ? modified : log)));
  };
  const onRemove = id => {
    setLogs(logs.filter(log => log.id !== id));
  };

  return (
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </LogContext.Provider>
  );
};

export default LogContext;
