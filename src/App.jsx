import { useState } from 'react'

// App imports
import Header from "./elements/Header";
import Sidebar from './elements/Sidebar';

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row px-3">
                    <aside className="col-12 col-lg-2 bg-white d-none d-lg-block d-xl-block">
                        <Sidebar />
                    </aside>
                </div>
            </div>
        </>
    )
}

export default App
