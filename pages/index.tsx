import Script from 'next/script';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

interface Props {
    quote: string;
    character: string;
    pfp: Blob;
}

export async function getServerSideProps(): Promise<Props> {
    const res = await fetch('https://animechan.vercel.app/api/random');
    const img = await fetch('/pfp.jpg');
    const blob = await img.blob();
    const data = await res.json();

    return { props: { ...data, pfp: blob } } as unknown as Props;
}

const scrollToEl = (getID: string) => {
    const id = getID.replaceAll('#', '');
    const el = document.getElementById(id);

    el?.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    history.pushState(null, null!, `#${id}`);
};

const notify = (text: string, icon: string) => toast(text, {
    icon,
    style: {
        borderRadius: '10px',
        background: '#333', 
        color: '#fff',
        fontFamily: 'Patrick Hand',
    },
});

const Home = ({ data }: { data: Props }) => (
    <>
        <div className="fullscreen">
            <div
                className="background"
                style={{ backgroundImage: 'url(/bg.png)', width: '100%', height: '1024px' }}
            ></div>
            <div className="center-object">
                <div className="container">
                    <section className="me unset">
                        <div className="avatar-container">
                            <img src="/pfp.jpg" draggable={false} className="image-title" alt="Avatar of Tomio" onClick={() => {
                                const data: any = new ClipboardItem({ 'image/jpg': data.pfp });

                                notify('Copied profile picture!', '🖼️');
                                navigator.clipboard.write([data]);
                            }} />
                        </div>
                        <div className="unset">
                            <h1 className="title genshin-text">Tomio</h1>
                            <p className="undertitle quote" style={{ fontSize: '13.5px', width: '25em' }}>
                                <i className="emoji googlecat"></i> {`"${data.quote}" — ${data.character}`}
                            </p>
                        </div>
                    </section>
                    <div className="buttons">
                        <a href="/discord" className="btn discord-dropshadow animation hover fira">
                            Discord
                        </a>
                        <a href="/github" className="btn github-dropshadow animation hover fira">
                            GitHub
                        </a>
                        <a href="/twitter" className="btn twitter-dropshadow animation hover fira">
                            Twitter
                        </a>
                        <a href="mailto:mail@tomio.codes" className="btn emerald-dropshadow animation hover fira">
                            Email
                        </a>
                    </div>
                </div>
            </div>

            <span className="info-button" onClick={() => scrollToEl('information')}>
                <div id="fade" className="arrow bounce">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 481.32 291.98"
                        className="white-fill"
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
                        <span className="turquoise-text">jez</span> if you'd like. I&#39;m a Developer that
                        likes anime. Current coding languages I know well enough are{' '}
                        <span className="turquoise-text">HTML, CSS, JavaScript, Python, TypeScript, SQL, Rust, C++</span> and{' '}
                        <span className="turquoise-text">SCSS</span>.
                    </p>
                </div>
            </div>
            <div className="box-container">
                <h1 className="title turquoise-text genshin-text">
                    <i className="emoji blobblewobble"></i> Projects:
                </h1>
                <div className="info-container">
                    <p>
                        <Link href="https://npm.im/@1chi/fml.js">fml.js</Link> a simple utility to get FML quotes.
                    </p>
                    <p>
                        <Link href="https://github.com/Shukaaku/hello-world">hello-world</Link> &#34;Hello, World!&#34;
                        in multiple languages.
                    </p>
                    <p>
                        <Link href="https://npm.im/img-url-to-imgur">img-url-to-imgur</Link> easily upload image urls to
                        imgur.
                    </p>
                    <p>
                        <Link href="https://github.com/1chiSensei/OAuth">OAuth</Link> provides OAuth examples to several
                        auth providers.
                    </p>
                    <p>
                        <Link href="https://github.com/Shukaaku/materialicons.css">materialicons.css</Link> provides
                        some icons for your website.
                    </p>
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
                <Link href="https://github.com/1chiSensei/tomio.cdes/blob/main/LICENSE">LICENSE</Link> | Tomio © 2022 |{' '}
                <Link href="https://github.com/1chiSensei/tomio.codes">Source</Link>
            </p>
        </footer>

        <Script src="/js/script.js" type="text/javascript" />
        <Toaster position="top-right" reverseOrder={false} />
    </>
);

export default Home;
