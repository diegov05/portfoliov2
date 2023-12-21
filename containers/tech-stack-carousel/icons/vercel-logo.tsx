interface VercelLogoProps {
  className?: string
}

export const VercelLogo: React.FC<VercelLogoProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className={className}>
      <rect width="40" height="40" rx="12" fill="#1B1F23" />
      <path d="M20.375 6L6 29H34.75L20.375 6Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}