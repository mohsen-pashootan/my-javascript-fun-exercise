// let FullList = [];
// fetch("https://my-json-server.typicode.com/bemaxima/fake-api/movies")
//   .then((res) => res.Json())
//   .then((items) => {
//     FullList = [...items];

//     // document.getElementById("main-ul").innerHTML = FullList;
//   });
// console.log(FullList);
let FullList = [];
const BODY = document.getElementById("main-body");
const SORTID = document.getElementById("sort-id");
const SORTNAME = document.getElementById("sort-name");
const SORTRATE = document.getElementById("sort-rate");
const SORTDESCRIPTION = document.getElementById("sort-description");

function renderList(item) {
  BODY.innerHTML = "";
  FullList.forEach((item) => {
    const tr = builder.creat("tr").appendTo(BODY);

    const td1 = builder.creat("td").text(item.id).appendTo(tr);

    const td2 = builder.creat("td").text(item.name).appendTo(tr);

    const td3 = builder.creat("td").text(item.rate).appendTo(tr);

    const td4 = builder.creat("td").text(item.description).appendTo(tr);
  });
}

function ElementBuilder(elem) {
  this.element = document.createElement(elem);

  this.text = function (text) {
    this.element.textContent = text;
    return this;
  };

  this.appendTo = function (parent) {
    if (parent instanceof ElementBuilder) {
      parent.build().appendChild(this.element);
    } else {
      parent.appendChild(this.element);
    }
    return this;
  };
  this.build = function () {
    return this.element;
  };
}

const builder = {
  creat: function (name) {
    return new ElementBuilder(name);
  },
};

fetch("https://my-json-server.typicode.com/bemaxima/fake-api/movies")
  .then((response) => response.json())
  .then((items) => {
    FullList = [...items];

    renderList(items);
  });

SORTID.addEventListener("click", () => {
  console.log("click");
  console.log(FullList);

  FullList.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    } else if (a.id < b.id) {
      return -1;
    } else {
      return 0;
    }
  });
  renderList(FullList);
});
SORTNAME.addEventListener("click", () => {
  console.log("click");
  console.log(FullList);

  FullList.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  });
  renderList(FullList);
});
SORTRATE.addEventListener("click", () => {
  console.log("click");
  console.log(FullList);

  FullList.sort((a, b) => {
    if (a.rate > b.rate) {
      return 1;
    } else if (a.rate < b.rate) {
      return -1;
    } else {
      return 0;
    }
  });
  renderList(FullList);
});
SORTDESCRIPTION.addEventListener("click", () => {
  console.log("click");
  console.log(FullList);

  FullList.sort((a, b) => {
    if (a.description > b.description) {
      return 1;
    } else if (a.description < b.description) {
      return -1;
    } else {
      return 0;
    }
  });
  renderList(FullList);
});
