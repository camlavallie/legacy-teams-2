import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Linkify from 'linkifyjs/react';
// import { Link} from 'react-router-dom';
import Contact from './Contact'

function Home() {
  return (
    <div>
      <div className=" flex jumbo-home content flex text-center sm:bg-cover sm:bg-center bg-cover bg-center px-1 py-32">
        <div className="flex px-1 text-white text-4xl">LegacyTEAMS</div>
        <div className="slider px-1 py-1 mt-20">
          <div className="slider-text1 font-serif text-grey-200 text-center text-xs">
            Assessing Mission Strength.
          </div>
          <div className="slider-text2 font-serif text-grey-200 text-center text-xs pr-24">
            Encouraging
          </div>
          <div className="slider-text3 font-serif text-grey-200 text-center text-xs pr-24">
            Transforming
          </div>
        </div>
      </div>

      <Container
        style={{
          marginBottom: '25px'
        }}
      >
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
        >
          <Tab eventKey="home" title="Services">
            <div className="bottom">
              <div className="img-container">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    className="w-full"
                    src={require('../img/bible.jpg')}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Pastoral Care</div>
                    <p className="text-gray-700 text-base">
                      Long ago we realized that life in ministry can be a lonely
                      and exhausting journey. Having experienced the desire for
                      someone to walk along side of us, we are now in the
                      position to do that for others—we are here to join you as
                      you walk out your calling individually, as a couple, or a
                      team leader—whether you are ministering in the military or
                      as a civilian, our goal is to encourage you as we build a
                      supportive mentoring relationship.
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #pastor
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #ministry
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      #mentor
                    </span>
                  </div>
                </div>
              </div>

              <div className="img-container">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    className="w-full"
                    src={require('../img/alpine.jpg')}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      Strategic Processing
                    </div>
                    <p className="text-gray-700 text-base">
                      The purpose of our Engagements is to facilitate
                      transformational change that is holistic in nature.
                      Accomplished in three major steps:
                      <br /> • assessing present realities
                      <br /> • determining desired outcomes
                      <br /> • facilitating the process of alignment.
                      Intentionality, integrity, and impartation are all vital
                      to this process. The venues for these engagements include
                      digital communication and on-location intensives depending
                      on the needs of the participants.
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #strategy
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #process
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      #transformation
                    </span>
                  </div>
                </div>
              </div>
              <div className="img-container">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    className="w-full"
                    src={require('../img/steps.jpg')}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Next Steps</div>
                    <p className="text-gray-700 text-base">
                      Through teleconferencing and face to face meetings and
                      engagements, ministry participants will work with
                      LegacyTEAMS to identify areas that need growth, change and
                      transformation.After the initial assessments and
                      interview, LegacyTEAMS will begin a process of coaching,
                      mentoring and pastoral care to equip individuals with the
                      skills, spiritual insight and tools to develop their own
                      long range strategic vision for themselves, family and
                      team.
                    </p>
                  </div>
                   <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #vision
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #destiny
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      #theway
                    </span>
                  </div>
                </div>
              </div>
              <div className="img-container">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    className="w-full"
                    src={require('../img/contact-me.jpg')}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Contact LegacyTEAMS</div>
                    <Contact />
                  </div>
                </div>
              </div>
              <div className="img-container">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    className="w-full"
                    src={require('../img/seed.jpg')}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Partner With Us!</div>
                    <p className="text-gray-700 text-base">
                      Would you like to partner with LegacyTEAMS?
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-gray-700 text-base">
                      We greatly appreciate your partnership in prayer. If you'd
                      like to give a monetary donation or contribute financially
                      you can send all donations to:
                    </p>
                    <hr />
                    <div className="select-all ...">
                      <p className="text-gray-700 text-base">
                        PO BOX 451298
                        <br />
                        Grove, OK 74345
                        <br />
                      </p>
                      <hr />
                    </div>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #support
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #planting
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      #goodsoil
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="profile" title="The Team">
            <div className="card shadow-md md:flex m-8">
             
              <div className="mt-4 md:mt-0 md:ml-6 text-center p-3">
                <div className="uppercase tracking-wide text-sm text-brown-900 font-bold text-4xl mb-3">
                  The Team
                </div>
                <p className="mt-2 pb-3 text-gray-600">
                  LegacyTEAMS has brought together a team of individuals from
                  military and civilian backgrounds who believe that God changes
                  lives today and when we partner with HIM, the future can look
                  quite different than the past. Our backgrounds consist of
                  extensive military experience, marriage and family ministries,
                  professional counseling, life coaching, church and business
                  administration, and inner healing ministries.
                </p>
              </div>
            </div>

            <Container className="the-team">
              <Row className="row">
                <Col sm={4} className="bio-picture-egert">
                  <Card.Img
                    variant="top"
                    src={require('../img/Chet-Rhoda.png')}
                    style={{ width: '300px', borderRadius: '50%' }}
                  />
                </Col>

                <Col className="bio-text-egert">
                  <Card.Body sm={6}>
                    <Card.Title>
                      Drs. Chet and Rhoda Egert - Founders
                    </Card.Title>
                    <Card.Text>
                      Drs. Chet and Rhoda Egert (D.Min.) are the founders of
                      LegacyTEAMS. They have been married for 38 years and have
                      spent 31 years ministering in various capacities while
                      Chet was on active duty as a Chaplain in the United States
                      Army. Before retiring in 2014 as a Colonel, they lived
                      through five deployments. While both are grateful for
                      their journey, they know that it comes with great
                      challenges. The Egerts have actively mentored, coached,
                      and counseled others throughout their years in ministry.
                      Their passion is to see individuals, couples, and ministry
                      teams transformed by the power of Christ and living out
                      the purposes that God has ordained for them—being
                      fruitful, finishing well, and leaving legacies of great
                      worth—with intentionality, integrity, and impartation.
                      Their daughters have brought two wonderful men into the
                      family and five awesome grandchildren.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
              <hr />

              <Row className="row-rossi">
                <Col sm={4} className="bio-picture-rossi">
                  <Card.Img
                    variant="top"
                    src={require('../img/John-Judy.jpg')}
                    style={{ width: '300px', borderRadius: '50%' }}
                  />
                </Col>
                <Col className="bio-text-rossi">
                  <Card.Body sm={6}>
                    <Card.Title>John & Judy Rossi - Board</Card.Title>
                    <Card.Text>
                      Married for 45 years, John and Judy Rossi, served together
                      for 30 years while John was on active duty as a career
                      Army Officer. They have both been actively involved in
                      ministry in both civilian and military environments where
                      they have lead, taught, counseled and more. John has a MA
                      in Pastoral Counseling. He has held key leadership
                      positions in Officers’ Christian Fellowship and is
                      currently on the Board of Advisors for Teen Challenge.
                      Judy has written Raising Responsive Children: A Bible
                      Study for Moms, Enhancing your Marriage: A Women’s Bible
                      Study, and recently finished writing Enhancing Your
                      Marriage: A Couple’s Bible Study. Both John and Judy are
                      members of American Association of Christian Counselors.
                      They have two married daughters who have blessed them with
                      seven grandchildren.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
              <hr />

              <Row className="row-meyer">
                <Col sm={4} className="bio-picture-meyer">
                  <Card.Img
                    variant="top"
                    src={require('../img/Steve-Carleene.jpg')}
                    style={{ width: '300px', borderRadius: '50%' }}
                  />
                </Col>

                <Col className="bio-text-meyer">
                  <Card.Body sm={6}>
                    <Card.Title>Steve & Carleene Meyer - Board</Card.Title>
                    <Card.Text>
                      Steve and Carleene Myer have been married 47 years and
                      shared 28 years of this time in the Army where Steve was
                      in the Infantry.Upon retirement, Steve and Carleene
                      founded The Military Heart in 2011 to minister Christ &
                      #39;s love to military families. Their vision is to:
                      minister to and through Chaplains, strengthen military
                      marriages through discipleship, small groups, and
                      workshops, develop leaders with a vision to serve others,
                      and encourage military spouses to reach their potential
                      through prayer, mentorship, and spiritual healing.
                      Recently, Steve and Carleene have been called to The
                      Military Ministry of CRU as Deputy Executive Directors.
                      The mission of CRU Military is to bring the Gospel to the
                      global Military community.The Myers have four adult
                      children and eight amazing grandchildren.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="contact" title="FAQ">
            <Row>
              <Col sm={12}>
                <Linkify>
                  <Container>
                    <h1
                      className="display-4"
                      style={{ textAlign: 'center', margin: '20px' }}
                    >
                      Frequently Asked Questions
                    </h1>
                    <Card body className="card rounded shadow-sm mb-3">
                      <h3 className="bg-gray-700 text-white p-3 rounded leading-relaxed ">
                        What's the best way to contact LegacyTEAMS?
                      </h3>
                      <hr />
                      <p className="text-gray-600 leading-relaxed ">
                        Simply use the contact form in the Services tab. We generally reply within 24 hours.
                      </p>
                      <br />
                    </Card>

                    <Card body className="card shadow-sm mb-3">
                      <h3 className="bg-gray-700 text-white p-3 rounded leading-relaxed ">
                        I'm married. Is it necessary that my spouse also participate in meetings with LegacyTEAMS?
                      </h3>
                      <hr />
                      <p className="text-gray-600 leading-relaxed ">
                        No. You are welcome to contact us privately, and we can
                        work with you individually. In most cases, however, we
                        want to work with both spouses to achieve marital and
                        family wellness.
                      </p>
                      <br />
                    </Card>
                    <Card body className="card shadow-sm mb-3">
                      <h3 className="bg-gray-700 text-white p-3 rounded leading-relaxed ">
                        What should I expect from LegacyTEAMS in terms of assistance?
                      </h3>
                      <hr />
                      <p className="text-gray-600 leading-relaxed ">
                        Much of your work with LegacyTEAMS can be conducted by
                        calls and teleconferencing. Pending the needs of an
                        individual or couple, we may recommend a marriage
                        engagement (face to face intensive) with the location to
                        be determined. Engagements vary in length from two to
                        six days with proportionate costs.
                      </p>
                      <br />
                    </Card>

                    <Card body className="card shadow-sm mb-3">
                      <h3 className="bg-gray-700 text-white p-3 rounded leading-relaxed ">
                        How much does it cost to work with LegacyTEAMS?
                      </h3>
                      <hr />
                      <p className="text-gray-600 leading-relaxed ">
                        Costs vary based on whether one or two individuals
                        (i.e., a couple) are receiving assistance and which
                        members of LegacyTEAMS are providing care. A schedule of
                        fees will be forwarded upon request. Fees may fluctuate
                        based on the situation of individuals. LegacyTEAMS
                        receives donations and gifts to keep ministry costs
                        affordable.
                      </p>
                    </Card>
                  </Container>
                </Linkify>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
      <Container className="card shadow-lg p-3" style={{ marginTop: 100 }}>
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="rounded-lg md:w-56"
              src={require('../img/sunset.jpg')}
              alt="Woman paying for a purchase"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
              On The Water
            </div>
            <a
              href="https://www.grandlake.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
            >
              Located on beautiful Grand Lake of the Cherokees in Grove,
              Oklahoma
            </a>
            <p className="mt-2 text-gray-600 leading-relaxed ">
              LegacyTEAMS exists to help individuals and couples in military and
              civilian ministry fulfill God’s purposes for their lives by
              strategically developing legacies of great worth. Through
              one-to-one mentoring and coaching via digital and on location
              encounters, LegacyTEAMS seeks to develop a relationship with each
              participant while facilitating a process of legacy building for
              personal, relational, and ministry gain. Everyone has a heritage,
              but not everyone leaves a great legacy. LegacyTEAMS will assist
              you build one so your life and ministry is fruitful and you finish
              your journey strong.
            </p>
          </div>
        </div>
      </Container>
      <hr />
    </div>
  );
}

export default Home;
