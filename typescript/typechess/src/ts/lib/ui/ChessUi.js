"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessUi = void 0;
var globals_1 = require("../../globals");
var Modal_1 = require("./Modal");
var ChessUi = /** @class */ (function () {
    function ChessUi(ui_div) {
        this._ai_side = null;
        this._initialized = false;
        this.callback_save = null;
        this.callback_load = null;
        this.callback_reset = null;
        this.callback_undo = null;
        this.callback_engage_ai = null;
        this._ui_div = ui_div;
        this._ui_div.innerHTML = "";
        this._ui_div.style.width = globals_1.CANVASWIDTH + "px";
    }
    ChessUi.prototype._add_btns = function () {
        var _this = this;
        var aside = document.createElement("aside"), saveBtn = document.createElement("button"), loadBtn = document.createElement("button"), resetBtn = document.createElement("button"), undoBtn = document.createElement("button");
        saveBtn.classList.add("success");
        resetBtn.classList.add("danger");
        saveBtn.innerHTML = "💾 Save";
        loadBtn.innerHTML = "📁 Load";
        resetBtn.innerHTML = "↻ Reset";
        undoBtn.innerHTML = "↶ Undo";
        saveBtn.onclick = function (e) {
            _this._click_save(e).then(function (saveGameName) {
                if (typeof (saveGameName) == 'string') {
                    if (typeof (_this.callback_save) == 'function')
                        _this.callback_save(saveGameName);
                    else
                        _this._click_fallback(e);
                }
            });
        };
        loadBtn.onclick = function (e) {
            _this._click_load(e).then(function (params) {
                if (typeof (params) == 'object' && params.name) {
                    var saveGameKey = globals_1.SAVEGAMEPREFIX + "_" + params.name, savedGame = JSON.parse(window.localStorage.getItem(saveGameKey));
                    if (params.delete) {
                        // console.log('delete game: ' + savedGame.name);
                        _this._delete_game(params.name, saveGameKey, loadBtn);
                    }
                    else {
                        // console.log('load game: ' + savedGame.name);
                        if (typeof (_this.callback_load) == 'function')
                            _this.callback_load(savedGame);
                        else
                            _this._click_fallback(e);
                    }
                }
            });
        };
        resetBtn.onclick = function (e) {
            _this._click_reset(e).then(function (value) {
                if (value === true) {
                    if (typeof (_this.callback_reset) == 'function')
                        _this.callback_reset(e);
                    else
                        _this._click_fallback(e);
                }
            });
        };
        undoBtn.onclick = typeof (this.callback_undo) == 'function' ? this.callback_undo : this._click_fallback;
        aside.appendChild(saveBtn);
        aside.appendChild(loadBtn);
        aside.appendChild(resetBtn);
        aside.appendChild(undoBtn);
        this._ui_div.appendChild(aside);
    };
    ChessUi.prototype._add_header = function () {
        var header = document.createElement("header"), score_h4 = document.createElement("h4"), msgs_h4 = document.createElement("h4");
        score_h4.innerHTML = "Score";
        msgs_h4.innerHTML = "Game Log";
        header.appendChild(score_h4);
        header.appendChild(msgs_h4);
        this._ui_div.appendChild(header);
    };
    ChessUi.prototype._add_msgs = function () {
        var msgs = document.createElement("ul");
        msgs.classList.add("msgs");
        msgs.innerHTML = "Loading...";
        this._ui_div.appendChild(msgs);
        this._msgs_ul = msgs;
    };
    ChessUi.prototype._add_score = function () {
        var _this = this;
        var score = document.createElement("div"), white_hdr = document.createElement("span"), white_score = document.createElement("span"), black_hdr = document.createElement("span"), black_score = document.createElement("span");
        white_hdr.classList.add("score-hdr", "white", "active");
        white_score.classList.add("white", "active");
        white_score.id = "score_white";
        black_hdr.classList.add("score-hdr", "black");
        black_score.classList.add("black");
        black_score.id = "score_black";
        white_hdr.innerHTML = "White:";
        white_score.innerHTML = "0";
        black_hdr.innerHTML = "Black:";
        black_score.innerHTML = "0";
        score.classList.add("score");
        score.appendChild(white_hdr);
        score.appendChild(white_score);
        score.appendChild(black_hdr);
        score.appendChild(black_score);
        this._ui_div.appendChild(score);
        this._score_black = black_score;
        this._score_hdr_black = black_hdr;
        this._score_white = white_score;
        this._score_hdr_white = white_hdr;
        this._score_black.onclick = function (e) {
            _this._click_score(0);
        };
        this._score_hdr_black.onclick = function (e) {
            _this._click_score(0);
        };
        this._score_white.onclick = function (e) {
            _this._click_score(1);
        };
        this._score_hdr_white.onclick = function (e) {
            _this._click_score(1);
        };
    };
    ChessUi.prototype._click_fallback = function (event) {
        console.error("Click not implemented for " + event.target.innerHTML);
        return false;
    };
    ChessUi.prototype._click_load = function (event) {
        var title = "Load Game", msg = document.createElement("div"), buttons, modal, saveGames = [];
        for (var i = 0; i < window.localStorage.length; i++) {
            var key = window.localStorage.key(i);
            if (key.indexOf(globals_1.SAVEGAMEPREFIX) == 0) {
                var saveGame = JSON.parse(window.localStorage.getItem(key));
                saveGames.push(saveGame);
            }
        }
        saveGames.sort(function (a, b) {
            if (a.saveDate > b.saveDate)
                return -1;
            if (a.saveDate < b.saveDate)
                return 1;
            return 0;
        });
        msg.innerHTML = "Choose a game to load:";
        saveGames.forEach(function (saveGame, i) {
            var formGroup = document.createElement("div"), radioBtn = document.createElement("input"), radioLbl = document.createElement("label");
            formGroup.className = "form-group";
            radioBtn.type = "radio";
            radioBtn.name = "savegame";
            radioBtn.value = saveGame.name;
            radioBtn.id = (i + 1) + "_" + saveGame.name;
            if (i == 0) {
                radioBtn.checked = true;
            }
            saveGame.saveDate = new Date(saveGame.saveDate);
            radioLbl.setAttribute("for", radioBtn.id);
            radioLbl.innerHTML = saveGame.saveDate.toLocaleDateString()
                + " " + saveGame.saveDate.toLocaleTimeString()
                + " - " + saveGame.name;
            formGroup.appendChild(radioBtn);
            formGroup.appendChild(radioLbl);
            msg.appendChild(formGroup);
        });
        buttons = {
            cancel: true,
            delete: {
                text: "Delete",
                value: "delete",
                className: "danger"
            },
            confirm: {
                text: "Load Game",
                value: true
            }
        };
        modal = new Modal_1.Modal(title, msg, buttons);
        return modal.show().then(function (value) {
            var chosenGameElm = document.querySelector('input[name="savegame"]:checked');
            switch (value) {
                case true:
                    return {
                        delete: false,
                        name: chosenGameElm.value
                    };
                    break;
                case "delete":
                    return {
                        delete: true,
                        name: chosenGameElm.value
                    };
                    break;
                default:
                    return false;
            }
        });
    };
    ChessUi.prototype._click_reset = function (event) {
        var title = "Reset Board", msg = "Are you sure you want to reset the board to a new game?", modal;
        modal = new Modal_1.Modal(title, msg, [true, "Reset Board"], true);
        return modal.show();
    };
    ChessUi.prototype._click_save = function (event) {
        var title = "Save Game", msg = document.createElement("div"), modal;
        msg.innerHTML = "\n            Enter a name for the save:\n            <div class=\"form-group\">\n                <input type=\"text\" id=\"saveGameName\" placeholder=\"Save Game 1\">\n            </div>\n        ";
        modal = new Modal_1.Modal(title, msg, [true, "Save Game"]);
        return modal.show().then(function (value) {
            if (value === true) {
                var saveGameName = document.getElementById("saveGameName").value;
                return saveGameName;
            }
            return false;
        });
    };
    ChessUi.prototype._click_score = function (sideNum) {
        var _this = this;
        var side = globals_1.SIDE[sideNum], msg, modal;
        if (side != this._ai_side) {
            // turn ai on...
            msg = "Are you sure you want the AI to control " + side + "?",
                modal = new Modal_1.Modal("Engage AI", msg, ["Cancel", "OK"]);
            modal.show().then(function (confirmAi) {
                if (confirmAi) {
                    if (sideNum == globals_1.SIDE.white) {
                        _this._score_hdr_white.innerHTML = "💻 White:";
                        _this._score_hdr_black.innerHTML = "Black:";
                    }
                    else {
                        _this._score_hdr_black.innerHTML = "💻 Black:";
                        _this._score_hdr_white.innerHTML = "White:";
                    }
                    _this._ai_side = side;
                    if (typeof (_this.callback_engage_ai) == 'function')
                        _this.callback_engage_ai(sideNum);
                    else
                        _this._click_fallback(null);
                }
            });
        }
        else {
            // turn ai off...
            msg = "Are you sure you want to turn the ai off?",
                modal = new Modal_1.Modal("Disengage AI", msg, ["Cancel", "OK"]);
            modal.show().then(function (confirmNoAi) {
                if (confirmNoAi) {
                    _this._score_hdr_white.innerHTML = "White:";
                    _this._score_hdr_black.innerHTML = "Black:";
                    _this._ai_side = null;
                    if (typeof (_this.callback_engage_ai) == 'function')
                        _this.callback_engage_ai(sideNum, true);
                    else
                        _this._click_fallback(null);
                }
            });
        }
        return;
    };
    ChessUi.prototype._delete_game = function (saveGameName, saveGameKey, loadBtn) {
        var confirmModal, successModal, modalTitle = "Delete Game";
        confirmModal = new Modal_1.Modal(modalTitle, "Are you sure you want to delete \'" + saveGameName + "\'?", ["Cancel", "Delete it"], true);
        confirmModal.show().then(function (confirmDelete) {
            if (confirmDelete) {
                window.localStorage.removeItem(saveGameKey);
                successModal = new Modal_1.Modal(modalTitle, "\'" + saveGameName + "\' was successfully deleted.");
                successModal.show();
            }
            else {
                loadBtn.click();
            }
        });
    };
    ChessUi.prototype.draw = function (white_score, black_score, turns) {
        if (!this._initialized) {
            this._add_header();
            this._add_score();
            this._add_msgs();
            this._add_btns();
            this._initialized = true;
        }
        // update score
        this._score_black.innerHTML = black_score.toString();
        this._score_white.innerHTML = white_score.toString();
        // highlight active team
        if (turns.length % 2) {
            this._score_hdr_white.classList.remove("active");
            this._score_white.classList.remove("active");
            this._score_hdr_black.classList.add("active");
            this._score_black.classList.add("active");
        }
        else {
            this._score_hdr_black.classList.remove("active");
            this._score_black.classList.remove("active");
            this._score_hdr_white.classList.add("active");
            this._score_white.classList.add("active");
        }
        // update msgs
        this._msgs_ul.innerHTML = "";
        for (var i = 0; i < turns.length; i++) {
            var turn = turns[turns.length - 1 - i];
            for (var j = 0; j < turn.msgs.length; j++) {
                var msg = turn.msgs[turn.msgs.length - 1 - j], msg_div = document.createElement("li");
                msg_div.innerHTML = msg;
                this._msgs_ul.appendChild(msg_div);
            }
        }
    };
    ChessUi.prototype.getUiDiv = function () {
        return this._ui_div;
    };
    return ChessUi;
}());
exports.ChessUi = ChessUi;
//# sourceMappingURL=ChessUi.js.map