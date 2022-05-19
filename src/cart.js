import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

function cart() {
    return (
        <div className='card'>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 10 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/Eu5ze2W1RmZQjxX2GqhIxWgvm4g=/0x0:2000x1284/1200x0/filters:focal(0x0:2000x1284):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8834801/pizza_shoe12.jpg" />
                            <Card.Body>
                                <Card.Title>Pizza shoes</Card.Title>
                                <Card.Text>
                                    These pair of shoes, handmade with unique products, is the best seller of all time, get yours, HURRY UP!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    )
}

export default cart