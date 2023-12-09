import React from 'react'
import Card from './Card'
import { useRef } from 'react'
function ForeGround() {
    const data = [
        {
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi.",
            "fileSize": ".9mb",
            "close": true,
            "tag": {isOpen:true,tagTitle:"Download",tagColor:"green"}   
        },
        {
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi.",
            "fileSize": ".6mb",
            "close": true,
            "tag": {isOpen:true,tagTitle:"Hello",tagColor:"Red"}   
        },
        {
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi.",
            "fileSize": ".3mb",
            "close": false,
            "tag": {isOpen:false,tagTitle:"Download",tagColor:"green"}   
        },
        {
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi.",
            "fileSize": ".3mb",
            "close": false,
            "tag": {isOpen:false,tagTitle:"Download",tagColor:"green"}   
        },
        {
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi.",
            "fileSize": ".3mb",
            "close": false,
            "tag": {isOpen:false,tagTitle:"Download",tagColor:"green"}   
        },
        {
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi.",
            "fileSize": ".6mb",
            "close": true,
            "tag": {isOpen:true,tagTitle:"Hello",tagColor:"Red"}   
        },
        {
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi.",
            "fileSize": ".3mb",
            "close": false,
            "tag": {isOpen:false,tagTitle:"Download",tagColor:"green"}   
        },
        {
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi.",
            "fileSize": ".6mb",
            "close": true,
            "tag": {isOpen:true,tagTitle:"Hello",tagColor:"Red"}   
        },
        {
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi.",
            "fileSize": ".3mb",
            "close": false,
            "tag": {isOpen:false,tagTitle:"Download",tagColor:"green"}   
        },
        {
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi.",
            "fileSize": ".6mb",
            "close": true,
            "tag": {isOpen:true,tagTitle:"Hello",tagColor:"Red"}   
        },
    ]

    const ref = useRef(null)
    return (
        <>  
            <div ref={ref} className="w-full h-full z-[3] fixed flex flex-wrap">
                {data.map((item, index) => (
                    <Card data={item} reference={ref} />
                ))}
            </div>
        </>
    )
}

export default ForeGround