import { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode
  className?: string
  type?: 'p'
  otherProps?: any
}

const Paragraph: FC<IProps> = ({
  children, type, className, ...otherProps
}: IProps) => <p className={className} {...otherProps}>{children}</p>

Paragraph.defaultProps = {
  type: 'p',
  children: '',
  className: '',
  otherProps: {},
}

export default Paragraph;
