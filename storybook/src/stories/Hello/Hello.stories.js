import React from 'react';
import { Hello } from './Hello';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'basic/Standard', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Hello, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs] // 애드온 적용
};

const Template = (args) => <Hello {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "storybook",
}
export const Secondary = Template.bind({});
Secondary.args = {
  name: 'storybook',
  big: true
}