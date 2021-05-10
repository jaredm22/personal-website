import AppIcon from "./AppIcon";

export default function Dock(props: any) {
    return(
        <div className="dock">
            <AppIcon app={"spotify"}/>
            <AppIcon app={"iMessage"}/>
            <AppIcon/>
        </div>
    );
}