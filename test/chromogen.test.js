import { renderRecoilHook, act } from 'react-recoil-hooks-testing-library';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  todoListState,
todoListFilterState,
todoListSortState,
filteredTodoListState,
sortedTodoListState,
todoListSortedStats,
todoListStatsState,
refreshFilterState,

} from '../src/store/store.js';
// Hook to return atom/selector values and/or modifiers for react-recoil-hooks-testing-library
const useStoreHook = () => {
      const [todoListStateValue, settodoListState] = useRecoilState(todoListState);
    const [todoListFilterStateValue, settodoListFilterState] = useRecoilState(todoListFilterState);
    const [todoListSortStateValue, settodoListSortState] = useRecoilState(todoListSortState);
    
      const filteredTodoListStateValue = useRecoilValue(filteredTodoListState);
    const sortedTodoListStateValue = useRecoilValue(sortedTodoListState);
    const todoListSortedStatsValue = useRecoilValue(todoListSortedStats);
    const todoListStatsStateValue = useRecoilValue(todoListStatsState);
    const refreshFilterStateValue = useRecoilValue(refreshFilterState);
    
      return {
        todoListStateValue,
    settodoListState,
    todoListFilterStateValue,
    settodoListFilterState,
    todoListSortStateValue,
    settodoListSortState,
    filteredTodoListStateValue,
    sortedTodoListStateValue,
    todoListSortedStatsValue,
    todoListStatsStateValue,
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
    
    it('todoListSortedStats should initialize correctly', () => {
          expect(result.current.todoListSortedStatsValue).toStrictEqual({});
        });
    
    it('todoListStatsState should initialize correctly', () => {
          expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":0,"totalCompletedNum":0,"totalUncompletedNum":0,"percentCompleted":0});
        });
    
    
    });
    
    describe('SELECTORS', () => {
      it('1filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
    
          act(() => {
            result.current.settodoListState([{"id":1,"text":"","priority":"low","isComplete":false}]);
    
    result.current.settodoListFilterState("Show All");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":0,"totalUncompletedNum":1,"percentCompleted":0});
    
    
        });
    
    it('2filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
    
          act(() => {
            result.current.settodoListState([{"id":1,"text":"","priority":"low","isComplete":false},{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
    result.current.settodoListFilterState("Show All");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":false},{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":false},{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1,"medium":1});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":2,"totalCompletedNum":0,"totalUncompletedNum":2,"percentCompleted":0});
    
    
        });
    
    it('3sortedTodoListState and todoListSortedStats should properly derive state when todoListSortState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
    
          act(() => {
            result.current.settodoListState([{"id":1,"text":"","priority":"low","isComplete":false},{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
    result.current.settodoListFilterState("Show All");
    
    result.current.settodoListSortState(true);
    
    
          });
      
          expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":2,"text":"","priority":"medium","isComplete":false},{"id":1,"text":"","priority":"low","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"medium":1,"low":1});
    
    
        });
    
    it('4filteredTodoListState, sortedTodoListState and todoListSortedStats should properly derive state when todoListFilterState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
    
          act(() => {
            result.current.settodoListState([{"id":1,"text":"","priority":"low","isComplete":false},{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
    result.current.settodoListFilterState("Show Completed");
    
    result.current.settodoListSortState(true);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
    
        });
    
    it('5filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
    
          act(() => {
            result.current.settodoListState([{"id":1,"text":"","priority":"low","isComplete":false},{"id":2,"text":"","priority":"medium","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false}]);
    
    result.current.settodoListFilterState("Show Completed");
    
    result.current.settodoListSortState(true);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":3,"totalCompletedNum":0,"totalUncompletedNum":3,"percentCompleted":0});
    
    
        });
    
    it('6filteredTodoListState, sortedTodoListState, todoListSortedStats, todoListStatsState, filteredTodoListState, sortedTodoListState and todoListSortedStats should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
    
          act(() => {
            result.current.settodoListState([{"id":1,"text":"","priority":"low","isComplete":false},{"id":2,"text":"","priority":"medium","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"medium","isComplete":false}]);
    
    result.current.settodoListFilterState("Show Completed");
    
    result.current.settodoListSortState(true);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":4,"totalCompletedNum":0,"totalUncompletedNum":4,"percentCompleted":0});
    
    expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":false},{"id":2,"text":"","priority":"medium","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"medium","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":false},{"id":2,"text":"","priority":"medium","isComplete":false},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"medium","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":2,"medium":2});
    // snapshot number 7 was triggered by refresh button
          // first 3 assertions belong to that snapshot -> snapshot occurs before the array is updated?
    
        });

        // snapshot number 7 would be: Show all + true. Need to wait until last snapshot has been added to array before adding the new one.
    
    it('8filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
    
          act(() => {
            result.current.settodoListState([{"id":1,"text":"","priority":"low","isComplete":false},{"id":2,"text":"","priority":"medium","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"medium","isComplete":false}]);
    
    result.current.settodoListFilterState("Show All");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":false},{"id":2,"text":"","priority":"medium","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"medium","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"","priority":"low","isComplete":false},{"id":2,"text":"","priority":"medium","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"medium","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":2,"medium":2});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":4,"totalCompletedNum":1,"totalUncompletedNum":3,"percentCompleted":0.25});
    
    
        });
    
    it('9filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
    
          act(() => {
            result.current.settodoListState([{"id":2,"text":"","priority":"medium","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"medium","isComplete":false}]);
    
    result.current.settodoListFilterState("Show All");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":2,"text":"","priority":"medium","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"medium","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":2,"text":"","priority":"medium","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"medium","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"medium":2,"low":1});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":3,"totalCompletedNum":1,"totalUncompletedNum":2,"percentCompleted":0.3333333333333333});
    
    
        });
    
    it('10filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
    
          act(() => {
            result.current.settodoListState([{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"medium","isComplete":false}]);
    
    result.current.settodoListFilterState("Show All");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"medium","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"medium","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1,"medium":1});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":2,"totalCompletedNum":0,"totalUncompletedNum":2,"percentCompleted":0});
    
    
        });
    
    it('11filteredTodoListState should properly derive state when todoListFilterState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
    
          act(() => {
            result.current.settodoListState([{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"medium","isComplete":false}]);
    
    result.current.settodoListFilterState(undefined);
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"medium","isComplete":false}]);
    
    
        });
    
    it('13filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
    
          act(() => {
            result.current.settodoListState([{"id":4,"text":"","priority":"medium","isComplete":false}]);
    
    result.current.settodoListFilterState("Show All");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":4,"text":"","priority":"medium","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":4,"text":"","priority":"medium","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"medium":1});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":0,"totalUncompletedNum":1,"percentCompleted":0});
    
    
        });
    
    it('14filteredTodoListState, sortedTodoListState and todoListSortedStats should properly derive state when todoListFilterState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
    
          act(() => {
            result.current.settodoListState([{"id":4,"text":"","priority":"medium","isComplete":false}]);
    
    result.current.settodoListFilterState("Show Uncompleted");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":4,"text":"","priority":"medium","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":4,"text":"","priority":"medium","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"medium":1});
    
    
        });
    
    it('15filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
    
          act(() => {
            result.current.settodoListState([{"id":4,"text":"","priority":"medium","isComplete":true}]);
    
    result.current.settodoListFilterState("Show Uncompleted");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":1,"totalUncompletedNum":0,"percentCompleted":1});
    
    
        });
    
    it('16filteredTodoListState, sortedTodoListState, todoListSortedStats and todoListStatsState should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
    
          act(() => {
            result.current.settodoListState([{"id":4,"text":"","priority":"medium","isComplete":true},{"id":5,"text":"","priority":"low","isComplete":false}]);
    
    result.current.settodoListFilterState("Show Uncompleted");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":5,"text":"","priority":"low","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":5,"text":"","priority":"low","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":2,"totalCompletedNum":1,"totalUncompletedNum":1,"percentCompleted":0.5});
    
    
        });
    
    it('17filteredTodoListState, sortedTodoListState and todoListSortedStats should properly derive state when todoListFilterState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
    
          act(() => {
            result.current.settodoListState([{"id":4,"text":"","priority":"medium","isComplete":true},{"id":5,"text":"","priority":"low","isComplete":false}]);
    
    result.current.settodoListFilterState("Show All");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":4,"text":"","priority":"medium","isComplete":true},{"id":5,"text":"","priority":"low","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":4,"text":"","priority":"medium","isComplete":true},{"id":5,"text":"","priority":"low","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"medium":1,"low":1});
    
    
        });
    
    it('18sortedTodoListState and todoListSortedStats should properly derive state when todoListSortState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
    
          act(() => {
            result.current.settodoListState([{"id":4,"text":"","priority":"medium","isComplete":true},{"id":5,"text":"","priority":"low","isComplete":false}]);
    
    result.current.settodoListFilterState("Show All");
    
    result.current.settodoListSortState(true);
    
    
          });
      
          expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":4,"text":"","priority":"medium","isComplete":true},{"id":5,"text":"","priority":"low","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"medium":1,"low":1});
    
    
        });
    
    
    })
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