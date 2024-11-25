import { useEffect, useRef } from "react";
import Particle from "./Particle";

export const Background = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let canvas: HTMLCanvasElement | null;
    let context: CanvasRenderingContext2D | undefined | null;

    useEffect(() => {
        canvas = canvasRef.current;
        context = canvas?.getContext("2d");

        window.addEventListener('resize', resizeReset);
        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseout', mouseOut);

        return (() => {
            window.removeEventListener('resize', resizeReset);
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseout', mouseOut);
        });
    }, [])

    let w: number, h: number, particles: any[] = [];

    const particleDistance = 50;
    const mouse = {
        x: undefined,
        y: undefined,
        radius: 100
    }

    const resizeReset = () => {
        if (canvas) {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;

            particles = [];

            for (let y = (((h - particleDistance) % particleDistance) + particleDistance) / 2; y < h; y += particleDistance) {
                for (let x = (((w - particleDistance) % particleDistance) + particleDistance) / 2; x < w; x += particleDistance) {
                    particles.push(new Particle(x, y));
                }
            }
        }
    }


    const animationLoop = () => {
        if (context) {
            context.clearRect(0, 0, w, h);
            drawScene();
            requestAnimationFrame(animationLoop);
        }
    }

    const drawScene = () => {
        for (let i = 0; i < particles.length; i++) {
            particles[i].update(mouse);
            particles[i].draw(context);
        }

        drawLine();
    }

    const drawLine = () => {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                let dx = particles[a].x - particles[b].x;
                let dy = particles[a].y - particles[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (context && distance < particleDistance * 1.5) {
                    const opacity = .75 - (distance / (particleDistance * 1.5));
                    context.strokeStyle = `rgba(255,107,107, ${opacity})`;
                    context.lineWidth = 2;
                    context.beginPath();
                    context.moveTo(particles[a].x, particles[a].y);
                    context.lineTo(particles[b].x, particles[b].y);
                    context.stroke();
                }
            }
        }
    }

    const mouseMove = (e: any) => {
        mouse.x = e.x;
        mouse.y = e.y;
    }


    // TODO: Figure out how to reset grid when leaving page
    const mouseOut = () => {
        mouse.x = undefined;
        mouse.y = undefined;
    }

    const init = () => {
        resizeReset();
        animationLoop();
    }

    window.onload = init;
    return (
        <canvas ref={canvasRef} className="fixed left-0 top-0 w-full h-full bg-background" />
    )
}