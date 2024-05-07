import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/layout/index.js"
const inter = Inter({ subsets: ["latin"] });
import Card from '/components/cards/card.js'

export default function Home() {
  return (
    <>
      <div id="lista-personaggi">
        <Card class="product"/>
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
