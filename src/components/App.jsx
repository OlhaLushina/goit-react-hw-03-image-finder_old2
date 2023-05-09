import { Component } from 'react';
import { getImages } from 'api';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    error: false,
    loading: false,
  };

  /* Пошук зображень */
  handleSubmit = async searchText => {
    console.log(searchText);
    try {
      this.setState({ loading: true });
      const fetchImages = await getImages(searchText, 1);
      this.setState({ images: fetchImages });
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { images, error, loading } = this.state;
    return (
      <>
        <GlobalStyle />
        <Searchbar onSubmit={this.handleSubmit} />
        {loading ? (
          <div>Завантаження...</div>
        ) : (
          <>
            <ImageGallery images={images} />
            <Button>Load more</Button>
          </>
        )}
        {error && <div>Помилка!</div>}
      </>
    );
  }
}
