import React, { useRef, useEffect, useState } from 'react'
import { Image, Transformation } from 'cloudinary-react'
import Styled from 'styled-components'
import { Loader } from './components'

const ImageGallery = Styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
flex-direction: row;
`

const ImageItem = Styled.div`
flex: 1 1 200px;
padding-bottom: 16px;
border: 1px solid rgba(0, 23, 50, 0.1);
padding-top: 8px;
padding-left: 8px;
padding-right: 8px;
margin: 12px auto;
box-shadow: 0 4px 8px rgb(0 23 50 / 30%);
background: linear-gradient(45deg, #eaeaea, #fafafa);
overflow: hidden;
transform: ${props => props.rotation % 2 === 0 ? "rotate(-5deg)" : "rotate(5deg)"};

`;


export default function Pics() {
    const galleryRef = useRef(null)
    const [ imageWidth, setImageWidth ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const rect = galleryRef.current.getBoundingClientRect()
        const windowWidth = window.innerWidth;
        switch (windowWidth){
            case windowWidth > 1000:
                setImageWidth(windowWidth / 3)
                break;
            case windowWidth > 575:
                setImageWidth(windowWidth / 2)
                break;
            default:
                setImageWidth(windowWidth)
                break;
        }
        setLoading(false)
    })

    const imageIds = [
      {
        id: "bathtub.jpg",
        desc: "Just a looser takin a bath",
      },
      {
        id: "fightme.jpg",
        desc: "You tryna catch these hands?",
      },
      {
        id: "buddies.jpg",
        desc: "... so is this what we do all day?",
      },
      {
        id: "tinyboy.jpg",
        desc: "Gosh darn was I cute or what?",
      },
      {
        id: "snooglyrat.jpg",
        desc: "I swear hooman, when I wake up from this nap, I'mma fight you.",
      },
      {
        id: "thehunter.jpg",
        desc: "Huntin the hoomans #justmangothings",
      },
      {
        id: "adorbs.jpg",
        desc: "Uhh.. just, uhh.. asserting my dominance through snoogles",
      },
      {
        id: "diva.jpg",
        desc: "Cleanliness is next to godliness.",
      },
    ];
    return (
      <>
        <h3>Mango's Glam Shots</h3>
        <Loader loading={loading} />
        <ImageGallery ref={galleryRef}>
        {!loading && (
          imageIds.map((image, index) => (
            <ImageItem key={index} rotation={index} >
              <Image publicId={image.id} cloudName="djmk8xgrk" >
                <Transformation crop="fill" width={Math.round(imageWidth.toString())} height={Math.round(imageWidth).toString()} gravity="auto" quality="100"  />
              </Image>
                <p>{image.desc}</p>
            </ImageItem>
          ))
        )}
        </ImageGallery>
      </>
    );
}