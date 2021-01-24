import { mount, ReactWrapper } from "enzyme";
import { act } from "react-dom/test-utils";
import { MemoryRouter, NavLink } from "react-router-dom";
import { Collapse, NavbarBrand } from "reactstrap/lib";
import { Peak, PeakPreview } from "navigation/peak";
import { Navigation } from "navigation";

let wrapper: ReactWrapper;
const toggleThemeMock = jest.fn();

beforeEach(() => {
  wrapper = mount(
    <MemoryRouter>
      <Navigation toggleTheme={toggleThemeMock} />
    </MemoryRouter>
  );
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

    const navItemsCherio = navItems.map((n) => n.render());
    expect(navItemsCherio.some((n) => n.is("[href='/stopwatch']"))).toBe(true);
    expect(navItemsCherio.some((n) => n.is("[href='/timer']"))).toBe(true);
    expect(navItemsCherio.some((n) => n.is("[href='/clock']"))).toBe(true);
  });
});

describe("peak", () => {
  it("peak and preview render without error", () => {
    expect(wrapper.find(Peak).length).toBe(1);
    expect(wrapper.find(PeakPreview).length).toBe(1);
  });

  it("peak is initially collapsed", () => {
    const peakCollapse = wrapper.find(Peak).find(Collapse);

    expect(peakCollapse.exists(".collapse")).toBe(true);
    expect(peakCollapse.exists(".show")).toBe(false);
    expect(peakCollapse.prop("aria-hidden")).toBe(true);
  });

  it("clicking peak preview expands peak", async () => {
    act(() => wrapper.find(PeakPreview).childAt(0).props().onClick());
    wrapper.update();

    expect(wrapper.find(Peak).find(Collapse).prop("isOpen")).toBe(true);
    expect(wrapper.find(Peak).find(Collapse).prop("aria-hidden")).toBe(false);
  });

  it("clicking peak preview while expanded collapses peak", async () => {
    act(() => wrapper.find(PeakPreview).childAt(0).props().onClick());
    wrapper.update();
    act(() => wrapper.find(PeakPreview).childAt(0).props().onClick());
    wrapper.update();

    expect(wrapper.find(Peak).find(Collapse).prop("isOpen")).toBe(false);
    expect(wrapper.find(Peak).find(Collapse).prop("aria-hidden")).toBe(true);
  });
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
