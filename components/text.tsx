interface TextProps {
  children?: React.ReactNode
  content?: string
}

export const Text: React.FC<TextProps> = ({ content, children }) => {
  return (
    <p className="text-secondary">
      {content}
      {children}
    </p>
  )
}

