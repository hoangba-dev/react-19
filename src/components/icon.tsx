import { LucideProps } from 'lucide-react'
import { ElementType } from 'react'

type IconProps = LucideProps & {
  icon: ElementType
}

const Icon = ({ icon: IconComponent, ...props }: IconProps) => {
  return <IconComponent {...props} />
}

export default Icon
