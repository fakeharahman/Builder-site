import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export default function test() {
    return (
        <div>
            <ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
  <h2>
    <a href='https://daneden.github.io/animate.css/'>
      Animate.css
    </a>
  </h2>
</ScrollAnimation>
        </div>
    )
}
