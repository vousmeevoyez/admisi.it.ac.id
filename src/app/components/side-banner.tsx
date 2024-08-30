export default function SideBanner() {
    return (
        <aside className="pos-content-right col-md-3">
            <div className="side-banner text-center">
                  <div
                    style={{
                      borderRadius: '8px',
                      boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                      height: '0',
                      marginBottom: '0.9em',
                      marginTop: '1.6em',
                      overflow: 'hidden',
                      paddingBottom: '0',
                      paddingTop: '350.0000%',
                      position: 'relative',
                      width: '100%',
                      willChange: 'transform'
                    }}
                  >
                    <iframe
                      allow="fullscreen"
                      allowFullScreen
                      loading="lazy"
                      src="https://www.canva.com/design/DAGPJHfa8sc/1YuXnfSbo3qlEeKXRYfDFA/view?embed"
                      style={{
                        border: 'none',
                        height: '100%',
                        left: '0',
                        margin: '0',
                        padding: '0',
                        position: 'absolute',
                        top: '0',
                        width: '100%'
                      }}
                    >
                    </iframe>
                  </div>

            </div>
        </aside>
    );
}
