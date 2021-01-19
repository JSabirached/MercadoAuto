module.exports ={
    index : (req,res)=>{
        res.render('home',{title : "Mercado autos", mensaje :"Bienvenido a mi sitio"}
    )},
    about : function(req,res){
        res.render('about')
    },
    autos : function(req,res){
        res.render('autos')
    }
}