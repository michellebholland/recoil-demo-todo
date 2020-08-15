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
      it('Selectors should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":1,"text":"rtey","priority":"low","isComplete":false}]);
    
    result.current.settodoListFilterState("Show All");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":0,"totalUncompletedNum":1,"percentCompleted":0});
    
    
        });
    
    it('Selectors should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":1,"text":"rtey","priority":"low","isComplete":false},{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
    result.current.settodoListFilterState("Show All");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":false},{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":false},{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1,"medium":1});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":2,"totalCompletedNum":0,"totalUncompletedNum":2,"percentCompleted":0});
    
    
        });
    
    it('Selectors should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
    result.current.settodoListFilterState("Show All");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":2,"text":"","priority":"medium","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1,"medium":1});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":2,"totalCompletedNum":1,"totalUncompletedNum":1,"percentCompleted":0.5});
    
    
        });
    
    it('Selectors should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":1,"text":"rtey","priority":"low","isComplete":true}]);
    
    result.current.settodoListFilterState("Show All");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":1,"totalCompletedNum":1,"totalUncompletedNum":0,"percentCompleted":1});
    
    
        });
    
    it('Selectors should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false}]);
    
    result.current.settodoListFilterState("Show All");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":2});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":2,"totalCompletedNum":1,"totalUncompletedNum":1,"percentCompleted":0.5});
    
    
        });
    
    it('Selectors should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"high","isComplete":false}]);
    
    result.current.settodoListFilterState("Show All");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"high","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"high","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":2,"high":1});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":3,"totalCompletedNum":1,"totalUncompletedNum":2,"percentCompleted":0.3333333333333333});
    
    
        });
    
    it('Selectors should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"high","isComplete":true}]);
    
    result.current.settodoListFilterState("Show All");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"high","isComplete":true}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"high","isComplete":true}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":2,"high":1});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":3,"totalCompletedNum":2,"totalUncompletedNum":1,"percentCompleted":0.6666666666666666});
    
    
        });
    
    it('Selectors should properly derive state when todoListFilterState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false},{"id":4,"text":"","priority":"high","isComplete":true}]);
    
    result.current.settodoListFilterState("Show Completed");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":4,"text":"","priority":"high","isComplete":true}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":4,"text":"","priority":"high","isComplete":true}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1,"high":1});
    
    
        });
    
    it('Selectors should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false}]);
    
    result.current.settodoListFilterState("Show All");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":2});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":2,"totalCompletedNum":1,"totalUncompletedNum":1,"percentCompleted":0.5});
    
    
        });
    
    it('Selectors should properly derive state when todoListFilterState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false}]);
    
    result.current.settodoListFilterState("Show Uncompleted");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
    
        });
    
    it('Selectors should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false},{"id":5,"text":"ert","priority":"low","isComplete":false}]);
    
    result.current.settodoListFilterState("Show Uncompleted");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false},{"id":5,"text":"ert","priority":"low","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false},{"id":5,"text":"ert","priority":"low","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":2});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":3,"totalCompletedNum":1,"totalUncompletedNum":2,"percentCompleted":0.3333333333333333});
    
    
        });
    
    it('Selectors should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false},{"id":5,"text":"ert","priority":"low","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false}]);
    
    result.current.settodoListFilterState("Show Uncompleted");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false},{"id":5,"text":"ert","priority":"low","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false},{"id":5,"text":"ert","priority":"low","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":2,"medium":1});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":4,"totalCompletedNum":1,"totalUncompletedNum":3,"percentCompleted":0.25});
    
    
        });
    
    it('Selectors should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":3,"text":"","priority":"low","isComplete":false},{"id":5,"text":"ert","priority":"low","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    result.current.settodoListFilterState("Show Uncompleted");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false},{"id":5,"text":"ert","priority":"low","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":3,"text":"","priority":"low","isComplete":false},{"id":5,"text":"ert","priority":"low","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":2,"medium":1,"high":1});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":5,"totalCompletedNum":1,"totalUncompletedNum":4,"percentCompleted":0.2});
    
    
        });
    
    it('Selectors should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":5,"text":"ert","priority":"low","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    result.current.settodoListFilterState("Show Uncompleted");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":5,"text":"ert","priority":"low","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":5,"text":"ert","priority":"low","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1,"medium":1,"high":1});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":4,"totalCompletedNum":1,"totalUncompletedNum":3,"percentCompleted":0.25});
    
    
        });
    
    it('Selectors should properly derive state when todoListFilterState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":5,"text":"ert","priority":"low","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    result.current.settodoListFilterState("Show Completed");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
    
        });
    
    it('Selectors should properly derive state when todoListSortState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":5,"text":"ert","priority":"low","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    result.current.settodoListFilterState("Show Completed");
    
    result.current.settodoListSortState(true);
    
    
          });
      
          expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
    
        });
    
    it('Selectors should properly derive state when todoListFilterState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":5,"text":"ert","priority":"low","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    result.current.settodoListFilterState("Show All");
    
    result.current.settodoListSortState(true);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":5,"text":"ert","priority":"low","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":7,"text":"","priority":"high","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":5,"text":"ert","priority":"low","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"high":1,"medium":1,"low":2});
    
    
        });
    
    it('Selectors should properly derive state when todoListSortState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":5,"text":"ert","priority":"low","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    result.current.settodoListFilterState("Show Completed");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":5,"text":"ert","priority":"low","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":2,"medium":1,"high":1});
    
    
        });
    
    it('Selectors should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":5,"text":"ert","priority":"low","isComplete":true},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    result.current.settodoListFilterState("Show All");
    
    result.current.settodoListSortState(true);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":5,"text":"ert","priority":"low","isComplete":true},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":7,"text":"","priority":"high","isComplete":false},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":5,"text":"ert","priority":"low","isComplete":true}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"high":1,"medium":1,"low":2});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":4,"totalCompletedNum":2,"totalUncompletedNum":2,"percentCompleted":0.5});
    
    
        });
    
    it('Selectors should properly derive state when todoListFilterState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":5,"text":"ert","priority":"low","isComplete":true},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    result.current.settodoListFilterState("Show Completed");
    
    result.current.settodoListSortState(true);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":5,"text":"ert","priority":"low","isComplete":true}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":1,"text":"rtey","priority":"low","isComplete":true},{"id":5,"text":"ert","priority":"low","isComplete":true}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":2});
    
    
        });
    
    it('Selectors should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":5,"text":"ert","priority":"low","isComplete":true},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    result.current.settodoListFilterState("Show Completed");
    
    result.current.settodoListSortState(true);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":5,"text":"ert","priority":"low","isComplete":true}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":5,"text":"ert","priority":"low","isComplete":true}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":3,"totalCompletedNum":1,"totalUncompletedNum":2,"percentCompleted":0.3333333333333333});
    
    
        });
    
    it('Selectors should properly derive state when todoListFilterState and todoListSortState update', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":5,"text":"ert","priority":"low","isComplete":true},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    result.current.settodoListFilterState("Show All");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([{"id":5,"text":"ert","priority":"low","isComplete":true},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":5,"text":"ert","priority":"low","isComplete":true},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1,"medium":1,"high":1});
    
    
        });
    
    it('Selectors should properly derive state when todoListFilterState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":5,"text":"ert","priority":"low","isComplete":true},{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    result.current.settodoListFilterState("Show Completed");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.sortedTodoListStateValue).toStrictEqual([{"id":5,"text":"ert","priority":"low","isComplete":true}]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({"low":1});
    
    
        });
    
    it('Selectors should properly derive state when todoListState updates', () => {
          const { result } = renderRecoilHook(useStoreHook);
      
          act(() => {
            result.current.settodoListState([{"id":6,"text":"","priority":"medium","isComplete":false},{"id":7,"text":"","priority":"high","isComplete":false}]);
    
    result.current.settodoListFilterState("Show Completed");
    
    result.current.settodoListSortState(false);
    
    
          });
      
          expect(result.current.filteredTodoListStateValue).toStrictEqual([]);
    
    expect(result.current.sortedTodoListStateValue).toStrictEqual([]);
    
    expect(result.current.todoListSortedStatsValue).toStrictEqual({});
    
    expect(result.current.todoListStatsStateValue).toStrictEqual({"totalNum":2,"totalCompletedNum":0,"totalUncompletedNum":2,"percentCompleted":0});
    
    
        });
    
    
    })


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