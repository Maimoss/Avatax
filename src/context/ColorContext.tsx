import { useContext, useState, createContext, type ReactNode } from "react";

export interface ColorContextType {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  colorPickerPopUp: boolean;
  setColorPickerPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create Context
export let ColorContext = createContext<ColorContextType | null>(null);

// Context Provider
export let ColorProvider = ({ children }: { children: ReactNode }) => {
  let [color, setColor] = useState<string>("#010101");
  let [colorPickerPopUp, setColorPickerPopUp] = useState<boolean>(false);

  return (
    <ColorContext.Provider
      value={{
        color,
        setColor,
        colorPickerPopUp,
        setColorPickerPopUp,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

// Custom Hook
export let useColor = () => {
  let ctx = useContext(ColorContext);
  if (!ctx) throw new Error("useColor must be inside ColorProvider");
  return ctx;
};
