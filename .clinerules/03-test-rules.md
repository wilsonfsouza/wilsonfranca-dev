## Test-Driven Development (TDD) Process

Follow a strict "Red-Green-Refactor" cycle:

1. **Red Phase**:

   - Write a failing test for the functionality you want to implement
   - Run the test to confirm it fails (shows "red" in the test runner)
   - This validates that your test is actually testing something

2. **Green Phase**:

   - Implement the simplest code that makes the test pass
   - Focus on making it work, not making it optimal
   - Run the test to confirm it now passes (shows "green")

3. **Refactor Phase**:

   - Clean up and optimize your implementation without changing its behavior
   - Run tests after each refactor to ensure you haven't broken anything
   - Improve both the implementation code AND the test code

4. **Finalization Phase**:
   - Run full test suite to ensure no regressions: `npm run test`
   - Validate test coverage to ensure >90% coverage: `npm run test:coverage`
