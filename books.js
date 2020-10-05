const express = require("express");
const rout = express.Router();


const bookList = [  {author:"Guillaume Debré	",title:"L'affaire Lafayette	",category:"roman historique"},
                    {author:"Gérald Messadié	",title:"La conspiration Jeanne d'Arc	",category:"roman historique "},
                    {author:"J.R.R. Tolkien	",title:"Le Seigneur des anneaux	",category:"fantasy"},
                    {author:"Michael Ende	",title:"L'Histoire sans fin	",category:"fantasy"},
                    {author:"Andrzej Sapkowski	",title:"Le Sorceleur	",category:"fantasy"},
                    {author:"George R. R. Martin	",title:"Le Trône de fer	",category:"fantasy"},
                    {author:"Hervé Bazin	",title:"Vipère au poing	",category:"autobiographie"},
                    {author:"Marie Cardinal	",title:"Les mots pour le dire	",category:"autobiographie"},
                    {author:"Giacomo Casanova	",title:"Histoire de ma vie	",category:"autobiographie"},
                    {author:"Tahri moussa",title:"Si tout va mal ,bois de l'eau",category:"autobiographie"},
                    {author:"Tahri moussa",title:"le turquois c'est beau",category:"roman historique"}
                ];

rout.get("/",(req,res) =>{
  res.redirect("/static/search.html");
});

rout.post("/books/list", (req,res) => {
  const categoryNom = req.body.selection;
  let list = [];
  bookList.forEach(function(elem){
    if(elem.category === categoryNom){
      list.push({author:elem.author , title:elem.title , category:elem.category});
    }
  });

  res.render("list",{
    list: list,
    categoryNom: categoryNom
  });
});

module.exports = rout;



