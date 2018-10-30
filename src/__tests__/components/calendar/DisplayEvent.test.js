import React from 'react';
import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import DisplayEvent from "../../../components/calendar/DisplayEvent";

configure({ adapter: new Adapter() });

test('renders the component', () => {
  const event = {
    id: 0,
    title: 'Øvelse',
    start: new Date(2019, 0, 1, 19),
    end: new Date(2019, 0, 1, 20),
    participants: 'Alle',
  };
  const mockOnClick = jest.fn();
  const wrapper = shallow(
    <DisplayEvent
      event={event}
      onChangeEvent={mockOnClick}
      onDeleteButtonClick={mockOnClick}
      onReviewButtonClick={mockOnClick}
    />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
