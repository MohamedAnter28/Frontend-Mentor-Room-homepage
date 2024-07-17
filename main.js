document.addEventListener("DOMContentLoaded", () => {
  var index = 0;
  const words = [
    [["Discover innovative ways to decorate"],["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."]],
    [["We are available all across the globe"],["With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."]],
    [["Manufactured with the best materials"],["Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."]]
  ];

  const para = document.querySelector(".paragraph")
  const title  = document.querySelector(".title")
  const next = document.querySelector(".next")
  const before = document.querySelector(".before")




  next.onclick = function() {
    index += 1;
    if (index === words.length) {
      index = 0;
    }
    title.textContent = words[index][0];
    para.textContent = words[index][1];


    if (index === 0){
      const style = document.createElement('style');
      style.textContent = `
      .container .row-1 .col-1::before {
        background: url("./desktop-image-hero-1.jpg") center center/cover no-repeat;
      }
    `;
    document.head.appendChild(style);
    }
  
  
    if (index === 0){
      const style = document.createElement('style');
      style.textContent = `
      .container .row-1 .col-1::before {
        background: url("./desktop-image-hero-1.jpg") center center/cover no-repeat;
      }
    `;
    document.head.appendChild(style);
    }
  
  
    if (index === 1){
      const style = document.createElement('style');
      style.textContent = `
      .container .row-1 .col-1::before {
        background: url("./desktop-image-hero-2.jpg") center center/cover no-repeat;
      }
    `;
    document.head.appendChild(style);
    }
  
    if (index === 2){
      const style = document.createElement('style');
      style.textContent = `
      .container .row-1 .col-1::before {
        background: url("./desktop-image-hero-3.jpg") center center/cover no-repeat;
      }
    `;
    document.head.appendChild(style);
    }
  };

  before.onclick = function() {
    index -= 1;
    if (index < 0) {
      index = words.length - 1;
    }
    title.textContent = words[index][0];
    para.textContent = words[index][1];

    if (index === 0){
      const style = document.createElement('style');
      style.textContent = `
      .container .row-1 .col-1::before {
        background: url("./desktop-image-hero-1.jpg") center center/cover no-repeat;
      }
    `;
    document.head.appendChild(style);
    }
  
  
    if (index === 1){
      const style = document.createElement('style');
      style.textContent = `
      .container .row-1 .col-1::before {
        background: url("./desktop-image-hero-2.jpg") center center/cover no-repeat;
      }
    `;
    document.head.appendChild(style);
    }
  
    if (index === 2){
      const style = document.createElement('style');
      style.textContent = `
      .container .row-1 .col-1::before {
        background: url("./desktop-image-hero-3.jpg") center center/cover no-repeat;
      }
    `;
    document.head.appendChild(style);
    }
  };
  
});



let index = 0;
const words = [
  [["Discover innovative ways to decorate"],["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."]],
  [["We are available all across the globe"],["With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."]],
  [["Manufactured with the best materials"],["Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."]]
];

const para = document.querySelector(".paragraph");
const title = document.querySelector(".title");
const next = document.querySelector(".next");
const before = document.querySelector(".before");

const updateContent = () => {
  title.textContent = words[index][0];
  para.textContent = words[index][1];

  const col1 = document.querySelector('.container .row-1 .col-1');
  col1.style.setProperty('--bg-image', `url("mobile-image-hero-${index + 1}.jpg")`);
};

const addGlobalStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    .container .row-1 .col-1::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--bg-image) center center/cover no-repeat;
    }
  `;
  document.head.appendChild(style);
};

addGlobalStyles();

window.addEventListener('resize', () => {
  if (window.innerWidth === 400) {
    index = 0;
    updateContent();
  }
});

next.addEventListener('click', () => {
  index = (index + 1) % words.length;
  updateContent();
});

before.addEventListener('click', () => {
  index = (index - 1 + words.length) % words.length;
  updateContent();
});

updateContent(); 


document.querySelector(".icon-res").onclick = function(){
  document.querySelector(".res-nav").classList.add("active")
}


document.querySelector(".close").onclick = function(){
  document.querySelector(".res-nav").classList.remove("active")
}