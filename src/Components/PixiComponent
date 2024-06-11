import React, { useEffect, useRef } from 'react';
import { Application, MeshPlane, Assets } from 'pixi.js';

const PixiComponent = () => {
    const pixiContainerRef = useRef(null);

    useEffect(() => {
        // Create a new PixiJS application
        const app = new Application({
            backgroundColor: 0x1099bb,
            resizeTo: window,
        });

        // Append the application canvas to the ref container
        pixiContainerRef.current.appendChild(app.view);

        const setup = async () => {
            // Load the grass texture
            const texture = await Assets.load('https://pixijs.com/assets/bg_grass.jpg');

            // Create a simple grass plane and add it to the stage
            const plane = new MeshPlane(texture, 10, 10);

            plane.x = 100;
            plane.y = 100;

            app.stage.addChild(plane);

            // Get the buffer for vertex positions.
            const { buffer } = plane.geometry.getAttribute('aPosition');

            // Listen for animate update
            let timer = 0;

            app.ticker.add(() => {
                // Randomize the vertice positions a bit to create movement.
                for (let i = 0; i < buffer.data.length; i++) {
                    buffer.data[i] += Math.sin(timer / 10 + i) * 0.5;
                }
                buffer.update();
                timer++;
            });
        };

        setup();

        // Cleanup function to run when the component is unmounted
        return () => {
            app.destroy(true, true);
        };
    }, []);

    return <div ref={pixiContainerRef} style={{ width: '100%', height: '100%' }} />;
};

export default PixiComponent;
