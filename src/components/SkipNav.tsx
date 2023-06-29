export default function SkipNav() {
    function handleFocus(){
        console.log("focus skipnav component");
    }
    return (
        <a href="#main-content" className="skip-link" id="delay" onFocus={handleFocus}>Skip to main content.</a>
    );
}