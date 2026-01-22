export function StyleLoader() {
  let StylePath = {
    NavPath: "Assets/css/nav.css",
    MainPath: "Assets/css/main.css",
    HeroPath: "Assets/css/hero.css",
    Rel: "Stylesheet",
  };

  let LinkList = [];



  const HtmlHead = document.querySelector("head");

  const Navtyle = document.createElement("link");
  const MainStyle = document.createElement("link");
  const HeroStyle = document.createElement("link");

  const linkMain = HtmlHead.appendChild(MainStyle);
  const linkNavHtml = HtmlHead.appendChild(Navtyle);
  const linkHero = HtmlHead.appendChild(HeroStyle);

  LinkList.push(linkHero,linkNavHtml,linkMain);
  
  
 
  for (let index = 0; index < LinkList.length; index++) {
    
    LinkList[index].rel = StylePath.Rel;
    
  }


  Navtyle.href = StylePath.NavPath;
  MainStyle.href = StylePath.MainPath;
  HeroStyle.href = StylePath.HeroPath;
}
