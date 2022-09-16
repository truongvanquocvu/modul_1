function nhapvao(){
  let sotien;
  let from;
  let to;
  let kq;
  if (from=='VND' && to=='USD'){
    kq=sotien/23000;
  }
  if(from==usd&& to ==VND){
    kq=sotien*23000
  }
  if (from==to){
    kq=sotien;
  }
}