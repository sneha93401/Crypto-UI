var swiper = new Swiper(".swiper_mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay:{
        delay:1000,
        disableOnInteraction:false,
    },
    speed:700,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
document.addEventListener("DOMContentLoaded", () => {
    let signIn_form = document.querySelector(".sign_btn");
    signIn_form.addEventListener("click", () => {
        window.location.href = "../cryptodesign/valid.html";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    let signUp_form = document.querySelector(".oops-error-message");
    signUp_form.addEventListener("click", () => {
        window.location.href = "../cryptodesign/signUp.html";
    });
});


var tl = gsap.timeline();

tl.from(".navbar_main img,.cryptocoin-wrapper,.nav_list,.registration-form,.sign_btn", {
    y: -100,
    duration: 1,
    // delay: 0.50,
    opacity: 0,
    stagger: 0.5,
})
tl.from(".calculator .bitcoin-exchange,.you-can-trust,.sed-ut-persp,.get-started-wrapper", {
    y: 100,
    opacity: 0,
    stagger: 0.3,

})
tl.from(".credit-card-icon", {
    x: 200,
    opacity: 0,
    stagger: 0.3,
})

gsap.from(".bitcoin-amico-2-parent .bitcoin-amico-2-icon", {
    scale: 0,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".bitcoin-amico-2-parent .bitcoin-amico-2-icon",
        scroller: "body"
    }
})
gsap.from(".frame-wrapper1 .what-is-bitcoin,.bitcoin-is-an,.lorem-ipsum-dolor1,.tempor-incididunt-ut", {
    x: 200,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".frame-wrapper1 .what-is-bitcoin,.bitcoin-is-an,.lorem-ipsum-dolor1,.tempor-incididunt-ut",
        scroller: "body",
    }
})
gsap.from(".frame-parent1 .e-wallet-amico-1-icon", {
    scale: 0,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".frame-parent1 .e-wallet-amico-1-icon",
        scroller: "body"
    }
})

gsap.from(".frame-parent1, .multi-cryptocurrency-wallet-wrapper,.multi-para", {
    x: -200,
    opacity: 0,
    stagger: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".frame-parent1 .multi-cryptocurrency-wallet-wrapper,.multi-para",
        scroller: "body",
    }
})

gsap.from(".maincontent-chooseus-inner .why-choose-us-wrapper,.sed-ut-perspi", {
    y: -100,
    opacity: 0,
    duration: 1,
    // delay: 0.50,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".maincontent-chooseus-inner",
        scroller: "body",
    }

})

gsap.from(".bitcoin-logo-1-1", {
    scale: 0,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".bitcoin-logo-1-1",
        scroller: "body",
    }
})

gsap.from(".normalizer .paragraph-formatter", {
    x: -300,
    opacity: 0,
    // delay: 1,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".normalizer .paragraph-formatter",
        scroller: "body",
    }
})

gsap.from(".merger .constant-provider,.visa-header", {
    x: 100,
    opacity: 0,
    stagger: 0.3,
    // delay: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".merger .constant-provider,.visa-header",
        scroller: "body",
    }
})

gsap.from(".callout-creator .fast-crypto-exchange-wrapper,.thanks-to-cryptowallet-container", {
    x: -100,
    opacity: 0,
    // delay: 1,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".callout-creator .fast-crypto-exchange-wrapper,.thanks-to-cryptowallet-container",
        scroller: "body",
    }
})
gsap.from(".international-trade-rafiki-1", {
    scale: 0,
    opacity: 0,
    // delay: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".international-trade-rafiki-1",
        scroller: "body",
    }
})

gsap.from(" .product-quality-pana-1", {
    scale: 0,
    opacity: 0,
    // delay: 1,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: " .product-quality-pana-1",
        scroller: "body",
    }
})

gsap.from(".padding-controller .no-experience,.no-worries,.expreice-para", {
    x: -100,
    opacity: 0,
    // delay: 1.80,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".padding-controller .no-experience,.no-worries,.expreice-para",
        scroller: "body",
    }
})

gsap.from(".data-aggregator .credit-card-1-icon,.nested-loop,.for-each-loop", {
    scale: 0,
    opacity: 0,
    // delay: 1.80,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".data-aggregator",
        scroller: "body",
    }
})

gsap.from(".worldwide-network-icon-1,.image-processor,.morbi-eget-varius5", {
    scale: 0,
    opacity: 0,
    // delay: 1.90,
    duration: 1,
    scrollTrigger: {
        trigger: ".data-aggregator",
        scroller: "body",
    }
})
gsap.from(".frame-parent11 .report-1-wrapper,.advanced-reporting-wrapper,.morbi-eget-varius6", {
    scale: 0,
    opacity: 0,
    // delay: 1.90,
    duration: 1,
    scrollTrigger: {
        trigger: ".frame-parent11",
        scroller: "body",
    }
})

gsap.from(".frame-parent13 .stock-1-wrapper,.margin-trading-wrapper,.morbi-eget-varius7", {
    scale: 0,
    opacity: 0,
    // delay: 1.90,
    duration: 1,
    scrollTrigger: {
        trigger: ".frame-parent13",
        scroller: "body",
    }
})

gsap.from(".frame-parent10 .wallet-1-wrapper,.competitive-commissions-parent,.morbi-eget-varius4", {
    scale: 0,
    opacity: 0,
    // delay: 1.90,
    duration: 1,
    scrollTrigger: {
        trigger: ".frame-parent10 ",
        scroller: "body",
    }
})

gsap.from(".frame-parent8 .cross-platform-1-wrapper,.cross-platform-trading,.morbi-eget-varius3", {
    scale: 0,
    opacity: 0,
    // delay: 1.90,
    duration: 1,
    scrollTrigger: {
        trigger: ".frame-parent8",
        scroller: "body",
    }
})

gsap.from(".frame-parent6 .compliance-1-wrapper,.legal-compliance-wrapper,.morbi-eget-varius2", {
    scale: 0,
    opacity: 0,
    // delay: 1.90,
    duration: 1,
    scrollTrigger: {
        trigger: ".frame-parent6",
        scroller: "body",
    }
})


gsap.from(".frame-parent4 .payment-options-wrapper,.morbi-eget-varius1", {
    scale: 0,
    opacity: 0,
    // delay: 1.90,
    duration: 1,
    scrollTrigger: {
        trigger: ".frame-parent4",
        scroller: "body",
    }
})

gsap.from(".if-else-statement", {
    scale: 0,
    opacity: 0,
    // delay: 1.90,
    duration: 1,
    scrollTrigger: {
        trigger: ".if-else-statement",
        scroller: "body",
    }
})

gsap.from(".iteration-loop .parallel-process,.investor-para", {
    y: -100,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: ".iteration-loop .parallel-process,.investor-para",
        scroller: "body",
    }
})

gsap.from(".scheduler .services,.buy-bitcoin,.buy-ethereum,.sell-bitcoins,.bitcoin-trading,.margin-trading1", {
    y: -200,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: ".scheduler",
        scroller: "body",
    }
})
gsap.from(".log-reader .information,.payment-options1,.fee-schedule,.getting-started,.identify-verification-guide,.card-verification-guide", {
    y: -200,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: ".log-reader",
        scroller: "body",
    }
})
gsap.from(".get-in-touch-parent .get-in-touch,.summit-boulevard,.birmingham-al-35243,.telephone-123,.email-infositenamecomweb-container", {
    y: -200,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: ".get-in-touch-parent",
        scroller: "body",
    }
})
gsap.from(".we-help-you", {
    y: -200,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: ".we-help-you",
        scroller: "body",
    }
})
gsap.from(".bottom-paga, .frame-item,.frame-inner,.group-icon,.copyright-2018 ", {
    y: -200,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: ".bottom-paga",
        scroller: "body",
    }
})

