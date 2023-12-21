interface BadgeProps {
  content: string
}

export const Badge: React.FC<BadgeProps> = ({ content }) => {
  return (
    <div
      className="
      w-max
      py-1
      px-8 
      badge-gradient
      border
      border-[#404A47]
      rounded-full
      flex
      flex-col
      justify-center
      items-center
    ">
      <span
        className="
        badge-text 
        text-[11px]
        sm:max-lg:text-[16px]
        lg:max-[3000px]:text-[23px]
      ">{content}
      </span>
    </div>
  )
}