export default function Footer() {
    return (
        <div className="shadow-wrapper">
            <style jsx>
                {`
                    footer .content {
                        display: flex;
                        flex-direction: row-reverse;
                    }

                    .shadow-wrapper {
                        filter: drop-shadow(
                            -1px -6px 16px rgba(8, 11, 14, 0.06)
                        );
                        position: sticky;
                        bottom: 0;
                        left: 0;
                    }

                    footer {
                        background: #fff;
                        clip-path: polygon(100% 0, 100% 100%, 0% 100%, 0% 40%)
                            content-box;
                        transition: all 1s linear;
                    }

                    footer div {
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    footer div h1 {
                        padding-top: 50px;
                        font-size: 18px;
                    }

                    footer div img {
                        display: none;
                    }

                    footer div p {
                        margin-top: 10px;
                        padding-bottom: 10px;
                        font-size: 16px;
                    }

                    @media (min-width: 720px) {
                        footer {
                            clip-path: polygon(
                                    100% 0,
                                    100% 100%,
                                    0% 100%,
                                    0% 50%
                                )
                                content-box;
                        }

                        footer div h1 {
                            padding-top: 60px;
                        }

                        footer div p {
                            padding-bottom: 20px;
                        }
                    }

                    @media (min-width: 1280px) {
                        footer {
                            clip-path: polygon(
                                    100% 0,
                                    100% 100%,
                                    0% 100%,
                                    0% 60%
                                )
                                content-box;
                        }

                        footer div {
                            flex-direction: row-reverse;
                            padding-top: 30px;
                            padding-bottom: 10px;
                            justify-content: space-around;
                        }

                        footer div h1 {
                            padding-top: 0px;
                            font-size: 18px;
                        }

                        footer div p {
                            margin-top: 60px;
                            padding-bottom: 0px;
                            font-size: 16px;
                        }

                        footer div img {
                            display: block;
                            margin-right: 40px;
                        }
                    }
                `}
            </style>
            <footer>
                <div>
                    <div className="content">
                        <h1>
                            &copy;{new Date().getFullYear()}
                            {"  "}
                            <strong>COPS</strong>
                        </h1>
                        <img
                            loading="lazy"
                            width={100}
                            src="/images/cops_logo.jpg"
                        />
                    </div>
                    <p>Hackalog is made with 🍕, ☕ and 💻 ✨</p>
                </div>
            </footer>
        </div>
    )
}
