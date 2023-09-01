'use client'
import { useState } from "react";
import ContainerDefault from "../../container/page";

function Header({ setToggler }: any) {
  return (
    <ContainerDefault>
      <div
        onClick={() => {
          setToggler(true);
        }}
      >
        sideToggler
      </div>
      <div>search</div>
      <div>title</div>
    </ContainerDefault>
  );
}

export default Header;
