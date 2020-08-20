import { renderRecoilHook, act } from 'react-recoil-hooks-testing-library';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
	todoListState,
	todoListFilterState,
	todoListSortState,
	quoteNumberState,
	allCompleteState,
	refreshFilterState,
	filteredTodoListState,
	sortedTodoListState,
	todoListSortedStats,
	todoListStatsState,
	filteredListContentState,

} from '../src/store/store';

// Suppress 'Batcher' warnings from React / Recoil conflict
console.error = jest.fn();

// Hook to return atom/selector values and/or modifiers for react-recoil-hooks-testing-library
const useStoreHook = () => {
	const [todoListStateValue, settodoListState] = useRecoilState(todoListState);
	const [todoListFilterStateValue, settodoListFilterState] = useRecoilState(todoListFilterState);
	const [todoListSortStateValue, settodoListSortState] = useRecoilState(todoListSortState);
	const [quoteNumberStateValue, setquoteNumberState] = useRecoilState(quoteNumberState);
	const [allCompleteStateValue, setallCompleteState] = useRecoilState(allCompleteState);


	const filteredTodoListStateValue = useRecoilValue(filteredTodoListState);
	const sortedTodoListStateValue = useRecoilValue(sortedTodoListState);
	const todoListSortedStatsValue = useRecoilValue(todoListSortedStats);
	const todoListStatsStateValue = useRecoilValue(todoListStatsState);
	const filteredListContentStateValue = useRecoilValue(filteredListContentState);
	const refreshFilterStateValue = useRecoilValue(refreshFilterState);

return {
	todoListStateValue,
	settodoListState,
	todoListFilterStateValue,
	settodoListFilterState,
	todoListSortStateValue,
	settodoListSortState,
	quoteNumberStateValue,
	setquoteNumberState,
	allCompleteStateValue,
	setallCompleteState,
	filteredTodoListStateValue,
	sortedTodoListStateValue,
	todoListSortedStatsValue,
	todoListStatsStateValue,
	filteredListContentStateValue,
	refreshFilterStateValue,

};
};
describe('INITIAL RENDER', () => { 
const { result } = renderRecoilHook(useStoreHook); 
	it('filteredTodoListState should initialize correctly', () => {
		expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
	});

	it('sortedTodoListState should initialize correctly', () => {
		expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
	});

	it('allCompleteState should initialize correctly', () => {
		expect(result.current.allCompleteStateValue).toStrictEqual(true);
	});

	it('filteredListContentState should initialize correctly', () => {
		expect(result.current.filteredListContentStateValue).toStrictEqual(false);
	});

	it('todoListSortedStats should initialize correctly', () => {
		expect(result.current.todoListSortedStatsValue).toStrictEqual({});
	});

	it('todoListStatsState should initialize correctly', () => {
		expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":0,"totalCompletedNum":0,"totalUncompletedNum":0,"percentCompleted":0});
	});


});
describe('SELECTORS', () => {
	it('filteredTodoListState, sortedTodoListState, allCompleteState, filteredListContentState, todoListSortedStats, and todoListStatsState should properly derive state whentodoListState updates', () => {
		const { result } = renderRecoilHook(useStoreHook);
		act(() => {
			result.current.settodoListState([{"id":1,"text":"","priority":"low","isComplete":false}]);

			result.current.settodoListFilterState("Show All");

			result.current.settodoListSortState(false);

			result.current.setquoteNumberState(496);

		});
		expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":false}]);

		expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":false}]);

		expect(result.current.allCompleteStateValue).toStrictEqual(false);

		expect(result.current.filteredListContentStateValue).toStrictEqual(true);

		expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});

		expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":0,"totalUncompletedNum":1,"percentCompleted":0});


	});

	it('filteredTodoListState, sortedTodoListState, allCompleteState, filteredListContentState, todoListSortedStats, and todoListStatsState should properly derive state whentodoListState updates', () => {
		const { result } = renderRecoilHook(useStoreHook);
		act(() => {
			result.current.settodoListState([{"id":1,"text":"","priority":"low","isComplete":true}]);

			result.current.settodoListFilterState("Show All");

			result.current.settodoListSortState(false);

			result.current.setquoteNumberState(496);


		});
		expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":true}]);

		expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":true}]);

		expect(result.current.allCompleteStateValue).toStrictEqual(true);

		expect(result.current.filteredListContentStateValue).toStrictEqual(true);

		expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});

		expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":1,"totalUncompletedNum":0,"percentCompleted":1});


	});

	it('filteredTodoListState, sortedTodoListState, allCompleteState, filteredListContentState, todoListSortedStats, and todoListStatsState should properly derive state whentodoListState updates', () => {
		const { result } = renderRecoilHook(useStoreHook);
		act(() => {
			result.current.settodoListState([{"id":1,"text":"","priority":"low","isComplete":false}]);

			result.current.settodoListFilterState("Show All");

			result.current.settodoListSortState(false);

			result.current.setquoteNumberState(496);


		});
		expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":false}]);

		expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":false}]);

		expect(result.current.allCompleteStateValue).toStrictEqual(false);

		expect(result.current.filteredListContentStateValue).toStrictEqual(true);

		expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});

		expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":0,"totalUncompletedNum":1,"percentCompleted":0});


	});




SETTERS:
	it('allCompleteState should properly set state', () => {
  		const { result } = renderRecoilHook(useStoreHook);
  		act(() => {
 			result.current.settodoListState([{"id":1,"text":"","priority":"low","isComplete":false}]);

			result.current.settodoListFilterState("Show All");

			result.current.settodoListSortState(false);

			result.current.setquoteNumberState(496);

			result.current.setallCompleteState(false);
				});
				


  		// act(() => { 
			// result.current.setallCompleteState(true);


  		// });


    // allCompleteState was set with true

    
 		expect(result.current.todoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":true}]);



      	});

	it('allCompleteState should properly set state', () => {
  		const { result } = renderRecoilHook(useStoreHook);
  		act(() => {
 			result.current.settodoListState([{"id":1,"text":"","priority":"low","isComplete":true}]);

			result.current.settodoListFilterState("Show All");

			result.current.settodoListSortState(false);

			result.current.setquoteNumberState(496);

			result.current.setallCompleteState(false);

				});
				



    
 		expect(result.current.todoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":false}]);



      	});

 
});