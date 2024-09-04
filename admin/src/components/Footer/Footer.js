import React from 'react';

function Footer() {
    return (
        <>
            <footer className="bg-white rounded shadow p-5 mb-4 mt-4">
                <div className="row">
                    <div className="col-12 col-md-4 col-xl-6 mb-4 mb-md-0">
                        <p className="mb-0 text-center text-lg-start">© 2024-<span className="current-year">2024</span> <a
                            className="text-primary fw-normal" href="https://www.luiztools.com.br">Olivers Bot Trader</a></p>
                    </div>
                    <div className="col-12 col-md-8 col-xl-6 text-center text-lg-start">

                        <ul className="list-inline list-group-flush list-group-borderless text-md-end mb-0">
                            
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
