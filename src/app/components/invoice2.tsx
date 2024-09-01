'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import Timer from '@/app/components/timer';

type PaymentMethodProps = {
  fullName: string;
  phoneNumber: string;
  studyProgram: string;
  uniqueCode: string;
  id: string;
}

function getCurrentDateFormatted() : string{
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(now.getDate()).padStart(2, '0');

    return `${year}${month}${day}`;
}

function CopyButton ({ text }: {text: string}) {
  const handleCopy = () => 
    navigator.clipboard.writeText(text);

  return <Button onClick={handleCopy} variant="outline-primary" >
    <svg width="16" height="16" fill="currentColor" className="bi bi-clipboard me-1" viewBox="0 0 16 16">
      <path d="M11.5 0h-7A1.5 1.5 0 0 0 3 1.5v13A1.5 1.5 0 0 0 4.5 16h7A1.5 1.5 0 0 0 13 14.5v-13A1.5 1.5 0 0 0 11.5 0zM4.5 1h7a.5.5 0 0 1 .5.5V2H4V1.5a.5.5 0 0 1 .5-.5zM11 14H5V4h6v10z"/>
    </svg>
    Salin No Rekening
  </Button>
};


function WhatsAppButton({ text }: { text: string }) {
  const handleClick = () => {
    // Encode the text to be URL-safe
    const encodedText = encodeURIComponent(text);
    // Construct the WhatsApp URL
    const url = `https://wa.me/6285198968101?text=${encodedText}`;
    // Open the URL in a new tab
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      variant="outline-primary"
      style={{ backgroundColor: '#25D366', color: 'white' }} // Green background
    >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
        <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
        </svg>
      Chat via WhatsApp
    </Button>
  );
}


function PaymentMethod({}){
    // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
    const [paymentMethodVisible, setPaymentMethodVisible] = useState<{[key: number]: boolean}>({});
    const methods: {title: string, instructions: string[]}[] = [
      {
        title: 'ATM',
        instructions: [
          'Pilih menu lain pada menu utama.',
          'Pilih transfer.',
          'Pilih ke rekening BNI.',
          'Masukkan nomor rekening pembayaran.',
          'Masukkan jumlah yang akan dibayar, lalu konfirmasi.',
          'Pembayaran berhasil.'
        ]
      },
      {
        title: 'Internet Banking',
        instructions: [
          'Pilih transfer.',
          'Pilih ke rekening BNI',
          'Pilih rekening debit yang akan digunakan.',
          'Masukkan nomor rekening, lalu konfirmasi.',
          'Pembayaran berhasil.'
        ]
      },
      {
        title: 'Mobile Banking',
        instructions: [
          'Pilih transfer.',
          'Pilih ke rekening BNI',
          'Pilih rekening debit yang akan digunakan.',
          'Masukkan nomor rekening, lalu konfirmasi.',
          'Pembayaran berhasil.'
        ]
      },
      {
        title: 'Lewat bank lain',
        instructions: [
          'Pilih bank & cara bayar (ATM/internet/mobile banking) yang Anda inginkan.',
          'Pilih transfer ke bank lain.',
          'Masukkan nomor virtual account BNI.',
          'Masukkan jumlah yang akan dibayar, lalu konfirmasi.',
          'Pembayaran selesai.'
        ]
      }
    ]

    return methods.map(({title, instructions}, index)=> {
      return <Card className="mb-2">
          <Card.Header
          onClick={() => setPaymentMethodVisible({...paymentMethodVisible, [index]: !paymentMethodVisible[index] })}
            aria-controls="collapse-bni"
            aria-expanded={paymentMethodVisible[index]}
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: 'pointer' }}
          >
            <span>{title}</span>
            <span>{true ? '▲' : '▼'}</span>
          </Card.Header>
          <Collapse in={paymentMethodVisible[index]}>
            <Card.Body>
              {/* Additional details about BNI */}
              {instructions.map((instruction)=> 
                <p className="mb-0">{instruction}</p>
            )}
            </Card.Body>
          </Collapse>
        </Card>
      })
}

function PaymentPage({id, fullName, phoneNumber, studyProgram, uniqueCode}: PaymentMethodProps) {
  const [virtualAccountOpen, setVirtualAccountOpen] = useState(true);
  const [bniOpen, setBniOpen] = useState(true);

  const accountNumber = "1101984334";
  const accountHolder = "Yayasan Pengembangan Teknologi Indonesia";

  return (
    <Container className="p-3">
      {/* Header Section 
      <Row className="mb-3">
        <Col className="d-flex justify-content-between align-items-center">
          <h4 className="m-0">midtrans demo store</h4>
          <Button variant="link" className="text-dark">
            &times;
          </Button>
        </Col>
      </Row>*/}

      {/* Amount Section */}
      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col>
              <h3 className="">Jumlah tagihan</h3>
              <h2>{`Rp 300.${uniqueCode},-`}</h2>
              <p className="text-muted mb-1">{`ID Pendaftaran: ${id}#${getCurrentDateFormatted()}`}</p>
              <p className="text-info mb-1">{`Kode unik pembayaran: ${uniqueCode}`}</p>
              <Timer initialTime={21600}/>
            </Col>
            {/*<Col className="text-end">
              <Dropdown>
                <Dropdown.Toggle variant="link" className="text-dark p-0">
                  Details
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#action/1">Order Details</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>*/}
          </Row>
        </Card.Body>
        {/*<Card.Footer className="text-muted d-flex justify-content-between">
          <span>Choose within</span>
          <span>23:59:51</span>
        </Card.Footer>*/}
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col>
              <h4>Rincian tagihan</h4>
              <h5>Biaya Formulir: Rp 300.000,-</h5>
              <h5>{`Tambahan kode unik: Rp ${uniqueCode},-`}</h5>
            </Col>
            <Col>
              <h4>Informasi pendaftar</h4>
              <h5>{`Nama Lengkap: ${fullName}`}</h5>
              <h5>{`Nomor HP: ${phoneNumber}`}</h5>
              <h5>{`Program Studi: ${studyProgram}`}</h5>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Header
          onClick={() => setVirtualAccountOpen(!virtualAccountOpen)}
          aria-controls="collapse-virtual-account"
          aria-expanded={virtualAccountOpen}
          className="d-flex justify-content-between align-items-center"
          style={{ cursor: 'pointer' }}
        >
          <h5 className="mb-0">Cara Pembayaran</h5>
          <span>{virtualAccountOpen ? '▲' : '▼'}</span>
        </Card.Header>
        <Collapse in={virtualAccountOpen}>
          <div id="collapse-virtual-account">
            <Card.Body>
              <div className="d-flex flex-wrap mb-3">
                {/* Add other logos as needed */}
              </div>

              {/* BNI Expandable Section */}
              <Card className="mb-2">
                <Card.Header
                  onClick={() => setBniOpen(!bniOpen)}
                  aria-controls="collapse-bni"
                  aria-expanded={bniOpen}
                  className="d-flex justify-content-between align-items-center"
                  style={{ cursor: 'pointer' }}
                >
                  <span>Transfer Bank</span>
                  <span>{bniOpen ? '▲' : '▼'}</span>
                </Card.Header>
                <Collapse in={bniOpen}>
                  <Card.Body>
                    {/* Additional details about BNI */}
                    <p className="mb-0">Lakukan pembayaran ke rekening Bank BNI di bawah ini.</p>
                    <br/>
                    <img src="https://d2f3dnusg0rbp7.cloudfront.net/snap/v4/assets/bni-163d98085f5fe9df4068b91d64c50f5e5b347ca2ee306d27954e37b424ec4863.svg" alt="BNI" className="me-2 mb-2" height="24" />
                    <p className="mb-0"><strong>{accountNumber}</strong></p>
                    <p className="mb-0">A/N <strong>{accountHolder}</strong></p>
                    <br/>
                      <CopyButton text={accountNumber} />
                    <br/>
                    <br/>
                    <PaymentMethod />
                  </Card.Body>
                </Collapse>
              </Card>

            </Card.Body>
          </div>
        </Collapse>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col>
                    <h4>Konfirmasi Pembayaran</h4>
                    <p className="mb-0">Jika sudah berhasil melalukan pembayaran silakan kirim bukti transfer tersebut ke:</p>
                    <br/>
                      <WhatsAppButton text={'Bukti pembayaran'}/>
                    <br/>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PaymentPage;
