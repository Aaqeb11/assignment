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
import { useEffect,useState } from 'react';

const Home = () => {
  
  
  return(
    <div>
    <Items/>
    </div>
  )

  
}

export default Home
