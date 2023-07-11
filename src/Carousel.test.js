import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

// smoke test for Carousel
it("renders without crashing", function () {
  render(<Carousel
    photos={TEST_IMAGES}
    title="images for testing"
  />);
});

// snapshot test for Carousel
it("matches snapshot", function () {
  const { asFragment } = render(<Carousel
    photos={TEST_IMAGES}
    title="images for testing"
  />);
  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  // move backward in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
});

it("doesn't show left arrow on first image", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  //expect left arrow to not show
  expect(container.querySelector(".bi-arrow-left-circle")).not.toBeInTheDocument();
});

it("doesn't show right arrow on last image", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // expect the first image to show
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  // move forward in the carousel
  fireEvent.click(rightArrow);

  // expect the last image to show
  expect(
    container.querySelector('img[alt="testing image 3"]')
  ).toBeInTheDocument();

  //expect right arrow to not show
  expect(container.querySelector(".bi-arrow-right-circle")).not.toBeInTheDocument();
})