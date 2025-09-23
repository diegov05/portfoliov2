interface BadgeProps {
  content: string
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({ content, className }) => {
  return (
    <div
      className={`
      w-max
      rounded-full
      flex
      flex-col
      justify-center
      items-center
      ${className}
      `}
    >
      <span
        className="
        uppercase
        font-medium
        font-mono
        text-sm
        sm:text-base
        lg:text-lg
      ">{content}
      </span>
    </div>
  )
}