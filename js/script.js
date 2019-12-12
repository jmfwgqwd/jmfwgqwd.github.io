/*
https://github.com/daybrush/scenejs
*/
Scene.setAlias("ty", ["transform", "translateY"]);
Scene.setAlias("rotate", ["transform", "rotate"]);
Scene.setAlias("scale", ["transform", "scale"]);

function createSnows(num) {
  const snows = [];

  for (var i = num; i >= 1; --i) {
    snows.push(`<div class="snow particle particle${i}" style="left: ${10 + i % 8 * 11}%"></div>`);
  }
  return snows.join("");
}
snows.innerHTML = createSnows(40);


const scene = new Scene({
  ".manman": {
    0: {
      scale: 0,
      rotate: "-20deg" },

    1: {
      scale: 0.8 } },


  ".manman .arm": i => ({
    0: {
      ty: "30px",
      rotate: `${i ? "" : "-"}40deg` },

    1: {
      rotate: `${i ? "" : "-"}60deg` },

    options: {
      direction: "alternate",
      iterationCount: "infinite" } }),


  ".qiqi": {
    0.1: {
      scale: 0,
      rotate: "20deg" },

    1.1: {
      scale: 0.8 } },


  ".qiqi .arm": i => ({
    0: {
      ty: "30px",
      rotate: `${i ? "" : "-"}50deg` },

    1: {
      rotate: `${i ? "" : "-"}70deg` },

    options: {
      direction: "alternate",
      iterationCount: "infinite" } }),


  ".sally": {
    0.2: {
      scale: 0,
      rotate: "20deg" },

    1.2: {
      scale: 1 } },


  ".sally .wing": {
    0: {
      rotate: "30deg" },

    1: {
      rotate: "10deg" },

    options: {
      direction: "alternate",
      iterationCount: "infinite" } },


  ".snow.particle": () => ({
    0: {
      ty: "-4vh",
      rotate: "0deg" },

    10: {
      ty: "104vh",
      rotate: "1080deg" },

    options: {
      delay: Math.random() * 10,
      easing: Scene.LINEAR,
      iterationCount: "infinite" } }) },


{
  selector: true,
  easing: Scene.EASE_IN_OUT });




function createCharacters(target, chrs, no, rotate) {
  target.innerHTML = chrs.split("").map(chr => `<span data-character="${chr}"></span>`).join("");

  scene.set({
    [`#${target.id} span`]: i => ({
      0: {
        transform: "translate(-50%, -50%)",
        rotate: `${rotate + 20}deg`,
        opacity: 0 },

      0.5: {
        opacity: 1 },

      1: {
        rotate: `${rotate + i * (7 - no * 0.8)}deg` },

      options: {
        delay: 0.5 + no * 1.5 } }) });



}

createCharacters(characters1, "2018. 12. 25", 0, 0);
createCharacters(characters2, "Year-End Party", 1, -50);
createCharacters(characters3, "Christmas", 2, -5);
scene.playCSS();