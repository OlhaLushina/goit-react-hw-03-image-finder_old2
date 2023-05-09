import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => (
  <List>
    {images.map(item => (
      <ImageGalleryItem key={item.id} image={item} />
    ))}
  </List>
);
