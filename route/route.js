const route=require("express").Router();
const {adddata,addmultipledata,x,listalldata,listexperiencegt2,listsalarymoret30k,listexpmthn1ndgradafter15,chng70kto65k,dellastcompanyy}=require("../Controller/student")

route.post('/adddata',adddata)
route.post('/addmultipledata',addmultipledata)
route.post("/x",x)
route.get("/listalldata",listalldata);
route.get("/listsalarymoret30k",listsalarymoret30k);
route.get("/listexperiencegt2",listexperiencegt2);
route.get("/listexpmthn1ndgradafter15",listexpmthn1ndgradafter15)
route.put("/chng70kto65k",chng70kto65k)
route.delete("/dellastcompanyy",dellastcompanyy)
module.exports=route;
