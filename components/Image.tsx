import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => (
  <NextImage src={`/ycmurruru${src}`} {...rest} />
)

export default Image