import "./LoadingPage.css";

function LoadingPage() {
    return (
        <div className="loading-page">

            <div className="loading-decoration decoration-one"></div>
            <div className="loading-decoration decoration-two"></div>
            <div className="loading-decoration decoration-three"></div>

            <div className="loading-content">

                <div className="loading-logo-wrapper">
                    <div className="loading-logo">
                        <span>🎓</span>
                    </div>

                    <div className="loading-circle"></div>
                </div>

                <h1>
                    Welcome
                </h1>

                <p>
                    Preparing your experience
                </p>

                <div className="loading-progress">
                    <div className="loading-progress-bar"></div>
                </div>

            </div>

        </div>
    );
}

export default LoadingPage;