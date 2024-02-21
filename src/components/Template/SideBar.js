import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro" align="center">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Leo Dong</h2>
        <p><a href="mailto:leozhdong@gmail.com">leozhdong@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hey, I&apos;m Leo.
      </p>
      <p>
        Professionally, I am currently using data science, ML and ML engineering to create customer oriented models and analysis at <a href="https://www.sainsburys.co.uk">Sainsbury&apos;s</a>. This work has a customer marketing flavour, with particular emphasis on helping everyone eat better.
      </p>
      <p>
        Prior to that, I was helping guide fintech startups through any data science or architectural challenges at <a href="https://www.x15ventures.com.au">x15ventures. </a>
        Even earlier, I was working in Data Science at <a href="https://www.commbank.com.au">the Commonwealth Bank of Australia</a> in
        the financial wellbeing space, building things like <a href="https://www.commbank.com.au/digital-banking/bill-sense.html">this</a>.
      </p>
      <p>
        In my free time at home, I spend it <a href="https://blog.leodong.me">writing</a>, <a href="https://blog.leodong.me/tag/reviews/">reading</a> and <a href="/art">painting</a>.
        When I&apos;m out and about I am most likely travelling, playing
        football/futsal or doing some <a href="https://photo.leodong.me">photography</a>.
        Other things I have dabbled in include
        scuba diving, volleyball and skiing.
      </p>
      <ul className="actions" align="center">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Read More</Link> : <Link to="/blog" className="button">My Blog</Link>}
        </li>
      </ul>
    </section>

    <section id="footer" align="center">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
