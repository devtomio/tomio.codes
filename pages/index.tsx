// eslint-disable-next-line spaced-comment
/// <reference path="../types.d.ts" />

import Script from 'next/script';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import type { GetServerSideProps } from 'next';
import Image from 'next/image';
import WildRift from '../public/wildrift.svg';
import Loader from 'react-spinners/BeatLoader';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface Props {
    quote: string;
    character: string;
    anime: string;
}

export const getServerSideProps: GetServerSideProps = async ({ res }): Promise<{ props: Props }> => {
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=200');

    const resq = await fetch('https://animechan.vercel.app/api/random');
    const data = await resq.json();

    return { props: { ...data } };
};

const scrollToEl = (getID: string) => {
    const id = getID.replaceAll('#', '');
    const el = document.getElementById(id);

    el?.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    history.pushState(null, null!, `#${id}`);
};

const notify = (text: string, icon: string) =>
    toast(text, {
        icon,
        style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            fontFamily: 'Patrick Hand',
        },
    });

const Home = ({ quote, character, anime }: Props) => (
    <>
        <div className="loading">
            <div className="fullscreen">
                <div className="center-object">
                    <Loader color="#ffffff" size={28} />
                    <h1 className="fira text-xl">LOADING</h1>
                </div>
            </div>
        </div>
        <div
            className="mainpage"
            css={css`
                display: none;
            `}
        >
            <div className="fullscreen">
                <div
                    className="background"
                    style={{
                        backgroundImage: 'url(/background.gif)',
                        width: '100%',
                        height: '1024px',
                    }}
                ></div>
                <div className="center-object">
                    <div className="container">
                        <section className="me unset">
                            <div className="avatar-container">
                                <img
                                    src="/pfp.jpg"
                                    draggable={false}
                                    className="image-title"
                                    alt="Avatar of Tomio"
                                    onClick={() => {
                                        notify('Copied profile picture!', '???????');
                                        void navigator.clipboard.writeText('https://tomio.codes/pfp.jpg');
                                    }}
                                />
                            </div>
                            <div className="unset">
                                <h1 className="title genshin-text">Tomio</h1>
                                <p
                                    className="undertitle quote"
                                    style={{
                                        fontSize: '13.5px',
                                        width: '25em',
                                    }}
                                >
                                    <i className="emoji googlecat"></i> {`"${quote}" ??? ${character} (${anime})`}
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="center icons" id="icons">
                        <div>
                            <a
                                href="#"
                                onClick={() => {
                                    notify('Copied discord tag!', '????');
                                    void navigator.clipboard.writeText('Tomio#1265');

                                    return false;
                                }}
                                title="Discord"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    viewBox="0 0 71 55"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0)">
                                        <path
                                            d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                                            fill="#ffffff"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="71" height="55" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <a href="/twitter" target="_blank" title="Twitter">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    viewBox="0 0 248 204"
                                    fill="none"
                                >
                                    <path
                                        d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
        C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
        c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
        c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
        c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
        c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
                                        fill="#ffffff"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div>
                            <a href="/github" target="_blank" title="GitHub">
                                <svg
                                    viewBox="0 0 128 128"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    fill="none"
                                >
                                    <g fill="#ffffff">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                                        ></path>
                                        <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                                    </g>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <a href="/twitch" target="_blank" title="Twitch">
                                <svg
                                    viewBox="0 0 256 268"
                                    xmlns="http://www.we.org/2000/svg"
                                    width="28"
                                    height="28"
                                    fill="none"
                                >
                                    <g fill="#ffffff">
                                        <path d="M17.4579119,0 L0,46.5559188 L0,232.757287 L63.9826001,232.757287 L63.9826001,267.690956 L98.9144853,267.690956 L133.811571,232.757287 L186.171922,232.757287 L256,162.954193 L256,0 L17.4579119,0 Z M40.7166868,23.2632364 L232.73141,23.2632364 L232.73141,151.29179 L191.992415,192.033461 L128,192.033461 L93.11273,226.918947 L93.11273,192.033461 L40.7166868,192.033461 L40.7166868,23.2632364 Z M104.724985,139.668381 L127.999822,139.668381 L127.999822,69.843872 L104.724985,69.843872 L104.724985,139.668381 Z M168.721862,139.668381 L191.992237,139.668381 L191.992237,69.843872 L168.721862,69.843872 L168.721862,139.668381 Z"></path>
                                    </g>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <a
                                href="#"
                                onClick={() => {
                                    notify('Copied wild rift tag!', '??????');
                                    void navigator.clipboard.writeText('Tomio#5350');

                                    return false;
                                }}
                                title="League of Legends: Wild Rift"
                            >
                                <Image src={WildRift} width="28" height="28" alt="League of Legends: Wild Rift" />
                            </a>
                        </div>
                    </div>
                </div>

                <span className="info-button" onClick={() => scrollToEl('information')}>
                    <div id="fade" className="arrow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 481.32 291.98"
                            className="white-fill animate-bounce"
                            style={{ fill: 'white' }}
                        >
                            <path d="M466.5,15.5L466,15c-19.8-19.8-52-19.8-71.9,0L240.8,168.3L87.2,14.8C67.4-5,35.2-5,15.4,14.8l-0.5,0.5 C-5,35.2-5,67.4,14.8,87.2l186.6,186.6c0.9,1,1.8,2,2.7,3v0c3.8,3.8,8.1,6.9,12.7,9.3c17,9,38.1,7.7,53.9-3.9 c2.2-1.6,4.4-3.4,6.4-5.4L466.5,87.4C486.4,67.6,486.4,35.4,466.5,15.5z" />
                        </svg>
                    </div>
                </span>
            </div>

            <section className="container" id="information">
                <div className="box-container">
                    <h1 className="title turquoise-text genshin-text">
                        <i className="emoji blobbounce"></i> Information:
                    </h1>
                    <div className="info-container">
                        <p>
                            Hello, my name is <span className="turquoise-text">Tomio</span>, but you can also call me{' '}
                            <span className="turquoise-text">jez</span> if you&#39;d like. I&#39;m a Developer that
                            likes anime. Current coding languages I know well enough are{' '}
                            <span className="turquoise-text">
                                HTML, CSS, JavaScript, Python, TypeScript, SQL, Rust, C++
                            </span>{' '}
                            and <span className="turquoise-text">SCSS</span>.
                        </p>
                    </div>
                </div>
                <div className="box-container">
                    <h1 className="title turquoise-text genshin-text">
                        <i className="emoji blobblewobble"></i> Projects:
                    </h1>
                    <div className="max-w-6xl mx-auto">
                        <section className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                            <Link href="/redirect?to=https://github.com/devtomio/diluc-bot" passHref>
                                <img
                                    src="https://github-readme-stats.vercel.app/api/pin/?username=devtomio&repo=diluc-bot&theme=radical"
                                    alt="diluc-bot"
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href="/redirect?to=https://github.com/devtomio/code-runner" passHref>
                                <img
                                    src="https://github-readme-stats.vercel.app/api/pin/?username=devtomio&repo=code-runner&theme=radical"
                                    alt="code-runner"
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href="/redirect?to=https://github.com/devtomio/is-railway" passHref>
                                <img
                                    src="https://github-readme-stats.vercel.app/api/pin/?username=devtomio&repo=is-railway&theme=radical"
                                    alt="is-railway"
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href="/redirect?to=https://github.com/devtomio/uuid" passHref>
                                <img
                                    src="https://github-readme-stats.vercel.app/api/pin/?username=devtomio&repo=uuid&theme=radical"
                                    alt="uuid"
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href="/redirect?to=https://github.com/devtomio/Tanaka" passHref>
                                <img
                                    src="https://github-readme-stats.vercel.app/api/pin/?username=devtomio&repo=Tanaka&theme=radical"
                                    alt="Tanaka"
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href="/redirect?to=https://github.com/devtomio/largest-package" passHref>
                                <img
                                    src="https://github-readme-stats.vercel.app/api/pin/?username=devtomio&repo=largest-package&theme=radical"
                                    alt="largest-package"
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href="/redirect?to=https://github.com/devtomio/shibe.online" passHref>
                                <img
                                    src="https://github-readme-stats.vercel.app/api/pin/?username=devtomio&repo=shibe.online&theme=radical"
                                    alt="shibe.online"
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href="/redirect?to=https://github.com/devtomio/hello-world" passHref>
                                <img
                                    src="https://github-readme-stats.vercel.app/api/pin/?username=devtomio&repo=hello-world&theme=radical"
                                    alt="hello-world"
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href="/redirect?to=https://github.com/yukikaze-bot/prompt" passHref>
                                <img
                                    src="https://github-readme-stats.vercel.app/api/pin/?username=yukikaze-bot&repo=prompt&theme=radical"
                                    alt="prompt"
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href="/redirect?to=https://github.com/yukikaze-bot/erlpack" passHref>
                                <img
                                    src="https://github-readme-stats.vercel.app/api/pin/?username=yukikaze-bot&repo=erlpack&theme=radical"
                                    alt="erlpack"
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href="/redirect?to=https://github.com/yukikaze-bot/yukikaze.tech" passHref>
                                <img
                                    src="https://github-readme-stats.vercel.app/api/pin/?username=yukikaze-bot&repo=yukikaze.tech&theme=radical"
                                    alt="yukikaze.tech"
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href="/redirect?to=https://github.com/yukikaze-bot/yukikaze" passHref>
                                <img
                                    src="https://github-readme-stats.vercel.app/api/pin/?username=yukikaze-bot&repo=yukikaze&theme=radical"
                                    alt="yukikaze"
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href="/redirect?to=https://github.com/yukikaze-bot/screenshot" passHref>
                                <img
                                    src="https://github-readme-stats.vercel.app/api/pin/?username=yukikaze-bot&repo=screenshot&theme=radical"
                                    alt="screenshot"
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href="/redirect?to=https://github.com/Shukaaku/materialicons.css" passHref>
                                <img
                                    src="https://github-readme-stats.vercel.app/api/pin/?username=Shukaaku&repo=materialicons.css&theme=radical"
                                    alt="materialicons.css"
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href="/redirect?to=https://github.com/Shukaaku/wikihow-sr" passHref>
                                <img
                                    src="https://github-readme-stats.vercel.app/api/pin/?username=Shukaaku&repo=wikihow-sr&theme=radical"
                                    alt="wikihow-sr"
                                    className="cursor-pointer"
                                />
                            </Link>
                        </section>
                    </div>
                </div>
                <div className="box-container">
                    <h1 className="title turquoise-text genshin-text">
                        <i className="emoji blobglitch"></i> Discord Server
                    </h1>
                    <div className="info-container center-flex">
                        <iframe
                            src="https://discord.com/widget?id=830047984573480970&theme=dark"
                            width={350}
                            height={500}
                            frameBorder={0}
                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                        ></iframe>
                    </div>
                </div>
            </section>

            <footer className="text-center box-container primary-bg">
                <p className="no-margin">
                    Made with&nbsp;
                    <svg viewBox="0 0 128 128" className="emoji">
                        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"></path>
                    </svg>
                    ,&nbsp;
                    <svg viewBox="0 0 128 128" className="emoji">
                        <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
                        <path
                            data-name="original"
                            fill="#007acc"
                            d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                        ></path>
                    </svg>
                    , and&nbsp;
                    <svg viewBox="0 0 128 128" className="emoji">
                        <path
                            fill="#83CD29"
                            d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                        ></path>
                    </svg>
                    <br />
                    <Link href="https://github.com/devtomio/tomio.cdes/blob/main/LICENSE">LICENSE</Link> | Tomio ??
                    2022 | <Link href="https://github.com/devtomio/tomio.codes">Source</Link>
                </p>
            </footer>

            <Script src="/js/script.js" type="text/javascript" strategy="beforeInteractive" />
            <Script
                src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
                type="text/javascript"
            />

            <Toaster position="top-right" reverseOrder={false} />
        </div>
    </>
);

export default Home;
