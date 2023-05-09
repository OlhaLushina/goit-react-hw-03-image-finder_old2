export const Modal = ({ src, alt }) => (
  <div class="overlay">
    <div class="modal">
      <img src={src} alt={alt} />
    </div>
  </div>
);
