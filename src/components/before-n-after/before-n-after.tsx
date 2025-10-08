// import type React from "react"

import React, { useState, useRef, useCallback, useEffect, MouseEvent, TouchEvent } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

interface BeforeAfterComparisonProps {
    beforeImage: any
    afterImage?: any
    beforeLabel?: string
    afterLabel?: string
    className?: string
}

export default function BeforeAfterComparison({
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After",
    className = "",
}: BeforeAfterComparisonProps) {
    const [sliderPosition, setSliderPosition] = useState(50)
    const [isDragging, setIsDragging] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleMouseDown = useCallback((e: MouseEvent) => {
        sa_event(`click_dragging`);
        setIsDragging(true)
        e.preventDefault()
    }, [])

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!isDragging || !containerRef.current) return

            const rect = containerRef.current.getBoundingClientRect()
            const x = e.clientX - rect.left
            const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
            setSliderPosition(percentage)
        },
        [isDragging],
    )

    const handleMouseUp = useCallback(() => {
        setIsDragging(false)
    }, [])

    const handleTouchStart = useCallback((e: TouchEvent) => {
        sa_event(`click_dragging`);
        setIsDragging(true)
        e.preventDefault()
    }, [])

    const handleTouchMove = useCallback(
        (e: TouchEvent) => {
            if (!isDragging || !containerRef.current) return

            const rect = containerRef.current.getBoundingClientRect()
            const x = e.touches[0].clientX - rect.left
            const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
            setSliderPosition(percentage)
        },
        [isDragging],
    )

    const handleTouchEnd = useCallback(() => {
        setIsDragging(false)
    }, [])

    useEffect(() => {
        if (isDragging) {
            document.addEventListener("mousemove", handleMouseMove)
            document.addEventListener("mouseup", handleMouseUp)
            document.addEventListener("touchmove", handleTouchMove)
            document.addEventListener("touchend", handleTouchEnd)
        }

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)
            document.removeEventListener("touchmove", handleTouchMove)
            document.removeEventListener("touchend", handleTouchEnd)
        }
    }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

    return (
        <div className={`overflow-hidden ${className}`}>
            <div className="p-0">
                <div
                    ref={containerRef}
                    className="relative w-full overflow-hidden cursor-col-resize select-none"
                    style={{ touchAction: "none" }}
                >
                    {/* Before Image */}
                    <div className="inset-0">
                        <GatsbyImage
                            className="object-cover rounded-2xl w-full"
                            loading="eager"
                            image={beforeImage}
                            alt={'Hero image before'}
                        />
                        {afterImage && <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                            {beforeLabel}
                        </div>}
                    </div>

                    {/* After Image */}
                    {afterImage && <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <GatsbyImage
                            className="object-cover rounded-2xl w-full"
                            loading="eager"
                            image={afterImage}
                            alt={'Hero image after'}
                        />
                        <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                            {afterLabel}
                        </div>
                    </div>}

                    {/* Slider Line and Handle */}
                    {afterImage && <div
                        className="absolute top-0 bottom-0 w-1 bg-black shadow-lg z-10 pointer-events-none"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        {/* Slider Handle */}
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-black cursor-col-resize pointer-events-auto flex items-center justify-center hover:bg-gray-50 transition-colors"
                            onMouseDown={handleMouseDown}
                            onTouchStart={handleTouchStart}
                        >
                            <div className="flex space-x-0.5">
                                <div className="w-0.5 h-4 bg-black rounded-full"></div>
                                <div className="w-0.5 h-4 bg-black rounded-full"></div>
                            </div>
                        </div>
                    </div>}

                    {/* Invisible drag area for better UX */}
                    {afterImage && <div
                        className="absolute inset-0 cursor-col-resize"
                        onMouseDown={(e) => {
                            if (!containerRef.current) return
                            const rect = containerRef.current.getBoundingClientRect()
                            const x = e.clientX - rect.left
                            const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
                            setSliderPosition(percentage)
                            sa_event(`click_dragging`);
                            
                            setIsDragging(true)
                            e.preventDefault()
                        }}
                        onTouchStart={(e) => {
                            if (!containerRef.current) return
                            const rect = containerRef.current.getBoundingClientRect()
                            const x = e.touches[0].clientX - rect.left
                            const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
                            setSliderPosition(percentage)
                            sa_event(`click_dragging`);
                            setIsDragging(true)
                            e.preventDefault()
                        }}
                    />}
                </div>
            </div>
        </div>
    )
}
