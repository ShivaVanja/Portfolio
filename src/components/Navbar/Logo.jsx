import adapt from "./../../assets/adaptation.png";
export const Logo = () => {
    return (
        <div className="flex px-2">
        <img className="w-8 h-8 pr-1" src={adapt}></img>
        <p className="text-2xl ml-1 font-montserrat font-bold">Adapt-<span className="text-primary">X</span></p>
    </div>
    )

}