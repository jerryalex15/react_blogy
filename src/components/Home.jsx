import "./../styles/Home.css";
import bg_coffee from "./../assets/images/bg_coffee.jpg";
import coffee_aws from "./../assets/images/coffee-aws.jpg";
import starbucks from "./../assets/images/starbucks.jpg";
import coffee_time from "./../assets/images/coffee-time.jpg";
/*
block :
    inline
    inline-block
    flex 
    grid
*/
//entête
function Banner () {
    return <header className="relative banner-size banner-decoration bg-gray-800 w-full shadow-2xl">
        <NavBar></NavBar>
        <img src={bg_coffee} alt="bg_coffee" className="w-full h-full object-cover"/>
        <HeaderText></HeaderText>
    </header>
} 

function Brand () {
    return <h3 className="text-3xl text-transparent bg-gradient-to-t from-red-900 to-yellow-300 bg-clip-text font-serif">blog</h3>
}

function NavLink ({children}) {
    return <a href className="text-2xl text-transparent bg-gradient-to-bl from-red-800 to-yellow-300 bg-clip-text font-serif">{children}</a>
}

function NavBar () {
    return <nav className="absolute p-7  top-0 w-full bg-black bg-opacity-40">
        <div className="flex justify-between max-w-7xl mx-auto">
            <Brand />
            <div className="space-x-16 ">
                <NavLink>about</NavLink>
                <NavLink>stories</NavLink>
                <NavLink>works</NavLink>
            </div>
        </div>
    </nav>
}
function HeaderText(){
    return <div className="absolute top-52 w-full">
        <h1 className="font-medium text-center text-9xl text-transparent bg-gradient-to-b from-yellow-700 to-gray-400 bg-clip-text">.Coffee </h1>
    </div>
}
//Body
function Body(){
    return <div className="grid grid-cols-3 max-w-7xl my-24 mx-auto">
        <Card img={starbucks} alt="starbucks" desc="Lieu du bonheur" title="Starbucks" info="Il n'y a meilleur que de bois ensemble un café avec tes amis."></Card>
        <Card img={coffee_aws} alt="coffee awesome" desc="Source de révenu" title="Le café" info="Le café est un produit d'éxportation qui peut augmenté le révenu d 'un pays."></Card>
        <Card img= {coffee_time} alt="coffee-time" desc="Moment de se relaxer" title="Coffee time" info="Il est conseillé d'en boire un peu de café pour reprendre de l'énergie."></Card>
    </div>
}

function Card(props){
    return <div className="m-8 shadow-lg relative">
        <img src={props.img} alt={props.alt} className="w-full h-60 object-cover" />
        <div className="m-4">
            <h2 className="text-3xl mt-7 font-bold text-gray-900">{props.title}</h2>
            <h4 className="text-sm font-medium text-gray-600">{props.desc}</h4>
            <p className="text-xl mt-8 font-serif text-gray-800">{props.info}</p>
        </div>
    </div>
}

export function Home(){
    return <main className="mx-auto">
       <Banner /> 
       <Body />
    </main>
}