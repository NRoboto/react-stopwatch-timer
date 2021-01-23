import { mount, ReactWrapper } from "enzyme";
import { MemoryRouter, NavLink } from "react-router-dom";
import { NavbarBrand } from "reactstrap/lib";
import { Navigation } from "..";

let wrapper: ReactWrapper;
const toggleThemeMock = jest.fn();

beforeEach(() => {
    wrapper = mount(<MemoryRouter><Navigation toggleTheme={toggleThemeMock}/></MemoryRouter>)
});

afterEach(() => {
    wrapper.unmount();
});

it("renders without error", () => {
    expect(wrapper).not.toBeUndefined();
});

describe("navigation", () => {
    it("brand navigates to root", () => {
        expect(wrapper.find(NavbarBrand).every("[href='/']")).toBe(true);
    });

    it("links render and navigate to correct pages", () => {
        const navItems = wrapper.find(NavLink);
        expect(navItems.length).toBeGreaterThanOrEqual(3);

        expect(navItems.exists("[href='/stopwatch']")).toBe(true);
        expect(navItems.exists("[href='/timer']")).toBe(true);
        expect(navItems.exists("[href='/clock']")).toBe(true);
    });
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