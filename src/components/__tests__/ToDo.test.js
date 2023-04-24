/** @jest-environment jsdom */

import '@testing-library/jest-dom'
import { render, screen, cleanup } from "@testing-library/react";
import renderer from'react-test-renderer';
import ToDo from "../ToDo"

afterEach(() => {
    cleanup();
});

test('should render non-completed tasks', () => {
    const todo = { id: 1, title: 'get shopping', completed: false };
    render(<ToDo todo={ todo }/>);
    const toDoElement = screen.getByTestId('todo-1');
    expect(toDoElement).toBeInTheDocument();
    expect(toDoElement).toHaveTextContent('get shopping');
    expect(toDoElement).not.toContainHTML('strike')
});

test('should render completed tasks', () => {
    const todo = { id: 2, title: 'study for test', completed: true };
    render(<ToDo todo={ todo }/>);
    const toDoElement = screen.getByTestId('todo-2');
    expect(toDoElement).toBeInTheDocument();
    expect(toDoElement).toHaveTextContent('study for test');
    expect(toDoElement).toContainHTML('strike')
});

test('matches snapshot', () => {
    const todo = { id: 1, title: 'get shopping', completed: false };
    const tree = renderer.create(<ToDo todo={ todo }/>).toJSON();
    expect(tree).toMatchSnapshot();
})