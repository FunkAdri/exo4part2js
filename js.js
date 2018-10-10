//On choppe l'élément par le nom (0=1 en js) puis on ajoute la fonction par click
document.getElementsByName('button')[0].addEventListener("click",function(){
//on change la value de chaque input du formulaire par du vide
  lastname.value="";
  firstname.value="";
  city.value="";
})
