export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(event) {
    event.preventDefault();
    this.wrapper.addEventListner('mousedown', this.onMove);

  }

  onMove(event) {

  }

  onEnd(event) {
    this.wrapper.removeEventListner('mousedown', this.onMove);
  }

  addSlideEvents() {
    this.wrapper.addEventListner('mousedown', this.onStart);
    this.wrapper.addEventListner('mouseup', this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}