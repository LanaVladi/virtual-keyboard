import '/src/scss/normalize.css';
import '/src/scss/style.scss';
window.addEventListener('DOMContentLoaded', function () {
  KeyboardContainer.init();
})

const KeyboardContainer = {
  elements: {
      keyboard: null,
      keyboardButtons: null,
      buttons: []
  },

  eventHandlers: {
    oninput: null
},

  properties: {
      value: "",
      capsLock: false,
      shift: false,
      alt: false
  },

// создаем элементы
init() {
const main = document.createElement('div');
main.classList.add('main');
document.body.append(main);

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
main.append(wrapper);

const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'RSS Виртуальная клавиатура';
// document.body.prepend(title);
main.prepend(title);

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
wrapper.append(textarea);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
wrapper.append(keyboard);

const keyboardButtons = document.createElement('div');
keyboardButtons.classList.add('keyboard-buttons');
keyboard.append(keyboardButtons);

const description = document.createElement('p');
description.classList.add('description');
description.textContent = 'Клавиатура создана в операционной системе Windows';
wrapper.append(description);

const switchLanguage = document.createElement('p');
switchLanguage.classList.add('switch-language');
switchLanguage.textContent = 'Для переключения языка комбинация клавиш: левыe ctrl + alt';
wrapper.append(switchLanguage);

keyboardButtons.append(this.createButtons());

// this.elements.buttons = this.elements.keyboardButtons.querySelectorAll('.keyboard-button');

},

triggerEvent(handlerName) {
  // console.log('Event:' + handlerName)
  this.elements.buttons = this.elements.keyboardButtons.querySelector('.keyboard-button');
  // console.log('this.elements.keyboardButtons :', this.elements.keyboardButtons);
  // console.log('this.elements.buttons :', buttons);

  if (typeof this.eventHandlers[handlerName] == "function") {
      this.eventHandlers[handlerName](this.properties.value);
  }
},


createButtons () {
  const fragment = document.createDocumentFragment();
  const buttonsEn = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Backspace",
    "Tab" ,"q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del",
    "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
    "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑",
    "Ctrl", "Win", "Alt", "Space", "←", "↓", "→"
  ];

  buttonsEn.forEach(button => {
    const buttonElement = document.createElement('keyboard-button');
    const lineBreak = ["Backspace", "Delete", "Enter", "↑"].indexOf(button) !== -1; // переносы

              buttonElement.setAttribute('type', 'button');
              buttonElement.classList.add('keyboard-button');

              switch(button) {
                case "`":
                  buttonElement.classList.add('btn-dark');
                  buttonElement.textContent = "`";
                  break;

                case "Backspace":
                  buttonElement.classList.add('btn-wide', 'btn-dark');
                  buttonElement.textContent = "Backspace";

                  buttonElement.addEventListener('click', () => {
                    this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                    this.triggerEvent ('oninput');
                  });
                  break;

                  case "Tab":
                  buttonElement.classList.add('btn-dark');
                  buttonElement.textContent = "Tab";

                  buttonElement.addEventListener('click', () => {
                    this.properties.value +=  "    ";
                    this.triggerEvent ('oninput');
                  });
                  break;

                  case "Del":
                  buttonElement.classList.add('btn-dark');
                  buttonElement.textContent = "Del";

                  buttonElement.addEventListener('click', () => {
                    this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                    this.triggerEvent ('oninput');
                  });
                  break;

                  case "CapsLock":
                    buttonElement.classList.add('btn-wide', 'btn-dark');
                    buttonElement.textContent = "CapsLock";

                    buttonElement.addEventListener('click', () => {
                      this.switchCapsLock();
                      buttonElement.classList.toggle(this.properties.capsLock);
                    });
                    break;

                  case "Enter":
                  buttonElement.classList.add('btn-wide', 'btn-dark');
                  buttonElement.textContent = "Enter";

                  buttonElement.addEventListener('click', () => {
                    buttonElement.classList.add(':hover');
                    this.properties.value +=  "\n";
                    this.triggerEvent ('oninput');
                  });
                  break;

                  case "Shift":
                  buttonElement.classList.add('btn-wide', 'btn-dark');
                  buttonElement.textContent = "Shift";

                  buttonElement.addEventListener('click', () => {
                    // this.properties.value +=  "\n";
                    this.triggerEvent ('oninput');
                  });
                  break;

                  case "Ctrl":
                    buttonElement.classList.add('btn-wide', 'btn-dark');
                    buttonElement.textContent = "Ctrl";

                    buttonElement.addEventListener('click', () => {
                      // this.properties.value +=  "\n";
                      this.triggerEvent ('oninput');
                    });
                    break;

                    case "Win":
                      buttonElement.classList.add('btn-wide', 'btn-dark');
                      buttonElement.textContent = "Win";

                      buttonElement.addEventListener('click', () => {
                        // this.properties.value +=  "\n";
                        this.triggerEvent ('oninput');
                      });
                      break;

                      case "Alt":
                        buttonElement.classList.add('btn-wide', 'btn-dark');
                        buttonElement.textContent = "Alt";

                        buttonElement.addEventListener('click', () => {
                          // this.properties.value +=  "\n";
                          this.triggerEvent ('oninput');
                        });
                        break;

                  case "Space":
                    buttonElement.classList.add('btn-extra-wide', 'btn-dark');

                    buttonElement.addEventListener('click', () => {
                      this.properties.value +=  " ";
                      this.triggerEvent ('oninput');
                    });
                    break;

                    case "↑":
                    buttonElement.classList.add('btn-dark');
                    buttonElement.textContent = "↑";

                    buttonElement.addEventListener('click', () => {
                      // this.properties.value +=  " ";
                      this.triggerEvent ('oninput');
                    });
                    break;

                    case "←":
                      buttonElement.classList.add('btn-dark');
                      buttonElement.textContent = "←";

                    buttonElement.addEventListener('click', () => {
                      // this.properties.value +=  " ";
                      this.triggerEvent ('oninput');
                    });
                    break;

                    case "↓":
                      buttonElement.classList.add('btn-dark');
                      buttonElement.textContent = "↓";

                    buttonElement.addEventListener('click', () => {
                      // this.properties.value +=  " ";
                      this.triggerEvent ('oninput');
                    });
                    break;

                    case  "→":
                      buttonElement.classList.add('btn-dark');
                      buttonElement.textContent =  "→";

                    buttonElement.addEventListener('click', () => {
                      // this.properties.value +=  " ";
                      this.triggerEvent ('oninput');
                    });
                    break;

                    default:
                      buttonElement.textContent = button.toLowerCase();
                      buttonElement.addEventListener('click', () => {
                      this.properties.value +=  this.properties.capsLock ? button.toUpperCase() : button.toLowerCase();
                      this.triggerEvent ('oninput');
                    });
                    break;
              }

              fragment.append(buttonElement);
              if(lineBreak) {
                fragment.append(document.createElement('br'));
              }
  });
  return fragment;
  },
};
