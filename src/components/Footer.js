import React, { useState } from 'react'

const Footer = () => {

    const [ list1visible, setList1Visible ] = useState(false);
    const [ list2visible, setList2Visible ] = useState(false);
    const [ list3visible, setList3Visible ] = useState(false);
    const [ list4visible, setList4Visible ] = useState(false);
    const [ list5visible, setList5Visible ] = useState(false);
    const [ list6visible, setList6Visible ] = useState(false);
    const [ list7visible, setList7Visible ] = useState(false);
    const [ list8visible, setList8Visible ] = useState(false);
    const [ list9visible, setList9Visible ] = useState(false);
    const [ list10visible, setList10Visible ] = useState(false);


    return (
        <div className="footerWrapper">
            <div className="footer">
                <div className="footerBatteryInfo">
                    Battery life varies by use and configuration; see <a href="https://apple.com/batteries">apple.com/batteries</a> for more information.
                </div>
                <div className="footerNav">
                    <div className="footerNavColumn">
                        <div className="footerNavLabel" onClick={() => setList1Visible(!list1visible)}>
                            <span>
                                Shop and Learn
                            </span>
                            <span className={ list1visible ? "plusSignRotated" : "plusSign" }>
                                &#x2b;
                            </span>
                        </div>
                        <div className={ list1visible ? "footerListWrapper" : "hiddenWrapper" }>
                        <ul className={ list1visible ? "listColumnFooterNav" : "hiddenUl" }>
                            <li className={ list1visible ?"listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/mac/">Mac</a></li>
                            <li className={ list1visible ?"listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/ipad/">iPad</a></li>
                            <li className={ list1visible ?"listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/iphone/">iPhone</a></li>
                            <li className={ list1visible ?"listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/watch/">Watch</a></li>
                            <li className={ list1visible ?"listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/tv/">TV</a></li>
                            <li className={ list1visible ?"listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/music/">Music</a></li>
                            <li className={ list1visible ?"listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/airpods/">AirPods</a></li>
                            <li className={ list1visible ?"listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/homepod/">HomePod</a></li>
                            <li className={ list1visible ?"listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/ipod-touch/">iPod touch</a></li>
                            <li className={ list1visible ?"listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/us/shop/goto/buy_accessories">Accessories</a></li>
                            <li className={ list1visible ?"listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/us/shop/goto/giftcards">Gift Cards</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="footerNavColumn">
                        <div className="footerNavLabel" onClick={() => setList2Visible(!list2visible)}>
                            <span>
                                Services
                            </span>
                            <span className={ list2visible ? "plusSignRotated" : "plusSign" }>
                                &#x2b;
                            </span>
                        </div>
                        <div className={ list2visible ? "footerListWrapper" : "hiddenWrapper" }>
                        <ul className={ list2visible ? "listColumnFooterNav" : "hiddenUl" }>
                            <li className={ list2visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/apple-music/">Apple&nbsp;Music</a></li>
                            <li className={ list2visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/apple-tv-plus/">Apple&nbsp;TV+</a></li>
                            <li className={ list2visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/apple-fitness-plus/">Apple&nbsp;Fitness+</a></li>
                            <li className={ list2visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/apple-news/">Apple&nbsp;News+</a></li>
                            <li className={ list2visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/apple-arcade/">Apple&nbsp;Arcade</a></li>
                            <li className={ list2visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/icloud/">iCloud</a></li>
                            <li className={ list2visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/apple-one/">Apple&nbsp;One</a></li>
                            <li className={ list2visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/apple-card/">Apple&nbsp;Card</a></li>
                            <li className={ list2visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/apple-books/">Apple&nbsp;Books</a></li>
                            <li className={ list2visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/app-store/">App&nbsp;Store</a></li>
                        </ul>
                        </div>
                        <div className="footerNavLabel" onClick={() => setList3Visible(!list3visible)}>
                            <span>
                                Account
                            </span>
                            <span className={ list3visible ? "plusSignRotated" : "plusSign" }>
                                &#x2b;
                            </span>
                        </div>
                        <div className={ list3visible ? "footerListWrapper" : "hiddenWrapper" }>
                        <ul className="listColumnFooterNav">
                            <li className={ list3visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://appleid.apple.com/us/">Manage Your Apple&nbsp;ID</a></li>
                            <li className={ list3visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/us/shop/goto/account">Apple Store Account</a></li>
                            <li className={ list3visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.icloud.com/">iCloud.com</a></li>
                        </ul>
                        </div>
                    </div>
                        <div className="footerNavColumn">
                        <div className="footerNavLabel" onClick={() => setList4Visible(!list4visible)}>

                            <span>
                                Apple Store
                            </span>
                            <span className={ list4visible ? "plusSignRotated" : "plusSign" }>
                                &#x2b;
                            </span>
                        </div>
                        <div className={ list4visible ? "footerListWrapper" : "hiddenWrapper" }>
                        <ul className="listColumnFooterNav">
                            <li className={ list4visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/retail/">Find a Store</a></li>
                            <li className={ list4visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/us/shop/goto/shop">Shop Online</a></li>
                            <li className={ list4visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/retail/geniusbar/">Genius Bar</a></li>
                            <li className={ list4visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/today/">Today at Apple</a></li>
                            <li className={ list4visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/today/camp/">Apple Camp</a></li>
                            <li className={ list4visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://itunes.apple.com/app/apple-store/id375380948?pt=2003&amp;ct=footer&amp;mt=8">Apple Store App</a></li>
                            <li className={ list4visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/us/shop/goto/special_deals">Refurbished and Clearance</a></li>
                            <li className={ list4visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/us/shop/goto/payment_plan">Financing</a></li>
                            <li className={ list4visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/us/shop/goto/trade_in">Apple&nbsp;Trade&nbsp;In</a></li>
                            <li className={ list4visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/us/shop/goto/order/list">Order Status</a></li>
                            <li className={ list4visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/us/shop/goto/help">Shopping Help</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="footerNavColumn">
                        <div className="footerNavLabel" onClick={() => setList5Visible(!list5visible)}>

                            <span>
                                For Business
                            </span>
                            <span className={ list5visible ? "plusSignRotated" : "plusSign" }>
                                &#x2b;
                            </span>
                        </div>
                        <div className={ list5visible ? "footerListWrapper" : "hiddenWrapper" }>
                            <ul className="listColumnFooterNav">
                            <li className={ list5visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/business/">Apple and Business</a></li>
                            <li className={ list5visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/retail/business/">Shop for Business</a></li>
                        </ul>
                        </div>
                        <div className="footerNavLabel" onClick={() => setList6Visible(!list6visible)}>

                            <span>
                                For Education
                            </span>
                            <span className={ list6visible ? "plusSignRotated" : "plusSign" }>
                                &#x2b;
                            </span>
                        </div>
                        <div className={ list6visible ? "footerListWrapper" : "hiddenWrapper" }>
                        <ul className="listColumnFooterNav">
                            <li className={ list6visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/education/">Apple and Education</a></li>
                            <li className={ list6visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/education/k12/how-to-buy/">Shop for K-12</a></li>
                            <li className={ list6visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/us/shop/goto/educationrouting">Shop for College</a></li>
                        </ul>
                        </div>
                        <div className="footerNavLabel" onClick={() => setList7Visible(!list7visible)}>

                            <span>
                                For Healthcare
                            </span>
                            <span className={ list7visible ? "plusSignRotated" : "plusSign" }>
                                &#x2b;
                            </span>
                        </div>
                        <div className={ list7visible ? "footerListWrapper" : "hiddenWrapper" }>
                        <ul className="listColumnFooterNav">
                            <li className={ list7visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/healthcare/">Apple in Healthcare</a></li>
                            <li className={ list7visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/healthcare/apple-watch/">Health on Apple&nbsp;Watch</a></li>
                            <li className={ list7visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/healthcare/health-records/">Health Records on iPhone</a></li>
                        </ul>
                        </div>
                        <div className="footerNavLabel" onClick={() => setList8Visible(!list8visible)}>

                            <span>
                                For Government
                            </span>
                            <span className={ list8visible ? "plusSignRotated" : "plusSign" }>
                                &#x2b;
                            </span>
                        </div>
                        <div className={ list8visible ? "footerListWrapper" : "hiddenWrapper" }>
                        <ul className="listColumnFooterNav">
                            <li className={ list8visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/r/store/government/">Shop for Government</a></li>
                            <li className={ list8visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/us/shop/goto/eppstore/veteransandmilitary">Shop for Veterans and Military</a></li>
                        </ul>
                        </div>
                    </div>
                        <div className="footerNavColumn">
                        <div className="footerNavLabel" onClick={() => setList9Visible(!list9visible)}>

                            <span>
                                Apple Values
                            </span>
                            <span className={ list9visible ? "plusSignRotated" : "plusSign" }>
                                &#x2b;
                            </span>
                        </div>
                        <div className={ list9visible ? "footerListWrapper" : "hiddenWrapper" }>
                        <ul className="listColumnFooterNav">
                            <li className={ list9visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/accessibility/">Accessibility</a></li>
                            <li className={ list9visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/education/connectED/">Education</a></li>
                            <li className={ list9visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/environment/">Environment</a></li>
                            <li className={ list9visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/diversity/">Inclusion and Diversity</a></li>
                            <li className={ list9visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/privacy/">Privacy</a></li>
                            <li className={ list9visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/supplier-responsibility/">Supplier Responsibility</a></li>
                        </ul>
                        </div>
                        <div className="footerNavLabel" onClick={() => setList10Visible(!list10visible)}>

                            <span>
                                About Apple
                            </span>
                            <span className={ list10visible ? "plusSignRotated" : "plusSign" }>
                                &#x2b;
                            </span>
                        </div>
                        <div className={ list10visible ? "footerListWrapper" : "hiddenWrapper" }>
                        <ul className="listColumnFooterNav">
                            <li className={ list10visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/newsroom/">Newsroom</a></li>
                            <li className={ list10visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/leadership/">Apple Leadership</a></li>
                            <li className={ list10visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/jobs/us/">Job Opportunities</a></li>
                            <li className={ list10visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://web.archive.orghttps://investor.apple.com/">Investors</a></li>
                            <li className={ list10visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/apple-events/">Events</a></li>
                            <li className={ list10visible ? "listItemFooterNav" : "hidden" }><a className="linkInListItemFooterNav" href="https://www.apple.com/contact/">Contact Apple</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="footerContact">
                    More ways to shop: <a href="https://apple.com/retail">Find an Apple Store</a> or <a href="https://locate.apple.com">other retailer</a> near you. Or call 1-800-MY-APPLE.
                </div>
                <div className="footerTermsBar">
                    <div className="footerTermsBarLeft">
                        <span className="copyright">
                            Copyright © 2020 Apple Inc. All rights reserved.
                        </span>
                        <div className="policyLinks">
                            <a href="https://apple.com" id="firstPolicy">
                                Privacy Policy
                            </a>
                            <a href="https://apple.com">
                            Terms of use
                            </a>
                            <a href="https://apple.com">
                                Sales and Refunds
                            </a>
                            <a href="https://apple.com">
                                Legal
                            </a>
                            <a className="noBorder" href="https://apple.com">
                                Site Map
                            </a>
                        </div>
                    </div>
                    <span className="usa">
                        <a href="https://apple.com">
                            United States
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer;