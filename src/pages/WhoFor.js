import React from "react";
import '../main.css';

function whos() {
    return (
        <div className="">
            <div class="EmailCapturePage">
                <div class="top-bar-container no-bottom-margin invert">
                    <div class="top-bar ">
                        <div class="left-comp">
                            <div class="BackButton"><img src="/images/icons/backButton.svg" class="invert" alt="back"></div>
                            </div>
                            <div class="title ">
                                <div id="onboarding_step">1 / 4</div>
                            </div>
                            <div class="right-comp">
                                <div class="MixtilesMenu">
                                    <div class="menu-button-wrapper"><img class="menu-button invert" src="/images/icons/menuIcon.svg" aria-controls="mixtiles-menu" aria-haspopup="true" alt="Menu Button"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="bottom-comp"></div>
                        </div>
                        <div class="content">
                            <div class="bg-layer">
                                <div class="bg-circle"></div>
                            </div>
                            <div class="step-1-wrapper visible">
                                <h2>Who's it for?</h2>
                                <div class="options">
                                    <div class="option">
                                        <div class="img for-me"></div>
                                        <div>
                                            <h3>For myself</h3>
                                            <p>I'm decorating my walls</p>
                                        </div>
                                    </div>
                                    <div class="option">
                                        <div class="img for-gift"></div>
                                        <div>
                                            <h3>For someone else</h3>
                                            <p>I'm buying a gift</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bottom-bar">
                            <div class="bottom-button-container">
                                <div class="bottom-button">Pick Photos</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                
  );
}

export default whos;
