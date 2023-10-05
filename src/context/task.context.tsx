import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { CardType, cards } from "../pages/data";

type TasksContextType = {
  tasks: CardType[] | [];
  setTasks: Dispatch<SetStateAction<CardType[] | []>>;
  isDragging: boolean;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  taskId: string;
  setTaskId: Dispatch<SetStateAction<string>>;
};

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
  setTasks: () => {},
  isDragging: false,
  setIsDragging: () => {},
  taskId: "",
  setTaskId: () => {},
});

export const TasksContextProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<CardType[] | []>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [taskId, setTaskId] = useState("");

  useEffect(() => {
    setTasks(cards);
  }, []);

  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, isDragging, setIsDragging, taskId, setTaskId }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => useContext(TasksContext);
