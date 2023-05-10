import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow, Overlay } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    /* Реєструємо прослуховувача події*/
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    /* Видаляємо прослуховувача події*/
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  /* Закриваємо модалку по Esc */
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  /* Закриваємо модалку по backdrop */
  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>{children}</ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
