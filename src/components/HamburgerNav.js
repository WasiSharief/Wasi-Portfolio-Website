import React, { useEffect } from "react";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import "../styles/mainStyle.css";
import NavList from "./NavList";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HamburgerNav({
  CurrentSection,
  SectionsRefs,
  scrollRef,
  MenuOpenF
}) {
  
  const [isOpen, setOpen] = useState(false);

  useEffect(()=> {

    MenuOpenF(true)
    }, [isOpen])


  return (
    <div className="HamContainer">
      <div className={`haminner-div ${isOpen ? "MoveIcon" : ""}`}>
        <GiHamburgerMenu
          color="white"
          size={35}
          onClick={() => setOpen(true)}
        />
      </div>
      <div className={`HamOuter-div ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <NavList
            scrollRef={scrollRef}
            SectionsRefs={SectionsRefs}
            CurrentSection={CurrentSection}
            setOpen={setOpen}
          ></NavList>
        )}
      </div>
    </div>
  );
}
