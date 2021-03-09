"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var default_btn = {
    text: "Ok",
    value: true
};
var cancel_btn = {
    text: "Cancel",
    value: false
};
var Modal = /** @class */ (function () {
    function Modal(title, msg, buttons, dangerMode) {
        var _this = this;
        this.button_options = new Array();
        this.dangerMode = false;
        // default button(s)
        this.buttons = {
            confirm: default_btn
        };
        if (title)
            this.title = title;
        if (msg) {
            if (typeof msg == "string")
                this.message = msg;
            else {
                var str = new XMLSerializer().serializeToString(msg);
                this.message = str;
            }
        }
        if (buttons)
            this.buttons = buttons;
        if (dangerMode)
            this.dangerMode = dangerMode;
        // translate ButtonList to Array<ButtonOptions>
        Object.keys(this.buttons).forEach(function (key, index) {
            var btn = _this.buttons[key];
            _this._translateBtnOption(btn, index);
        });
    }
    Modal.prototype._hide = function () {
        var modalElm = document.getElementsByClassName("modal")[0], modalOverlay = document.getElementsByClassName("modal-overlay")[0];
        // hide the modal
        modalElm.style.visibility = "hidden";
        modalOverlay.style.visibility = "hidden";
        setTimeout(function () {
            // remove the modal
            document.body.removeChild(modalOverlay);
            document.body.removeChild(modalElm);
        }, 150);
        return true;
    };
    Modal.prototype._translateBtnOption = function (btn, index) {
        if (typeof btn == "object") {
            this.button_options.push(btn);
        }
        else if (typeof btn == "boolean" && btn == true) {
            if (index == 0 && Object.keys(this.buttons).length > 1) {
                // cancel btn
                this.button_options.push(cancel_btn);
            }
            else if (index == 0 || index == 1) {
                // confirm btn
                this.button_options.push(default_btn);
            }
        }
        else if (typeof btn == "string") {
            var numButtons = Object.keys(this.buttons).length;
            if (index == 0 && numButtons > 1) {
                // cancel btn (custom text)
                this.button_options.push({
                    text: btn,
                    value: false
                });
            }
            else if (index == 0 || index == numButtons - 1) {
                // confirm btn (custom text)
                this.button_options.push({
                    text: btn,
                    value: true
                });
            }
            else {
                // tertiary btn (value == text)
                this.button_options.push({
                    text: btn,
                    value: btn
                });
            }
        }
    };
    Modal.prototype.show = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var modalOverlay = document.createElement("div"), modalElm = document.createElement("div"), titleElm = document.createElement("div"), msgElm = document.createElement("div"), btnsElm = document.createElement("div");
            // style the modal
            modalOverlay.classList.add("modal-overlay");
            modalElm.classList.add("modal");
            titleElm.classList.add("title");
            msgElm.classList.add("msg");
            btnsElm.classList.add("btns");
            // add content
            titleElm.innerHTML = _this.title;
            msgElm.innerHTML = _this.message;
            // assemble the modal
            modalElm.appendChild(titleElm);
            modalElm.appendChild(msgElm);
            modalElm.appendChild(btnsElm);
            // show the modal
            document.body.appendChild(modalOverlay);
            document.body.appendChild(modalElm);
            // add btns
            _this.button_options.forEach(function (button, index) {
                var btn = document.createElement("button");
                // check for danger mode, change confirm_btn.className to suit
                if (index == 0 && _this.button_options.length == 1 || index == _this.button_options.length - 1) {
                    btn.classList.add("confirm");
                    if (_this.dangerMode) {
                        btn.classList.add("danger");
                    }
                }
                // add btn props
                btn.value = button.value;
                btn.innerHTML = button.text;
                if (button.className) {
                    if (typeof button.className == "string")
                        btn.classList.add(button.className);
                    else
                        button.className.forEach(function (cls) { btn.classList.add(cls); });
                }
                // setup event listener
                btn.addEventListener("click", function (e) {
                    _this._hide();
                    resolve(button.value);
                });
                // add btn to btnElm
                btnsElm.appendChild(btn);
            });
        });
    };
    return Modal;
}());
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map