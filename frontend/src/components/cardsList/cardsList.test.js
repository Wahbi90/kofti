import React from "react";
import { shallow } from "enzyme";
import CardsList from "./cardsList";

describe("CardsList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CardsList />);
    expect(wrapper).toMatchSnapshot();
  });
});
