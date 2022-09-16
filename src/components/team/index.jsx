import React from 'react'
import SectionTitle from '../sectionTitle'

const Team = () => {
  return (
    <div className='padding-inline' id='team'>
        <SectionTitle title="TEAM MEMBERS" />

        <div className="padding-block">
            <p className='team-text'>Meet the team members who are untangling the downfalls of the metaverse real estate world. Our team is bootstrapped with eclectic backgrounds people who are professionally involved in the cryptocurrency world and various branches of the metaverse.</p>
            <div className="team-wrap">
                {/* =========== team about =========== */}
                <div className="team-about">
                    <h3 className="team-quote">Do the Right Thing <br /> <span className="text-primary">ALWAYS</span></h3>

                    <h5 className="name">Rishav Sen</h5>
                    <p className="position">CEO, CO-FOUNDER</p>
                </div>
                {/* =========== team about =========== */}

                {/* =========== team about =========== */}
                <div className="team-about">
                    <h3 className="team-quote"><span className="text-primary">TRUE</span><br /> Ownership</h3>

                    <h5 className="name">Tarra Sutra</h5>
                    <p className="position">CMO, FOUNDER</p>
                </div>
                {/* =========== team about =========== */}

                {/* =========== team about =========== */}
                <div className="team-about">
                    <h3 className="team-quote">Unsurpassevd <br /><span className="text-primary">ALWAYS</span></h3>

                    <h5 className="name">Faizan Seikh</h5>
                    <p className="position">CTO, FOUNDER</p>
                </div>
                {/* =========== team about =========== */}

                {/* =========== team about =========== */}
                <div className="team-about">
                    <h3 className="team-quote">WOW <br /> <span className="text-primary">Experience</span></h3>

                    <h5 className="name">Shibani Sen</h5>
                    <p className="position">MD, FOUNDER</p>
                </div>
                {/* =========== team about =========== */}

                {/* =========== team about =========== */}
                <div className="team-about">
                    <h3 className="team-quote"><span className="text-primary">CREATE</span><br /> What’s Next</h3>

                    <h5 className="name">Balbinder Singh</h5>
                    <p className="position">COO, CO-FOUNDER</p>
                </div>
                {/* =========== team about =========== */}
            </div>
        </div>
    </div>
  )
}

export default Team