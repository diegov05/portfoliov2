interface SupabaseLogoProps {
  className?: string
}

export const SupabaseLogo: React.FC<SupabaseLogoProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none" className={className}>
      <g opacity="0.6">
        <path d="M17.1757 30.0017C16.4093 30.9668 14.8554 30.438 14.8369 29.2057L14.5669 11.181H26.6866C28.8818 11.181 30.1062 13.7165 28.7411 15.4358L17.1757 30.0017Z" fill="url(#paint0_linear_34_43)" />
        <path d="M17.1757 30.0017C16.4093 30.9668 14.8554 30.438 14.8369 29.2057L14.5669 11.181H26.6866C28.8818 11.181 30.1062 13.7165 28.7411 15.4358L17.1757 30.0017Z" fill="url(#paint1_linear_34_43)" fillOpacity="0.2" />
        <path d="M12.2457 0.998353C13.0121 0.0331091 14.566 0.561993 14.5845 1.79436L14.7028 19.819H2.73477C0.539489 19.819 -0.684856 17.2835 0.680231 15.5642L12.2457 0.998353Z" fill="#000000" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_34_43" x1="14.5669" y1="15.1775" x2="25.3385" y2="19.6951" gradientUnits="userSpaceOnUse">
          <stop stopColor="#000000" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient id="paint1_linear_34_43" x1="9.79133" y1="8.63895" x2="14.7037" y2="17.8863" gradientUnits="userSpaceOnUse">
          <stop />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}