import { twMerge } from "tailwind-merge"

interface TitleProps {
  children?: React.ReactNode
  className?: string
}

export const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <h1
      className={
        `${className}
        text-[#e9ecea]
        font-extrabold
        leading-normal
        text-[32px]
        sm:max-lg:text-[45px]
        lg:max-[3000px]:text-[64px]
      `}>
      {children}
    </h1>
  )
}

