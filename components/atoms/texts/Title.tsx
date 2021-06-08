import { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode
  className?: string
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  otherProps?: any
}

const Title: FC<IProps> = ({
  children, type, className, ...otherProps
}: IProps) => {
  switch (type) {
    case 'h2':
      return <h2 className={className} {...otherProps}>{children}</h2>
    case 'h3':
      return <h3 className={className} {...otherProps}>{children}</h3>
    case 'h4':
      return <h4 className={className} {...otherProps}>{children}</h4>
    case 'h5':
      return <h5 className={className} {...otherProps}>{children}</h5>
    case 'h6':
      return <h6 className={className} {...otherProps}>{children}</h6>
    default:
      return <h1 className={className} {...otherProps}>{children}</h1>
  }
}

Title.defaultProps = {
  type: 'h1',
  children: '',
  className: '',
  otherProps: {},
}

export default Title;
