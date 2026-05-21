"use client";

import { Float, MeshDistortMaterial, RoundedBox } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, type RefObject } from "react";
import type { Group, Mesh } from "three";
import * as THREE from "three";

function TerminalWindow({
  position,
  scale = 1,
  color = "#3b82f6",
}: {
  position: [number, number, number];
  scale?: number;
  color?: string;
}) {
  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <group position={position} scale={scale}>
        <RoundedBox args={[2.2, 1.4, 0.08]} radius={0.04} smoothness={4}>
          <meshStandardMaterial
            color="#0f1729"
            metalness={0.6}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.15}
          />
        </RoundedBox>
        <mesh position={[0, 0.55, 0.05]}>
          <boxGeometry args={[2.1, 0.12, 0.02]} />
          <meshStandardMaterial color="#1a2744" emissive={color} emissiveIntensity={0.3} />
        </mesh>
        {[-0.5, 0, 0.5].map((x, i) => (
          <mesh key={i} position={[x, 0.55, 0.07]}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshStandardMaterial
              color={i === 0 ? "#ef4444" : i === 1 ? "#eab308" : "#22c55e"}
              emissive={i === 0 ? "#ef4444" : i === 1 ? "#eab308" : "#22c55e"}
              emissiveIntensity={0.8}
            />
          </mesh>
        ))}
        {[0.15, -0.05, -0.25, -0.45].map((y, i) => (
          <mesh key={`line-${i}`} position={[-0.3 + i * 0.05, y, 0.06]}>
            <boxGeometry args={[1.2 - i * 0.15, 0.06, 0.01]} />
            <meshStandardMaterial
              color="#60a5fa"
              emissive="#3b82f6"
              emissiveIntensity={0.4}
              transparent
              opacity={0.85 - i * 0.1}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function CodeBlock({ position }: { position: [number, number, number] }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.35, 0.35, 0.35]} />
      <meshStandardMaterial
        color="#d4a853"
        emissive="#d4a853"
        emissiveIntensity={0.35}
        metalness={0.8}
        roughness={0.15}
      />
    </mesh>
  );
}

function NeuralNetwork() {
  const nodes = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        pos: [
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 2.5,
          (Math.random() - 0.5) * 1.5 - 1,
        ] as [number, number, number],
        id: i,
      })),
    [],
  );

  const lines = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.65) continue;
        positions.push(...nodes[i].pos, ...nodes[j].pos);
      }
    }
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, [nodes]);

  return (
    <group position={[0, -0.5, -2]}>
      {nodes.map((n) => (
        <Float key={n.id} speed={2} floatIntensity={0.2}>
          <mesh position={n.pos}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color="#3b82f6"
              emissive="#60a5fa"
              emissiveIntensity={0.9}
            />
          </mesh>
        </Float>
      ))}
      <lineSegments geometry={lines}>
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.35} />
      </lineSegments>
    </group>
  );
}

function CircuitBoard() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.8, 0]}>
      <planeGeometry args={[8, 8, 32, 32]} />
      <MeshDistortMaterial
        color="#141f35"
        emissive="#1e3a5f"
        emissiveIntensity={0.2}
        metalness={0.9}
        roughness={0.3}
        distort={0.15}
        speed={1.5}
        wireframe
      />
    </mesh>
  );
}

function SceneContent({
  mouseRef,
}: {
  mouseRef: RefObject<{ x: number; y: number }>;
}) {
  const group = useRef<Group>(null);

  useFrame(() => {
    const mouse = mouseRef.current ?? { x: 0, y: 0 };
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        mouse.x * 0.35,
        0.05,
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        mouse.y * 0.15,
        0.05,
      );
    }
  });

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#60a5fa" />
      <pointLight position={[-3, 2, 2]} intensity={0.8} color="#d4a853" />
      <pointLight position={[3, -1, 1]} intensity={0.5} color="#3b82f6" />

      <group ref={group}>
        <TerminalWindow position={[-1.8, 0.6, 0]} scale={0.9} />
        <TerminalWindow position={[1.6, 0.2, -0.5]} scale={0.75} color="#d4a853" />
        <TerminalWindow position={[0.2, -0.4, 0.8]} scale={0.65} />

        <CodeBlock position={[-2.2, -0.8, 0.5]} />
        <CodeBlock position={[2, 0.9, 0.2]} />
        <CodeBlock position={[0.8, 1.2, -0.3]} />

        <NeuralNetwork />
        <CircuitBoard />
      </group>
    </>
  );
}

export function CodeWorkspaceScene() {
  const mouseRef = useRef({ x: 0, y: 0 });

  return (
    <div
      className="h-full w-full min-h-[320px] lg:min-h-[480px]"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseRef.current = {
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 2 * 0.5,
          y: -((e.clientY - rect.top) / rect.height - 0.5) * 2 * 0.3,
        };
      }}
    >
      <Canvas
        camera={{ position: [0, 0.5, 5.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <SceneContent mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
}
