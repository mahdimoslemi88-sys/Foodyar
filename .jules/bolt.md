## 2024-05-23 - Performance Optimization of Foodyar Core Logic and UI

**Learning:** Bulk operations in Zustand stores often iterate over large arrays (Inventory, PrepTasks) multiple times or use O(N) searches in loops. UI components subscribing to the whole store re-render on every log entry or unrelated state update.

**Action:**
1. Refactored domain logic (`inventory.ts`, `pricing.ts`) to support pre-indexed Maps for O(1) lookups.
2. Optimized `processTransaction` to build these Maps once, improving transaction processing speed for large inventories.
3. Implemented individual Zustand selectors in all main views (`Dashboard`, `POS`, `Inventory`, `KitchenPrep`, `Reports`) to isolate re-renders.
4. Memoized heavy calculations and hoisted static helpers to reduce render overhead.
