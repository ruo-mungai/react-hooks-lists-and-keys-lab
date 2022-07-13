import React from "react";

function NavBar() {
  const symbol='#'
  const links = ["home", "about", "projects"];
  const linksElement= links.map((linksArr,index)=>{
    return <a key={index} href={symbol +linksArr}>{linksArr}</a>
    
  })

  return <nav>{linksElement}</nav>;
}

export default NavBar;
