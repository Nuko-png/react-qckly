import React from "react";
import {Link, Logo, Button} from "./elements";
import LoadWebsite from "./load_web";

const EnhancedButton = LoadWebsite(Button)
const EnhancedLink = LoadWebsite(Link)
const EnhancedLogo = LoadWebsite(Logo)

class Content extends React.Component {
  render() {
    return (
      <div>
        <EnhancedButton label="LOL"   />
        <br />
        <EnhancedButton />
        <br />
        <br />
        <EnhancedLink link="https://google.com" />
        <br />
        <br />
        <EnhancedLink />
        <br />
        <EnhancedLogo />
        <br />
        <br />
        <iframe id="frame" src="" width="600" height="500"/>
      </div>
    )
  }
}

export default Content;