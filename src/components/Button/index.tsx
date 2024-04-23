import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  disabled,
  variant = 'primary'
}: Props) => {
  const handleClick = () => {
    if (type === 'submit' && onClick) {
      onClick()
    }
  }

  if (type === 'button') {
    return (
      <ButtonContainer
        variant={variant}
        type="button"
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </ButtonContainer>
    )
  }

  if (type === 'submit') {
    return (
      <ButtonContainer
        variant={variant}
        type="submit"
        title={title}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title} onClick={handleClick}>
      {children}
    </ButtonLink>
  )
}

export default Button
