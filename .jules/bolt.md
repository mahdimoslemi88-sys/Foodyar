## 2026-02-05 - POSView Optimization and Environmental Cleanup
**Learning:** In a project where package.json is minimal but dependencies are used in the code, running 'npm install' can lead to the creation of a 'package-lock.json' that isn't supposed to be part of the repository. This can be flagged in code reviews as unnecessary file pollution.
**Action:** Always delete 'node_modules' and 'package-lock.json' after running tests or dev servers if they were not already present in the repository, to adhere to constraints against modifying configuration files.
