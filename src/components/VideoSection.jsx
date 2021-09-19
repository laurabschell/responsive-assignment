import React from 'react'
import styled from 'styled-components'

const VideoContainer = styled.div`
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    align-items: center;
`

const Video = styled.iframe`
    width: 100%;
    height: 250px;
    border: none;
`

function VideoSection() {
    return (
        <VideoContainer>
            <Video src="https://www.youtube-nocookie.com/embed/y8Yv4pnO7qc" title="Original Trombones"></Video>
        </VideoContainer>
    )
}

export default VideoSection