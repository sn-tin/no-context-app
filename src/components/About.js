import React from "react";
import { Tweet } from "react-twitter-widgets";

const About = () => {
    return (
        <section className="about">
            <h1>Unleash your <span className="highlight">unhingedness</span> and have fun with these texts!</h1>
            <div className="about-description">
                <p>
                    Whether it's on your friend's inbox or newly updated display picture's comment section, 
                    or your favorite artists' newly uploaded posts on social media, 
                    or trying to "lowkey" hit on your crush through direct message, 
                    <strong> No Context</strong> website got your back. You can freely use and send these texts to 
                    anyone in any situation! 
                </p>
                <br />
                <p>
                    No Context is a website consisting of memes or jejemon texts (as Filipino Gen-Zs would describe it) 
                    that makes it easier for the user to search for, copy-paste, and bookmark (or mark as a favorite) those texts.
                </p>
            </div>
            <h2>Texts credit to these thread:</h2>
            <div className="credits">
                <Tweet tweetId="1496299200870780928"/>
                <Tweet tweetId="1478069180305797120" />
            </div>
        </section>
    )
}

export default About