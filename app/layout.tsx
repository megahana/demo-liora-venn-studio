import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Liora Venn — Studio. Marseille.',description:'Liora Venn Studio. Marseille. Galerie — concept de démonstration par Megahana.',icons:{icon:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
