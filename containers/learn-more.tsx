import { Badge } from "@/components/badge"
import { Title } from "@/components/title"

export const LearnMoreSection = () => {
  return (
    <section
      className="
      p-8
      flex
      flex-col
      gap-4
    ">
      <Badge content="About Me" />
      <Title className="w-[10ch]">
        Learn More About Me
      </Title>
    </section>
  )
}