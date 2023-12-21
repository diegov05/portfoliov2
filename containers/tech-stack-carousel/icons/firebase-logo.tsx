interface FirebaseLogoProps {
  className?: string
}

export const FirebaseLogo: React.FC<FirebaseLogoProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className={className}>
      <rect width="40" height="40" rx="12" fill="#1B1F23" />
      <path d="M12 26.5428L12.1391 26.3481L18.717 13.8667L18.7308 13.7346L15.8313 8.28794C15.5882 7.8317 14.9042 7.94707 14.8246 8.45782L12 26.5428Z" fill="#FFC24A" />
      <g filter="url(#filter0_i_341_133)">
        <path d="M12.082 26.394L12.1872 26.1889L18.6962 13.8383L15.8038 8.36954C15.5634 7.91808 14.9529 8.03319 14.874 8.53857L12.082 26.394Z" fill="black" />
      </g>
      <path d="M12.082 26.394L12.1872 26.1889L18.6962 13.8383L15.8038 8.36954C15.5634 7.91808 14.9529 8.03319 14.874 8.53857L12.082 26.394Z" fill="#FFA712" />
      <path d="M20.8447 17.8541L23.0038 15.643L20.8441 11.5202C20.6391 11.1299 20.0667 11.1287 19.8639 11.5202L18.71 13.7206V13.908L20.8447 17.8541H20.8447Z" fill="#F4BD62" />
      <g filter="url(#filter1_i_341_133)">
        <path d="M20.8063 17.7621L22.9053 15.6124L20.8063 11.6156C20.607 11.2362 20.1228 11.1964 19.9256 11.5769L18.7657 13.8116L18.731 13.9258L20.8063 17.7621V17.7621Z" fill="black" />
      </g>
      <path d="M20.8063 17.7621L22.9053 15.6124L20.8063 11.6156C20.607 11.2362 20.1228 11.1964 19.9256 11.5769L18.7657 13.8116L18.731 13.9258L20.8063 17.7621V17.7621Z" fill="#FFA50E" />
      <path d="M12 26.5427L12.063 26.4793L12.2921 26.3863L20.7091 18.0005L20.8158 17.7102L18.716 13.709L12 26.5427Z" fill="#F6820C" />
      <path d="M21.1144 30.7718L28.732 26.5234L26.5567 13.1261C26.4886 12.707 25.9744 12.5413 25.6744 12.8418L12 26.5427L19.574 30.7715C19.8094 30.9029 20.0745 30.972 20.3441 30.972C20.6137 30.9721 20.8789 30.9032 21.1144 30.7718Z" fill="#FDE068" />
      <path d="M28.6637 26.4879L26.5049 13.1923C26.4374 12.7763 26.0097 12.6042 25.712 12.9025L12.0845 26.5167L19.5753 30.7036C19.8089 30.834 20.072 30.9025 20.3396 30.9026C20.6072 30.9027 20.8703 30.8343 21.104 30.704L28.6638 26.4878L28.6637 26.4879Z" fill="#FCCA3F" />
      <path d="M21.1143 30.6467C20.8788 30.778 20.6136 30.8469 20.344 30.8468C20.0744 30.8468 19.8093 30.7778 19.5739 30.6463L12.0609 26.4783L12 26.5427L19.5739 30.7715C19.8093 30.903 20.0744 30.972 20.3441 30.9721C20.6137 30.9721 20.8788 30.9032 21.1143 30.7719L28.732 26.5235L28.7133 26.4087L21.1143 30.6467L21.1143 30.6467Z" fill="#EEAB37" />
      <defs>
        <filter id="filter0_i_341_133" x="12.082" y="8.0874" width="6.61426" height="18.3066" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="124.619" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_341_133" />
        </filter>
        <filter id="filter1_i_341_133" x="18.731" y="11.3105" width="4.17432" height="6.45166" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="7.12109" dy="-64.0898" />
          <feGaussianBlur stdDeviation="24.9238" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_341_133" />
        </filter>
      </defs>
    </svg>
  )
}