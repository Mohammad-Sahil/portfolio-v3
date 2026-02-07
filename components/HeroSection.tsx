import TypeAnimation from 'react-type-animation'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function HeroSection() {
    return (
        <div className="home_banner" style={{ border: '1px solid #38384a' }}>
            <div>
                <div className="row">
                    <div className="available-badge col-md-3 col-12 me-3">
                        <span className="green-pulse-dot"></span>
                        <span>AVAILABLE FOR WORK</span>
                    </div>
                    <div className="meeting-badge col-md-3 col-12"
                        onClick={() =>
                            window.open(
                                'https://calendly.com/tsharpsahil/portfolio',
                                '_blank',
                                'noopener,noreferrer'
                            )
                        }
                    >
                        <span>Schedule a Meeting</span>
                    </div>
                </div>
                <h2>
                    Building <span className="gradient-text">production-ready</span>
                    <br />
                    systems that scale.
                </h2>
                <div className="mb-8">
                    {/* <div className="h-px bg-gray-500 w-8"></div> */}
                    <code className="code-container">
                        <div
                            className="row align-items-center px-3"
                            style={{
                                height: '34px',
                                background: 'rgba(0, 0, 0, 0.2)',
                                borderBottom: '1px solid #333',
                                borderTopLeftRadius: '8px',
                                borderTopRightRadius: '8px',
                                marginBottom: '12px'
                            }}
                        >
                            <div className="d-flex gap-2">
                                <span
                                    style={{
                                        width: '12px',
                                        height: '12px',
                                        backgroundColor: '#ff5f56',
                                        borderRadius: '50%',
                                        display: 'inline-block',
                                    }}
                                />
                                <span
                                    style={{
                                        width: '12px',
                                        height: '12px',
                                        backgroundColor: '#ffbd2e',
                                        borderRadius: '50%',
                                        display: 'inline-block',
                                    }}
                                />
                                <span
                                    style={{
                                        width: '12px',
                                        height: '12px',
                                        backgroundColor: '#27c93f',
                                        borderRadius: '50%',
                                        display: 'inline-block',
                                    }}
                                />
                            </div>
                        </div>

                        &lt;<i>code</i>&gt;{' '}
                        <TypeAnimation
                            cursor={true}
                            sequence={[
                                ' I build full-stack web and mobile applications. ',
                                2000,
                                ' I deploy scalable cloud solutions using Firebase, GCP, and AWS. ',
                                2000,
                                ' I am an Ai enthusiast and thrive in collaborative environments. ',
                                2000,
                                ' I craft intuitive & responsive ui for modern web and mobile platforms. ',
                                2000,
                            ]}
                            wrapper="div"
                            repeat={Infinity}
                        />
                        &lt;/<i>code</i>&gt;
                    </code>

                </div>
                <div className="button-group">
                    <Link href="/projects" className="text-decoration-none text-white">
                        <Button className={styles.home_button} variant="contained">
                            EXPLORE WORK
                            <ArrowForwardIcon sx={{ marginLeft: '8px', fontSize: '18px' }} />
                        </Button>
                    </Link>
                    <Button
                        component={Link}
                        href="/contactus"
                        className="contact-button"
                    >
                        <div className="shimmer-effect"></div>
                        <span className="button-content">
                            Contact Me
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection