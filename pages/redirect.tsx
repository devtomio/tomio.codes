import redirect from 'nextjs-redirect';

const Link = redirect('to', { params: true, statusCode: 302 });

const Redirect = () => (
    <>
        <Link>
            <div className="fullscreen">
                <div className="center-object">
                    <h2 className="fira">Redirecting you shortly...</h2>
                </div>
            </div>
        </Link>
    </>
);

export default Redirect;
