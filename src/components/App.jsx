import { Component } from 'react';
import { getImages } from 'api';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};
export class App extends Component {
  state = {
    searchText: '',
    page: 1,
    images: [],
    error: false,
    status: Status.IDLE,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchText, page } = this.state;
    console.log('Update=' + searchText);
    if (prevState.searchText !== searchText || prevState.page !== page) {
      try {
        this.setState({ status: Status.PENDING });

        const fetchImages = await getImages(searchText, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...fetchImages],
          status: Status.RESOLVED,
        }));
      } catch (error) {
        console.log(error);
        this.setState({ error: true, status: Status.REJECTED });
      }
    }
  }

  /* Пошук зображень */
  handleSubmit = async ({ searchText }) => {
    searchText = searchText.toLowerCase().trim();
    this.setState({ searchText });
    if (searchText === '') {
      toast.error('This is an error!');
    }
  };

  /* Завантажити більше зображень */
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, error, status } = this.state;

    return (
      <>
        <GlobalStyle />
        <Searchbar onSubmit={this.handleSubmit} />
        <Toaster />
        {status === Status.PENDING && <Loader />}
        {status === Status.REJECTED && <div>Помилка: {error.message}</div>}
        {status === Status.RESOLVED && images && (
          <>
            <ImageGallery images={images} />
            <Button onClick={this.loadMore}>Load more</Button>
          </>
        )}
      </>
    );
  }
}
