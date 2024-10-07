import "./scrollup.css";

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });
    return (
        <a href="#" className="scrollup">
            <i className="scrollup__icon bx bx-up-arrow-alt"></i>
        </a>
    );
};

export default ScrollUp;
