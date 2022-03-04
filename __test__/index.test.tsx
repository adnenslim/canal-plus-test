import { render, screen, waitFor } from "@testing-library/react";
import Home from "@/pages/index";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { useRouter } from "next/router";
import '@testing-library/jest-dom/extend-expect'

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

const mockRouter = {
  push: jest.fn(),
};
(useRouter as jest.Mock).mockReturnValue(mockRouter);

describe("Home page", () => {
  it("renders a heading", () => {
    render(<Home search={"home"} />);

    const heading = screen.getByRole("heading", {
      name: /Results for : " home "/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders a empty search", () => {
    render(<Home search={""} />);

    const heading = screen.getByRole("heading", {
      name: /Try/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders a input", () => {
    render(<Home search={"home"} />);

    const input = screen.getByPlaceholderText("Search");

    expect(input).toBeInTheDocument();
  });

  it("renders a Button Search", () => {
    render(<Home search={"home"} />);

    const button = screen.getByRole("button", { name: "Search" });

    expect(button).toBeInTheDocument();
  });

  it("renders a heading with new search str", async () => {
    

    render(<Home search={""} />);
    const input = screen.getByPlaceholderText("Search");
    userEvent.type(input, "test");
    const button = screen.getByRole("button", { name: "Search" });
    userEvent.click(button);

    const heading = screen.getByRole("heading", {
      name: /Results for : " test "/i,
    });
    
    expect(heading).toBeInTheDocument() 
  });
});
