import { useContext, useState, createContext, type ReactNode } from "react";
import { Euler, SkinnedMesh } from "three";
import { type Category } from "@mediapipe/tasks-vision";

interface AvatarContextType {
  headMesh?: SkinnedMesh;
  setHeadMesh: React.Dispatch<React.SetStateAction<SkinnedMesh | undefined>>;
  rotation?: Euler;
  setRotation: React.Dispatch<React.SetStateAction<Euler | undefined>>;
  blendShapes: Category[];
  setBlendShapes: React.Dispatch<React.SetStateAction<Category[]>>;
}

// Create Context
export let AvatarContext = createContext<AvatarContextType | null>(null);

// Context Provider
export let AvatarProvider = ({ children }: { children: ReactNode }) => {
  let [headMesh, setHeadMesh] = useState<SkinnedMesh>();
  let [rotation, setRotation] = useState<Euler>();
  let [blendShapes, setBlendShapes] = useState<Category[]>([]);

  return (
    <AvatarContext.Provider
      value={{
        headMesh,
        setHeadMesh,
        rotation,
        setRotation,
        blendShapes,
        setBlendShapes,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
};

// Custom Hook
export let useAvatar = () => {
  let ctx = useContext(AvatarContext);
  if (!ctx) throw new Error("useAvatar must be inside AvatarProvider");
  return ctx;
};
