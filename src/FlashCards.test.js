import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import { FlashCards } from "./FlashCards";

test("should render something!", () => {
  render(<FlashCards />);
  const thing = screen.getByText(/start building/);
  userEvent.click(thing);
  expect(thing).toBeTruthy();
});
