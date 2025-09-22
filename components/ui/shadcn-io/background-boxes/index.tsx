'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export interface BoxesProps {
  className?: string
}

export const Boxes = ({ className, ...rest }: BoxesProps) => {
  const rows = new Array(150).fill(1)
  const cols = new Array(100).fill(1)

  // Using direct color values instead of CSS variables
  const colors = [
    'rgb(125 211 252)', // sky-300
    'rgb(249 168 212)', // pink-300
    'rgb(134 239 172)', // green-300
    'rgb(253 224 71)', // yellow-300
    'rgb(252 165 165)', // red-300
    'rgb(216 180 254)', // purple-300
    'rgb(147 197 253)', // blue-300
    'rgb(165 180 252)', // indigo-300
    'rgb(196 181 253)', // violet-300
  ]

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        '-top-1/4 -translate-x-1/2 -translate-y-1/2 absolute left-1/4 z-0 flex h-full w-full p-4',
        className,
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row${i}`}
          className='relative h-8 w-16 border-slate-700 border-l'
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col${j}`}
              className='relative h-8 w-16 border-slate-700 border-t border-r'
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className='-top-[14px] -left-[22px] pointer-events-none absolute h-6 w-10 stroke-[1px] text-slate-700'
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}
