import { useGLTF } from "@react-three/drei";
import { useFrame, useGraph } from "@react-three/fiber";
import { useEffect } from "react";
import type { SkinnedMesh } from "three";
import { useAvatar } from "../context/AvatarContext";

const Avatar = ({ url, currentPos }: { url: string; currentPos: number }) => {
  let { headMesh, setHeadMesh, rotation, blendShapes } = useAvatar();

  let avatar = useGLTF(`${url}?morphTargets=ARKit&textureAtlas=1024`);
  let { nodes } = useGraph(avatar.scene);

  useEffect(() => {
    headMesh = nodes.Wolf3D_Avatar as SkinnedMesh;
    setHeadMesh(headMesh);
  }, [nodes]);

  useFrame((_) => {
    if (!rotation) return;
    // For Facial Movement
    if (headMesh !== null) {
      blendShapes.forEach((blendshape) => {
        if (!headMesh?.morphTargetDictionary || !headMesh.morphTargetInfluences)
          return;

        let index = headMesh.morphTargetDictionary[blendshape.categoryName];
        if (index > 0) {
          headMesh.morphTargetInfluences[index] = blendshape.score;
        }
      });
    }

    // For Rotating Head
    nodes.Head.rotation.set(rotation.x / 3, rotation.y / 3, rotation.z / 3);
    nodes.Neck.rotation.set(rotation.x / 3, rotation.y / 3, rotation.z / 3);
    nodes.Spine1.rotation.set(rotation.x / 3, rotation.y / 3, rotation.z / 3);
  });

  return <primitive object={avatar.scene} position={[0, currentPos, 3.8]} />;
};

export default Avatar;
