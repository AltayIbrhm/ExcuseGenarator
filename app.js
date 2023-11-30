
// import "./style.css";




window.onload = () => {
  //write your code here
  document.querySelector('#btn').addEventListener("click",() =>{
    document.querySelector('#the-excuse').innerHTML = generateExcuse();
  })
};

let generateExcuse = () => {
  
  let pronoun =   ['A','The',];
  let subject =   ['jogger',"racoon",'dog','driver','comedian','pincone'];
  let actions =   ['took my','threw my','yelled at my','stole my','bit my'];
  let possetion = ['homework','toe','car','shoe']
  let where =     ['on the street','in my house','in my driveway'];
  
  //let proIndex =Math.floor(Math.random() * pronoun.length);
  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * pronoun.length);
  let actionIndex = Math.floor(Math.random() * pronoun.length);
  let possetionIndex = Math.floor(Math.random() * pronoun.length);
  let whereIndex = Math.floor(Math.random() * pronoun.length);
  return pronoun[pronounIndex]+' '+subject[subjectIndex] + ' '+possetion[possetionIndex] +' '+actions[actionIndex]+' '+where[whereIndex];
}