let myHeader = document.createElement('div');
let myLogo = document.createElement('h1');
let myNav = document.createElement('nav');
let myUl = document.createElement('ul');
let myLi1 = document.createElement('li');
let myLi2 = document.createElement('li'); 
let myLi3 = document.createElement('li');
let myLi4 = document.createElement('li');
let myLi1Text = document.createTextNode('Home');
let myLi2Text = document.createTextNode('About');
let myLi3Text = document.createTextNode('Services');
let myLi4Text = document.createTextNode('Contact');

myLi1.appendChild(myLi1Text);
myLi2.appendChild(myLi2Text);
myLi3.appendChild(myLi3Text);
myLi4.appendChild(myLi4Text);

myUl.appendChild(myLi1);
myUl.appendChild(myLi2);
myUl.appendChild(myLi3);
myUl.appendChild(myLi4);

myNav.appendChild(myUl);

myLogo.innerHTML = 'Khalil';
myHeader.appendChild(myLogo);
myHeader.appendChild(myNav);


document.body.appendChild(myHeader);
// style the header 
myHeader.style.backgroundColor = 'white';
myHeader.style.padding = '5px 20px';
myHeader.style.display = 'flex';
myHeader.style.justifyContent = 'space-between';
myHeader.style.alignItems = 'center';
myUl.style.display = 'flex';
myUl.style.listStyle = 'none';
myUl.style.padding = '0';
myUl.style.margin = '0';
myLi1.style.margin = '0 10px';
myLi2.style.margin = '0 10px';
myLi3.style.margin = '0 10px';
myLi4.style.margin = '0 10px';

let myMain = document.createElement('main');
let myContainer = document.createElement('div');
for (let i = 0; i < 15; i++) {
    let myArticle = document.createElement('article');
    let myH2 = document.createElement('h2');
    let myP = document.createElement('p');
    let myH2Text = document.createTextNode(`${i+1} `);
    let myPText = document.createTextNode('Product');
    myH2.appendChild(myH2Text);
    myP.appendChild(myPText);
    myArticle.appendChild(myH2);
    myArticle.appendChild(myP);
    myArticle.style.backgroundColor = 'white';
    myArticle.style.padding = '20px';
    myArticle.style.borderRadius = '5px';
    myArticle.style.boxShadow = '0 0 5px rgba(0,0,0,0.1)';
    myArticle.style.textAlign = 'center';
    myContainer.appendChild(myArticle);
}

myMain.appendChild(myContainer);
document.body.appendChild(myMain);

myContainer.style.display = 'grid';
myContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
myContainer.style.gridGap = '10px';
myContainer.style.padding = '20px';
myContainer.style.margin = '0';
myContainer.style.backgroundColor = '#f2f2f2';














let myFooter = document.createElement('footer');
let myFooterText = document.createTextNode('CopyRight 2024');


myFooter.appendChild(myFooterText);
document.body.appendChild(myFooter);
myFooter.style.backgroundColor = 'green';
myFooter.style.color = 'white';
myFooter.style.padding = '20px';
myFooter.style.textAlign = 'center';
