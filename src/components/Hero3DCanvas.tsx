import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { playCyberClick } from '../utils/sound.ts';

// Pre-allocated math variables for zero GC in render loop
const _vec3 = new THREE.Vector3();

type VisualMode = 'core' | 'torus' | 'matrix';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState<VisualMode>('core');
  const [isInteracting, setIsInteracting] = useState(false);
  const activeModeRef = useRef<VisualMode>(activeMode);
  activeModeRef.current = activeMode;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // Studio Environment Reflections
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // Studio 3-point lighting
    const keyLight = new THREE.DirectionalLight(0x38bdf8, 3.5);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x06b6d4, 2.5);
    rimLight.position.set(-5, -3, -4);
    scene.add(rimLight);

    const fillLight = new THREE.HemisphereLight(0x38bdf8, 0x020617, 1.2);
    scene.add(fillLight);

    // Main 3D Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Quantum Core Model:
    // Core geometry: Dual Icosahedrons + Glowing Sphere + Orbital Rings
    const coreGroup = new THREE.Group();

    // Inner glowing energy sphere
    const sphereGeo = new THREE.SphereGeometry(1.2, 32, 32);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: 0x00f0ff,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const innerSphere = new THREE.Mesh(sphereGeo, sphereMat);
    coreGroup.add(innerSphere);

    // Outer crystalline faceted cage (Icosahedron)
    const icoGeo = new THREE.IcosahedronGeometry(2.0, 0);
    const icoMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      roughness: 0.15,
      metalness: 0.9,
      transmission: 0.6,
      thickness: 1.2,
      wireframe: false,
      transparent: true,
      opacity: 0.75,
    });
    const outerIco = new THREE.Mesh(icoGeo, icoMat);
    coreGroup.add(outerIco);

    // Wireframe cage highlight
    const wireGeo = new THREE.IcosahedronGeometry(2.04, 0);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x67e8f9,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireIco = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireIco);

    // Orbital Ring 1
    const ring1Geo = new THREE.TorusGeometry(2.7, 0.04, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    coreGroup.add(ring1);

    // Orbital Ring 2 (Cross tilt)
    const ring2Geo = new THREE.TorusGeometry(3.1, 0.035, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      roughness: 0.25,
      metalness: 0.9,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.5,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 5;
    coreGroup.add(ring2);

    // Orbiting Satellite Nodes
    const satelliteGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const satelliteMat = new THREE.MeshStandardMaterial({
      color: 0x67e8f9,
      emissive: 0x38bdf8,
      emissiveIntensity: 1.2,
      roughness: 0.1,
      metalness: 0.9,
    });
    const satellite1 = new THREE.Mesh(satelliteGeo, satelliteMat);
    satellite1.position.set(2.7, 0, 0);
    ring1.add(satellite1);

    const satellite2 = new THREE.Mesh(satelliteGeo, satelliteMat);
    satellite2.position.set(-3.1, 0, 0);
    ring2.add(satellite2);

    mainGroup.add(coreGroup);

    // 2. Torus Knot Alternate Mode
    const torusKnotGeo = new THREE.TorusKnotGeometry(1.6, 0.45, 128, 32, 2, 3);
    const torusKnotMat = new THREE.MeshPhysicalMaterial({
      color: 0x0284c7,
      emissive: 0x0369a1,
      emissiveIntensity: 0.4,
      roughness: 0.12,
      metalness: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const torusKnotMesh = new THREE.Mesh(torusKnotGeo, torusKnotMat);
    torusKnotMesh.visible = false;
    mainGroup.add(torusKnotMesh);

    // 3. Cyber Matrix Mode (Octahedron Lattice)
    const matrixGroup = new THREE.Group();
    const octGeo = new THREE.OctahedronGeometry(1.4, 0);
    const octMat = new THREE.MeshPhysicalMaterial({
      color: 0x06b6d4,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x0891b2,
      emissiveIntensity: 0.5,
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    matrixGroup.add(octMesh);

    const outerMatrixWire = new THREE.Mesh(
      new THREE.OctahedronGeometry(2.3, 1),
      new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      })
    );
    matrixGroup.add(outerMatrixWire);
    matrixGroup.visible = false;
    mainGroup.add(matrixGroup);

    // Star/Particle Constellation
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 14;
      positions[i + 1] = (Math.random() - 0.5) * 14;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.05,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Contact Floor Grid
    const gridHelper = new THREE.GridHelper(14, 20, 0x0891b2, 0x0f172a);
    gridHelper.position.y = -3.2;
    gridHelper.material.opacity = 0.25;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // Interaction state
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;

      if (isDragging) {
        const deltaX = e.clientX - previousPointerX;
        const deltaY = e.clientY - previousPointerY;
        targetRotY += deltaX * 0.01;
        targetRotX += deltaY * 0.01;
        previousPointerX = e.clientX;
        previousPointerY = e.clientY;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      previousPointerX = e.clientX;
      previousPointerY = e.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsInteracting(true);
        previousPointerX = e.touches[0].clientX;
        previousPointerY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - previousPointerX;
        const deltaY = e.touches[0].clientY - previousPointerY;
        targetRotY += deltaX * 0.012;
        targetRotX += deltaY * 0.012;
        previousPointerX = e.touches[0].clientX;
        previousPointerY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd);

    // Resize listener
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop with Clock
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Mode visibility management
      const currentMode = activeModeRef.current;
      coreGroup.visible = currentMode === 'core';
      torusKnotMesh.visible = currentMode === 'torus';
      matrixGroup.visible = currentMode === 'matrix';

      // Base rotation
      if (!isDragging) {
        targetRotY += delta * 0.35;
      }

      // Parallax damping
      const targetParallaxX = -mouseY * 0.35 + targetRotX;
      const targetParallaxY = mouseX * 0.45 + targetRotY;

      mainGroup.rotation.x = THREE.MathUtils.damp(mainGroup.rotation.x, targetParallaxX, 4, delta);
      mainGroup.rotation.y = THREE.MathUtils.damp(mainGroup.rotation.y, targetParallaxY, 4, delta);

      // Core specific animations
      if (currentMode === 'core') {
        innerSphere.scale.setScalar(1 + Math.sin(elapsedTime * 2.5) * 0.06);
        outerIco.rotation.z = elapsedTime * 0.2;
        outerIco.rotation.y = -elapsedTime * 0.15;
        wireIco.rotation.z = elapsedTime * 0.2;
        wireIco.rotation.y = -elapsedTime * 0.15;

        ring1.rotation.z = elapsedTime * 0.6;
        ring2.rotation.z = -elapsedTime * 0.45;
      } else if (currentMode === 'torus') {
        torusKnotMesh.rotation.x = elapsedTime * 0.4;
        torusKnotMesh.rotation.z = elapsedTime * 0.3;
      } else if (currentMode === 'matrix') {
        octMesh.rotation.y = elapsedTime * 0.5;
        octMesh.rotation.x = elapsedTime * 0.3;
        outerMatrixWire.rotation.y = -elapsedTime * 0.3;
        outerMatrixWire.rotation.z = elapsedTime * 0.2;
      }

      // Star particles slow orbit
      particles.rotation.y = elapsedTime * 0.05;
      particles.rotation.x = Math.sin(elapsedTime * 0.1) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Cleanup 3D resources
      sphereGeo.dispose();
      sphereMat.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      satelliteGeo.dispose();
      satelliteMat.dispose();
      torusKnotGeo.dispose();
      torusKnotMat.dispose();
      octGeo.dispose();
      octMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      gridHelper.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] lg:h-[580px] flex items-center justify-center select-none">
      {/* 3D Canvas Mounting Container */}
      <div
        ref={mountRef}
        className={`w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-700 ${
          isInteracting ? 'opacity-100' : 'opacity-95'
        }`}
        title="Drag to rotate 3D model"
      />

      {/* Cyber Glow Accent Aura behind 3D Object */}
      <div
        className="absolute pointer-events-none w-72 h-72 rounded-full bg-cyan-500/15 blur-3xl -z-10"
        aria-hidden="true"
      />

      {/* Sleek Bottom 3D Mode Controller */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 p-1 bg-slate-950/80 border border-cyan-500/30 rounded-full backdrop-blur-md shadow-lg shadow-cyan-950/40">
        <button
          onClick={() => {
            playCyberClick();
            setActiveMode('core');
          }}
          className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
            activeMode === 'core'
              ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/30'
              : 'text-slate-400 hover:text-cyan-300'
          }`}
        >
          Quantum Core
        </button>
        <button
          onClick={() => {
            playCyberClick();
            setActiveMode('torus');
          }}
          className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
            activeMode === 'torus'
              ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/30'
              : 'text-slate-400 hover:text-cyan-300'
          }`}
        >
          Cyber Knot
        </button>
        <button
          onClick={() => {
            playCyberClick();
            setActiveMode('matrix');
          }}
          className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
            activeMode === 'matrix'
              ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/30'
              : 'text-slate-400 hover:text-cyan-300'
          }`}
        >
          Holo Matrix
        </button>
      </div>

      {/* Interaction Hint */}
      <div className="absolute top-4 right-4 z-10 pointer-events-none text-[11px] font-mono tracking-wider text-cyan-400/70 bg-slate-950/60 px-2.5 py-1 rounded border border-cyan-500/20 backdrop-blur-sm hidden sm:block">
        3D · DRAG TO ROTATE
      </div>
    </div>
  );
};
