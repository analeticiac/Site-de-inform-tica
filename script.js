/* ==========================================================
   INFORMÁTICA EDUCACIONAL
   script.js
   JavaScript ES6
   ========================================================== */

/* ==========================================================
   CARROSSEL DE IMAGENS
   ========================================================== */

   const slides = document.querySelectorAll(".slide");
   const nextBtn = document.querySelector(".next");
   const prevBtn = document.querySelector(".prev");
   
   let currentSlide = 0;
   let autoSlide;
   
   /* Mostrar Slide */
   function showSlide(index){
   
       slides.forEach(slide=>{
           slide.classList.remove("active");
       });
   
       slides[index].classList.add("active");
   }
   
   /* Próximo Slide */
   function nextSlide(){
   
       currentSlide++;
   
       if(currentSlide >= slides.length){
           currentSlide = 0;
       }
   
       showSlide(currentSlide);
   }
   
   /* Slide Anterior */
   function prevSlide(){
   
       currentSlide--;
   
       if(currentSlide < 0){
           currentSlide = slides.length - 1;
       }
   
       showSlide(currentSlide);
   }
   
   /* Eventos Botões */
   if(nextBtn){
       nextBtn.addEventListener("click", ()=>{
           nextSlide();
           resetAutoSlide();
       });
   }
   
   if(prevBtn){
       prevBtn.addEventListener("click", ()=>{
           prevSlide();
           resetAutoSlide();
       });
   }
   
   /* Automático */
   function startAutoSlide(){
       autoSlide = setInterval(nextSlide, 5000);
   }
   
   function resetAutoSlide(){
       clearInterval(autoSlide);
       startAutoSlide();
   }
   
   startAutoSlide();
   
   /* ==========================================================
      SCROLL SUAVE MENU
      ========================================================== */
   
   const menuLinks = document.querySelectorAll(".menu a");
   
   menuLinks.forEach(link => {
   
       link.addEventListener("click", function(e){
   
           e.preventDefault();
   
           const section = document.querySelector(
               this.getAttribute("href")
           );
   
           if(section){
   
               window.scrollTo({
                   top: section.offsetTop - 80,
                   behavior: "smooth"
               });
   
           }
   
       });
   
   });
   
   /* ==========================================================
      BOTÃO VOLTAR AO TOPO
      ========================================================== */
   
   const topButton = document.createElement("button");
   
   topButton.id = "topButton";
   topButton.innerHTML = "↑";
   
   document.body.appendChild(topButton);
   
   window.addEventListener("scroll", ()=>{
   
       if(window.scrollY > 300){
   
           topButton.style.display = "block";
   
       }else{
   
           topButton.style.display = "none";
   
       }
   
   });
   
   topButton.addEventListener("click", ()=>{
   
       window.scrollTo({
           top:0,
           behavior:"smooth"
       });
   
   });
   
   /* ==========================================================
      ANIMAÇÕES AO ROLAR
      ========================================================== */
   
   const fadeElements = document.querySelectorAll(
       ".content-section, .card, .form-section"
   );
   
   function revealElements(){
   
       fadeElements.forEach(element=>{
   
           const position =
               element.getBoundingClientRect().top;
   
           const screen =
               window.innerHeight - 100;
   
           if(position < screen){
   
               element.classList.add("show");
   
           }
   
       });
   
   }
   
   window.addEventListener("scroll", revealElements);
   revealElements();
   
   /* ==========================================================
      FORMULÁRIO
      ========================================================== */
   
   const form = document.getElementById("cadastroForm");
   
   const nome = document.getElementById("nome");
   const idade = document.getElementById("idade");
   const endereco = document.getElementById("endereco");
   const telefone = document.getElementById("telefone");
   
   const mensagem =
   document.getElementById("mensagem");
   
   /* ==========================================================
      EXPRESSÕES REGULARES
      ========================================================== */
   
   const regexNome =
   /^[A-Za-zÀ-ÿ\s]{1,50}$/;
   
   const regexIdade =
   /^\d{1,3}$/;
   
   const regexEndereco =
   /^[A-Za-zÀ-ÿ0-9\s.,\-]{1,50}$/;
   
   const regexTelefone =
   /^\d{1,11}$/;
   
   /* ==========================================================
      FUNÇÕES AUXILIARES
      ========================================================== */
   
   function erro(msg){
   
       mensagem.textContent = msg;
       mensagem.classList.remove("sucesso");
       mensagem.classList.add("erro");
   
   }
   
   function sucesso(msg){
   
       mensagem.textContent = msg;
       mensagem.classList.remove("erro");
       mensagem.classList.add("sucesso");
   
   }
   
   function limparMensagem(){
   
       mensagem.textContent = "";
   
   }
   
   /* ==========================================================
      VALIDAÇÃO NOME
      ========================================================== */
   
   function validarNome(){
   
       if(!regexNome.test(nome.value.trim())){
   
           erro(
               "Digite um nome válido (máximo 50 caracteres)."
           );
   
           return false;
   
       }
   
       return true;
   
   }
   
   /* ==========================================================
      VALIDAÇÃO IDADE
      ========================================================== */
   
   function validarIdade(){
   
       if(!regexIdade.test(idade.value.trim())){
   
           erro(
               "A idade deve conter apenas números e até 3 dígitos."
           );
   
           return false;
   
       }
   
       return true;
   
   }
   
   /* ==========================================================
      VALIDAÇÃO ENDEREÇO
      ========================================================== */
   
   function validarEndereco(){
   
       if(!regexEndereco.test(endereco.value.trim())){
   
           erro(
               "Digite um endereço válido."
           );
   
           return false;
   
       }
   
       return true;
   
   }
   
   /* ==========================================================
      VALIDAÇÃO TELEFONE
      ========================================================== */
   
   function validarTelefone(){
   
       if(!regexTelefone.test(telefone.value.trim())){
   
           erro(
               "Digite apenas números no telefone (máximo 11 dígitos)."
           );
   
           return false;
   
       }
   
       return true;
   
   }
   
   /* ==========================================================
      MÁSCARAS
      ========================================================== */
   
   idade.addEventListener("input", ()=>{
   
       idade.value =
       idade.value.replace(/\D/g,"");
   
   });
   
   telefone.addEventListener("input", ()=>{
   
       telefone.value =
       telefone.value.replace(/\D/g,"");
   
   });
   
   nome.addEventListener("input", ()=>{
   
       limparMensagem();
   
   });
   
   idade.addEventListener("input", ()=>{
   
       limparMensagem();
   
   });
   
   endereco.addEventListener("input", ()=>{
   
       limparMensagem();
   
   });
   
   telefone.addEventListener("input", ()=>{
   
       limparMensagem();
   
   });
   
   /* ==========================================================
      URL GOOGLE APPS SCRIPT
      ========================================================== */
   
   /*
      Cole aqui sua URL publicada
      do Google Apps Script
   */
   
   const GOOGLE_SCRIPT_URL =
   "https://SEU-LINK-AQUI";
   
   /* ==========================================================
      ENVIO FORMULÁRIO
      ========================================================== */
   
   form.addEventListener(
       "submit",
       async function(event){
   
       event.preventDefault();
   
       limparMensagem();
   
       if(!validarNome()) return;
       if(!validarIdade()) return;
       if(!validarEndereco()) return;
       if(!validarTelefone()) return;
   
       const dados = {
   
           nome: nome.value.trim(),
           idade: idade.value.trim(),
           endereco: endereco.value.trim(),
           telefone: telefone.value.trim()
   
       };
   
       try{
   
           sucesso(
               "Enviando cadastro..."
           );
   
           const resposta =
           await fetch(
               GOOGLE_SCRIPT_URL,
               {
                   method:"POST",
   
                   headers:{
                       "Content-Type":
                       "application/json"
                   },
   
                   body:JSON.stringify(dados)
               }
           );
   
           if(!resposta.ok){
   
               throw new Error(
                   "Falha no envio."
               );
   
           }
   
           const resultado =
           await resposta.text();
   
           console.log(resultado);
   
           sucesso(
               "Cadastro enviado com sucesso!"
           );
   
           form.reset();
   
       }
       catch(error){
   
           console.error(error);
   
           erro(
               "Erro ao enviar os dados. Tente novamente."
           );
   
       }
   
   });
   
   /* ==========================================================
      CONTADOR DE VISITAS LOCAL
      ========================================================== */
   
   let visitas =
   localStorage.getItem("visitas");
   
   if(!visitas){
   
       visitas = 1;
   
   }else{
   
       visitas = parseInt(visitas) + 1;
   
   }
   
   localStorage.setItem(
       "visitas",
       visitas
   );
   
   console.log(
       `Visitas locais: ${visitas}`
   );
   
   /* ==========================================================
      DATA E HORA
      ========================================================== */
   
   function atualizarHorario(){
   
       const agora = new Date();
   
       console.log(
           agora.toLocaleString("pt-BR")
       );
   
   }
   
   setInterval(
       atualizarHorario,
       60000
   );
   
   /* ==========================================================
      EFEITO HEADER
      ========================================================== */
   
   const navbar =
   document.querySelector(".navbar");
   
   window.addEventListener("scroll", ()=>{
   
       if(window.scrollY > 50){
   
           navbar.style.background =
           "#08306b";
   
       }else{
   
           navbar.style.background =
           "#0d47a1";
   
       }
   
   });
   
   /* ==========================================================
      PRÉ-CARREGAMENTO DE IMAGENS
      ========================================================== */
   
   window.addEventListener("load", ()=>{
   
       console.log(
           "Site carregado com sucesso."
       );
   
   });
   
   /* ==========================================================
      FIM DO ARQUIVO
      ========================================================== */