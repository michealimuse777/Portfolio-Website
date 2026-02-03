import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Image metadata
export const alt = 'Micheal - AI & Software Developer'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: '#0B0B0E',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#EDEDED',
                    }}
                >
                    <div style={{ fontSize: 64, fontWeight: 'bold', marginBottom: 20 }}>Micheal</div>
                    <div style={{ fontSize: 32, color: '#9CA3AF' }}>AI & Software Developer</div>
                    <div style={{ marginTop: 40, display: 'flex', gap: 10 }}>
                        <div style={{ padding: '10px 20px', background: '#7C7CFF', color: 'white', borderRadius: 8, fontSize: 20 }}>
                            AI Agents
                        </div>
                        <div style={{ padding: '10px 20px', background: '#121218', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: 8, fontSize: 20 }}>
                            Blockchain
                        </div>
                    </div>
                </div>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image size config
            ...size,
        }
    )
}
