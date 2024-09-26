type ImageProps = {
  img: string;
  alt: string;
}

function Image({img, alt}: ImageProps) {
  return (
    <img width={200} src={img} alt={alt} />
  )
}

export default Image