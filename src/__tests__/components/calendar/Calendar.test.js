import React from 'react';
import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Calendar from "../../../components/calendar/Calendar";
import AppPage from "../../../components/shared/AppPage";

configure({ adapter: new Adapter() });

test('renders the component', () => {
  const wrapper = shallow(<Calendar />);
  const component = wrapper.dive();
  expect(toJson(component)).toMatchSnapshot();
});

test("expect appPage to render", () => {
  const wrapper = shallow(<Calendar />);
  expect(wrapper.find(AppPage).length).toEqual(1);
});
