import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface AppWrapperProps {
    children: React.ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
    const [shouldRenderChildren, setShouldRenderChildren] = useState(true);

    function handleToggleChildren() {
        setShouldRenderChildren(!shouldRenderChildren)
    }

    return (
        <div className="bg-background text-text">
            <Header onMenuClick={() => handleToggleChildren()} />
            <div>
                {shouldRenderChildren &&
                    children
                }
            </div >
            <Footer />
        </div>

    )
}