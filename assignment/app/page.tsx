"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import fetchItem from '@app/fetch-products'
import Items from "@components/Items"
import Spinner from "@components/spinner"
import { useEffect,useState } from 'react';

const Home = () => {
  
  
  return(
    <div>
    <Items/>
    <Spinner/>
    </div>
  )

  
}

export default Home
