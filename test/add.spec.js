import lib from '../src/js/lib/lib.js';
import main from '../src/js/main.js';
describe('第一个测试套件', function() {
    it('第一个测试用例: 1+1 === 2', function() {
        expect(1 + 1).toBe(2);
    });
    it('第二个测试用例: 1+1 === 2', function() {
        expect(1 + 1).toBe(2);
    });
});

//测试lib库中的add函数
describe('测试lib库中的add函数', function() {
    it('第一个测试用例: 1+1 === 2', function() {
        expect(lib.add(1, 1)).toBe(2);
    });
    it('第二个测试用例: undefined+undefined === 0', function() {
        expect(lib.add()).toBe(0);
    });
    it('第二个测试用例: 1+undefined === 1', function() {
        expect(lib.add(1)).toBe(1);
    });
    it('第二个测试用例: undefined+1 === 2', function() {
        expect(lib.add(undefined, 1)).toBe(1);
    });
});


describe("绑定事件测试", function() {
    beforeEach(function() {
        var div = `<div class="div1">div1</div><input type="button" id="btn1" value="改变div1的内容"><input type="button" id="btn2" value="ajax请求">`;
        document.querySelector("body").innerHTML = div;
    });
    it("测试main的bindEvent事件", function() {

        main.bindEvent();
        document.getElementById("btn1").click();
        expect(document.querySelector('.div1').innerHTML).toEqual("5");

    });
    it("绑定异步测试", function(done) {
        main.bindEvent();
        document.getElementById("btn2").click();
        setTimeout(function() {
            expect(document.querySelector('.div1').innerHTML).toEqual("success");
            done();
        }, 1000)

    });
});