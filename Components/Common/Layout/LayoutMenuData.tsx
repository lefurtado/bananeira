import React, { useEffect, useState } from "react";
import Router from "next/router";
const Navdata = () => {
    //state data
    const [isAuth, setIsAuth] = useState(false);
    const [isPages, setIsPages] = useState(false);
    const [isMultiLevel, setIsMultiLevel] = useState(false);

    // Authentication
    const [isSignIn, setIsSignIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [isPasswordReset, setIsPasswordReset] = useState(false);
    const [isPasswordCreate, setIsPasswordCreate] = useState(false);
    const [isLockScreen, setIsLockScreen] = useState(false);
    const [isLogout, setIsLogout] = useState(false);
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);
    const [isVerification, setIsVerification] = useState(false);
    const [isError, setIsError] = useState(false);

    // Pages
    const [isProfile, setIsProfile] = useState(false);

    // Multi Level
    const [isLevel1, setIsLevel1] = useState(false);
    const [isLevel2, setIsLevel2] = useState(false);

    const [isCurrentState, setIsCurrentState] = useState('');

    function updateIconSidebar(e: any) {
        if (e && e.target && e.target.getAttribute("sub-items")) {
            const ul: any = document.getElementById("two-column-menu");
            const iconItems: any = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id: any = item.getAttribute("sub-items");
                var menusId = document.getElementById(id);
                if (menusId){
                    (menusId.parentElement as HTMLElement).classList.remove("show");
                }
            });
            e.target.classList.add("active");
        }
    }

      useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (isCurrentState !== 'Auth') {
            setIsAuth(false);
        }
        if (isCurrentState !== 'Pages') {
            setIsPages(false);
        }
        if (isCurrentState !== 'MuliLevel') {
            setIsMultiLevel(false);
        }
        if (isCurrentState === 'Dashboard') {
            Router.push("/bananeira/dashboard");
            document.body.classList.add('twocolumn-panel');
        }
        if (isCurrentState === 'Estoque') {
            Router.push("/bananeira/estoque");
            document.body.classList.add('twocolumn-panel');
        }
        if (isCurrentState === 'Retirada') {
            Router.push("/bananeira/retirada");
            document.body.classList.add('twocolumn-panel');
        }
        if (isCurrentState === 'Fornecedores') {
            Router.push("/bananeira/fornecedores");
            document.body.classList.add('twocolumn-panel');
        }
        if (isCurrentState === 'API Key') {
            Router.push("/api-key");
            document.body.classList.add('twocolumn-panel');
        }
    }, [
        isCurrentState,
        isAuth,
        isPages,
        isMultiLevel
    ]);

    const menuItems: any = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "Dashboard",
            icon: "ri ri-home-line",
            link: "/bananeira/dashboard",
            click: function (e: any) {
                e.preventDefault();
                setIsCurrentState('Dashboard');
            }
        },
        {
            id: "estoque",
            label: "Estoque",
            icon: "ri ri-archive-drawer-line",
            link: "/bananeira/estoque",
            click: function (e: any) {
                e.preventDefault();
                setIsCurrentState('Estoque');
            }
        },
        {
            id: "retirada",
            label: "Retirada",
            icon: "ri ri-arrow-go-back-line",
            link: "/bananeira/retirada",
            click: function (e: any) {
                e.preventDefault();
                setIsCurrentState('Retirada');
            }
        },
        {
            id: "fornecedores",
            label: "Fornecedores",
            icon: "ri ri-user-star-line",
            link: "/bananeira/fornecedores",
            click: function (e: any) {
                e.preventDefault();
                setIsCurrentState('Fornecedores');
            }
        },
        {
            id: "api-key",
            label: "Sair",
            icon: "ri ri-key-2-line",
            link: "/bananeira/auth/login",
            click: function (e: any) {
                e.preventDefault();
                setIsCurrentState('API Key');
            }
        }

    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;