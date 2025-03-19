document.getElementById("show-3d").addEventListener("click", ()=> {
    const model3d = document.getElementById("model-3d");
    const imagemMouse = document.querySelector(".imagem")
    const botaoFechar = document.querySelector("#show-3d .botao-fechar")
    const viewerIcon = document.querySelector("#show-3d .viewer-icon")
    const textoBotao = document.querySelector("#show-3d p")

    if(model3d.style.visibility == "visible"){
        // modelo escondido
        model3d.style.visibility = "hidden"
        document.querySelector(".carregando").style.visibility = "hidden"
        imagemMouse.style.visibility = "visible"
        botaoFechar.style.visibility = "hidden"
        viewerIcon.style.visibility = "visible"
        textoBotao.style.visibility = "visible"
    }
    else {
        // modelo visivel
        model3d.style.visibility = "visible"
        document.querySelector(".carregando").style.visibility = "visible"
        imagemMouse.style.visibility = "hidden"
        botaoFechar.style.visibility = "visible"
        viewerIcon.style.visibility = "hidden"
        textoBotao.style.visibility = "hidden"
    }
})

var listaImagens = [
  "images/mouse2_viper_sombra.png",
  "images/mouse2_frente_viper.png",
  "images/mouse2_cima_viper.png",
  "images/mouse2_atras_viper.png",
];
var indexImagem = 0;
var imagemPrincipal = document.querySelector(".imagem .mouse-viper");
var containersDeImagens = document.querySelectorAll(".imagem-container");
containersDeImagens.item(0).style.border = "2px solid #38c9ff";

document.querySelector(".seta2").addEventListener("click", () => {
    
  if (indexImagem == 3) {
    indexImagem = 0;
  } else {
    indexImagem += 1;
  }

  containersDeImagens.forEach((container) => {
    container.style.border = "0";
  });
  containersDeImagens.item(indexImagem).style.border = "2px solid #38c9ff";
  
  imagemPrincipal.src = listaImagens[indexImagem];
});

document.querySelector(".seta").addEventListener("click", () => {

  if (indexImagem == 0) {
    indexImagem = 3;
  } else {
    indexImagem -= 1;
  }
  containersDeImagens.forEach((container) => {
    container.style.border = "0";
  });
  containersDeImagens.item(indexImagem).style.border = "2px solid #38c9ff";
  
  imagemPrincipal.src = listaImagens[indexImagem];
});
