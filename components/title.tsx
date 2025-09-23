interface TitleProps {
  children?: React.ReactNode
  className?: string
}

export const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <h1
      className={
        `${className}
        title-gradient
        font-medium
        text-3xl
        sm:4xl
        lg:text-5xl
      `}>
      {children}
    </h1>
  )
}

