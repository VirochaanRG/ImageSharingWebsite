import React, {useEffect, useState, useRef} from 'react'
import {HiMenu } from 'react-icons/hi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {Link, Route, Routes} from 'react-router-dom'

import {Sidebar, UserProfile} from '../components/index';
import {client } from '../client'
import logo from '../assets/codegramlogo.png'
import Pins from './Pins'

const Home = () => {
  return (
    <div>
      Home
    </div>
  )
}

export default Home