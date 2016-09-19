import React from 'react';

require('../../../stylesheets/components/profile/ProfileFooterBottom.scss');

export default class ProfileFooterBottom extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="profile-footer-bottom-main-wrapper">
            <div className="profile-footer-bottom-top-ul"></div>
            <div className="profile-footer-bottom-about-row">
              <div className="profile-footer-bottom-links profile-about-links">
                <div><a href="https://www.facebook.com/facebook">About</a></div>
                <div><a href="https://www.facebook.com/campaign/landing.php?placement=pf&campaign_id=466780656697650&extra_1=auto">Create Ad</a></div>
                <div><a href="https://www.facebook.com/pages/create/?ref_type=sitefooter">Create Page</a></div>
                <div><a href="https://developers.facebook.com/?ref=pf">Developers</a></div>
                <div><a href="https://www.facebook.com/careers/?ref=pf">Careers</a></div>
                <div><a href="https://www.facebook.com/privacy/explanation">Privacy</a></div>
                <div><a href="https://www.facebook.com/help/cookies/?ref=sitefooter">Cookies</a></div>
                <div><a href="https://www.facebook.com/help/568137493302217">Ad Choices<span>&nbsp;<img src="/images/profile/footer-ads-blue.png"/></span></a></div>
                <div><a href="https://www.facebook.com/policies/?ref=pf">Terms</a></div>
                <div><a href="https://www.facebook.com/help/?ref=pf">Help</a></div>
              </div>
            </div>
            <div className="profile-footer-copyright">
              <span> Facebook © 2016</span>
            </div>

            <div>
              <div className="profile-footer-bottom-links profile-lang-links">
                <div className="gray-text profile-footer-english">English (US)</div>
                <div><a href="https://www.facebook.com/profile.php?id=100013300183126&sk=about">Español</a></div>
                <div><a href="https://www.facebook.com/profile.php?id=100013300183126&sk=about">Français (France)</a></div>
                <div><a href="https://www.facebook.com/profile.php?id=100013300183126&sk=about">中文(简体)</a></div>
                <div><a href="https://www.facebook.com/profile.php?id=100013300183126&sk=about">العربية</a></div>
                <div><a href="https://www.facebook.com/profile.php?id=100013300183126&sk=about">Português (Brasil)</a></div>
                <div><a href="https://www.facebook.com/profile.php?id=100013300183126&sk=about">Italiano</a></div>
                <div><a href="https://www.facebook.com/profile.php?id=100013300183126&sk=about">한국어</a></div>
                <div><a href="https://www.facebook.com/profile.php?id=100013300183126&sk=about">Deutsch</a></div>
                <div><a href="https://www.facebook.com/profile.php?id=100013300183126&sk=about">हिन्दी</a></div>
                <div><a href="https://www.facebook.com/profile.php?id=100013300183126&sk=about">日本語</a></div>
                <div className="profile-plus-box-wrapper">
                  <div className="profile-footer-plus-box">
                    <img src="/images/main/gray-plus.png"/>
                  </div>
                </div>
              </div>
            </div>

            </div>
        )
    }
}
