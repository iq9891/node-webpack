import join from 'lodash/join';
import './style.scss';
import Icon from './icon.jpg';

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);


  var icon = document.createElement('i');
  icon.classList.add('erweima');
  element.appendChild(icon);

  return element;
}

document.body.appendChild(component());
