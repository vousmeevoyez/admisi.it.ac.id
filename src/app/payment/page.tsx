import Heading from '@/app/components/heading';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import WaIcon from '@/app/components/wa-icon';

export const metadata = {
  title: 'Pendaftaran di Institut Teknologi Indonesia (ITI) | Informasi Terbaru & Proses Mudah',
  viewport: 'width=device-width, initial-scale=1',
  description: 'Sistem Informasi Akademik Institut Teknologi Indonesia. Langsung Bisa Digunakan, Tidak Ribet dan Pelaporan Beres.',
  keywords: '',
  authors: [{ name: 'siAkad Cloud' }],
};

function PaymentPage() {
  return (<>
    <Navbar />
    <section className="mainpos-content">
      <div className="container">
        <div className="row ">
          <div className="pos-main-content">
            <section className="pos-content-body col-md-9 form-page" style={{ width: '100%' }}>
              <div className="body-pmb">
                <Heading text={'Pembayaran'}/>
                <div className="row">
                  <div className="pos-content-top01">
                    <div className="col-md-12 text-center">
                      <div className="row">

                        <div className="cards-jalur" style={{height:'464px'}}>
            <div className="card-header " style={{height: '230px'}}>
                <h3 className="jalur">Pembayaran
                </h3><h5 className="namaperiode" translate="no">Perkuliahan Pada Jumat - Minggu</h5>
                <h6>
                    <span className="material-icons-round">schedule</span>
                    1 Agustus 2024 - 10 September 2024                </h6>
                
            </div>
            <div className="card-detail">
                    <div className="row">     
                        <div className="col-sm-6 detail-item">
                            <h6>Periode Pendaftaran</h6>
                            <p>2024/2025 Ganjil</p>
                        </div>
                        <div className="col-sm-6 detail-item">
                            <h6>Gelombang</h6>
                            <p>Gelombang 4</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 detail-item">
                            <h6>Sistem Kuliah</h6>
                            <p>Paralel</p>
                        </div>
                        <div className="col-sm-6 detail-item">
                            <h6>Formulir</h6>
                            <p>
                                                                    BERBAYAR                                                            </p>
                        </div>
                    </div>
                </div>
            <div className="card-footer">
                <div className="row buttons-wrapper">
                                    <div className="col-xs-6">
                        <a className="btn btn-warning" href="/jalur-pendaftaran/20241/4/2/2/256">Lihat Detail</a>
                    </div>
                    <div className="col-xs-6">
                        <a className="btn btn-primary" href="javascript:goDaftar('20241/4/2/2/256')">Daftar</a>
                    </div>
                                    </div>
            </div>
        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
    <link
      href="https://assets.siakadcloud.com/spmbfront/assets/default/../default/css/style.wa.min.css"
      rel="stylesheet"
    />
    <WaIcon />
    <Footer />
  </>
  );
}

export default PaymentPage;
