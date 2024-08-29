export default function Navbar() {
  return (
    <header className="mainpos-header mainpos-header-baru">
      <div id="header-pmb">
        <div className="bg">
          <nav className="navbar" id="header">
            <div className="container">
              <div className="container-fluid">
                <div className="left">
                  <img src="https://assets.siakadcloud.com/uploads/iti/logoaplikasi/733.jpg" />
                  <div className="header-title">
                    <h3>Admisi</h3>
                    <h2 translate="no">Institut Teknologi Indonesia</h2>
                  </div>
                </div>
                <div className="menu-group">
                  <a className="button menu" href="https://pmb.iti.ac.id/home">
                    <p>Beranda</p>
                  </a>
                  <a className="button menu" href="https://pmb.iti.ac.id/jalur-seleksi">
                    <p>Jalur Pendaftaran</p>
                  </a>
                  <div className="dropdown">
                    <a
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="button menu dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                      role="button"
                    >
                      <p>
                        Informasi
                        <span className="material-icons-round arrow-down">
                          keyboard_arrow_down
                        </span>
                        <span className="material-icons-round arrow-up">
                          keyboard_arrow_up
                        </span>
                      </p>
                    </a>
                    <div className="dropdown-menu">
                      <a className="" href="https://pmb.iti.ac.id/program-studi">
                        <p>Program Studi</p>
                      </a>
                      <a className="" href="https://pmb.iti.ac.id/pengumuman">
                        <p>Pengumuman</p>
                      </a>
                      <a className="" href="https://pmb.iti.ac.id/daftar-informasi">
                        <p>Informasi Pendaftaran</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="menu-group dropdown bahasa-dropdown" translate="no">
                    <a
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="button dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                      id="pilih-bahasa"
                      role="button"
                    >
                      <p>
                        ID
                        <span className="material-icons-round">language</span>
                      </p>
                    </a>
                    <div className="dropdown-menu pull-right">
                      <p className="title">Pilih Bahasa</p>
                      <a href="https://pmb.iti.ac.id/daftar?lang=id">
                        <img
                          src="https://assets.siakadcloud.com/spmbfront/assets/default/img/flag-indonesia.png"
                          width="24px"
                        />
                        <p>Bahasa Indonesia</p>
                      </a>
                      <hr />
                      <a href="https://pmb.iti.ac.id/daftar?lang=en">
                        <img
                          src="https://assets.siakadcloud.com/spmbfront/assets/default/img/flag-inggris2.jpg"
                          width="24px"
                        />
                        <p>English</p>
                      </a>
                    </div>
                  </div>
                  <div className="profile">
                    <div className="login-button">
                      <a className="button primary outline login" href="https://pmb.iti.ac.id/login" type="button">
                        <p className="login">Masuk</p>
                      </a>
                    </div>
                  </div>
                  <a
                    aria-controls="mobile-navbar-collapse"
                    aria-expanded="false"
                    className="button primary outline navbar-toggle collapsed"
                    data-target="#mobile-navbar-collapse"
                    data-toggle="collapse"
                    id="mobile-nav"
                    type="button"
                  >
                    <span className="material-icons-round">menu</span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div className="collapse navbar-collapse" id="mobile-navbar-collapse">
            <div className="nav navbar-nav">
              <a className="button menu" href="https://pmb.iti.ac.id/home">
                <p>Beranda</p>
              </a>
              <a className="button menu" href="https://pmb.iti.ac.id/jalur-seleksi">
                <p>Jalur Seleksi</p>
              </a>
              <a className="button menu" href="https://pmb.iti.ac.id/program-studi">
                <p>Program Studi</p>
              </a>
              <a className="button menu" href="https://pmb.iti.ac.id/pengumuman">
                <p>Pengumuman</p>
              </a>
              <a className="button menu" href="https://pmb.iti.ac.id/daftar-informasi">
                <p>Informasi Pendaftaran</p>
              </a>
              <div className="menu-group dropdown bahasa-dropdown" translate="no">
                <a
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="button dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  id="pilih-bahasa"
                  role="button"
                >
                  <p>
                    ID
                    <span className="material-icons-round">language</span>
                  </p>
                </a>
                <div className="dropdown-menu">
                  <p className="title">Pilih Bahasa</p>
                  <a href="https://pmb.iti.ac.id/daftar?lang=id">
                    <img
                      src="https://assets.siakadcloud.com/spmbfront/assets/default/img/flag-indonesia.png"
                      width="24px"
                    />
                    <p>Bahasa Indonesia</p>
                  </a>
                  <hr />
                  <a href="https://pmb.iti.ac.id/daftar?lang=en">
                    <img
                      src="https://assets.siakadcloud.com/spmbfront/assets/default/img/flag-inggris2.jpg"
                      width="24px"
                    />
                    <p>English</p>
                  </a>
                </div>
              </div>
              <a className="login" href="https://pmb.iti.ac.id/login" type="button">
                <p>Masuk</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
