import React, { Component, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Popover from 'react-bootstrap/Popover';




class Home extends Component {
  render() {

    return (
      <div className="full-home">
           <Row>
            <Col sm={12}>
              <Jumbotron fluid className="jumbo-home">
                <Container>
                  <h1 className="display-4">Welcome to Legacy TEAMS</h1>
                  <p className="jumbotron-text">
                  At Legacy TEAMS (Transforming, Encouraging and Assessing Mission Strength) we have gathered a team of individuals from military and civilian backgrounds who believe that God changes lives today and no problem is too big for God.

                  Our backgrounds consists of extensive military experience, marriage and family ministries, professional counseling, life coaching, church and business administration, and inner healing ministries.

                  Our desire is to help military chaplains, veterans, civilian ministers and their families achieve wholeness, healing and strength to serve God and build godly legacies in their lives.
                  </p>
                </Container>
              </Jumbotron>
            </Col>
          </Row>



        <Container 
        style={{
          marginBottom:'25px'
        }}
        >
  <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
  <Tab eventKey="home" title="Services">
    
              <div className="bottom">
            <div className="img-container"> 
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require("../img/bible.jpg")} />
                <Card.Body>
                <Card.Title>Pastoral Care</Card.Title>
                <Card.Text>
                    Pastoral Care
                    Legacy TEAMS pastoral care includes face to face pastoral counseling and counseling. Our focus is to help clients overcome life controlling wounds from the past, strengthen their primary relationships, clarify their life calling and establish strategic vision that will provide enduring legacy to their families, team and ministry. The long term goals are to help clients achieve wholeness, healing and strength to serve God and build godly legacies.
                </Card.Text><br/>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
              <div className="img-container"> 
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"  src={require("../img/alpine.jpg")} />
                <Card.Body>
                <Card.Title>Engagements</Card.Title>
                <Card.Text>
                  Engagements are on-site intensives between individuals or couples and Legacy TEAMS leaders which assesses the current situation of clients, explores ways to move forward in life, and seeks healing for moral and spiritual injuries. Engagements are tailored to the specific needs of clients, and may last from two to six days. Various tools are used to help clients assess their current situation and needs. Prayer and inner healing are an essential part of this process.
                </Card.Text><br/>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
              <div className="img-container"> 
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require("../img/steps.jpg")} />
                <Card.Body>
                <Card.Title>Next Steps</Card.Title>
                <Card.Text>
                  Through teleconferencing and face to face meetings and engagements, ministry participants will work with Legacy TEAMS to identify areas that need growth, change and transformation. After the initial assessments and interview, Legacy TEAMS will begin a process of coaching, mentoring and pastoral care to equip individuals with the skills, spiritual insight and tools to develop their own long range strategic vision for themselves, family and team.
                </Card.Text><br/>
                <ButtonToolbar style={{justifyContent:'center'}} >
  {['bottom'].map(placement => (
    <OverlayTrigger
      trigger="click"
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          <Popover.Title as="h3">{`For more info email us at:`}</Popover.Title>
          <Popover.Content>
            chaplainegert@yahoo.com
          </Popover.Content>
        </Popover>
      }
    >
      <Button style={{textAlign:'center'}} variant="primary">Contact Us</Button>
    </OverlayTrigger>
  ))}
</ButtonToolbar>
                </Card.Body>
              </Card>
            </div>
          </div>
  </Tab>
  <Tab eventKey="profile" title="The Team">

    <Container className="the-team">

          <Row className="row">
              <Col sm={4} className="bio-picture-egert">
                <Card.Img variant="top"  src={require("../img/Chet-Rhoda.png")} style={{width: "300px", borderRadius:'50%'}}/>
              </Col>


              <Col className="bio-text-egert">
  
                <Card.Body sm={6}>
                  <Card.Title>Chet and Rhoda Egert - Founders</Card.Title>
                    <Card.Text>
                      
                      Chet and Rhoda Egert have been married for 37 years and spent 31 years on active duty in the United States Army where Chet was a chaplain. Their passion is to see couples, ministry teams and individuals transformed by Christ and living out the legacies that God ordained for them. Chet is the third generation of career Army service members. His father and grandfather served from WWII through the 1970 s. Rhoda’s parents immigrated to the US from Norway where they had experienced the harshness of WWII in the 1940s. Both families understand the cost of freedom and the importance of transferring legacy to their children. Chet and Rhoda have two daughters who with their husbands are serving God in business, the military and mental health care. With four grandsons the Egerts are passing the legacy they received to the next generation. Chet holds his B.A. from Oral Roberts University, M.Div. from Assemblies of God Theological Seminary, and D.Min. from Erskine Theological Seminary. He is a graduate of the Army War College. Rhoda holds her B.A. from Oral Roberts University, M.A. from Assemblies of God Theological Seminary, and is a D.Min. candidate at AGTS to graduate in May 2018.
                    </Card.Text>
                </Card.Body>
              </Col>  
            </Row><hr/>

             <Row className="row-rossi">
              <Col sm={4} className="bio-picture-rossi">
                <Card.Img variant="top"  src={require("../img/John-Judy.jpg")} style={{width: "300px", borderRadius:'50%'}}/>
              </Col>
              <Col className="bio-text-rossi">  
                <Card.Body sm={6}>
                  <Card.Title>John & Judy Rossi - Board</Card.Title>
                    <Card.Text>
                      John, a retired career Army Officer, has actively supported military chapel ministries for over three decades. During his active duty years, John’s ministry service included Bible study teacher, small group coordinator, lay-counselor and resource manager in support of Army Chapel programs. Additionally, both during and after his active duty years, John has held key leadership positions in the Officers’ Christian Fellowship (OCF) culminating in five years as the OCF Regional Representative for the National Capital Region (2000-2005). After retiring from active duty, the Rossi family made the Fort Belvoir Chapel their church home. Here, John has taught Sunday school classes, participates in the Chapel’s men’s ministry and serves on the Parish Council. In 2009, John was elected President of the Fort Belvoir men’s ministry, The Belvoir Men of Faith (BMOF) and continues to serve in this capacity. John holds a Master of Arts degree in Pastoral Counseling from Liberty Baptist Theological Seminary (2010).

                      Married for 43 years, John and his wife, Judy, recently finished writing Enhancing Your Marriage: A Couple’s Bible Study. Both John and Judy are members of American Association of Christian Counselors. John and Judy have two married daughters who have blessed them with seven grandchildren.
                    </Card.Text>
                </Card.Body>
            </Col>  
          </Row><hr/>

          <Row className="row-meyer">
              <Col sm={4} className="bio-picture-meyer">
                <Card.Img variant="top"  src={require("../img/Steve-Carleene.jpg")} style={{width: "300px", borderRadius:'50%'}}/>
              </Col>


              <Col className="bio-text-meyer">
  
                <Card.Body sm={6}>
                  <Card.Title>Steve & Carleene Meyer - Board</Card.Title>
                    <Card.Text>
                      Steve and Carleene Myer have been married 45 years and shared 28 years of this time in the Army where Steve was in the Infantry. Upon retirement, Steve and Carleene founded The Military Heart in 2011 to minister Christ's love to military families. Their vision is to: minister to and through Chaplains, strengthen military marriages through discipleship, small groups, and workshops, develop leaders with a vision to serve others, and encourage military spouses to reach their potential through prayer, mentorship, and spiritual healing. Recently, Steve and Carleene have been called to The Military Ministry of CRU as Deputy Executive Directors. The mission of CRU Military is to bring the Gospel to the global Military community. The Myers have four adult children and eight amazing grandchildren.
                    </Card.Text>
                </Card.Body>
              </Col>  
            </Row>
        </Container>

  </Tab>
  <Tab eventKey="contact" title="FAQ">
      
       <Row>
            <Col sm={12}>
                <Container>
                  <h1 className="display-4" style={{textAlign:"center", margin:'20px'}}>Frequently Asked Questions (FAQ)</h1>
                  <Card body className="faq-card">
                    <h3 className="faq-head">WHAT'S THE BEST WAY TO CONTACT LEGACY TEAMS?</h3><hr/>
                    <p>Simply email us at chaplainegert@yahoo.com. We'll get back to you within 24 hours.</p><br/>
                    </Card>

                    <Card body className="faq-card">
                    <h3 className="faq-head">I’M MARRIED. IS IT NECESSARY THAT MY SPOUSE ALSO PARTICIPATE IN MEETINGS WITH LEGACY TEAMS?</h3><hr/>
                    <p>No. You are welcome to contact us privately, and we can work with you individually. In most cases, however, we want to work with both spouses to achieve marital and family wellness.</p><br/>
                    </Card>
                    <Card body className="faq-card">
                    <h3 className="faq-head">WHAT SHOULD I EXPECT FROM LEGACY TEAMS IN TERMS OF ASSISTANCE?</h3><hr/>
                    <p>Much of your work with Legacy TEAMS can be conducted by calls and teleconferencing. Pending the needs of an individual or couple, we may recommend a marriage engagement (face to face intensive) with the location to be determined. Engagements vary in length from two to six days with proportionate costs.</p><br/>
                    </Card>

                    <Card body className="faq-card">
                    <h3 className="faq-head">HOW MUCH DOES IT COST TO WORK WITH LEGACY TEAMS?</h3><hr/>
                    <p>Costs vary based on whether one or two individuals (i.e., a couple) are receiving assistance and which members of Legacy TEAMS are providing care. A schedule of fees will be forwarded upon request. Fees may fluctuate based on the situation of individuals. Legacy TEAMS receives donations and gifts to keep ministry costs affordable.</p>
                    </Card>
                </Container>
    
            </Col>
          </Row>

  </Tab>
</Tabs>
        </Container>

        <Row>
            <Col sm={12}>
              <Jumbotron fluid className="jumbo-home-bottom">
                <Container>
                   <p className="jumbotron-text" style={{ paddingTop:'50px', paddingBottom:'50px', fontSize:'20px'}}>
                  Located on beautiful Grand Lake of the Cherokees in Grove, Oklahoma, Legacy TEAMS exist to help military chaplains, ministers, and veterans develop healthy legacies that fulfill God’s purpose for their lives and ministries. Through one-to-one mentoring and coaching, teleconferencing or personal meetings, Legacy TEAMS seeks to develop a personal relationship with each participant to help them build legacies for themselves, their family and ministry that will endure. Everyone has a heritage, but not everyone leaves a great legacy. Legacy TEAMS will help you build one that reaches to your children’s children and beyond.
                  </p>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
        </div>

    )
  }
}

export default Home;