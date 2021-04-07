import React, { Component } from "react"


class AboutMe extends Component {
    render() {
        return (
            <div>


                <img alt={`Profile Photo`} width={325} 
                src= "profilePic.jpg"                
                />

<br></br>
<br></br>
                <h1>
                    Hi, I am Praveen!
                </h1>

<br></br>

                <p>
                    Praveen Kumar is an aspiring Web Developer cum Data Analyst, He graduated engineering in "Electronic And Communication". Due to his interest in Computer Science, he started gaining programming skills. He began his career as Application Developer from MetricStream as a Intern. 
                </p>

<br></br>
                <p>
                    Having an enthusiasm over ML, DL and Data Analytics related subjects, I found the MCDA program Later, with the knowledge gained he got an offer from L&T Infotech as a Full time Software Engineer. He associated with multiple projects to support and develop the websites (project) for clients.
<br></br>
                    Further, He realized his interest in Data Analyst. He gathered and gathering more in depth knowledge about Machine Learning, Deep Learning, Business Intelligence Tools and so on. Meanwhile, he never missed to do be in touch with website development.He started making youtube videos in recent time as it is in his hobby-list. 
                </p>

            </div>
        )
    }
}

/**
 * Topics you might also like:
 *      - Array.map() -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

export default AboutMe;