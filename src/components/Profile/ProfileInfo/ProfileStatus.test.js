/* eslint-disable testing-library/await-async-query */
import TestRenderer, { act } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
    test("status from props should be correct", () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status="test" />);
        const testInstance = testRenderer.root;

        expect(testInstance.props.status).toBe("test");
    });

    test("after creation <span> should be displayed", () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status="test" />);
        const testInstance = testRenderer.root;

        let span = testInstance.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation <input> shouldn't be displayed", () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status="test" />);
        const testInstance = testRenderer.root;

        expect(() => {
            let input = testInstance.findByType("input");
        }).toThrow();
    });

    test("after creation <span> should contains correct status", () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status="test" />);
        const testInstance = testRenderer.root;

        let span = testInstance.findByType("span");
        expect(span.children[0]).toBe("test");
    });

    test("<input> should be displayed in EditMode instead of <span>", () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status="test" />);
        const testInstance = testRenderer.root;

        let span = testInstance.findByType("span");

        act(() => { span.props.onDoubleClick(); });

        let input = testInstance.findByType("input");

        expect(input.props.value).toBe("test");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();

        const testRenderer = TestRenderer.create(<ProfileStatus status="test" updateUserStatus={mockCallback} />);
        const testInstance = testRenderer.root;

        let span = testInstance.findByType("span");

        act(() => { 
            span.props.onDoubleClick();
        });

        
        let input = testInstance.findByType("input");

        act(() => { 
            input.props.onBlur();
        });

        expect(mockCallback).toHaveBeenCalled();
    });
});