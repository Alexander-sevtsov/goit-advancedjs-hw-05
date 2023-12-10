import { test } from './test';
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        test(input.value, 'hello!');
    });
}
//# sourceMappingURL=index.js.map