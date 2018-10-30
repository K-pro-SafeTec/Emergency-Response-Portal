import React from 'react';
import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import AddEvent from "../../../components/calendar/AddEvent";
import TestRenderer from "react-test-renderer";
import {MemoryRouter as Router} from "react-router-dom";

configure({ adapter: new Adapter() });

test('renders the component', () => {
  const mockOnClick = jest.fn();
  const wrapper = shallow(<AddEvent date={new Date(2018, 11)} onSaveButtonClick={mockOnClick} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('contains two buttons', () => {
  const mockOnClick = jest.fn();
  const testRenderer = TestRenderer.create(<Router><AddEvent  date={new Date(2018, 11)} onSaveButtonClick={mockOnClick}  /></Router>);
  const testInstance = testRenderer.root;
  const buttons = testInstance.findAllByType('button');
  expect(buttons.length).toBe(2);
});
