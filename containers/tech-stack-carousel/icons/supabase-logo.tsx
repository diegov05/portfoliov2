interface SupabaseLogoProps {
  className?: string
}

export const SupabaseLogo: React.FC<SupabaseLogoProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className={className}>
      <rect width="40" height="40" rx="12" fill="#1B1F23" />
      <path d="M22.0856 31.6177C21.498 32.3576 20.3066 31.9522 20.2925 31.0074L20.0854 17.1885H29.3773C31.0603 17.1885 31.9989 19.1324 30.9524 20.4504L22.0856 31.6177Z" fill="url(#paint0_linear_116_198)" />
      <path d="M22.0856 31.6177C21.498 32.3576 20.3066 31.9522 20.2925 31.0074L20.0854 17.1885H29.3773C31.0603 17.1885 31.9989 19.1324 30.9524 20.4504L22.0856 31.6177Z" fill="url(#paint1_linear_116_198)" fill-opacity="0.2" />
      <path d="M18.3068 9.38217C18.8943 8.64214 20.0857 9.04762 20.0999 9.99244L20.1906 23.8113H11.0151C9.332 23.8113 8.39333 21.8675 9.4399 20.5494L18.3068 9.38217Z" fill="#3ECF8E" />
      <defs>
        <linearGradient id="paint0_linear_116_198" x1="20.0855" y1="20.2525" x2="28.3437" y2="23.716" gradientUnits="userSpaceOnUse">
          <stop stop-color="#249361" />
          <stop offset="1" stop-color="#3ECF8E" />
        </linearGradient>
        <linearGradient id="paint1_linear_116_198" x1="16.4242" y1="15.2395" x2="20.1904" y2="22.3292" gradientUnits="userSpaceOnUse">
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}