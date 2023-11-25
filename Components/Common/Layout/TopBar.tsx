import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Col, Dropdown, Row } from 'react-bootstrap';
import { get } from "lodash";

import flagus from "@assets/images/flags/us.svg";

//i18n
import i18n from "@common/i18n";
import languages from "@common/data/languages";

const TopBar = () => {
    const currentTime: any = useRef(null);
    useEffect(() => {
        const interval = setInterval(() => {
            // date
            var d = new Date();
            var dateOptions: object = { weekday: 'short', month: 'short', day: 'numeric' };
            var date = d.toLocaleDateString(undefined, dateOptions);
            // time
            var hours = d.getHours();
            var ampm = hours >= 12 ? ' PM' : ' AM';
            var hours = hours % 12;
            var time = ("0" + hours).slice(-2) + ':' + ("0" + d.getMinutes()).slice(-2) + ampm;
            currentTime.current.innerHTML = date + " | " + time;
        }, 1000);
        return () => clearInterval(interval);
    }, [currentTime]);

    const [selectedLang, setSelectedLang] = useState<any>("");

    useEffect(() => {
        const currentLanguage = localStorage.getItem("I18N_LANGUAGE");
        setSelectedLang(currentLanguage);
    }, []);

    const changeLanguageAction = (lang: any) => {
        //set language as i18n
        i18n.changeLanguage(lang);
        localStorage.setItem("I18N_LANGUAGE", lang);
        setSelectedLang(lang);
    };

    return (
        <React.Fragment>
            <div className="top-tagbar">
                <div className="w-100">
                    <Row className="justify-content-between align-items-center">
                        <Col className="col-md-auto" xs={9}>
                            <div className="text-white-50 fs-13">
                                <i className="bi bi-clock align-middle me-2"></i> <span ref={currentTime} id="current-time"></span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    );
}

export default TopBar;