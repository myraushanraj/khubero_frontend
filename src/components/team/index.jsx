import React from 'react'
import SectionTitle from '../sectionTitle'

const Team = () => {
  return (
    <div className='padding-inline' id='team'>
        <SectionTitle title="TEAM MEMBERS" />

        <div className="padding-block">
            <div className="team-wrap">
                {/* =========== team about =========== */}
                <div className="team-about">
                    <h3 className="team-quote">Do the Right Thing <br /> <span className="text-primary">ALWAYS</span></h3>

                    <h5 className="name">Bhav</h5>
                    <p className="position">COO</p>
                </div>
                {/* =========== team about =========== */}

                {/* =========== team about =========== */}
                <div className="team-about">
                    <h3 className="team-quote"><span className="text-primary">TRUE</span><br /> Ownership</h3>

                    <h5 className="name">Ritesh Suneja</h5>
                    <p className="position">CEO, FOUNDER</p>
                </div>
                {/* =========== team about =========== */}

                {/* =========== team about =========== */}
                <div className="team-about">
                    <h3 className="team-quote">Unsurpassevd <br /><span className="text-primary">ALWAYS</span></h3>

                    <h5 className="name">Rachael </h5>
                    <p className="position">CMO, FOUNDER</p>
                </div>
                {/* =========== team about =========== */}

                {/* =========== team about =========== */}
               
                {/* =========== team about =========== */}

                {/* =========== team about =========== */}
                <div className="team-about">
                    <h3 className="team-quote"><span className="text-primary">CREATE</span><br /> What’s Next</h3>

                    <h5 className="name">Abhi</h5>
                    <p className="position">CTO, CO-FOUNDER</p>
                </div>
                {/* =========== team about =========== */}
            </div>
        </div>
    </div>
  )
}

export default Team