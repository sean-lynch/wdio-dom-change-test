var assert = require('assert');

suite('Tasklist', function() {
    test( 'click should be persistent', function() {
        browser.url('/');

        // This works
        // browser.click('#todo-list .task .check');
        // assert(browser.element('#todo-list .task .check').isSelected());

        // This doesn't
        taskCheckbox = browser.element('#todo-list .task .check');
        taskCheckbox.click();
        assert(taskCheckbox.isSelected());
    });
});
