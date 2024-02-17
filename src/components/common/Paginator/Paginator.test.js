/* eslint-disable testing-library/await-async-query */
import TestRenderer from 'react-test-renderer';
import Paginator from './Paginator';

describe("Paginator component", () => {
    test("count of pages in the first portion should be 10", () => {
        const testRenderer = TestRenderer.create(<Paginator totalItemsCount={11} sizePage={1} portionSize={10}/>);
        const testInstance = testRenderer.root;

        let spans = testInstance.findAllByType("span");
        expect(spans.length).toBe(10);
    });

    test("if count of pages more than 10 it should appears button NEXT", () => {
        const testRenderer = TestRenderer.create(<Paginator totalItemsCount={11} sizePage={1} portionSize={10} currentPage={1}/>);
        const testInstance = testRenderer.root;

        let button = testInstance.findAllByType("button");
        expect(button.length).toBe(1);
    });
});