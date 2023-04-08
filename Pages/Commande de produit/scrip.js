function whatsapp(){
    var nomComplet = document.getElementById("nomComplet").value;
    var numeroTel = document.getElementById("numeroTel").value;
    
    var whatsappurl = "https://wa.me/94141804?text=" 
    +"Nom du produit:"+"Jus de Cajou"+"%0a"
    +"Nom:"+ nomComplet+"%0a"
    +"Numéro de téléphone:"+ numeroTel+"%0a"
    window.open(whatsappurl,"_blank").focus();
}