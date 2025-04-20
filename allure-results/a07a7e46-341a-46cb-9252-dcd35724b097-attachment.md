# Test info

- Name: Login test on Demo Site
- Location: /Users/neha/Desktop/TestFlow1/tests/login.spec.js:3:5

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> /Users/neha/Library/Caches/ms-playwright/webkit-2158/pw_run.sh --inspector-pipe --headless --no-startup-window
<launched> pid=33341
[pid=33341][err] /Users/neha/Library/Caches/ms-playwright/webkit-2158/pw_run.sh: line 7: 33349 Bus error: 10           DYLD_FRAMEWORK_PATH="$DYLIB_PATH" DYLD_LIBRARY_PATH="$DYLIB_PATH" "$PLAYWRIGHT" "$@"
Call log:
  - <launching> /Users/neha/Library/Caches/ms-playwright/webkit-2158/pw_run.sh --inspector-pipe --headless --no-startup-window
  - <launched> pid=33341
  - [pid=33341][err] /Users/neha/Library/Caches/ms-playwright/webkit-2158/pw_run.sh: line 7: 33349 Bus error: 10           DYLD_FRAMEWORK_PATH="$DYLIB_PATH" DYLD_LIBRARY_PATH="$DYLIB_PATH" "$PLAYWRIGHT" "$@"

```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test';
   2 |
>  3 | test( "Login test on Demo Site", async({page}) => {
     |     ^ Error: browserType.launch: Target page, context or browser has been closed
   4 |
   5 |     await page.goto('https://practicetestautomation.com/practice-test-login/');
   6 |     await page.fill('#username', 'student');
   7 |     await page.fill('#password', 'Password123');
   8 |     await page.click('#submit');
   9 |
  10 |     await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
  11 |
  12 | });
```