import { mount, ReactWrapper } from "enzyme";
import { act } from "react-dom/test-utils";
import { MemoryRouter, NavLink } from "react-router-dom";
import { Collapse, NavbarBrand, NavbarToggler } from "reactstrap/lib";
import { Peak, PeakPreview } from "navigation/peak";
import { Navigation, ThemeToggler } from "navigation";

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
  it("one peak and one peak preview render without error", () => {
    expect(wrapper.find(Peak).length).toBe(1);
    expect(wrapper.find(PeakPreview).length).toBe(1);
  });

  it("peak is initially collapsed", () => {
    const peakCollapse = wrapper.find(Peak).find(Collapse);

    expect(peakCollapse.prop("isOpen")).toBe(false);
    expect(peakCollapse.prop("aria-hidden")).toBe(true);
  });

  it("clicking peak preview expands peak", async () => {
    act(() => wrapper.find(PeakPreview).childAt(0).props().onClick());
    wrapper.update();

    const peakCollapse = wrapper.find(Peak).find(Collapse);
    expect(peakCollapse.prop("isOpen")).toBe(true);
    expect(peakCollapse.prop("aria-hidden")).toBe(false);
  });

  it("clicking peak preview while expanded collapses peak", async () => {
    // NOTE: Can't save element in variable (probably due to element being replaced on update)
    act(() => wrapper.find(PeakPreview).childAt(0).props().onClick());
    wrapper.update();
    act(() => wrapper.find(PeakPreview).childAt(0).props().onClick());
    wrapper.update();

    const peakCollapse = wrapper.find(Peak).find(Collapse);
    expect(peakCollapse.prop("isOpen")).toBe(false);
    expect(peakCollapse.prop("aria-hidden")).toBe(true);
  });
});

describe("collapse", () => {
  it("navbar is initially collapsed", () => {
    expect(
      wrapper
        .find(Collapse)
        .filterWhere((n) => !!n.prop("navbar"))
        .props().isOpen
    ).toBe(false);
  });

  it("clicking collapse button expands navbar", () => {
    // @ts-expect-error onClick doesn't require an event, but is typed to
    act(() => wrapper.find(NavbarToggler).props().onClick?.());
    wrapper.update();

    expect(
      wrapper
        .find(Collapse)
        .filterWhere((n) => !!n.prop("navbar"))
        .props().isOpen
    ).toBe(true);
  });

  it("clicking collapse button while expanded collapses navbar", () => {
    // @ts-expect-error onClick doesn't require an event, but is typed to
    act(() => wrapper.find(NavbarToggler).props().onClick?.());
    wrapper.update();
    // @ts-expect-error onClick doesn't require an event, but is typed to
    act(() => wrapper.find(NavbarToggler).props().onClick?.());
    wrapper.update();

    expect(
      wrapper
        .find(Collapse)
        .filterWhere((n) => !!n.prop("navbar"))
        .props().isOpen
    ).toBe(false);
  });
});

describe("theme", () => {
  it("one theme button renders without error", () => {
    const themeToggler = wrapper.find(ThemeToggler);
    expect(themeToggler.length).toBe(1);
  });

  it("clicking theme button calls toggle theme", () => {
    const themeButton = wrapper.find(ThemeToggler).childAt(0);
    act(() => themeButton.props().onClick());

    expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });
});
