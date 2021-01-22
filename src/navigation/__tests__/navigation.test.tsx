import { shallow, ShallowWrapper } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Navigation } from "..";

let wrapper: ShallowWrapper;
const toggleThemeMock = jest.fn();

beforeEach(() => {
    wrapper = shallow(<MemoryRouter><Navigation toggleTheme={toggleThemeMock}/></MemoryRouter>)
});

it("renders without error", () => {
    expect(wrapper).not.toBeUndefined();
});

describe("navigation", () => {
    it.todo("brand navigates to root");
    it.todo("links render and navigate to correct pages");
});

describe("peak", () => {
    it.todo("clicking peak preview expands peak");
    it.todo("clicking peak preview while expanded collapses peak");
});

describe("collapse", () => {
    it.todo("navbar collapses on small screen width");
    it.todo("clicking collapse button expands navbar");
    it.todo("clicking collapse button while expanded collapses navbar");
    it.todo("links render in collapsed navbar");
});

describe("theme", () => {
    it.todo("clicking theme button calls toggle theme");
});