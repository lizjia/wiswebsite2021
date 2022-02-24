import Button from 'react-bootstrap/Button'

export const Stemposium = (props) => {
    return (
        <div id='stemposium' className='text-center'>
            <div className='section-title'>
                <h2>STEMposium</h2>
                <p>
                    Are you interested in STEM and making a difference?
                </p>
                &nbsp;
                <p>
                    Calling all high school superheroes to accept this mission: change STEMs from you!
                </p>
                &nbsp;
                <p>
                    WiS is hosting its fifth annual STEMposium conference on March 5th and 6th.


                    STEMposium is a two-day virtual event that aims to provide opportunities for high school students to grow their knowledge of STEM through interactive workshops, inspiring speakers, and networking opportunities.
                    This year’s theme is “Changemakers” and highlights the impact youth can have on their communities through their STEM education.

                </p>
                &nbsp;
                &nbsp;
                <div className='row'>
                    <>
                        <Button className='btn btn-custom btn-lg' href='https://tinyurl.com/stemposium2022  '>
                            Learn More.
                        </Button>{''}
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <Button className='btn btn-custom btn-lg' href='https://forms.gle/b4eVfauxuZQtbDMEA '>
                            Register Now.
                        </Button>{''}
                    </>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}
