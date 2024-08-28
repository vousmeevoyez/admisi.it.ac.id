export default function WaIcon(){
    return (<div
      className="okewa-style_1  okewa-right   branded"
      id="okewa"
    >
      <div
        className="okewa-pulse_3"
        style={{
          borderColor: '#0dc152'
        }}
      />
      <a
        href="https://wa.me/6282210888432?text=Saya tanya terkait pendaftaran"
        style={{
          filter: 'unset'
        }}
        target="_blank"
      >
        <div
          className="ok_animated ok_bounceInUp"
          id="okewa-floating_cta"
          style={{
            background: '#0dc152',
            zIndex: '999'
          }}
        >
          <span className="okewa-fc_text">
            Butuh Bantuan? Hubungi Kami!
          </span>
          <img
            alt=""
            className="okewa-fc_icon"
            src="https://assets.siakadcloud.com/spmbfront/assets/default//img/whatsapp-icon.png"
          />
        </div>
      </a>
    </div>);
}
