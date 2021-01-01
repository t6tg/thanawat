/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement } from 'react'

export default function index(): ReactElement {
    return (
        <div>
            <div className="flex flex-col h-screen items-center justify-center text-white">
                <audio controls autoPlay style={{ display: 'none' }} loop>
                    <source src="/toloveyoumore.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <h2 className="sm:text-lg  font-hairline xl:text-6xl text-left md:text-4xl">
                    I'll be waiting for you <br />
                    Here inside my heart <br />
                    I'm the one who wants to love you more
                    <br />
                    You will see I can give you
                    <br />
                    Everything you need
                    <br />
                    Let me be the one to love you more 💔
                    <br />
                </h2>
                <div className="grid grid-cols-2 gap-2">
                    <a
                        href="https://www.pathosting.co.th/?refer_id=115769"
                        target="_blank"
                        rel="noreferrer"
                        title="P&T Hosting Co., Ltd. :: บริการ | จดโดเมนเนม | เว็บโฮสติ้ง | VPS | Co-location |"
                    >
                        <img
                            src="/15.gif"
                            alt="P&T Hosting Co., Ltd. :: บริการ | จดโดเมนเนม | เว็บโฮสติ้ง | VPS | Co-location |"
                            loading="lazy"
                            style={{
                                border: '0px',
                                width: '468px',
                                height: '60px'
                            }}
                        />
                    </a>
                    <a
                        href="https://www.pathosting.co.th/?refer_id=115769"
                        target="_blank"
                        rel="noreferrer"
                        title="P&T Hosting Co., Ltd. :: บริการ | จดโดเมนเนม | เว็บโฮสติ้ง | VPS | Co-location |"
                    >
                        <img
                            src="/9.gif"
                            loading="lazy"
                            alt="P&T Hosting Co., Ltd. :: บริการ | จดโดเมนเนม | เว็บโฮสติ้ง | VPS | Co-location |"
                            style={{
                                border: '0px',
                                width: '468px',
                                height: '60px'
                            }}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
