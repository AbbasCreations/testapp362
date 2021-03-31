import React, { Suspense, useState, useEffect } from "react";
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
import * as API from "../API";
import { useStateValue } from "../StateProvider";
import * as cC from "./category/categoryController";
import { useParams } from "react-router";
import prodData from "./prodData.json";

let attempt = 0;
let texono = [];
export let taxonomy = [];
export let allProducts = [];

const prods = [
  "page=4",
  "sortOrder=asc",
  "datePosted=all-time",
  "sortOrder=desc",
  "pakistan=desc",
  "kispak",
  "pat=desc",
];

export default function Test() {
  const refineSearch = (e) => {
    e.preventDefault();
    let text = "^" + e.target.value;
    const regex = new RegExp(text);
    const matches = prods.filter((product) => regex.test(product));
    console.log("mmmmmmmmmmmmmmmmmmm");

    console.log(matches);
  };

  return (
    <input
      type="text"
      onChange={(e) => {
        refineSearch(e);
      }}
    />
  );
}
