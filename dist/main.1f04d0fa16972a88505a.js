(()=>{"use strict";var t={elements:{keyboard:null,keyboardButtons:null,buttons:[]},eventHandlers:{oninput:null},properties:{value:"",capsLock:!1,shift:!1,alt:!1,lang:"En"},init:function(){var t=this,e=document.createElement("div");e.classList.add("main"),document.body.append(e);var n=document.createElement("div");n.classList.add("wrapper"),e.append(n);var a=document.createElement("h1");a.classList.add("title"),a.textContent="RSS Виртуальная клавиатура",e.prepend(a);var s=document.createElement("textarea");s.classList.add("textarea"),n.append(s),s.focus();var r=document.createElement("div");r.classList.add("keyboard"),n.append(r);var i=document.createElement("div");i.classList.add("keyboard-buttons"),r.append(i),this.elements.keyboardButtons=i;var c=document.createElement("p");c.classList.add("description"),c.textContent="Клавиатура создана в операционной системе Windows",n.append(c);var d=document.createElement("p");d.classList.add("switch-language"),d.textContent="Для переключения языка комбинация клавиш: левыe ctrl + alt",n.append(d),i.append(this.createButtons()),this.elements.buttons=this.elements.keyboardButtons.querySelectorAll(".keyboard-button"),document.querySelectorAll(".textarea").forEach((function(e){e.addEventListener("focus",(function(){t.open(e.value,(function(t){e.value=t,s.focus()}))}))}))},triggerEvent:function(t){this.elements.buttons=this.elements.keyboardButtons.querySelector(".keyboard-button"),"function"==typeof this.eventHandlers[t]&&this.eventHandlers[t](this.properties.value)},open:function(t,e){this.properties.value=t,this.eventHandlers.oninput=e},createButtons:function(){var t=this,e=document.createDocumentFragment();return["`","1","2","3","4","5","6","7","8","9","0","Backspace","Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","Del","CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter","Shift","z","x","c","v","b","n","m",",",".","/","↑","Ctrl","Win","Alt","Space","←","↓","→"].forEach((function(n){var a=document.createElement("button"),s=-1!==["Backspace","Delete","Enter","↑"].indexOf(n);switch(a.setAttribute("type","button"),a.classList.add("keyboard-button"),n){case"`":a.classList.add("btn-dark"),a.textContent="`";break;case"Backspace":a.classList.add("btn-wide","btn-dark"),a.textContent="Backspace",a.addEventListener("click",(function(){t.properties.value=t.properties.value.substring(0,t.properties.value.length-1),t.triggerEvent("oninput")}));break;case"Tab":a.classList.add("btn-dark"),a.textContent="Tab",a.addEventListener("click",(function(){t.properties.value+="    ",t.triggerEvent("oninput")}));break;case"Del":a.classList.add("btn-dark"),a.textContent="Del",a.addEventListener("click",(function(){t.properties.value=t.properties.value.substring(0,t.properties.value.length-1),t.triggerEvent("oninput")}));break;case"CapsLock":a.classList.add("btn-wide","btn-dark"),a.textContent="CapsLock",a.addEventListener("click",(function(){t.switchCapsLock(),a.classList.toggle(t.properties.capsLock)}));break;case"Enter":a.classList.add("btn-wide","btn-dark"),a.textContent="Enter",a.addEventListener("click",(function(){a.classList.add(":hover"),t.properties.value+="\n",t.triggerEvent("oninput")}));break;case"Shift":a.classList.add("btn-wide","btn-dark"),a.textContent="Shift",a.addEventListener("click",(function(){t.triggerEvent("oninput")}));break;case"Ctrl":a.classList.add("btn-wide","btn-dark"),a.textContent="Ctrl",a.addEventListener("click",(function(){t.triggerEvent("oninput")}));break;case"Win":a.classList.add("btn-wide","btn-dark"),a.textContent="Win",a.addEventListener("click",(function(){t.triggerEvent("oninput")}));break;case"Alt":a.classList.add("btn-wide","btn-dark"),a.textContent="Alt",a.addEventListener("click",(function(){t.triggerEvent("oninput")}));break;case"Space":a.classList.add("btn-extra-wide","btn-dark"),a.addEventListener("click",(function(){t.properties.value+=" ",t.triggerEvent("oninput")}));break;case"↑":a.classList.add("btn-dark"),a.textContent="↑",a.addEventListener("click",(function(){t.triggerEvent("oninput")}));break;case"←":a.classList.add("btn-dark"),a.textContent="←",a.addEventListener("click",(function(){t.triggerEvent("oninput")}));break;case"↓":a.classList.add("btn-dark"),a.textContent="↓",a.addEventListener("click",(function(){t.triggerEvent("oninput")}));break;case"→":a.classList.add("btn-dark"),a.textContent="→",a.addEventListener("click",(function(){t.triggerEvent("oninput")}));break;default:a.textContent=n.toLowerCase(),a.addEventListener("click",(function(){t.properties.value+=t.properties.capsLock?n.toUpperCase():n.toLowerCase(),t.triggerEvent("oninput")}))}e.append(a),s&&e.append(document.createElement("br"))})),e}};window.addEventListener("DOMContentLoaded",(function(){t.init()}))})();
//# sourceMappingURL=main.1f04d0fa16972a88505a.js.map