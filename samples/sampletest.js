"use strict";
exports.__esModule = true;
var tsunit_1 = require("../tsunit");
var samplecode_1 = require("./samplecode");
var testRun = new tsunit_1.TestRun("Stack");
var stack;
testRun.setup(function () {
    stack = new samplecode_1.Stack();
});
testRun.test("new stack", function () {
    testRun.assertTrue("is empty", stack.isEmpty());
    testRun.assertEqual("size 0", 0, stack.size());
});
testRun.test("push", function () {
    stack.push("a");
    testRun.assertTrue("not empty", !stack.isEmpty());
    testRun.assertEqual("size 1", 1, stack.size());
});
testRun.test("pop", function () {
    stack.push("b");
    var item = stack.pop();
    testRun.assertTrue("empty after push pop", stack.isEmpty());
    testRun.assertEqual("size 0", 0, stack.size());
    testRun.assertEqual("pop returns last pop", "b", item);
});
testRun.test("last in first out", function () {
    stack.push("a");
    stack.push("b");
    stack.push("c");
    testRun.assertEqual("size many", 3, stack.size());
    testRun.assertEqual("LIFO", "c", stack.pop());
    testRun.assertEqual("LIFO", "b", stack.pop());
    testRun.assertEqual("LIFO", "a", stack.pop());
    testRun.assertTrue("empty at last", stack.isEmpty());
    testRun.assertEqual("size 0", 0, stack.size());
});
testRun.logSummary();
