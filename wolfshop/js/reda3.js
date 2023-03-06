//___________________famme.html_________________________//
var h = 0;
var t_prix = 0;
var st = 0;
var st12 = 0;
var st13 = 0;
var st14 = 0;
var st15 = 0;
var st16 = 0;
var st17 = 0;
var st18 = 0;
var st19 = 0;

function red11() {
  const z = document.getElementsByClassName("div11");
  z[0].remove();
  h--;
  document.getElementById("f").innerHTML = h;
  t_prix = t_prix - st;
  document.getElementById("t_prix").innerHTML = "$" + t_prix;
}
function red12() {
  const z = document.getElementsByClassName("div12");
  z[0].remove();
  h--;
  document.getElementById("f").innerHTML = h;
  t_prix = t_prix - st12;
  document.getElementById("t_prix").innerHTML = "$" + t_prix;
}
function red13() {
  const z = document.getElementsByClassName("div13");
  z[0].remove();
  h--;
  document.getElementById("f").innerHTML = h;
  t_prix = t_prix - st13;
  document.getElementById("t_prix").innerHTML = "$" + t_prix;
}
function red14() {
  const z = document.getElementsByClassName("div14");
  z[0].remove();
  h--;
  document.getElementById("f").innerHTML = h;
  t_prix = t_prix - st14;
  document.getElementById("t_prix").innerHTML = "$" + t_prix;
}
function red15() {
  const z = document.getElementsByClassName("div15");
  z[0].remove();
  h--;
  document.getElementById("f").innerHTML = h;
  t_prix = t_prix - st15;
  document.getElementById("t_prix").innerHTML = "$" + t_prix;
}
function red16() {
  const z = document.getElementsByClassName("div16");
  z[0].remove();
  h--;
  document.getElementById("f").innerHTML = h;
  t_prix = t_prix - st16;
  document.getElementById("t_prix").innerHTML = "$" + t_prix;
}
function red17() {
  const z = document.getElementsByClassName("div17");
  z[0].remove();
  h--;
  document.getElementById("f").innerHTML = h;
  t_prix = t_prix - st17;
  document.getElementById("t_prix").innerHTML = "$" + t_prix;
}

function red18() {
  const z = document.getElementsByClassName("div18");
  z[0].remove();
  h--;
  document.getElementById("f").innerHTML = h;
  t_prix = t_prix - st18;
  document.getElementById("t_prix").innerHTML = "$" + t_prix;
}
function red19() {
  const z = document.getElementsByClassName("div19");
  z[0].remove();
  h--;
  document.getElementById("f").innerHTML = h;
  t_prix = t_prix - st19;
  document.getElementById("t_prix").innerHTML = "$" + t_prix;
}

//_________famme.html__________________

//_______img11__________________

function add11() {
  var qts = document.getElementById("qts").value;
  var prix11 = 35;
  st = qts * prix11;
  const k = document.createElement("nav");
  k.className = "div11";
  const x = document.createElement("img");
  const s = document.createElement("h4");
  const y = document.createTextNode("Angleterre 2022/2023 stadium");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("prix : $" + st);
  const a = document.createElement("button");
  const f = document.createElement("h6");
  const ff = document.createTextNode("QTS : " + qts);

  a.addEventListener("click", red11);
  const aa = document.createElement("i");
  aa.className = "ti-close";
  const t = document.createElement("br");
  x.src = "imagekids/1.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  f.appendChild(ff);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(f);
  k.appendChild(t);
  k.appendChild(a);
  h++;
  t_prix = t_prix + st;
  document.getElementById("f").innerHTML = h;
  document.getElementById("t_prix").innerHTML = "$" + t_prix;
  const ele = document.getElementById("s");
  ele.appendChild(k);
}

//_______img12__________________

function add12() {
  var qts12 = document.getElementById("qts12").value;
  var prix12 = 35;
  st12 = qts12 * prix12;
  const k = document.createElement("nav");
  k.className = "div12";
  const x = document.createElement("img");
  const s = document.createElement("h4");
  const y = document.createTextNode("FFF 2022/23 Domicile");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("prix : $" + st12);
  const a = document.createElement("button");
  const f = document.createElement("h6");
  const ff = document.createTextNode("QTS : " + qts12);
  a.addEventListener("click", red12);
  const aa = document.createElement("i");
  aa.className = "ti-close";
  const t = document.createElement("br");
  x.src = "imagekids/2.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  f.appendChild(ff);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(f);
  k.appendChild(t);
  k.appendChild(a);
  h++;
  t_prix = t_prix + st12;
  document.getElementById("f").innerHTML = h;
  document.getElementById("t_prix").innerHTML = "$" + t_prix;
  const ele = document.getElementById("s");
  ele.appendChild(k);
}

//_______img13__________________

function add13() {
  var qts13 = document.getElementById("qts13").value;
  var prix13 = 40;
  st13 = qts13 * prix13;
  const k = document.createElement("nav");
  k.className = "div13";
  const x = document.createElement("img");
  const s = document.createElement("h4");
  const y = document.createTextNode("Brésil 2022/23 Domicile");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("prix : $" + st13);
  const a = document.createElement("button");
  const f = document.createElement("h6");
  const ff = document.createTextNode("QTS : " + qts13);
  a.addEventListener("click", red13);
  const aa = document.createElement("i");
  aa.className = "ti-close";
  const t = document.createElement("br");
  x.src = "imagekids/3.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  f.appendChild(ff);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(f);
  k.appendChild(t);
  k.appendChild(a);
  h++;
  t_prix = t_prix + st13;
  document.getElementById("f").innerHTML = h;
  document.getElementById("t_prix").innerHTML = "$" + t_prix;
  const ele = document.getElementById("s");
  ele.appendChild(k);
}

//_______img14__________________

function add14() {
  var qts14 = document.getElementById("qts14").value;
  var prix14 = 64;
  st14 = qts14 * prix14;
  const k = document.createElement("nav");
  k.className = "div14";
  const x = document.createElement("img");
  const s = document.createElement("h4");
  const y = document.createTextNode("Liverpool FC Strike");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("prix : $" + st14);
  const a = document.createElement("button");
  const f = document.createElement("h6");
  const ff = document.createTextNode("QTS : " + qts14);
  a.addEventListener("click", red14);
  const aa = document.createElement("i");
  aa.className = "ti-close";
  const t = document.createElement("br");
  x.src = "imagekids/10.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  f.appendChild(ff);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(f);
  k.appendChild(t);
  k.appendChild(a);
  h++;
  t_prix = t_prix + st14;
  document.getElementById("f").innerHTML = h;
  document.getElementById("t_prix").innerHTML = "$" + t_prix;
  const ele = document.getElementById("s");
  ele.appendChild(k);
}

//_______img15__________________

function add15() {
  var qts15 = document.getElementById("qts15").value;
  var prix15 = 35;
  st15 = qts15 * prix15;
  const k = document.createElement("nav");
  k.className = "div15";
  const x = document.createElement("img");
  const s = document.createElement("h4");
  const y = document.createTextNode("Atlético Madrid Strike");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("prix : $" + st15);
  const a = document.createElement("button");
  const f = document.createElement("h6");
  const ff = document.createTextNode("QTS : " + qts15);
  a.addEventListener("click", red15);
  const aa = document.createElement("i");
  aa.className = "ti-close";
  const t = document.createElement("br");
  x.src = "imagekids/5.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  f.appendChild(ff);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(f);
  k.appendChild(t);
  k.appendChild(a);
  h++;
  t_prix = t_prix + st15;
  document.getElementById("f").innerHTML = h;
  document.getElementById("t_prix").innerHTML = "$" + t_prix;
  const ele = document.getElementById("s");
  ele.appendChild(k);
}

//_______img16__________________

function add16() {
  var qts16 = document.getElementById("qts16").value;
  var prix16 = 54;
  st16 = qts16 * prix16;
  const k = document.createElement("nav");
  k.className = "div16";
  const x = document.createElement("img");
  const s = document.createElement("h4");
  const y = document.createTextNode("FC Barcelona Strike");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("prix : $" + st16);
  const a = document.createElement("button");
  const f = document.createElement("h6");
  const ff = document.createTextNode("QTS : " + qts16);
  a.addEventListener("click", red16);
  const aa = document.createElement("i");
  aa.className = "ti-close";
  const t = document.createElement("br");
  x.src = "imagekids/11.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  f.appendChild(ff);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(f);
  k.appendChild(t);
  k.appendChild(a);
  h++;
  t_prix = t_prix + st16;
  document.getElementById("f").innerHTML = h;
  document.getElementById("t_prix").innerHTML = "$" + t_prix;
  const ele = document.getElementById("s");
  ele.appendChild(k);
}

//_______img17__________________

function add17() {
  var qts17 = document.getElementById("qts17").value;
  var prix17 = 70;
  st17 = qts17 * prix17;
  const k = document.createElement("nav");
  k.className = "div17";
  const x = document.createElement("img");
  const s = document.createElement("h4");
  const y = document.createTextNode("Nike Jr. Phantom GX");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("prix : $" + st17);
  const a = document.createElement("button");
  const f = document.createElement("h6");
  const ff = document.createTextNode("QTS : " + qts17);
  a.addEventListener("click", red17);
  const aa = document.createElement("i");
  aa.className = "ti-close";
  const t = document.createElement("br");
  x.src = "imagekids/7.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  f.appendChild(ff);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(f);
  k.appendChild(t);
  k.appendChild(a);
  h++;
  t_prix = t_prix + st17;
  document.getElementById("f").innerHTML = h;
  document.getElementById("t_prix").innerHTML = "$" + t_prix;
  const ele = document.getElementById("s");
  ele.appendChild(k);
}

//_______img18__________________

function add18() {
  var qts18 = document.getElementById("qts18").value;
  var prix18 = 70;
  st18 = qts18 * prix18;
  const k = document.createElement("nav");
  k.className = "div18";
  const x = document.createElement("img");
  const s = document.createElement("h4");
  const y = document.createTextNode("Nike Jr. Tiempo Legend 9");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("prix : $" + st18);
  const a = document.createElement("button");
  const f = document.createElement("h6");
  const ff = document.createTextNode("QTS : " + qts18);
  a.addEventListener("click", red18);
  const aa = document.createElement("i");
  aa.className = "ti-close";
  const t = document.createElement("br");
  x.src = "imagekids/8.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  f.appendChild(ff);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(f);
  k.appendChild(t);
  k.appendChild(a);
  h++;
  t_prix = t_prix + st18;
  document.getElementById("f").innerHTML = h;
  document.getElementById("t_prix").innerHTML = "$" + t_prix;
  const ele = document.getElementById("s");
  ele.appendChild(k);
}

//_______img19__________________

function add19() {
  var qts19 = document.getElementById("qts19").value;
  var prix19 = 70;
  st19 = qts19 * prix19;
  const k = document.createElement("nav");
  k.className = "div19";
  const x = document.createElement("img");
  const s = document.createElement("h4");
  const y = document.createTextNode("Nike Jr. Zoom Mercurial");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("prix : $" + st19);
  const a = document.createElement("button");
  const f = document.createElement("h6");
  const ff = document.createTextNode("QTS : " + qts19);
  a.addEventListener("click", red19);
  const aa = document.createElement("i");
  aa.className = "ti-close";
  const t = document.createElement("br");
  x.src = "imagekids/9.jfif";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  f.appendChild(ff);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(f);
  k.appendChild(t);
  k.appendChild(a);
  h++;
  t_prix = t_prix + st19;
  document.getElementById("f").innerHTML = h;
  document.getElementById("t_prix").innerHTML = "$" + t_prix;
  const ele = document.getElementById("s");
  ele.appendChild(k);
}
