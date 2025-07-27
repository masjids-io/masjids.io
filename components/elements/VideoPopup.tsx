'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function VideoPopup({ style }: any) {
    const [isOpen, setOpen] = useState(false)

    const openModal = (event: any) => {
        event.preventDefault() // Prevent the default action of the click event
        setOpen(true)
    }

    return (
        <>
            {style === 1 && <div className="masthead__video z-2">
                <a onClick={openModal} className="decoration-none js-gallery" data-gallery="gallery1">
                    <div className="button -white text-dark-1">
                        <span className="size-64 d-flex justify-center items-center">
                            <i className="ml-4 text-2xl icon-play" />
                        </span>
                    </div>
                </a>
            </div>
            }

            {style === 2 && <a onClick={openModal} className="decoration-none js-gallery" data-gallery="gallery1">
                <div className="button d-flex items-center">
                    <span className="d-flex justify-center items-center bg-accent-light size-60 rounded-full mr-16">
                        <i className="ml-4 text-accent text-2xl icon-play" />
                    </span>
                    <p>Watch Video</p>
                </div>
            </a>
            }
            {/* <a href="#" onClick={openModal} className="lightbox-image"><i className="icon-play" /></a> */}
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}
