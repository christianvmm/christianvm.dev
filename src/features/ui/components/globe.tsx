'use client'

import createGlobe, { Marker } from 'cobe'
import { useTheme } from 'next-themes'
import { useSpring } from 'react-spring'
import { useEffect, useRef } from 'react'

const location: Marker = {
   location: [20.659698, -103.349609],
   size: 0.1,
}

export function Globe() {
   const canvasRef = useRef<HTMLCanvasElement>(null)
   const pointerInteracting = useRef<number | null>(null)
   const pointerInteractionMovement = useRef(0)
   const { resolvedTheme } = useTheme()
   const [{ r }, api] = useSpring(() => ({
      r: 0,
      config: {
         mass: 1,
         tension: 280,
         friction: 40,
         precision: 0.001,
      },
   }))

   useEffect(() => {
      let width = 0
      let phi = 0

      const onResize = () => {
         if (canvasRef.current && (width = canvasRef.current.offsetWidth)) {
            window.addEventListener('resize', onResize)
         }
      }
      onResize()

      if (!canvasRef.current) return

      const globe = createGlobe(canvasRef.current, {
         devicePixelRatio: 2,
         width: width * 2,
         height: width * 2,
         phi: 0,
         theta: 0,
         dark: 1,
         opacity: 0.9,
         diffuse: 1.2,
         mapSamples: 12_000,
         mapBrightness: resolvedTheme === 'light' ? 3 : 2,
         baseColor: [0.8, 0.8, 0.8],
         markerColor: [1, 1, 1],
         glowColor: [0.5, 0.5, 0.5],
         markers: [location],
         onRender: (state) => {
            if (!pointerInteracting.current) {
               phi += 0.005
            }

            state.phi = phi + r.get()
            state.width = width * 2
            state.height = width * 2
         },
      })

      return () => {
         globe.destroy()
         window.removeEventListener('resize', onResize)
      }
   }, [r, resolvedTheme])

   return (
      <div className='w-full aspect-square p-2'>
         <div className='w-full  h-full flex justify-center items-center'>
            <div className='w-full aspect-square'>
               <canvas
                  ref={canvasRef}
                  onPointerDown={(e) => {
                     pointerInteracting.current =
                        e.clientX - pointerInteractionMovement.current
                     if (canvasRef.current)
                        canvasRef.current.style.cursor = 'grabbing'
                  }}
                  onPointerUp={() => {
                     pointerInteracting.current = null
                     if (canvasRef.current)
                        canvasRef.current.style.cursor = 'grab'
                  }}
                  onPointerOut={() => {
                     pointerInteracting.current = null
                     if (canvasRef.current)
                        canvasRef.current.style.cursor = 'grab'
                  }}
                  onMouseMove={(e) => {
                     if (pointerInteracting.current !== null) {
                        const delta = e.clientX - pointerInteracting.current
                        pointerInteractionMovement.current = delta
                        api.start({
                           r: delta / 200,
                        })
                     }
                  }}
                  onTouchMove={(e) => {
                     if (pointerInteracting.current !== null && e.touches[0]) {
                        const delta =
                           e.touches[0].clientX - pointerInteracting.current
                        pointerInteractionMovement.current = delta
                        api.start({
                           r: delta / 100,
                        })
                     }
                  }}
                  className='w-full  h-full cursor-auto'
                  style={{
                     contain: 'layout paint size',
                     cursor: 'auto',
                     userSelect: 'none',
                  }}
               />
            </div>
         </div>
      </div>
   )
}
