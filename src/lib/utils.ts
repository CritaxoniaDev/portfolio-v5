import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add this helper for dynamic animations
export function createAnimationStyle(colors: string[], speed: number = 3) {
  return {
    background: `linear-gradient(-45deg, ${colors.join(', ')})`,
    backgroundSize: '400% 400%',
    animation: `aurora ${speed}s ease infinite`,
  }
}
