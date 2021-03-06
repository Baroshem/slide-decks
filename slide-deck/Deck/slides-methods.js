export function nextSlide() {
  this.setState(state => ({
    slideIndex: state.slideIndex + 1,
    animation: { direction: 'next', type: this.slides.find(({ key }) => key === state.slideIndex).animation.type },
  }));
}

export function prevSlide() {
  this.setState(state => ({
    slideIndex: state.slideIndex - 1,
    animation: {
      direction: 'prev',
      type: this.slides.find(({ key }) => key === state.slideIndex - 1).animation.type,
    },
  }));
}

export function handleArrowPress({ keyCode }) {
  const { slideIndex } = this.state;
  if (keyCode === 37 && slideIndex !== 0) {
    this.prevSlide();
  } else if (keyCode === 39 && slideIndex !== this.slidesCount - 1) {
    this.nextSlide();
  }
};
