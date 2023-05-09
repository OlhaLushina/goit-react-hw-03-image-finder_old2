import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { id, webformatURL, largeImageURL },
}) => (
  <Item>
    <Image src={webformatURL} alt="фото {id}" />
  </Item>
);
