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

} from '../src/store/store.js';

// Hook to return atom/selector values and/or modifiers for react-recoil-hooks-testing-library
const useStoreHook = () => {
	const [todoListStateValue, settodoListState] = useRecoilState(todoListState);
	const [todoListFilterStateValue, settodoListFilterState] = useRecoilState(todoListFilterState);
	const [todoListSortStateValue, settodoListSortState] = useRecoilState(todoListSortState);
	const [quoteNumberStateValue, setquoteNumberState] = useRecoilState(quoteNumberState);
	const [allCompleteStateValue, setallCompleteState] = useRecoilState(allCompleteState);
	const [refreshFilterStateValue, setrefreshFilterState] = useRecoilState(refreshFilterState);

	const filteredTodoListStateValue = useRecoilValue(filteredTodoListState);
	const sortedTodoListStateValue = useRecoilValue(sortedTodoListState);
	const todoListSortedStatsValue = useRecoilValue(todoListSortedStats);
	const todoListStatsStateValue = useRecoilValue(todoListStatsState);
	const filteredListContentStateValue = useRecoilValue(filteredListContentState);

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
	refreshFilterStateValue,
	setrefreshFilterState,
	filteredTodoListStateValue,
	sortedTodoListStateValue,
	todoListSortedStatsValue,
	todoListStatsStateValue,
	filteredListContentStateValue,

  };
};

// describe('INITIAL RENDER', () => { 
//   const { result } = renderRecoilHook(useStoreHook); 

// 	it('filteredTodoListState should initialize correctly', () => {
// 		expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
// 	});

// 	it('sortedTodoListState should initialize correctly', () => {
// 		expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
// 	});

// 	it('allCompleteState should initialize correctly', () => {
// 		expect(result.current.allCompleteStateValue).toStrictEqual(true);
// 	});

// 	it('filteredListContentState should initialize correctly', () => {
// 		expect(result.current.filteredListContentStateValue).toStrictEqual(false);
// 	});

// 	it('todoListSortedStats should initialize correctly', () => {
// 		expect(result.current.todoListSortedStatsValue).toStrictEqual({});
// 	});

// 	it('todoListStatsState should initialize correctly', () => {
// 		expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":0,"totalCompletedNum":0,"totalUncompletedNum":0,"percentCompleted":0});
// 	});

// 	it('filteredTodoListState should initialize correctly', () => {
// 		expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":false}]);
// 	});

// 	it('allCompleteState should initialize correctly', () => {
// 		expect(result.current.allCompleteStateValue).toStrictEqual(false);
// 	});

// 	it('refreshFilterState should initialize correctly', () => {
// 		expect(result.current.refreshFilterStateValue).toStrictEqual(null);
// 	});

// 	it('refreshFilterState should initialize correctly', () => {
// 		expect(result.current.refreshFilterStateValue).toStrictEqual(null);
// 	});


// });

describe('SELECTORS', () => {
	it('sortedTodoListState, filteredListContentState, todoListSortedStats, and todoListStatsState should properly derive state when todoListState and allCompleteState update', () => {
		const { result } = renderRecoilHook(useStoreHook);

		act(() => {
  			result.current.settodoListState([{"id":1,"text":"","priority":"low","isComplete":false}]);

			result.current.settodoListFilterState("Show All");

			result.current.settodoListSortState(false);

			result.current.setquoteNumberState(6);

			result.current.setallCompleteState(false);

			result.current.setrefreshFilterState(null);


		});

		expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":false}]);

		expect(result.current.filteredListContentStateValue).toStrictEqual(true);

		expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});

		expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":0,"totalUncompletedNum":1,"percentCompleted":0});


	});

	it('filteredTodoListState, allCompleteState, refreshFilterState, refreshFilterState, sortedTodoListState, filteredListContentState, todoListSortedStats, and todoListStatsState should properly derive state when todoListState and allCompleteState update', () => {
		const { result } = renderRecoilHook(useStoreHook);

		act(() => {
  			result.current.settodoListState([{"id":1,"text":"","priority":"low","isComplete":true}]);

			result.current.settodoListFilterState("Show All");

			result.current.settodoListSortState(false);

			result.current.setquoteNumberState(6);

			result.current.setallCompleteState(true);

			result.current.setrefreshFilterState(null);


		});

		expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":true}]);

		expect(result.current.allCompleteStateValue).toStrictEqual(true);

		expect(result.current.refreshFilterStateValue).toStrictEqual(null);

		expect(result.current.refreshFilterStateValue).toStrictEqual(null);

		expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":true}]);

		expect(result.current.filteredListContentStateValue).toStrictEqual(true);

		expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});

		expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":1,"totalUncompletedNum":0,"percentCompleted":1});


	});


})
//     describe('SELECTORS', () => {
//       it('1filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":1,"text":"","priority":"low","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":0,"totalUncompletedNum":1,"percentCompleted":0});
    
    
//         });
    
//     it('2filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":1,"text":"","priority":"low","isComplete":false},{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":false},{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":false},{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1,"medium":1});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":2,"totalCompletedNum":0,"totalUncompletedNum":2,"percentCompleted":0});
    
    
//         });
    
//     it('3filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"medium":1});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":0,"totalUncompletedNum":1,"percentCompleted":0});
    
    
//         });
    
//     it('4sortedTodoListState and todoListSortedStats should properly derive state when todoListSortState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(true);
    
    
//           });
      
//           expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"medium":1});
    
    
//         });
    
//     it('5filteredTodoListState, sortedTodoListState and todoListSortedStats should properly derive state when todoListFilterState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show Completed");
    
//     result.current.settodoListSortState(true);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
    
//         });
    
//     it('7filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":2,"text":"","priority":"medium","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":2,"text":"","priority":"medium","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":2,"text":"","priority":"medium","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"medium":1,"low":1});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":2,"totalCompletedNum":0,"totalUncompletedNum":2,"percentCompleted":0});
    
    
//         });
    
//     it('8filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":3,"text":"","priority":"low","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":0,"totalUncompletedNum":1,"percentCompleted":0});
    
    
//         });
    
//     it('9sortedTodoListState and todoListSortedStats should properly derive state when todoListSortState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":3,"text":"","priority":"low","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(true);
    
    
//           });
      
//           expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
    
//         });
    
//     it('10filteredTodoListState, sortedTodoListState and todoListSortedStats should properly derive state when todoListFilterState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":3,"text":"","priority":"low","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show Completed");
    
//     result.current.settodoListSortState(true);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
    
//         });
    
//     it('11filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show Completed");
    
//     result.current.settodoListSortState(true);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":2,"totalCompletedNum":0,"totalUncompletedNum":2,"percentCompleted":0});
    
    
//         });
    
//     it('12filteredTodoListState, sortedTodoListState and todoListSortedStats should properly derive state when todoListFilterState and todoListSortState update', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":2});
    
    
//         });
    
//     it('13filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":true}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":true}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":true}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":2});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":2,"totalCompletedNum":1,"totalUncompletedNum":1,"percentCompleted":0.5});
    
    
//         });
    
//     it('14sortedTodoListState and todoListSortedStats should properly derive state when todoListSortState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":true}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(true);
    
    
//           });
      
//           expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":true}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":2});
    
    
//         });
    
//     it('15filteredTodoListState, sortedTodoListState and todoListSortedStats should properly derive state when todoListFilterState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":true}]);
    
//     result.current.settodoListFilterState("Show Completed");
    
//     result.current.settodoListSortState(true);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":4,"text":"","priority":"low","isComplete":true}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":4,"text":"","priority":"low","isComplete":true}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
    
//         });
    
//     it('17filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":4,"text":"","priority":"low","isComplete":true}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":4,"text":"","priority":"low","isComplete":true}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":4,"text":"","priority":"low","isComplete":true}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":1,"totalUncompletedNum":0,"percentCompleted":1});
    
    
//         });
    
//     it('18filteredTodoListState, sortedTodoListState and todoListSortedStats should properly derive state when todoListFilterState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":4,"text":"","priority":"low","isComplete":true}]);
    
//     result.current.settodoListFilterState("Show Completed");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":4,"text":"","priority":"low","isComplete":true}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":4,"text":"","priority":"low","isComplete":true}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
    
//         });
    
//     it('19filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":4,"text":"z","priority":"low","isComplete":true}]);
    
//     result.current.settodoListFilterState("Show Completed");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":4,"text":"z","priority":"low","isComplete":true}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":4,"text":"z","priority":"low","isComplete":true}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":1,"totalUncompletedNum":0,"percentCompleted":1});
    
    
//         });
    
//     it('20filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":4,"text":"zx","priority":"low","isComplete":true}]);
    
//     result.current.settodoListFilterState("Show Completed");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":4,"text":"zx","priority":"low","isComplete":true}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":4,"text":"zx","priority":"low","isComplete":true}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":1,"totalUncompletedNum":0,"percentCompleted":1});
    
    
//         });
    
//     it('21filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":4,"text":"zxc","priority":"low","isComplete":true}]);
    
//     result.current.settodoListFilterState("Show Completed");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":4,"text":"zxc","priority":"low","isComplete":true}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":4,"text":"zxc","priority":"low","isComplete":true}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":1,"totalUncompletedNum":0,"percentCompleted":1});
    
    
//         });
    
//     it('22filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([]);
    
//     result.current.settodoListFilterState("Show Completed");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":0,"totalCompletedNum":0,"totalUncompletedNum":0,"percentCompleted":0});
    
    
//         });
    
//     it('23filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":5,"text":"","priority":"low","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show Completed");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":0,"totalUncompletedNum":1,"percentCompleted":0});
    
    
//         });
    
//     it('24filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":5,"text":"","priority":"low","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show Completed");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":2,"totalCompletedNum":0,"totalUncompletedNum":2,"percentCompleted":0});
    
    
//         });
    
//     it('25filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":5,"text":"","priority":"low","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show Completed");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":3,"totalCompletedNum":0,"totalUncompletedNum":3,"percentCompleted":0});
    
    
//         });
    
//     it('26sortedTodoListState, todoListSortedStats, filteredTodoListState, sortedTodoListState and todoListSortedStats should properly derive state when todoListSortState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":5,"text":"","priority":"low","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show Completed");
    
//     result.current.settodoListSortState(true);
    
    
//           });
      
//           expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
//     expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":5,"text":"","priority":"low","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":5,"text":"","priority":"low","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1,"medium":1,"high":1});
    
    
//         });
    
    
//     })
// TEST 2 INCLUDES  CLG FILE, REFRESHED AND START/STOP  - but didn'tre refresh right before stop
// const useStoreHook = () => {
//       const [todoListStateValue, settodoListState] = useRecoilState(todoListState);
//     const [todoListFilterStateValue, settodoListFilterState] = useRecoilState(todoListFilterState);
//     const [todoListSortStateValue, settodoListSortState] = useRecoilState(todoListSortState);
    
//       const filteredTodoListStateValue = useRecoilValue(filteredTodoListState);
//     const sortedTodoListStateValue = useRecoilValue(sortedTodoListState);
//     const todoListSortedStatsValue = useRecoilValue(todoListSortedStats);
//     const todoListStatsStateValue = useRecoilValue(todoListStatsState);
//     const refreshFilterStateValue = useRecoilValue(refreshFilterState);
    
//       return {
//         todoListStateValue,
//     settodoListState,
//     todoListFilterStateValue,
//     settodoListFilterState,
//     todoListSortStateValue,
//     settodoListSortState,
//     filteredTodoListStateValue,
//     sortedTodoListStateValue,
//     todoListSortedStatsValue,
//     todoListStatsStateValue,
//     refreshFilterStateValue,
     
//       };
//     };
    
//     describe('INITIAL RENDER', () => { 
//       const { result } = renderRecoilHook(useStoreHook); 
    
//       it('filteredTodoListState should initialize correctly', () => {
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
//         });
    
//     it('sortedTodoListState should initialize correctly', () => {
//           expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
//         });
    
//     it('todoListSortedStats should initialize correctly', () => {
//           expect(result.current.todoListSortedStatsValue).toStrictEqual({});
//         });
    
//     it('todoListStatsState should initialize correctly', () => {
//           expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":0,"totalCompletedNum":0,"totalUncompletedNum":0,"percentCompleted":0});
//         });
    
    
//     });
    
//     describe('SELECTORS', () => {
//       it('1filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":1,"text":"Item1 ","priority":"low","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"Item1 ","priority":"low","isComplete":false}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"Item1 ","priority":"low","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":0,"totalUncompletedNum":1,"percentCompleted":0});
    
    
//         });
    
//     it('2filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":1,"text":"Item1 ","priority":"low","isComplete":false},{"id":2,"text":"Item 2 HP","priority":"high","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"Item1 ","priority":"low","isComplete":false},{"id":2,"text":"Item 2 HP","priority":"high","isComplete":false}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"Item1 ","priority":"low","isComplete":false},{"id":2,"text":"Item 2 HP","priority":"high","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1,"high":1});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":2,"totalCompletedNum":0,"totalUncompletedNum":2,"percentCompleted":0});
    
    
//         });
    
//     it('3sortedTodoListState and todoListSortedStats should properly derive state when todoListSortState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":1,"text":"Item1 ","priority":"low","isComplete":false},{"id":2,"text":"Item 2 HP","priority":"high","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(true);
    
    
//           });
      
//           expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":2,"text":"Item 2 HP","priority":"high","isComplete":false},{"id":1,"text":"Item1 ","priority":"low","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"high":1,"low":1});
    
    
//         });
    
//     it('4filteredTodoListState, sortedTodoListState and todoListSortedStats should properly derive state when todoListFilterState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":1,"text":"Item1 ","priority":"low","isComplete":false},{"id":2,"text":"Item 2 HP","priority":"high","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show Completed");
    
//     result.current.settodoListSortState(true);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
    
//         });
    
//     it('6filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":1,"text":"Item1 ","priority":"low","isComplete":false},{"id":2,"text":"Item 2 HP","priority":"high","isComplete":true}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"Item1 ","priority":"low","isComplete":false},{"id":2,"text":"Item 2 HP","priority":"high","isComplete":true}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"Item1 ","priority":"low","isComplete":false},{"id":2,"text":"Item 2 HP","priority":"high","isComplete":true}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1,"high":1});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":2,"totalCompletedNum":1,"totalUncompletedNum":1,"percentCompleted":0.5});
    
    
//         });
    
//     it('7filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":2,"text":"Item 2 HP","priority":"high","isComplete":true}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":2,"text":"Item 2 HP","priority":"high","isComplete":true}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":2,"text":"Item 2 HP","priority":"high","isComplete":true}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"high":1});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":1,"totalUncompletedNum":0,"percentCompleted":1});
    
    
//         });
    
//     it('8filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":0,"totalCompletedNum":0,"totalUncompletedNum":0,"percentCompleted":0});
    
    
//         });
    
//     it('9filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":3,"text":"","priority":"medium","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"medium","isComplete":false}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"medium","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"medium":1});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":0,"totalUncompletedNum":1,"percentCompleted":0});
    
    
//         });
    
//     it('10filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":3,"text":"","priority":"medium","isComplete":true}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"medium","isComplete":true}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"medium","isComplete":true}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"medium":1});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":1,"totalUncompletedNum":0,"percentCompleted":1});
    
    
//         });
    
//     it('11sortedTodoListState and todoListSortedStats should properly derive state when todoListSortState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":3,"text":"","priority":"medium","isComplete":true}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(true);
    
    
//           });
      
//           expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"medium","isComplete":true}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"medium":1});
    
    
//         });
    
//     it('12filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(true);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":0,"totalCompletedNum":0,"totalUncompletedNum":0,"percentCompleted":0});
    
    
//         });
    
//     it('13filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":4,"text":"","priority":"low","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(true);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":4,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":4,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":0,"totalUncompletedNum":1,"percentCompleted":0});
    
    
//         });
    
//     it('14filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":4,"text":"","priority":"low","isComplete":false},{"id":5,"text":"","priority":"medium","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(true);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":4,"text":"","priority":"low","isComplete":false},{"id":5,"text":"","priority":"medium","isComplete":false}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":5,"text":"","priority":"medium","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"medium":1,"low":1});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":2,"totalCompletedNum":0,"totalUncompletedNum":2,"percentCompleted":0});
    
    
//         });
    
//     it('15sortedTodoListState and todoListSortedStats should properly derive state when todoListSortState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":4,"text":"","priority":"low","isComplete":false},{"id":5,"text":"","priority":"medium","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":4,"text":"","priority":"low","isComplete":false},{"id":5,"text":"","priority":"medium","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1,"medium":1});
    
    
//         });
    
//     it('16filteredTodoListState, sortedTodoListState and todoListSortedStats should properly derive state when todoListFilterState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":4,"text":"","priority":"low","isComplete":false},{"id":5,"text":"","priority":"medium","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show Completed");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
    
//         });
    
    
//     })
// TEST 1 includecs CLG FILE
// const useStoreHook = () => {
//       const [todoListStateValue, settodoListState] = useRecoilState(todoListState);
//     const [todoListFilterStateValue, settodoListFilterState] = useRecoilState(todoListFilterState);
//     const [todoListSortStateValue, settodoListSortState] = useRecoilState(todoListSortState);
    
//       const filteredTodoListStateValue = useRecoilValue(filteredTodoListState);
//     const sortedTodoListStateValue = useRecoilValue(sortedTodoListState);
//     const todoListSortedStatsValue = useRecoilValue(todoListSortedStats);
//     const todoListStatsStateValue = useRecoilValue(todoListStatsState);
//     const refreshFilterStateValue = useRecoilValue(refreshFilterState);
    
//       return {
//         todoListStateValue,
//     settodoListState,
//     todoListFilterStateValue,
//     settodoListFilterState,
//     todoListSortStateValue,
//     settodoListSortState,
//     filteredTodoListStateValue,
//     sortedTodoListStateValue,
//     todoListSortedStatsValue,
//     todoListStatsStateValue,
//     refreshFilterStateValue,
     
//       };
//     };
    
//     describe('INITIAL RENDER', () => { 
//       const { result } = renderRecoilHook(useStoreHook); 
    
//       it('filteredTodoListState should initialize correctly', () => {
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
//         });
    
//     it('sortedTodoListState should initialize correctly', () => {
//           expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
//         });
    
//     it('todoListSortedStats should initialize correctly', () => {
//           expect(result.current.todoListSortedStatsValue).toStrictEqual({});
//         });
    
//     it('todoListStatsState should initialize correctly', () => {
//           expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":0,"totalCompletedNum":0,"totalUncompletedNum":0,"percentCompleted":0});
//         });
    
    
//     });
    
//     describe('SELECTORS', () => {
//       it('1filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":1,"text":"wer","priority":"low","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"wer","priority":"low","isComplete":false}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"wer","priority":"low","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":0,"totalUncompletedNum":1,"percentCompleted":0});
    
    
//         });
    
//     it('2filteredTodoListState, sortedTodoListState and todoListSortedStats should properly derive state when todoListFilterState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":1,"text":"wer","priority":"low","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show Completed");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
    
//         });
    
//     it('3sortedTodoListState and todoListSortedStats should properly derive state when todoListSortState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":1,"text":"wer","priority":"low","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show Completed");
    
//     result.current.settodoListSortState(true);
    
    
//           });
      
//           expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
    
//         });
    
//     it('5filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":0,"totalCompletedNum":0,"totalUncompletedNum":0,"percentCompleted":0});
    
    
//         });
    
//     it('6filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"medium":1});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":0,"totalUncompletedNum":1,"percentCompleted":0});
    
    
//         });
    
//     it('7filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":2,"text":"","priority":"medium","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show All");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":2,"text":"","priority":"medium","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":2,"text":"","priority":"medium","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"medium":1,"low":1});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":2,"totalCompletedNum":0,"totalUncompletedNum":2,"percentCompleted":0});
    
    
//         });
    
//     it('8filteredTodoListState, sortedTodoListState and todoListSortedStats should properly derive state when todoListFilterState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":2,"text":"","priority":"medium","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show Uncompleted");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":2,"text":"","priority":"medium","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":2,"text":"","priority":"medium","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"medium":1,"low":1});
    
    
//         });
    
//     it('10filteredTodoListState, sortedTodoListState and todoListSortedStats should properly derive state when todoListFilterState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":2,"text":"","priority":"medium","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show Completed");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
    
//         });
    
//     it('11filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":2,"text":"","priority":"medium","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show Completed");
    
//     result.current.settodoListSortState(false);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":3,"totalCompletedNum":0,"totalUncompletedNum":3,"percentCompleted":0});
    
    
//         });
    
//     it('12sortedTodoListState and todoListSortedStats should properly derive state when todoListSortState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":2,"text":"","priority":"medium","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":false}]);
    
//     result.current.settodoListFilterState("Show Completed");
    
//     result.current.settodoListSortState(true);
    
    
//           });
      
//           expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
    
//         });
    
//     it('13filteredTodoListState, sortedTodoListState and todoListSortedStats should properly derive state when todoListFilterState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":2,"text":"","priority":"medium","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":false}]);
    
//     result.current.settodoListFilterState(undefined);
    
//     result.current.settodoListSortState(true);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":2,"text":"","priority":"medium","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":2,"text":"","priority":"medium","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"medium":1,"low":2});
    
    
//         });
    
//     it('14filteredTodoListState, sortedTodoListState, todoListSortedStats, todoListStatsState, filteredTodoListState, sortedTodoListState and todoListSortedStats should properly derive state when todoListState updates', () => {
//           const { result } = renderRecoilHook(useStoreHook);
    
//           act(() => {
//             result.current.settodoListState([{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":false}]);
    
//     result.current.settodoListFilterState(undefined);
    
//     result.current.settodoListSortState(true);
    
    
//           });
      
//           expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":2});
    
//     expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":2,"totalCompletedNum":0,"totalUncompletedNum":2,"percentCompleted":0});
    
//     expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":false}]);
    
//     expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":2});
    
    
//         });
    
    
//     })


//     it('Selectors should properly derive state when todoListState updates', () => {
//       const { result } = renderRecoilHook(useStoreHook);
  
//       act(() => {
//         result.current.settodoListState([{"id":1,"text":"ret","priority":"low","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":false}]);

// result.current.settodoListFilterState("Show Completed");

// result.current.settodoListSortState(true);


//       });
  
//       expect(result.current.filteredTodoListStateValue).toStrictEqual([]);

// expect(result.current.sortedTodoListStateValue).toStrictEqual([]);

// expect(result.current.todoListSortedStatsValue).toStrictEqual({});

// expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":3,"totalCompletedNum":0,"totalUncompletedNum":3,"percentCompleted":0});
// below toStrictEqual value should be an empty array
// expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"ret","priority":"low","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":false}]);

// expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"ret","priority":"low","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"low","isComplete":false}]);

// expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":3}); 