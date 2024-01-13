import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const icon = L.icon({ iconUrl: "images/marker-icon.png" })

const millenium: [number, number][] = [
    [49.26598188777696, -123.07832181402011], /*VCC Clark*/
    [49.26280501165313, -123.06820653360123], /*Commercial - Broadway*/
    [49.26003422040167, -123.04234649267198], /*Renfrew*/
    [49.260850467046815, -123.03313420361933], /*Rupert*/
    [49.26505307542621, -123.0128074772701], /*Gilmore*/
    [49.26648328625659, -123.00100738778109], /*Brentwood*/
    [49.26481915546356, -122.98171197082044], /*Holdom*/
    [49.259267948982526, -122.96346791929608], /*Sperling*/
    [49.25469472448631, -122.93850297526726], /*Lake city*/
    [49.25352160761021, -122.91759286532373], /*production way*/
    [49.24860632878416, -122.89645558821653], /*lougheed*/
    [49.26147017397405, -122.88919216619223], /*burquitlam*/
    [49.278128866705295, -122.84541281090523], /*moody*/
    [49.27729975218456, -122.82773905872023], /*inlet*/
    [49.27484264635136, -122.80002428178709], /*coquitlam*/
    [49.28047607779752, -122.7931504969472], /*lincoln*/
    [49.285774057504085, -122.7908223394999], /*lafarge*/
]

const expo: [number, number][][] = [
    [
        [49.286084944986584, -123.1107003373025], /*Waterfront*/
        [49.28560668330146, -123.11997463304637], /*Burrard*/
        [49.28336392691885, -123.11579115139855], /*granville*/
        [49.2797504265326, -123.10877769392438], /*stadium chinatown*/
        [49.27326680283529, -123.09976169190791], /*main street science*/
        [49.26272081318444, -123.06868825784478], /*commerical*/
        [49.24833237475057, -123.05552188758176], /*nanaimo*/
        [49.24435105586432, -123.04559930578488], /*29*/
        [49.238455785275576, -123.0313579384195], /*joyce*/
        [49.229758756680596, -123.01265607343569], /*patterson*/
        [49.22578551859037, -123.0037732709542], /*metro*/
        [49.220159405008026, -122.98849514066205], /*royal*/
        [49.21231336422558, -122.95934290556919], /*edmonds*/
        [49.200011480813416, -122.94908299859614], /*22*/
        [49.201471171368496, -122.91263449215886], /*new westminister*/
        [49.20480123545422, -122.90608697125008], /*columbia*/
        [49.224762116370734, -122.88928380210714], /*sapperton*/
        [49.233286607634035, -122.88287407173216], /*braid*/
        [49.24846743252939, -122.89698193243814], /*lougheed*/
        [49.25344967223133, -122.91814611469617], /*production*/
    ],
    [
        [49.286084944986584, -123.1107003373025], /*Waterfront*/
        [49.28560668330146, -123.11997463304637], /*Burrard*/
        [49.28336392691885, -123.11579115139855], /*granville*/
        [49.2797504265326, -123.10877769392438], /*stadium chinatown*/
        [49.27326680283529, -123.09976169190791], /*main street science*/
        [49.26272081318444, -123.06868825784478], /*commerical*/
        [49.24833237475057, -123.05552188758176], /*nanaimo*/
        [49.24435105586432, -123.04559930578488], /*29*/
        [49.238455785275576, -123.0313579384195], /*joyce*/
        [49.229758756680596, -123.01265607343569], /*patterson*/
        [49.22578551859037, -123.0037732709542], /*metro*/
        [49.220159405008026, -122.98849514066205], /*royal*/
        [49.21231336422558, -122.95934290556919], /*edmonds*/
        [49.200011480813416, -122.94908299859614], /*22*/
        [49.201471171368496, -122.91263449215886], /*new westminister*/
        [49.20480123545422, -122.90608697125008], /*columbia*/
        [49.204421691556796, -122.87430520070032], /*scott*/
        [49.19896197280588, -122.85067932768581], /*gate*/
        [49.18955833651491, -122.84795203963483], /*surrey*/
        [49.182800893814765, -122.844798751917], /*king*/
    ]
]

const center: [number, number] = [49.25299, -123.00600];

const redOptions = { color: 'red' }
const blueOptions = { color: 'blue' }
const fillBlueOptions = { color: 'blue' }
const Map = () => {
    return (
        <MapContainer
            style={{ height: "100vh" }}
            center={[49.23532143374564, -122.97080281732221]} zoom={12} scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://github.com/wendyychenn/adv-dynamic-exercise-1.git">By Wendy Chen</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Polyline pathOptions={redOptions} positions={millenium} />
            <Polyline pathOptions={blueOptions} positions={expo} />






            <Marker position={[49.286084944986584, -123.1107003373025]} icon={icon}>
                <Popup>
                    Waterfront
                </Popup>
            </Marker>

            <Marker position={[49.28560668330146, -123.11997463304637]} icon={icon}>
                <Popup>
                    Burrard
                </Popup>
            </Marker>

            <Marker position={[49.28336392691885, -123.11579115139855]} icon={icon}>
                <Popup>
                    Granville
                </Popup>
            </Marker>

            <Marker position={[49.2797504265326, -123.10877769392438]} icon={icon}>
                <Popup>
                    Stadium - Chinatown
                </Popup>
            </Marker>

            <Marker position={[49.27326680283529, -123.09976169190791]} icon={icon}>
                <Popup>
                    Main Street - Science World
                </Popup>
            </Marker>

            <Marker position={[49.26272081318444, -123.06868825784478]} icon={icon}>
                <Popup>
                    Commercial - Broadway
                </Popup>
            </Marker>

            <Marker position={[49.24833237475057, -123.05552188758176]} icon={icon}>
                <Popup>
                    Nanaimo
                </Popup>
            </Marker>

            <Marker position={[49.24435105586432, -123.04559930578488]} icon={icon}>
                <Popup>
                    29th Avenue
                </Popup>
            </Marker>

            <Marker position={[49.238455785275576, -123.0313579384195]} icon={icon}>
                <Popup>
                    Joyce - Collingwood
                </Popup>
            </Marker>

            <Marker position={[49.229758756680596, -123.01265607343569]} icon={icon}>
                <Popup>
                    Patterson
                </Popup>
            </Marker>

            <Marker position={[49.22578551859037, -123.0037732709542]} icon={icon}>
                <Popup>
                    Metrotown
                </Popup>
            </Marker>

            <Marker position={[49.220159405008026, -122.98849514066205]} icon={icon}>
                <Popup>
                    Royal Oak
                </Popup>
            </Marker>

            <Marker position={[49.21231336422558, -122.95934290556919]} icon={icon}>
                <Popup>
                    Edmonds
                </Popup>
            </Marker>

            <Marker position={[49.200011480813416, -122.94908299859614]} icon={icon}>
                <Popup>
                    22nd Street
                </Popup>
            </Marker>

            <Marker position={[49.201471171368496, -122.91263449215886]} icon={icon}>
                <Popup>
                    New Westminister
                </Popup>
            </Marker>

            <Marker position={[49.20480123545422, -122.90608697125008]} icon={icon}>
                <Popup>
                    Columbia
                </Popup>
            </Marker>

            <Marker position={[49.204421691556796, -122.87430520070032]} icon={icon}>
                <Popup>
                    Scott Road
                </Popup>
            </Marker>

            <Marker position={[49.19896197280588, -122.85067932768581]} icon={icon}>
                <Popup>
                    Gateway
                </Popup>
            </Marker>

            <Marker position={[49.18955833651491, -122.84795203963483]} icon={icon}>
                <Popup>
                    Surrey Central
                </Popup>
            </Marker>

            <Marker position={[49.182800893814765, -122.844798751917]} icon={icon}>
                <Popup>
                    King George
                </Popup>
            </Marker>

            <Marker position={[49.224762116370734, -122.88928380210714]} icon={icon}>
                <Popup>
                    Sapperton
                </Popup>
            </Marker>

            <Marker position={[49.233286607634035, -122.88287407173216]} icon={icon}>
                <Popup>
                    Braid
                </Popup>
            </Marker>

            <Marker position={[49.24846743252939, -122.89698193243814]} icon={icon}>
                <Popup>
                    Lougheed
                </Popup>
            </Marker>

            <Marker position={[49.25344967223133, -122.91814611469617]} icon={icon}>
                <Popup>
                    Production Way
                </Popup>
            </Marker>

            <Marker position={[49.26598188777696, -123.07832181402011]} icon={icon}>
                <Popup>
                    VCC - Clark
                </Popup>
            </Marker>

            <Marker position={[49.26003422040167, -123.04234649267198]} icon={icon}>
                <Popup>
                    Renfrew
                </Popup>
            </Marker>

            <Marker position={[49.260850467046815, -123.03313420361933]} icon={icon}>
                <Popup>
                    Rupert
                </Popup>
            </Marker>

            <Marker position={[49.26505307542621, -123.0128074772701]} icon={icon}>
                <Popup>
                    Gilmore
                </Popup>
            </Marker>

            <Marker position={[49.26648328625659, -123.00100738778109]} icon={icon}>
                <Popup>
                    Brentwood
                </Popup>
            </Marker>

            <Marker position={[49.26481915546356, -122.98171197082044]} icon={icon}>
                <Popup>
                    Holdom
                </Popup>
            </Marker>

            <Marker position={[49.259267948982526, -122.96346791929608]} icon={icon}>
                <Popup>
                    Sperling - Burnaby Lake
                </Popup>
            </Marker>

            <Marker position={[49.25469472448631, -122.93850297526726]} icon={icon}>
                <Popup>
                    Lake City
                </Popup>
            </Marker>

            <Marker position={[49.26147017397405, -122.88919216619223]} icon={icon}>
                <Popup>
                    Burquitlam
                </Popup>
            </Marker>

            <Marker position={[49.278128866705295, -122.84541281090523]} icon={icon}>
                <Popup>
                    Moody Centre
                </Popup>
            </Marker>

            <Marker position={[49.27729975218456, -122.82773905872023]} icon={icon}>
                <Popup>
                    Inlet Centre
                </Popup>
            </Marker>

            <Marker position={[49.27484264635136, -122.80002428178709]} icon={icon}>
                <Popup>
                    Coquitlam Central
                </Popup>
            </Marker>

            <Marker position={[49.28047607779752, -122.7931504969472]} icon={icon}>
                <Popup>
                    Lincoln
                </Popup>
            </Marker>

            <Marker position={[49.285774057504085, -122.7908223394999]} icon={icon}>
                <Popup>
                    Lafarge Lake - Douglas
                </Popup>
            </Marker>

        </MapContainer>
    )
}

export default Map;






{/* <Circle center={center} pathOptions={fillBlueOptions} radius={200} />

<CircleMarker center={[49.25299, -123.01650]} pathOptions={redOptions} radius={20}>
    <Popup>Popup in CircleMarker</Popup>
</CircleMarker> */}