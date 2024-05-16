import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/layout/index.js"
const inter = Inter({ subsets: ["latin"] });
import Card from '/components/cards/card.js'

export default function Home() {
  return (
    <>
    {/* banner */}
      <div id="lista-personaggi">
        <a href="products.js"><Card class="product"/></a>
        <Card class="product"/>
        <Card class="product"/>
        <Card class="product"/>
        <Card class="product"/>
        <Card class="product"/>
        <Card class="product"/>
        <Card class="product"/>
      </div>
	  </>
  );
}

//const episodedata = await fetchGraphql

//le static props devono essere
//rebuildate per cambiare valore
// a divverenza delle server side props