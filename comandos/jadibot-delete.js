const _0x36422e = _0xf4b3;
(function (_0x4e060d, _0x321220) {
  const _0x2d71d6 = _0xf4b3,
    _0x2f6d22 = _0x4e060d();
  while (!![]) {
    try {
      const _0x776b56 =
        parseInt(_0x2d71d6(0xb9)) / 0x1 +
        (parseInt(_0x2d71d6(0xaa)) / 0x2) * (parseInt(_0x2d71d6(0xc7)) / 0x3) +
        (parseInt(_0x2d71d6(0xc1)) / 0x4) * (-parseInt(_0x2d71d6(0xae)) / 0x5) +
        parseInt(_0x2d71d6(0xbe)) / 0x6 +
        (-parseInt(_0x2d71d6(0xbd)) / 0x7) * (parseInt(_0x2d71d6(0xb1)) / 0x8) +
        -parseInt(_0x2d71d6(0xab)) / 0x9 +
        (-parseInt(_0x2d71d6(0xb6)) / 0xa) * (-parseInt(_0x2d71d6(0xc5)) / 0xb);
      if (_0x776b56 === _0x321220) break;
      else _0x2f6d22["push"](_0x2f6d22["shift"]());
    } catch (_0xff5571) {
      _0x2f6d22["push"](_0x2f6d22["shift"]());
    }
  }
})(_0x2ff3, 0xb53c8);
import {readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as _0x7bcfd8} from "fs";
import _0x53b75a, {join} from "path";
let handler = async (_0x14a149, {conn: _0x3cb524}, _0x3c1fcf) => {
  const _0x41b7f8 = _0xf4b3;
  let _0x44e87c = _0x3cb524,
    _0x23e473 =
      _0x14a149[_0x41b7f8(0xc2)] && _0x14a149[_0x41b7f8(0xc2)][0x0]
        ? _0x14a149[_0x41b7f8(0xc2)][0x0]
        : _0x14a149[_0x41b7f8(0xb4)]
        ? _0x3cb524[_0x41b7f8(0xc6)][_0x41b7f8(0xb0)]
        : _0x14a149[_0x41b7f8(0xb8)],
    _0x53bc6e = "" + _0x23e473[_0x41b7f8(0xc3)]`@`[0x0];
  if (global[_0x41b7f8(0xba)]["user"][_0x41b7f8(0xb0)] !== _0x3cb524[_0x41b7f8(0xc6)][_0x41b7f8(0xb0)])
    return _0x3cb524["sendMessage"](_0x14a149[_0x41b7f8(0xc4)], {text: _0x41b7f8(0xb5)}, {quoted: _0x14a149});
  else await _0x3cb524[_0x41b7f8(0xbf)](_0x14a149[_0x41b7f8(0xc4)], {text: _0x41b7f8(0xbc)}, {quoted: _0x14a149});
  try {
    _0x7bcfd8[_0x41b7f8(0xb2)]("./jadibts/" + _0x53bc6e, {recursive: !![], force: !![]}),
      await _0x3cb524[_0x41b7f8(0xbf)](_0x14a149[_0x41b7f8(0xc4)], {text: _0x41b7f8(0xc0)}, {quoted: _0x14a149});
  } catch (_0x4c6e2a) {
    console["error"](_0x41b7f8(0xb3), _0x4c6e2a);
  }
};
function _0x2ff3() {
  const _0x3e709c = [
    "830JPnitc",
    "help",
    "sender",
    "949829jmFIfw",
    "conn",
    "command",
    "*[✅]\x20Adiós\x20Bot,\x20haz\x20dejado\x20de\x20ser\x20un\x20Bot*",
    "7NILIdM",
    "933990BTeAmu",
    "sendMessage",
    "*[✅]\x20Todos\x20los\x20archivos\x20de\x20session\x20fueron\x20eliminados*",
    "76xnjvEn",
    "mentionedJid",
    "split",
    "chat",
    "48939DKDoaL",
    "user",
    "2427kHHvzv",
    "private",
    "jadibot",
    "2794GWtEQv",
    "3605742HkTHuh",
    "deletebot",
    "fail",
    "261435bAOYQb",
    "tags",
    "jid",
    "3747992cMGWzm",
    "rmdir",
    "La\x20carpeta\x20o\x20archivo\x20de\x20sesion\x20no\x20existen\x20",
    "fromMe",
    "*[❕]\x20Use\x20este\x20comando\x20directamente\x20en\x20el\x20numero\x20del\x20Bot\x20principal*",
  ];
  _0x2ff3 = function () {
    return _0x3e709c;
  };
  return _0x2ff3();
}
(handler[_0x36422e(0xb7)] = [_0x36422e(0xac)]),
  (handler[_0x36422e(0xaf)] = [_0x36422e(0xa9)]),
  (handler[_0x36422e(0xbb)] = /^(deletebot|aa2)$/i),
  (handler[_0x36422e(0xc8)] = !![]),
  (handler[_0x36422e(0xad)] = null);
function _0xf4b3(_0x69f6bb, _0x4a4ca5) {
  const _0x2ff3d7 = _0x2ff3();
  return (
    (_0xf4b3 = function (_0xf4b38c, _0x59046a) {
      _0xf4b38c = _0xf4b38c - 0xa9;
      let _0x539ae4 = _0x2ff3d7[_0xf4b38c];
      return _0x539ae4;
    }),
    _0xf4b3(_0x69f6bb, _0x4a4ca5)
  );
}
export default handler;
