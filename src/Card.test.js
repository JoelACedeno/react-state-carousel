import { render } from "@testing-library/react";
import Card from "./Card.js";

// smoke test for Card
it("renders without crashing", function () {
    render(<Card
        caption="caption"
        src="imagesource.com"
        currNum="1"
        totalNum="1"
    />);
});

// snapshot test for Card
it("matches snapshot", function () {
    const { asFragment } = render(<Card
        caption="caption"
        src="imagesource.com"
        currNum="1"
        totalNum="1"
    />);
    expect(asFragment()).toMatchSnapshot();
});