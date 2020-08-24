// Utility functions for testing

import Renderer from "react-test-renderer";
import { IsString } from "../";

export const GetTestChildText = (element: Renderer.ReactTestInstance) =>
  element
    .findAll((ele) => ele.children.some((child) => IsString(child)))
    .map((ele) => ele.children)
    .join("");
