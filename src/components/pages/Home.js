import React, { Component } from 'react'
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
                 
                  <h1 style={{textAlign:'center', fontSize:'50px'}}>Welcome to LegacyTEAMS</h1>
              
        
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
                    LegacyTEAMS pastoral care includes face to face pastoral counseling and counseling. Our focus is to help clients overcome life controlling wounds from the past, strengthen their primary relationships, clarify their life calling and establish strategic vision that will provide enduring legacy to their families, team and ministry. The long term goals are to help clients achieve wholeness, healing and strength to serve God and build godly legacies.
                </Card.Text><br/>
                 <Button variant="primary" href="/about">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
              <div className="img-container"> 
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"  src={require("../img/alpine.jpg")} />
                <Card.Body>
                <Card.Title>Engagements</Card.Title>
                <Card.Text>
                  Engagements are on-site intensives between individuals or couples and LegacyTEAMS leaders which assesses the current situation of clients, explores ways to move forward in life, and seeks healing for moral and spiritual injuries. Engagements are tailored to the specific needs of clients, and may last from two to six days. Various tools are used to help clients assess their current situation and needs. Prayer and inner healing are an essential part of this process.
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
                  Through teleconferencing and face to face meetings and engagements, ministry participants will work with LegacyTEAMS to identify areas that need growth, change and transformation. After the initial assessments and interview, LegacyTEAMS will begin a process of coaching, mentoring and pastoral care to equip individuals with the skills, spiritual insight and tools to develop their own long range strategic vision for themselves, family and team.
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
      <Button style={{textAlign:'center'}} className="dark" variant="primary">Contact Us</Button>
    </OverlayTrigger>
  ))}
</ButtonToolbar>
                </Card.Body>
              </Card>
            </div>
          </div>
  </Tab>
  <Tab eventKey="profile" title="The Team">
  
  
  <Card body className="faq-card" style={{marginTop:'50px', marginBottom:'50px'}}>
    <p className="jumbotron-text">
             LegacyTEAMS has brought together a team of individuals from military and civilian backgrounds who believe that God changes lives today and when we partner with HIM, the future can look quite different than the past. Our backgrounds consist of extensive military experience, marriage and family ministries, professional counseling, life coaching, church and business administration, and inner healing ministries.
                  </p>
  </Card>

    <Container className="the-team">

          <Row className="row">
              <Col sm={4} className="bio-picture-egert">
                <Card.Img variant="top"  src={require("../img/Chet-Rhoda.png")} style={{width: "300px", borderRadius:'50%'}}/>
              </Col>


              <Col className="bio-text-egert">
  
                <Card.Body sm={6}>
                  <Card.Title>Drs. Chet and Rhoda Egert - Founders</Card.Title>
                    <Card.Text>
                      Drs. Chet and Rhoda Egert (D.Min.) are the founders of LegacyTEAMS. They have been married for 38 years and have spent 31 years ministering in various capacities while Chet was on active duty as a Chaplain in the United States Army. Before retiring in 2014 as a Colonel, they lived through five deployments. While both are grateful for their journey, they know that it comes with great challenges. The Egerts have actively mentored, coached, and counseled others throughout their years in ministry. Their passion is to see individuals, couples, and ministry teams transformed by the power of Christ and living out the purposes that God has ordained for them—being fruitful, finishing well, and leaving legacies of great worth—with intentionality, integrity, and impartation. Their daughters have brought two wonderful men into the family and five awesome grandchildren.
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
                      Married for 45 years, John and Judy Rossi, served together for 30 years while John was
                      on active duty as a career Army Officer. They have both been actively involved in ministry in both civilian and military environments where they have lead, taught, counseled and more. John has a MA in Pastoral Counseling. He has held key leadership positions in Officers’ Christian Fellowship and is currently on the Board of Advisors for Teen Challenge. Judy has written Raising Responsive Children: A Bible Study for Moms, Enhancing your Marriage: A Women’s Bible Study, and recently finished writing Enhancing Your Marriage: A Couple’s Bible Study. Both John and Judy are members of American Association of Christian Counselors. They have two married daughters who have blessed them with seven grandchildren.
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
                      Steve and Carleene Myer have been married 47 years and shared 28 years of this time in the Army where Steve was in the Infantry.Upon retirement, Steve and Carleene founded The Military Heart in 2011 to minister Christ & #39;s love to military families. Their vision is to: minister to and through Chaplains, strengthen military marriages through discipleship, small groups, and workshops, develop leaders with a vision to serve others, and encourage military spouses to reach their potential through prayer, mentorship, and spiritual healing. Recently, Steve and Carleene have been called to The Military Ministry of CRU as Deputy Executive Directors. The mission of CRU
                      Military is to bring the Gospel to the global Military community.The Myers have four adult children and eight amazing grandchildren.
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
                    <h3 className="faq-head">WHAT'S THE BEST WAY TO CONTACT LEGACYTEAMS?</h3><hr/>
                    <p>Simply email us at chaplainegert@yahoo.com. We'll get back to you within 24 hours.</p><br/>
                    </Card>

                    <Card body className="faq-card">
                    <h3 className="faq-head">I’M MARRIED. IS IT NECESSARY THAT MY SPOUSE ALSO PARTICIPATE IN MEETINGS WITH LEGACYTEAMS?</h3><hr/>
                    <p>No. You are welcome to contact us privately, and we can work with you individually. In most cases, however, we want to work with both spouses to achieve marital and family wellness.</p><br/>
                    </Card>
                    <Card body className="faq-card">
                    <h3 className="faq-head">WHAT SHOULD I EXPECT FROM LEGACYTEAMS IN TERMS OF ASSISTANCE?</h3><hr/>
                    <p>Much of your work with LegacyTEAMS can be conducted by calls and teleconferencing. Pending the needs of an individual or couple, we may recommend a marriage engagement (face to face intensive) with the location to be determined. Engagements vary in length from two to six days with proportionate costs.</p><br/>
                    </Card>

                    <Card body className="faq-card">
                    <h3 className="faq-head">HOW MUCH DOES IT COST TO WORK WITH LEGACYTEAMS?</h3><hr/>
                    <p>Costs vary based on whether one or two individuals (i.e., a couple) are receiving assistance and which members of LegacyTEAMS are providing care. A schedule of fees will be forwarded upon request. Fees may fluctuate based on the situation of individuals. LegacyTEAMS receives donations and gifts to keep ministry costs affordable.</p>
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
                  Located on beautiful Grand Lake of the Cherokees in Grove, Oklahoma, LegacyTEAMS exist to help military chaplains, ministers, and veterans develop healthy legacies that fulfill God’s purpose for their lives and ministries. Through one-to-one mentoring and coaching, teleconferencing or personal meetings, LegacyTEAMS seeks to develop a personal relationship with each participant to help them build legacies for themselves, their family and ministry that will endure. Everyone has a heritage, but not everyone leaves a great legacy. LegacyTEAMS will help you build one that reaches to your children’s children and beyond.
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