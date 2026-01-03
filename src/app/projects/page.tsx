'use client'

import { useState } from 'react'
import Link from 'next/link'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Customer Sales Analysis Dashboard",
      category: "excel",
